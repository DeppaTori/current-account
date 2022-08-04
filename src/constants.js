export const JENIS_USAHA_SWASTA = "swasta";
export const JENIS_USAHA_LAINNYA = "lainnya";
export const VALIDATION_NOT_EMPTY = "VALIDATION_NOT_EMPTY";

export const dataPendingTask = {
  ticketNumber: "0120223",
  createdDate: "04-08-2022",
  area: "Sudirman",
  email: "tiara@nicmail.com",
  application: "NEWACCOUNT",
  status: "Created",
};

export const confirmationData = {
  header: {
    date: "04-08-2022",
    bentukBadanUsaha: "Swasta",
  },
  dataPerusahaan: {
    nama: "PT. Jaya Lancar",
    tempatBerdiri: "Jakarta",
    tanggalBediri: "23-12-1999",
    bidang: "Property",
    group: "Group Super Sekali",
  },
  jenisIdentitasUtama: {
    aktaPendirian: {
      nomor: "0323233242",
      tempat: "Jakarta Barat",
      berlaku: "23-12-2045",
    },
    alamatKantor: "Jl. Alangkah Indahnya",
    provinsi: "DKI Jakarta",
    kabupatenkota: "Jakarta Selatan",
    area: "Contoh Area",
    alamatPabrik: "Jakarta Selatan I",
    alamatProyek: "Jakarta Selatan II",
    alamatKirimSurat: "Jakarta Selatan III",
    npwp: {
      nomor: "0323233241",
      tempat: "Jakarta Barat I",
      berlaku: "23-12-2035",
    },
    nib: {
      nomor: "0355233242",
      tempat: "Jakarta Barat II",
      berlaku: "23-12-2025",
    },
    siup: {
      nomor: "0300233242",
      tempat: "Jakarta Barat III",
      berlaku: "23-12-2090",
    },
    tdp: {
      nomor: "0399233242",
      tempat: "Jakarta Barat VI",
      berlaku: "23-12-2080",
    },
    nomor: {
      nomor: "0119233242",
      tempat: "Jakarta Barat VII",
      berlaku: "23-12-2055",
    },
  },
  informasiLainnya: {
    bidang: "Bidang Informasi Lainnya",
    alamat: "Alamat Informasi Lainnya",
  },
  pendapatanRataPerBulan: {
    PendapatanOperasional: "Rp. 100.000",
    PendapatanNonOperasional: "Rp. 200.000",
    TujuanBerhubungandenganBank: "Rp 300.000",
  },
  rekeningSaatIni: {
    Bank1: "BCA",
    Produk1: "Simpanan",
    NoRekening1: "122033233",
    Bank2: "BNI",
    Produk2: "Produk A",
    NoRekening2: "235235333",
  },
  susunanManajemen: {
    Direktur: "Budi Direktur",
    Direktur1: "Tono Direktur",
    Direktur2: "Wati Direktur",
    Direktur3: "Inem Direktur",
    KomisarisUtama: "Suyono Komisaris",
    Komisaris1: "Bambang Komisaris",
    Komisaris2: "Yanti Komisaris",
    Komisaris3: "Ye Komisaris",
  },
  laporanKeuangan: {
    ModalDasarPerusahaan: "Rp. 1",
    ModalDisetor: "Rp. 2",
  },
  hubunganDgnNasabahLain: {
    Nama: "Claire",
    Produk: "Simpanan Luar Biasa",
    JenisHubungan: "teman",
  },
  hubunganDgnPihakLain: {
    Nama: "Lira",
    JenisHubungan: "Teman",
    SektorUsaha: "Otomotif",
    Alamat: "Padang",
    NoTelepon: "08111111111",
  },
  seringBertransaksiDengan: {
    Nama: "Batman",
    JenisHubungan: "Teman Dong",
    SektorUsaha: "Perkapalan",
    Alamat: "Jakarta Timur",
    NoTelepon: "022222222",
  },
  alamatElektronik: {
    TeleponRumah: "021999112",
    TeleponSelular: "088811223",
    FAX: "0212323444",
    TeleponKantor: "0212309903",
    Email: "mail@mail.com",
    JenisRekening: "Tabungan Biasa",
    JenisValuta: "Nasional",
    TujuanPembukaanRekening: "Nabung",
    TujuanPenggunaanDana: "Usaha",
  },
  fasilitasPembayaranTagihan: {
    FasilitasPembayaranTagihan: "ATM",
    Number: "111222",
    FasilitasLainnya: "Internet Banking",
    NumberFasilitasLainnya: "21232223",
  },
};

export const confirmationLabels = {
  pendapatanRataPerBulan: [
    "Pendapatan Operasional",
    "Pendapatan Non Operasional",
    "Tujuan Berhubungan dengan Bank",
  ],
  rekeningSaatIni: [
    "Bank 1",
    "Produk 1",
    "No. Rekening 1",
    "Bank 2",
    "Produk 2",
    "No. Rekening 2",
  ],
  susunanManajemen: [
    "Direktur",
    "Direktur 1",
    "Direktur 2",
    "Direktur 3",
    "Komisaris Utama",
    "Komisaris 1",
    "Komisaris 2",
    "Komisaris 3",
  ],
  laporanKeuangan: ["Modal Dasar Perusahaan", "Modal Disetor"],
  hubunganDgnNasabahLain: ["Nama", "Produk", "Jenis Hubungan"],
  hubunganDgnPihakLain: [
    "Nama",
    "Jenis Hubungan",
    "Sektor Usaha",
    "Alamat",
    "No. Telepon",
  ],
  seringBertransaksiDengan: [
    "Nama",
    "Jenis Hubungan",
    "Sektor Usaha",
    "Alamat",
    "No. Telepon",
  ],
  alamatElektronik: [
    "Telepon Rumah",
    "Telepon Selular",
    "FAX",
    "Telepon Kantor",
    "Email",
    "Jenis Rekening",
    "Jenis Valuta",
    "Tujuan Pembukaan Rekening",
    "Tujuan Penggunaan Dana",
  ],
  fasilitasPembayaranTagihan: [
    "Fasilitas Pembayaran Tagihan",
    "Number",
    "Fasilitas Lainnya",
    "Number Fasilitas Lainnya",
  ],
};
