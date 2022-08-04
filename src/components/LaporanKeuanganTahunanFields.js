import { TextBoxField } from "./TextBoxField";

export const LaporanKeuanganTahunanFields = ({ onChange, errMsg }) => {
  const prefixName = "LKT_";
  return (
    <>
      <h4>Laporan Keuangan Tahunan</h4>
      <TextBoxField
        label="Modal Dasar Perusahaan"
        errMsg={errMsg.modalDasar}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
      <TextBoxField
        label="Modal Disetor"
        errMsg={errMsg.modalDisetor}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
    </>
  );
};
