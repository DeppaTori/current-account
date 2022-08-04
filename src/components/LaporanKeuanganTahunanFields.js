import { TextBoxField } from "./TextBoxField";

export const LaporanKeuanganTahunanFields = () => {
  return (
    <>
      <h4>Laporan Keuangan Tahunan</h4>
      <TextBoxField
        label="Modal Dasar Perusahaan"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
      <TextBoxField
        label="Modal Disetor"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
    </>
  );
};
