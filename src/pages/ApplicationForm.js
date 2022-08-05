import { useState } from "react";
import { AlamatElektronikFields } from "../components/AlamatElektronikFields";
import { BentukBadanUsahaFields } from "../components/BentukBadanUsahaFields";
import { DataPerusahaanFields } from "../components/DataPerusahaanFields";
import { InformasiLainnyaFields } from "../components/InformasiLainnyaFields";
import { JenisIdentitasUtamaFields } from "../components/JenisIdentitasUtamaFields";
import { KonfirmasiTransaksiFields } from "../components/KonfirmasiTransaksiFields";
import { LaporanKeuanganTahunanFields } from "../components/LaporanKeuanganTahunanFields";
import { MetodePenyerahanDokumenFields } from "../components/MetodePenyerahanDokumenFields";
import { PendapatanRataRataFields } from "../components/PendapatanRaraRataFields";
import { PersetujuanFields } from "../components/PersetujuanFields";
import { SusunanManajemenFields } from "../components/SusunanManajemenFields";
import { UnggahDokumenFields } from "../components/UnggahDokumenFields";
import { JENIS_USAHA_LAINNYA } from "../constants";
import {
  generateName,
  isAlphaNumeric,
  validateAlphabet,
  validateAlphaNumeric,
  validateEmpty,
  validateEmptyAndAlphabet,
  validateEmptyAndAlphaNumeric,
  validateEmptyAndEmail,
  validateEmptyAndNumeric,
  validateNumeric,
} from "../Helper";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { save } from "../accountSlice";

export const ApplicationForm = () => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  const [branchCode, setBranchCode] = useState("");
  const [metodePenyerahan, setMetodePenyerahan] = useState("unggahdokumen");
  const [badanUsahaLainnya, setBadanUsahaLainnya] = useState("");
  const [jenisBadanUsaha, setJenisBadanUsaha] = useState("swasta");
  const [validationMessages, setValidationMessages] = useState({
    branchCode: "",
    badanUsahaLainnya: "",
    namaPerusahaan: "",
    tempatBerdiriPerusahaan: "",
    tanggalBerdiriPerusahaan: "",
    bidangUsahaPerusahaan: "",
    jenisIdentitasUtama: {
      nomor: "",
      tempatKeluarAkta: "",
      tglBerlakuAkta: "",
      alamatKantor: "",
      nomorNIB: "",
      tempatNIB: "",
      tanggalNIB: "",
      nomorSIUP: "",
      tempatSIUP: "",
      tanggalSIUP: "",
      nomorTDP: "",
      tempatTDP: "",
      tanggalTDP: "",
      nomorNPWP: "",
      tempatNPWP: "",
      tanggalNPWP: "",
    },
    persetujuan: {
      ketentuan: "",
      syarat: "",
    },
    konfirmasiTransaksi: {
      nama: "",
      nomor: "",
      jabatan: "",
      nomorKTP: "",
    },
    alamatElektronik: {
      jenisRekening: "",
      jenisValuta: "",
      email: "",
      lainlain: "",
      others: "",
    },
    laporanKeuangan: {
      modalDasar: "",
      modalDisetor: "",
    },
    susunanManajemen: {
      direktur: "",
      komisaris: "",
    },
    pendapatanRataRata: {
      operasional: "",
      nonOperasional: "",
      tujuanHubungan: "",
    },
    informasiLainnya: {
      omzet: "",
      bidangUsaha: "",
    },
  });
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [tempatBerdiriPerusahaan, setTempatBerdiriPerusahaan] = useState("");
  const [tanggalBerdiriPerusahaan, setTanggalBerdiriPerusahaan] = useState("");
  const [bidangUsahaPerusahaan, setBidangUsahaPerusahaan] = useState("");
  const [jenisIdentitasUtama, setJenisIdentitasUtama] = useState({
    nomor: "",
    tempatKeluarAkta: "",
    tglBerlakuAkta: "",
    alamatKantor: "",
    dokumenLainnya: {
      NIB: false,
      SIUP: false,
      TDP: false,
    },
    nomorNIB: "",
    tempatNIB: "",
    tanggalNIB: "",
    nomorSIUP: "",
    tempatSIUP: "",
    tanggalSIUP: "",
    nomorTDP: "",
    tempatTDP: "",
    tanggalTDP: "",
    nomorNPWP: "",
    tempatNPWP: "",
    tanggalNPWP: "",
  });
  const [persetujuan, setPersetujuan] = useState({
    ketentuanA: false,
    ketentuanB: false,
    syaratA: false,
    syaratB: false,
  });

  const [konfirmasiTransaksi, setKonfirmasiTransaksi] = useState({
    nama: "",
    nomor: "",
    jabatan: "",
    nomorKTP: "",
  });

  const [alamatElektronik, setAlamatElektronik] = useState({
    jenisRekening: "giro_rupiah",
    jenisValuta: "idr",
    email: "",
    lainlain: "",
    others: "",
  });

  const [laporanKeuangan, setLaporanKeuangan] = useState({
    modalDasar: "",
    modalDisetor: "",
  });

  const [susunanManajemen, setSusunanManajemen] = useState({
    direktur: "",
    komisaris: "",
  });
  const [pendapatanRataRata, setPendapatanRataRata] = useState({
    operasional: "9000000000",
    nonOperasional: "11000000000",
    tujuanHubungan: "A",
  });

  const [informasiLainnya, setInformasiLainnya] = useState({
    omzet: "1000000000",
    bidangUsaha: "",
  });

  let navigate = useNavigate();

  const fieldsManager = [
    {
      name: generateName("Nama Lengkap Perusahaan"),
      setState: (val) => setNamaPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (namaPerusahaan.length <= 0) {
              return { namaPerusahaan: "Nama Perusahaan Tidak Boleh Kosong" };
            } else if (!isAlphaNumeric(namaPerusahaan)) {
              return { namaPerusahaan: "Nama Perusahaan harus alphanumeric" };
            }
            return { namaPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Tempat Berdiri Perusahaan"),
      setState: (val) => setTempatBerdiriPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (tempatBerdiriPerusahaan.length <= 0) {
              return {
                tempatBerdiriPerusahaan:
                  "Tempat Berdiri Perusahaan Tidak Boleh Kosong",
              };
            } else if (!isAlphaNumeric(tempatBerdiriPerusahaan)) {
              return {
                tempatBerdiriPerusahaan:
                  "Tempat Berdiri Perusahaan harus alphanumeric",
              };
            }
            return { tempatBerdiriPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal Berdiri Perusahaan"),
      setState: (val) => setTanggalBerdiriPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (tanggalBerdiriPerusahaan.length <= 0) {
              return {
                tanggalBerdiriPerusahaan:
                  "Tanggal Berdiri Perusahaan Tidak Boleh Kosong",
              };
            }
            return { tanggalBerdiriPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Bidang Usaha"),
      setState: (val) => setBidangUsahaPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (bidangUsahaPerusahaan.length <= 0) {
              return {
                bidangUsahaPerusahaan:
                  "Bidang Usaha Perusahaan Tidak Boleh Kosong",
              };
            }
            return { bidangUsahaPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Nomor Akta Pendirian Perusahaan"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          nomor: val,
        }),
      validations: [
        {
          validate: function () {
            let nomor = validateEmptyAndAlphaNumeric(
              jenisIdentitasUtama.nomor,
              "Nomor Akta Pendirian Perusahaan"
            );

            return {
              jenisIdentitasUtama: {
                nomor: nomor,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tempat dikeluarkan Akta Pendirian"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tempatKeluarAkta: val,
        }),
      validations: [
        {
          validate: function () {
            let tempatKeluarAkta = validateEmptyAndAlphaNumeric(
              jenisIdentitasUtama.tempatKeluarAkta,
              "Tempat dikeluarkan Akta Pendirian"
            );

            return {
              jenisIdentitasUtama: {
                tempatKeluarAkta: tempatKeluarAkta,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal berlaku akta pendirian"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tglBerlakuAkta: val,
        }),
      validations: [
        {
          validate: function () {
            let tglBerlakuAkta = validateEmpty(
              jenisIdentitasUtama.tglBerlakuAkta,
              "Tanggal berlaku akta pendirian"
            );

            return {
              jenisIdentitasUtama: {
                tglBerlakuAkta: tglBerlakuAkta,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Alamat kantor"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          alamatKantor: val,
        }),
      validations: [
        {
          validate: function () {
            let alamatKantor = validateEmptyAndAlphaNumeric(
              jenisIdentitasUtama.alamatKantor,
              "Alamat kantor"
            );

            return {
              jenisIdentitasUtama: {
                alamatKantor: alamatKantor,
              },
            };
          },
        },
      ],
    },
    {
      name: "KTF_" + generateName("Nama Pejabat yang dihubungi"),
      setState: (val) =>
        setKonfirmasiTransaksi({
          ...konfirmasiTransaksi,
          nama: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndAlphaNumeric(
              konfirmasiTransaksi.nama,
              "Nama Pejabat yang dihubungi"
            );

            return {
              konfirmasiTransaksi: {
                nama: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "KTF_" + generateName("No. Telepon"),
      setState: (val) =>
        setKonfirmasiTransaksi({
          ...konfirmasiTransaksi,
          nomor: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndNumeric(
              konfirmasiTransaksi.nomor,
              "No. Telepon"
            );

            return {
              konfirmasiTransaksi: {
                nomor: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "KTF_" + generateName("Jabatan"),
      setState: (val) =>
        setKonfirmasiTransaksi({
          ...konfirmasiTransaksi,
          jabatan: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndAlphaNumeric(
              konfirmasiTransaksi.jabatan,
              "Jabatan"
            );

            return {
              konfirmasiTransaksi: {
                jabatan: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "KTF_" + generateName("No. KTP"),
      setState: (val) =>
        setKonfirmasiTransaksi({
          ...konfirmasiTransaksi,
          nomorKTP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndNumeric(
              konfirmasiTransaksi.nomorKTP,
              "No. KTP"
            );

            return {
              konfirmasiTransaksi: {
                nomorKTP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "AE_" + generateName("Email"),
      setState: (val) =>
        setAlamatElektronik({
          ...alamatElektronik,
          email: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndEmail(alamatElektronik.email, "Email");

            return {
              alamatElektronik: {
                email: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "AE_" + generateName("Others"),
      setState: (val) =>
        setAlamatElektronik({
          ...alamatElektronik,
          others: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateAlphabet(alamatElektronik.others, "Others");

            return {
              alamatElektronik: {
                others: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "AE_" + generateName("Lain-Lain"),
      setState: (val) =>
        setAlamatElektronik({
          ...alamatElektronik,
          lainlain: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateAlphabet(
              alamatElektronik.lainlain,
              "Lain-Lain"
            );

            return {
              alamatElektronik: {
                lainlain: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "LKT_" + generateName("Modal Dasar Perusahaan"),
      setState: (val) =>
        setLaporanKeuangan({
          ...laporanKeuangan,
          modalDasar: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndNumeric(
              laporanKeuangan.modalDasar,
              "Modal Dasar Perusahaan"
            );

            return {
              laporanKeuangan: {
                modalDasar: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "LKT_" + generateName("Modal Disetor"),
      setState: (val) =>
        setLaporanKeuangan({
          ...laporanKeuangan,
          modalDisetor: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndNumeric(
              laporanKeuangan.modalDisetor,
              "Modal Disetor"
            );

            return {
              laporanKeuangan: {
                modalDisetor: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "SMJ_" + generateName("Direktur Utama"),
      setState: (val) =>
        setSusunanManajemen({
          ...susunanManajemen,
          direktur: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndAlphabet(
              susunanManajemen.direktur,
              "Direktur Utama"
            );

            return {
              susunanManajemen: {
                direktur: result,
              },
            };
          },
        },
      ],
    },
    {
      name: "SMJ_" + generateName("Komisaris Utama"),
      setState: (val) =>
        setSusunanManajemen({
          ...susunanManajemen,
          komisaris: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndAlphabet(
              susunanManajemen.komisaris,
              "Komisaris Utama"
            );

            return {
              susunanManajemen: {
                komisaris: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Nomor NIB"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          nomorNIB: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (jenisIdentitasUtama.dokumenLainnya.NIB) {
              result = validateEmptyAndNumeric(
                jenisIdentitasUtama.nomorNIB,
                "Nomor NIB"
              );
            } else {
              result = validateNumeric(
                jenisIdentitasUtama.nomorNIB,
                "Nomor NIB"
              );
            }

            return {
              jenisIdentitasUtama: {
                nomorNIB: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tempat Dikeluarkan NIB"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tempatNIB: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (jenisIdentitasUtama.dokumenLainnya.NIB) {
              result = validateEmptyAndAlphaNumeric(
                jenisIdentitasUtama.tempatNIB,
                "Tempat Dikeluarkan NIB"
              );
            } else {
              result = validateAlphaNumeric(
                jenisIdentitasUtama.tempatNIB,
                "Tempat Dikeluarkan NIB"
              );
            }

            return {
              jenisIdentitasUtama: {
                tempatNIB: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal berlaku NIB"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tanggalNIB: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (jenisIdentitasUtama.dokumenLainnya.NIB) {
              if (jenisIdentitasUtama.tanggalNIB.length === 0) {
                result = "Tanggal berlaku NIB tidak boleh kosong.";
              }
            }

            return {
              jenisIdentitasUtama: {
                tanggalNIB: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Nomor SIUP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          nomorSIUP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (jenisIdentitasUtama.dokumenLainnya.SIUP) {
              result = validateEmptyAndNumeric(
                jenisIdentitasUtama.nomorSIUP,
                "Nomor SIUP"
              );
            } else {
              result = validateNumeric(
                jenisIdentitasUtama.nomorSIUP,
                "Nomor SIUP"
              );
            }

            return {
              jenisIdentitasUtama: {
                nomorSIUP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tempat Dikeluarkan SIUP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tempatSIUP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (
              jenisIdentitasUtama.dokumenLainnya.SIUP &&
              jenisIdentitasUtama.dokumenLainnya.TDP
            ) {
              result = validateEmptyAndAlphaNumeric(
                jenisIdentitasUtama.tempatSIUP,
                "Tempat Dikeluarkan SIUP"
              );
            } else {
              result = validateAlphaNumeric(
                jenisIdentitasUtama.tempatSIUP,
                "Tempat Dikeluarkan SIUP"
              );
            }

            return {
              jenisIdentitasUtama: {
                tempatSIUP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal berlaku SIUP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tanggalSIUP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (
              jenisIdentitasUtama.dokumenLainnya.SIUP &&
              jenisIdentitasUtama.dokumenLainnya.TDP
            ) {
              if (jenisIdentitasUtama.tanggalSIUP.length === 0) {
                result = "Tanggal berlaku SIUP tidak boleh kosong.";
              }
            }

            return {
              jenisIdentitasUtama: {
                tanggalSIUP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Nomor TDP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          nomorTDP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (jenisIdentitasUtama.dokumenLainnya.TDP) {
              result = validateEmptyAndNumeric(
                jenisIdentitasUtama.nomorTDP,
                "Nomor TDP"
              );
            } else {
              result = validateNumeric(
                jenisIdentitasUtama.nomorTDP,
                "Nomor TDP"
              );
            }

            return {
              jenisIdentitasUtama: {
                nomorTDP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tempat Dikeluarkan TDP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tempatTDP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (
              jenisIdentitasUtama.dokumenLainnya.SIUP &&
              jenisIdentitasUtama.dokumenLainnya.TDP
            ) {
              result = validateEmptyAndAlphaNumeric(
                jenisIdentitasUtama.tempatTDP,
                "Tempat Dikeluarkan TDP"
              );
            } else {
              result = validateAlphaNumeric(
                jenisIdentitasUtama.tempatTDP,
                "Tempat Dikeluarkan TDP"
              );
            }

            return {
              jenisIdentitasUtama: {
                tempatTDP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal berlaku TDP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tanggalTDP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (
              jenisIdentitasUtama.dokumenLainnya.SIUP &&
              jenisIdentitasUtama.dokumenLainnya.TDP
            ) {
              if (jenisIdentitasUtama.tanggalTDP.length === 0) {
                result = "Tanggal berlaku TDP tidak boleh kosong.";
              }
            }

            return {
              jenisIdentitasUtama: {
                tanggalTDP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("NPWP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          nomorNPWP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndNumeric(
              jenisIdentitasUtama.nomorNPWP,
              "NPWP"
            );

            return {
              jenisIdentitasUtama: {
                nomorNPWP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tempat dikeluarkan NPWP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tempatNPWP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateEmptyAndAlphaNumeric(
              jenisIdentitasUtama.tempatNPWP,
              "Tempat dikeluarkan NPWP"
            );

            return {
              jenisIdentitasUtama: {
                tempatNPWP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal berlaku NPWP"),
      setState: (val) =>
        setJenisIdentitasUtama({
          ...jenisIdentitasUtama,
          tanggalNPWP: val,
        }),
      validations: [
        {
          validate: function () {
            let result = "";
            if (jenisIdentitasUtama.tanggalNPWP.length === 0) {
              result = "Tanggal berlaku NPWP tidak boleh kosong";
            }

            return {
              jenisIdentitasUtama: {
                tanggalNPWP: result,
              },
            };
          },
        },
      ],
    },
    {
      name: generateName("Bidang Usaha"),
      setState: (val) =>
        setInformasiLainnya({
          ...informasiLainnya,
          bidangUsaha: val,
        }),
      validations: [
        {
          validate: function () {
            let result = validateAlphabet(
              informasiLainnya.bidangUsaha,
              "Bidang Usaha"
            );

            return {
              informasiLainnya: {
                bidangUsaha: result,
              },
            };
          },
        },
      ],
    },
  ];

  const handleChange = (e) => {
    if (e.target.name === "branchcode") {
      setBranchCode((old) => e.target.value);
    }
    if (e.target.name === "metodepenyerahan") {
      setValidationMessages({
        ...validationMessages,
        branchcode: "",
      });
      setMetodePenyerahan((old) => e.target.value);
    }
    if (e.target.name === "bentukbadanusaha") {
      setJenisBadanUsaha(e.target.value);
      setValidationMessages({
        ...validationMessages,
        badanUsahaLainnya: "",
      });
    }
    if (e.target.name === "lainnya") {
      setBadanUsahaLainnya(e.target.value);
    }

    if (e.target.name === "jenis_rekening") {
      setValidationMessages({
        ...validationMessages,
        alamatElektronik: {
          ...validationMessages.alamatElektronik,
          jenisRekening: "",
        },
      });
      setAlamatElektronik({
        ...alamatElektronik,
        jenisRekening: e.target.value,
        jenisValuta:
          e.target.value === "giro_rupiah"
            ? "idr"
            : e.target.value === "giro_valas"
            ? "usd"
            : alamatElektronik.jenisValuta,
      });
    }

    if (e.target.name === "jenis_valuta") {
      setValidationMessages({
        ...validationMessages,
        alamatElektronik: {
          ...validationMessages.alamatElektronik,
          jenisValuta: "",
        },
      });
      setAlamatElektronik({
        ...alamatElektronik,
        jenisValuta: e.target.value,
      });
    }

    if (e.target.name === "operasional") {
      setPendapatanRataRata({
        ...pendapatanRataRata,
        operasional: e.target.value,
      });
    }

    if (e.target.name === "nonoperasional") {
      setPendapatanRataRata({
        ...pendapatanRataRata,
        nonOperasional: e.target.value,
      });
    }

    if (e.target.name === "tujuanhubungan") {
      setPendapatanRataRata({
        ...pendapatanRataRata,
        tujuanHubungan: e.target.value,
      });
    }

    if (e.target.name === "omzet") {
      setInformasiLainnya({
        ...informasiLainnya,
        omzet: e.target.value,
      });
    }

    // for checkbox

    if (
      ["syaratA", "syaratB", "ketentuanA", "ketentuanB"].includes(e.target.name)
    ) {
      setPersetujuan({
        ...persetujuan,
        [e.target.name]: e.target.checked,
      });
    }

    if (["NIB", "SIUP", "TDP"].includes(e.target.name)) {
      setJenisIdentitasUtama({
        ...jenisIdentitasUtama,
        dokumenLainnya: {
          ...jenisIdentitasUtama.dokumenLainnya,
          [e.target.name]: e.target.checked,
        },
      });
    }

    fieldsManager.forEach((field) => {
      if (e.target.name === field.name) {
        field.setState(e.target.value);
      }
    });
  };

  const isAlphabet = (val) => {
    return val.toLowerCase().match(/^[a-z]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let badanUsahaLainnyaError = "";
    let branchCodeError = "";
    let syaratError = "";
    let ketentuanError = "";

    let totalError = 0;

    if (metodePenyerahan === "kecabang") {
      if (branchCode.length <= 0) {
        branchCodeError = "Kode cabang tidak boleh kosong";
        totalError++;
      } else if (!branchCode.toLowerCase().match(/^[0-9a-z]+$/)) {
        branchCodeError = "Kode cabang harus alfanumerik";
        totalError++;
      } else if (branchCode.length > 40) {
        branchCodeError = "Kode cabang maksimal 40 karakter";
        totalError++;
      }
    }
    if (jenisBadanUsaha === JENIS_USAHA_LAINNYA) {
      if (badanUsahaLainnya.length <= 0) {
        badanUsahaLainnyaError = "Badan Usaha lainnya tidak boleh kosong";
        totalError++;
      } else if (!isAlphabet(badanUsahaLainnya)) {
        badanUsahaLainnyaError = "Badan usaha lainnya harus alphabet";
        totalError++;
      }
    }
    if (persetujuan.syaratA === false && persetujuan.syaratB === false) {
      syaratError = "Syarat Khusus Join Account tidak boleh kosong";
      totalError++;
    }
    if (persetujuan.ketentuanA === false && persetujuan.ketentuanB === false) {
      ketentuanError =
        "Ketentuan dan Syarat khusu rekening Giro tidak boleh kosong";
      totalError++;
    }

    let mergeErrors = {
      badanUsahaLainnya: badanUsahaLainnyaError,
      branchCode: branchCodeError,
      persetujuan: {
        ...validationMessages.persetujuan,
        syarat: syaratError,
        ketentuan: ketentuanError,
      },
      jenisIdentitasUtama: {},
    };

    fieldsManager.forEach((field) => {
      let errorValidation = {};

      if (field.validations.length > 0) {
        field.validations.forEach((validation) => {
          errorValidation = validation.validate();
        });
      }

      if ("jenisIdentitasUtama" in errorValidation) {
        mergeErrors = {
          ...mergeErrors,
          jenisIdentitasUtama: {
            ...mergeErrors.jenisIdentitasUtama,
            ...errorValidation.jenisIdentitasUtama,
          },
        };
      } else if ("konfirmasiTransaksi" in errorValidation) {
        mergeErrors = {
          ...mergeErrors,
          konfirmasiTransaksi: {
            ...mergeErrors.konfirmasiTransaksi,
            ...errorValidation.konfirmasiTransaksi,
          },
        };
      } else if ("alamatElektronik" in errorValidation) {
        mergeErrors = {
          ...mergeErrors,
          alamatElektronik: {
            ...mergeErrors.alamatElektronik,
            ...errorValidation.alamatElektronik,
          },
        };
      } else if ("laporanKeuangan" in errorValidation) {
        mergeErrors = {
          ...mergeErrors,
          laporanKeuangan: {
            ...mergeErrors.laporanKeuangan,
            ...errorValidation.laporanKeuangan,
          },
        };
      } else if ("susunanManajemen" in errorValidation) {
        mergeErrors = {
          ...mergeErrors,
          susunanManajemen: {
            ...mergeErrors.susunanManajemen,
            ...errorValidation.susunanManajemen,
          },
        };
      } else if ("jenisIdentitasUtama" in errorValidation) {
        mergeErrors = {
          ...mergeErrors,
          jenisIdentitasUtama: {
            ...mergeErrors.jenisIdentitasUtama,
            ...errorValidation.jenisIdentitasUtama,
          },
        };
      } else {
        mergeErrors = {
          ...mergeErrors,
          ...errorValidation,
        };
      }
    });

    let totalFixError = 0;

    Object.entries(mergeErrors).map((item) => {
      if (typeof item[1] !== "string") {
        Object.entries(item[1]).map((deepItem) => {
          if (deepItem[1].length > 0) {
            totalFixError++;
          }
        });
      } else {
        if (item[1].length > 0) {
          totalFixError++;
        }
      }
    });

    setValidationMessages({
      ...validationMessages,
      ...mergeErrors,
    });

    let ketentuanStr = "";
    let syaratStr = "";

    if (persetujuan.ketentuanA) {
      ketentuanStr += ", ketentuan A";
    }
    if (persetujuan.ketentuanB) {
      ketentuanStr += ", ketentuan B";
    }
    if (persetujuan.syaratA) {
      syaratStr += ", syarat A";
    }
    if (persetujuan.syaratB) {
      syaratStr += ", syarat B";
    }

    dispatch(
      save({
        header: {
          date: currentDate,
          bentukBadanUsaha:
            jenisBadanUsaha === "lainnya" ? badanUsahaLainnya : jenisBadanUsaha,
        },
        dataPerusahaan: {
          nama: namaPerusahaan,
          tempatBerdiri: tempatBerdiriPerusahaan,
          tanggalBediri: tanggalBerdiriPerusahaan,
          bidang: bidangUsahaPerusahaan,
          group: "-",
        },
        jenisIdentitasUtama: {
          aktaPendirian: {
            nomor: jenisIdentitasUtama.nomor,
            tempat: jenisIdentitasUtama.tempatKeluarAkta,
            berlaku: jenisIdentitasUtama.tglBerlakuAkta,
          },
          alamatKantor: jenisIdentitasUtama.alamatKantor,
          provinsi: "-",
          kabupatenkota: "-",
          area: "-",
          alamatPabrik: "-",
          alamatProyek: "-",
          alamatKirimSurat: "-",
          npwp: {
            nomor: jenisIdentitasUtama.nomorNPWP,
            tempat: jenisIdentitasUtama.tempatNPWP,
            berlaku: jenisIdentitasUtama.tanggalNPWP,
          },
          nib: {
            nomor: jenisIdentitasUtama.nomorNIB,
            tempat: jenisIdentitasUtama.tempatNIB,
            berlaku: jenisIdentitasUtama.tanggalNIB,
          },
          siup: {
            nomor: jenisIdentitasUtama.nomorSIUP,
            tempat: jenisIdentitasUtama.tempatSIUP,
            berlaku: jenisIdentitasUtama.tanggalSIUP,
          },
          tdp: {
            nomor: jenisIdentitasUtama.nomorTDP,
            tempat: jenisIdentitasUtama.tempatTDP,
            berlaku: jenisIdentitasUtama.tanggalTDP,
          },
          nomor: {
            nomor: "-",
            tempat: "-",
            berlaku: "-",
          },
        },
        informasiLainnya: {
          bidang: informasiLainnya.bidangUsaha,
          alamat: "-",
        },
        pendapatanRataPerBulan: {
          PendapatanOperasional: pendapatanRataRata.operasional,
          PendapatanNonOperasional: pendapatanRataRata.nonOperasional,
          TujuanBerhubungandenganBank: pendapatanRataRata.tujuanHubungan,
        },
        rekeningSaatIni: {
          Bank1: "-",
          Produk1: "-",
          NoRekening1: "-",
          Bank2: "-",
          Produk2: "-",
          NoRekening2: "-",
        },
        susunanManajemen: {
          Direktur: susunanManajemen.direktur,
          Direktur1: "-",
          Direktur2: "-",
          Direktur3: "-",
          KomisarisUtama: susunanManajemen.komisaris,
          Komisaris1: "-",
          Komisaris2: "-",
          Komisaris3: "-",
        },
        laporanKeuangan: {
          ModalDasarPerusahaan: laporanKeuangan.modalDasar,
          ModalDisetor: laporanKeuangan.modalDisetor,
        },
        hubunganDgnNasabahLain: {
          Nama: "-",
          Produk: "-",
          JenisHubungan: "-",
        },
        hubunganDgnPihakLain: {
          Nama: "-",
          JenisHubungan: "-",
          SektorUsaha: "-",
          Alamat: "-",
          NoTelepon: "-",
        },
        seringBertransaksiDengan: {
          Nama: "-",
          JenisHubungan: "-",
          SektorUsaha: "-",
          Alamat: "-",
          NoTelepon: "-",
        },
        alamatElektronik: {
          TeleponRumah: "-",
          TeleponSelular: "-",
          FAX: "-",
          TeleponKantor: "-",
          Email: alamatElektronik.email,
          JenisRekening:
            alamatElektronik.jenisRekening === "others"
              ? alamatElektronik.others
              : alamatElektronik.jenisRekening,
          JenisValuta:
            alamatElektronik.jenisValuta === "others"
              ? alamatElektronik.lainlain
              : alamatElektronik.jenisValuta,
          TujuanPembukaanRekening: "-",
          TujuanPenggunaanDana: "-",
        },
        fasilitasPembayaranTagihan: {
          FasilitasPembayaranTagihan: "-",
          Number: "-",
          FasilitasLainnya: "-",
          NumberFasilitasLainnya: "-",
        },
        konfirmasiTransaksi: {
          NamaPejabatyangdihubungi: konfirmasiTransaksi.nama,
          NoTelepon: konfirmasiTransaksi.nomor,
          Jabatan: konfirmasiTransaksi.jabatan,
          NoKTP: konfirmasiTransaksi.nomorKTP,
          KodeKonfirmasi: "-",
          NamaPejabatyangdihubungi2: "-",
          NoTelepon2: "-",
          Jabatan2: "-",
          NoKTP2: "-",
        },
        persetujuan: {
          KetentuandanSyaratkhususrekeningGiro: ketentuanStr,
          SyaratKhususJoinAccount: syaratStr,
        },
        unggahDokumen: {
          No: "-",
          NamaDokumenHarusUpload: "-",
          NamaDokumenBerhasilUpload: "-",
        },
      })
    );

    if (totalFixError === 0) {
      if (metodePenyerahan === "unggahdokumen") {
        navigate("/upload-document");
      } else {
        navigate("/confirmation");
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper style={{ width: "800px", textAlign: "left", padding: 20 }}>
        <h2>Aplikasi Pembukaan Rekening Giro</h2>

        <form onSubmit={handleSubmit}>
          <p>Date : {currentDate}</p>

          <p>
            <b>Metode Penyerahan Dokumen</b>
          </p>

          <input
            type="radio"
            value="unggahdokumen"
            id="radio1"
            name="metodepenyerahan"
            checked={metodePenyerahan === "unggahdokumen" ? true : false}
            required
            onChange={handleChange}
          />
          <label htmlFor="radio1" style={{ marginRight: "20px" }}>
            Unggah Dokumen
          </label>

          <input
            type="radio"
            value="kecabang"
            id="radio2"
            name="metodepenyerahan"
            checked={metodePenyerahan === "kecabang" ? true : false}
            onChange={handleChange}
          />
          <label htmlFor="radio2">Diserahkan ke Cabang</label>

          <br />

          <BentukBadanUsahaFields
            jenisBadanUsaha={jenisBadanUsaha}
            badanUsahaLainnya={badanUsahaLainnya}
            handleChange={handleChange}
            errLainnya={validationMessages.badanUsahaLainnya}
          />
          <br />
          <DataPerusahaanFields
            onChange={handleChange}
            errMsg={{
              nama: validationMessages.namaPerusahaan,
              tempat: validationMessages.tempatBerdiriPerusahaan,
              tanggal: validationMessages.tanggalBerdiriPerusahaan,
              bidang: validationMessages.bidangUsahaPerusahaan,
            }}
          />
          <JenisIdentitasUtamaFields
            onChange={handleChange}
            errMsg={validationMessages.jenisIdentitasUtama}
            values={jenisIdentitasUtama}
          />
          <InformasiLainnyaFields
            values={informasiLainnya}
            onChange={handleChange}
            errMsg={validationMessages.informasiLainnya}
          />
          <PendapatanRataRataFields
            values={pendapatanRataRata}
            onChange={handleChange}
          />
          <SusunanManajemenFields
            onChange={handleChange}
            errMsg={validationMessages.susunanManajemen}
          />
          <LaporanKeuanganTahunanFields
            onChange={handleChange}
            errMsg={validationMessages.laporanKeuangan}
          />
          <AlamatElektronikFields
            values={alamatElektronik}
            onChange={handleChange}
            errMsg={validationMessages.alamatElektronik}
          />
          <KonfirmasiTransaksiFields
            onChange={handleChange}
            errMsg={validationMessages.konfirmasiTransaksi}
          />
          <PersetujuanFields
            onChange={handleChange}
            errMsg={validationMessages.persetujuan}
          />
          <UnggahDokumenFields />
          <MetodePenyerahanDokumenFields />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <label htmlFor="branchcode">Branch Code</label>
            </div>
            <div>
              <input
                id="branchcode"
                type="text"
                name="branchcode"
                maxLength="40"
                value={branchCode}
                onChange={handleChange}
              />
              <br />
              {validationMessages.branchCode.length > 0 && (
                <span className="error-text">
                  {validationMessages.branchCode}
                </span>
              )}
            </div>
          </div>

          <br />

          <input
            type="submit"
            value="Confirm"
            style={{ fontSize: "24px", marginTop: "30px" }}
          />
        </form>
      </Paper>
    </div>
  );
};
