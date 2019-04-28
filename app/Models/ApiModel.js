/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const moment = require("moment-timezone");
const ModelNotFoundException = use("App/Exceptions/ModelNotFoundException");
const Env = use("Env");

class ApiModel extends Model {

  static _bootIfNotBooted() {
    if (this.name !== "ApiModel") {
      super._bootIfNotBooted();
    }
  }

  /* Save date (usually created_at and updated_at) for timezone Asia/Bangkok */
  static formatDates(field, value) {
    let format = "YYYY-MM-DD HH:mm:ss";
    if (Env.get("DB_CONNECTION") === "pg") {
      format = "YYYY-MM-DD HH:mm:ss+07";
    } 
    return moment(value).tz("Asia/Bangkok").format(format);
  }

  /* Cast date for timezone Asia/Bangkok */
  static castDates(field, value) {
    if (Env.get("DB_CONNECTION") === "pg") {
      return moment(value).tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ssZ");
    }
    return moment(value).format("YYYY-MM-DD HH:mm:ss+07:00");
  }

  getDateFromProps(field) {
    let momentDate;
    if (Env.get("DB_CONNECTION") === "pg") {
      momentDate =  moment(this[field]).tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ssZ");
    }
    momentDate = moment(this[field]).format("YYYY-MM-DD HH:mm:ss+07:00");
    return momentDate;
  }

  static async findOrError(id) {
    if (!id || id === undefined) {
      throw new ModelNotFoundException(this.name);
    }
    const instance = await this.find(id);
    if (!instance) {
      throw new ModelNotFoundException(this.name);
    }
    return instance;
  }

  static async findByArgs(args) {
    const query = this.query();
    Object.keys(args).forEach(key => {
      query.where(key, args[key]);
    });
    return await query.first();
  }

  static async findOrCreateNew(args, createArgs) {
    const query = this.query();
    Object.keys(args).forEach(key => {
      query.where(key, args[key]);
    });
    let instance = await query.first();
    if (!instance) {
      instance = new this();
      instance.fill(createArgs);
    }
    return instance;
  }

}

module.exports = ApiModel;