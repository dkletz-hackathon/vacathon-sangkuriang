const Location = use('App/Models/Location')

class LocationSeeder {

  async run() {
    const datas = [
      {
        name: "Braga",
        description:	"Tempat menarik untuk berjalan-jalan menikmati arsitektur kota tua",
        address: "Jl. Braga",
        thumbnail: "http://www.hotelgeulisbandung.com/gambar/bandung/bandung-braga-street-for-the-neoclassicism-fans-16.jpg",
        latitude:	-6.91756392,
        longitude: 107.607178,
        price_min: 20000,
        price_max: 100000,
        type_location_id: 1
      },
      {
        name: "Farmhouse Susu Lembang",
        description: "Koleksi spot-spot unik untuk berswafoto ria",
        address: "Jl. Raya Lembang No.108, Gudangkahuripan, Lembang, Kabupaten Bandung Barat, Jawa Barat 40391",
        thumbnail: "https://www.hargatiket.net/wp-content/uploads/2018/11/harga-tiket-masuk-farmhouse-lembang.jpg",
        latitude: -6.83296728,
        longitude: 107.603539,
        price_min: 30000,
        price_max: 200000,
        type_location_id: 2
      },
      {
        name: "Taman Hutan Raya",
        description: "Gabungan antar taman dan hutan yang terletak di jantung lembang",
        address: "Kompleks Tahura, Jl. Ir. H.Djuanda No.99, Ciburial, Cimenyan, Kota Bandung, Jawa Barat 40198",
        thumbnail: "https://visitingjogja.com/wp-content/uploads/2017/11/tahura.jpg",
        latitude: -6.8565917,
        longitude: 107.630478,
        price_min: 20000,
        price_max: 100000,
        type_location_id: 3
      },
      {
        name: "Museum Geologi Bandung",
        description: "Museum geologi Bandung, ada T-Rex dan Mammut juga",
        address: "Jl. Diponegoro No.57, Cihaur Geulis, Cibeunying Kaler, Kota Bandung, Jawa Barat 40122",
        thumbnail: "http://bisniswisata.co.id/wp-content/uploads/2015/07/DINOSAURUS-2.jpg",
        latitude: -6.9007163,
        longitude: 107.61927,
        price_min: 10000,
        price_max: 40000,
        type_location_id: 4
      },
      {
        name: "Museum Gedung Sate",
        description: "Gedung pemerintahan provinsi Jawa Barat",
        address: "Jl. Diponegoro No.22, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115",
        thumbnail: "https://www.wonderfulwestjava.com/wp-content/uploads/gedung-sate.jpg",
        latitude: -6.90263891,
        longitude: 107.616982,
        price_min: 5000,
        price_max: 30000,
        type_location_id: 4
      },
      {
        name: "Museum Konferensi Asia Afrika",
        description: "Gedung bersejarah tempat konferensi asia afrika yang pertama berlangsung",
        address: "Jl. Asia Afrika No.65, Braga, Sumur Bandung, Kota Bandung, Jawa Barat 40111",
        thumbnail: "https://tempatwisatadibandung.info/wp-content/uploads/MUSEUM-KONFERENSI-ASIA-AFRIKA.png",
        latitude: -6.92109203,
        longitude: 107.607346,
        price_min: 5000,
        price_max: 30000,
        type_location_id: 4
      }
    ]
    for (const data of datas) {
      const loc = new Location()
      loc.fill(data)
      await loc.save()
    }
  }

}

module.exports = LocationSeeder