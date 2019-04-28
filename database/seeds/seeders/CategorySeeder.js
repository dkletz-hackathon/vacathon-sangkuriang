'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

class CategorySeeder {

  async run () {
    const datas = [
      { name: "Jalan-jalan", url_image: "https://i.ndtvimg.com/i/2017-02/walking_620x350_51487764864.jpg"  },
      { name: "Jogging", url_image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-young-woman-on-morning-run-royalty-free-image-856985422-1533935456.jpg?resize=480:*" },
      { name: "Mendaki", url_image: "https://i.kinja-img.com/gawker-media/image/upload/s--H3qvJyfF--/c_scale,f_auto,fl_progressive,q_80,w_800/lass9u84jcpjgznzdp22.jpg"  },
      { name: "Belanja", url_image: "https://img.huffingtonpost.com/asset/5bf42c4220000057060294f8.jpeg?cache=n1ltzvkicc&ops=scalefit_720_noupscale"  },
      { name: "Selfie", url_image: "https://pbs.twimg.com/media/DZMZRY8U8AErad5.jpg"  },
      { name: "Adrenalin", url_image: "https://awsimages.detik.net.id/community/media/visual/2017/02/24/bac7a52f-ec5f-4ef8-82e1-2e13d5221252_169.jpg?w=780&q=90"  },
      { name: "Kuliner", url_image: "https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kuliner-bandung.jpg" },
      { name: "Sejarah", url_image: "https://historicalbuildingsbdg.files.wordpress.com/2012/04/bandung-bank-of-indonesia.jpg" },
      { name: "Co-Working", url_image: "https://glints.id/lowongan/wp-content/uploads/2017/12/Ruangre%CC%81ka-coworking-space-bandung.jpg"  },
    ]
    for (const data of datas) {
      const category = new Category()
      category.name = data.name
      category.url_image = data.url_image
      await category.save()
    }
  }

}

module.exports = CategorySeeder
