import { RadioField } from "./RadioField";
import { TextBoxField } from "./TextBoxField";

export const InformasiLainnyaFields = () => {
  return (
    <>
      <h4>Informasi Lainnya</h4>
      <TextBoxField
        label="Bidang Usaha"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
      <p>Omzet Usaha</p>
      <RadioField label="Rp 1.000.000.000" />
      <RadioField label="Rp 2.000.000.000" />
      <RadioField label="Rp 3.000.000.000" />
    </>
  );
};
