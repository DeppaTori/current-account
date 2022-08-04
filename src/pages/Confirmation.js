import { DataPerusahaan } from "../components/confirmation/DataPerusahaan";
import { JenisIdentitasUtama } from "../components/confirmation/JenisIdentitasUtama";
import { Header } from "../components/confirmation/Header";
import { confirmationData, confirmationLabels } from "../constants";
import { InformasiLainnya } from "../components/confirmation/InformasiLainnya";
import { GenericFields } from "../components/confirmation/GenericFields";
import { generateLabelValues } from "../Helper";

export const Confirmation = () => {
  const { header, dataPerusahaan, jenisIdentitasUtama, informasiLainnya } =
    confirmationData;

  const {
    pendapatanRataPerBulan,
    rekeningSaatIni,
    susunanManajemen,
    laporanKeuangan,
    hubunganDgnNasabahLain,
    hubunganDgnPihakLain,
    seringBertransaksiDengan,
    alamatElektronik,
    fasilitasPembayaranTagihan,
    konfirmasiTransaksi,
    persetujuan,
  } = confirmationLabels;
  const pendapatanPerBulanLabelValues = generateLabelValues(
    pendapatanRataPerBulan,
    confirmationData.pendapatanRataPerBulan
  );
  const rekeningSaatIniLabelValues = generateLabelValues(
    rekeningSaatIni,
    confirmationData.rekeningSaatIni
  );
  const susunanManajemenLabelValues = generateLabelValues(
    susunanManajemen,
    confirmationData.susunanManajemen
  );

  const laporanKeuanganLabelValues = generateLabelValues(
    laporanKeuangan,
    confirmationData.laporanKeuangan
  );

  const hubunganDgnNasabahLainLabelValues = generateLabelValues(
    hubunganDgnNasabahLain,
    confirmationData.hubunganDgnNasabahLain
  );

  const hubunganDgnPihakLainLabelValues = generateLabelValues(
    hubunganDgnPihakLain,
    confirmationData.hubunganDgnPihakLain
  );

  const seringBertransaksiDenganLabelValues = generateLabelValues(
    seringBertransaksiDengan,
    confirmationData.seringBertransaksiDengan
  );

  const alamatElektronikLabelValues = generateLabelValues(
    alamatElektronik,
    confirmationData.alamatElektronik
  );

  const fasilitasPembayaranTagihanLabelValues = generateLabelValues(
    fasilitasPembayaranTagihan,
    confirmationData.fasilitasPembayaranTagihan
  );

  const konfirmasiTransaksiLabelValues = generateLabelValues(
    konfirmasiTransaksi,
    confirmationData.konfirmasiTransaksi
  );

  const persetujuanLabelValues = generateLabelValues(
    persetujuan,
    confirmationData.persetujuan
  );

  return (
    <>
      <h3>Konfirmasi</h3>
      <Header data={header} />
      <DataPerusahaan data={dataPerusahaan} />
      <JenisIdentitasUtama dataJIU={jenisIdentitasUtama} />
      <InformasiLainnya data={informasiLainnya} />
      <GenericFields
        title="Pendapatan Rata-Rata per bulan"
        fields={pendapatanPerBulanLabelValues}
      />
      <GenericFields
        title="Rekening yang dimiliki saat ini (Bank/Inst. Keuangan Lainnya)"
        fields={rekeningSaatIniLabelValues}
      />
      <GenericFields
        title="Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan"
        fields={susunanManajemenLabelValues}
      />
      <GenericFields
        title="Laporan Keuangan Tahunan"
        fields={laporanKeuanganLabelValues}
      />
      <GenericFields
        title="Hubungan dengan Nasabah lain di Bank"
        fields={hubunganDgnNasabahLainLabelValues}
        prefixId="HDNSLID_"
      />
      <GenericFields
        title="Hubungan dengan pihak lain di Bank"
        fields={hubunganDgnPihakLainLabelValues}
        prefixId="HDNPLID_"
      />
      <GenericFields
        title="Sering bertransaksi dengan"
        fields={seringBertransaksiDenganLabelValues}
        prefixId="SBDID_"
      />
      <GenericFields
        title="Alamat Elektronik"
        fields={alamatElektronikLabelValues}
        prefixId="AEID_"
      />
      <GenericFields
        title="Fasilitas Pembayaran Tagihan dan Lainnya"
        fields={fasilitasPembayaranTagihanLabelValues}
        prefixId="FTLID_"
      />
      <GenericFields
        title="Konfirmasi Transaksi"
        fields={konfirmasiTransaksiLabelValues}
        prefixId="KTID_"
      />

      <GenericFields
        title="Persetujuan"
        fields={persetujuanLabelValues}
        prefixId="PSJID_"
      />
      <button>Submit</button>
    </>
  );
};
