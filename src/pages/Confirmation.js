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

  const { pendapatanRataPerBulan, rekeningSaatIni, susunanManajemen } =
    confirmationLabels;
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
      <button>Submit</button>
    </>
  );
};
