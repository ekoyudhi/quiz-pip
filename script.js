function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
const banks = [
  {
    'q': 'Apakah kepanjangan dari PIP?',
    'options': [
      'Pusat Informasi Pemerintah',
      'Pusat Investasi Pemerintah',
      'Pusat Insentif Pemerintah',
      'Pusat Industri Pemerintah'
    ],
    'correctIndex': 1,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Apakah kepanjangan dari UMi?',
    'options': [
      'Ultra Man',
      'Ultra Mini',
      'Ultra Mikro',
      'Ultra Mimi'
    ],
    'correctIndex': 2,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Bergerak di bidang apakah PIP?',
    'options': [
      'Pembiayaan',
      'Pengumpulan Dana Masyarakat',
      'Pelayanan',
      'Penagihan'
    ],
    'correctIndex': 0,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Berapa maksimal pembiayaan UMi yang diberikan ke debitur?',
    'options': [
      '5 Juta Rupiah',
      '10 Juta Rupiah',
      '15 Juta Rupiah',
      '20 Juta Rupiah'
    ],
    'correctIndex': 3,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Lembaga Keuangan Bukan Bank yang menjadi penyalur UMi di bawah ini, KECUALI?',
    'options': [
      'PT Pegadaian',
      'PT PNM',
      'PT Pertamina',
      'PT BAV'
    ],
    'correctIndex': 2,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'PT PNM adalah salah satu penyalur UMi. Apa kepanjangan dari PNM?',
    'options': [
      'Permodalan Nasional Madani',
      'Perusahaan Non Migas',
      'Pusat Nuklir Mulia',
      'Penjaminan Nasional Madani'
    ],
    'correctIndex': 0,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Apakah kepanjangan dari UMKM?',
    'options': [
      'Usaha Mandiri Karena Mama',
      'USaha Mikro Kecil Menengah',
      'Usaha Mulia Kok ',
      'Usaha Mikirin Kamu Mas'
    ],
    'correctIndex': 1,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Syarat menjadi debitur UMi?',
    'options': [
      'KTP',
      'SIM',
      'Paspor',
      'BPKB'
    ],
    'correctIndex': 0,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Lembaga Keuangan Bukan Bank yang termasuk penyalur langsung adalah?',
    'options': [
      'BPR',
      'PT POS Indonesia',
      'PT Pegadaian',
      'Bank Mandiri'
    ],
    'correctIndex': 2,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Lembaga Keuangan Bukan Bank yang termasuk penyalur tidak langsung adalah?',
    'options': [
      'PT WIKA',
      'PT Astra',
      'PT Pelindo',
      'PT BAV'
    ],
    'correctIndex': 3,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Siapa nama Direktur Utama PIP?',
    'options': [
      'Suparjo',
      'Ririn Kadariyah',
      'Hadiyanto',
      'Yuliawan'
    ],
    'correctIndex': 1,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Berapa rate pembiayaan yang ditawarkan oleh PIP?',
    'options': [
      '5-6 %',
      '1-4 %',
      '6-7 %',
      '8-9 %'
    ],
    'correctIndex': 1,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Berapa jangka waktu pembiayan PIP?',
    'options': [
      '1 tahun',
      '2 tahun',
      '3 tahun',
      '4 tahun'
    ],
    'correctIndex': 2,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Layanan contact center PIP adalah?',
    'options': [
      'Salam PIP',
      'Halo PIP',
      'Kring PIP',
      'Hai PIP'
    ],
    'correctIndex': 0,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Sasaran program UMi?',
    'options': [
      'Pejabat Negara',
      'Non-Bankable',
      'Bankable',
      'TNI/Polri'
    ],
    'correctIndex': 1,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Layanan contact center PIP adalah?',
    'options': [
      'Salam PIP',
      'Halo PIP',
      'Kring PIP',
      'Hai PIP'
    ],
    'correctIndex': 0,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  },
  {
    'q': 'Salah satu syarat menjadi mitra penyalur PIP?',
    'options': [
      'Perusahaan/Koperasi berdiri lebih dari 2 tahun',
      'Perusahaan/Koperasi mempunyai omset diatas 50 miliar rupiah',
      'Perusahaan/Koperasi tidak mengalami kerugian',
      'Perusahaan/Koperasi mempunyai karyawan diatas 500 orang'
    ],
    'correctIndex': 0,
    'correctResponse': 'Jawaban Anda Benar',
    'incorrectResponse': 'Jawaban Anda Salah'
  }
]
const question = getMultipleRandom(banks,3)
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Pertanyaan %current dari %total',
  questions: question
});