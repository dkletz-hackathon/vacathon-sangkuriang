'use strict'

/** CRUD Base Controller */
class BaseController {

  constructor(ObjectType) {
    this.ObjectType = ObjectType
  }

  /** Show a list of all instance */
  async index({ response, filters, relations, orders }) {
    let query = this.ObjectType.query();
    if (filters) {
      query = this.addFilterQuery(query ,filters)
    }
    if (relations) {
      query = this.addRelationQuery(query, relations)
    }
    if (orders) {
      query = this.addOrderQuery(query, orders)
    }
    const instances = await query.fetch()
    return response.json(instances);
  }

  /** Display a single instance */
  async show({ params, response, relations }) {
    const instance = await this.ObjectType.findOrError(params.id);
    if (Array.isArray(relations)) {
      for (const relation of relations) {
        instance.$relations[relation.name] = await (instance[relation.name]())[relation.type]();
      } 
    }
    return response.json(instance);
  }

  /** Create new instance */
  async store({ request, response }) {
    const instance = await this.createNewInstance({ request });
    return response.status(201).json(instance);
  }
  
  /** Update instance details */
  async update({ params, request, response }) {
    const instance = await this.ObjectType.findOrError(params.id);
    await this.updateInstance({ instance, request });
    return response.json(instance);
  }

  /** Delete instance */
  async destroy({ params, response }) {
    const instance = await this.ObjectType.find(params.id);
    if (!instance) {
      return response.status(204).json({ data: "No Content" });
    }
    await instance.delete();
    return response.json({ data: instance });
  }

  /** Must implemented function */
  async createNewInstance({ request }) {
    return null
  }

  async updateInstance({ instance, request }) {
    instance.merge(request.only(this.updateOnly))
    await instance.save()
  }

  /** Helper */
  addFilterQuery(query, filters) {
    if (Array.isArray(filters)) {
      for (const filter of filters) {
        query = query.where(...filter)
      }
    } else {
      query = query.where(...filters)
    }
    return query
  }

  addRelationQuery(query, relations) {
    if (Array.isArray(relations)) {
      for (const relation of relations) {
        query = query.with(relation)
      }
    } else {
      query = query.with(relations)
    }
    return query
  }

  addOrderQuery(query, orders) {
    if (Array.isArray(orders)) {
      for (const order of orders) {
        query = query.orderBy(...order)
      }
    } else {
      query = query.orderBy(orders)
    }
    return query
  }

  /** Getter */
  get storeOnly() {
    return []
  }

  get updateOnly() {
    return []
  }

}

module.exports = BaseController