const axios = require('axios')

const downDetector = async (query) => {
   const fetchHtml = await axios.get(`https://downdetector.id/masalah/${query}/`)
   const resultQuery = fetchHtml.data
   //Menggunakan cara termudah untuk mencari teks (tidak berfungsi dibeberapa web)
   if (resultQuery.includes('404 Halaman tidak ditemukan')) return 'Pencarian tidak ditemukan!'
   else if (resultQuery.includes('Laporan pengguna mengindikasikan kemungkinan ada problem')) return `Laporan pengguna mengindikasikan ada problem di ${query}`
   else if (resultQuery.includes('Laporan pengguna tidak mengindikasikan ada problem')) return `Laporan pengguna tidak mengindikasikan ada problem di ${query}`
}
module.exports = { downDetector }