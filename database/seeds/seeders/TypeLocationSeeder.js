const Factory = use('Factory')
const TypeLocation = use("App/Models/TypeLocation")

class TypeLocationSeeder {

  async run () {
    const datas = ["City Walk", "Tempat Wisata", "Wisata Alam", "Museum"]
    for (const data of datas) {
      const typeLoc = new TypeLocation()
      typeLoc.name = data
      await typeLoc.save()
    }
  }

}

module.exports = TypeLocationSeeder