import { RadioField } from "./RadioField";
import { TextBoxField } from "./TextBoxField";

export const InformasiLainnyaFields = ({ onChange, values }) => {
  return (
    <>
      <h4>Informasi Lainnya</h4>
      <TextBoxField
        label="Bidang Usaha"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
        required={false}
      />
      <p>Omzet Usaha</p>
      <RadioField
        label="Rp 1.000.000.000"
        defaultName="omzet"
        value="1000000000"
        checked={values.omzet === "1000000000" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Rp 2.000.000.000"
        defaultName="omzet"
        value="2000000000"
        checked={values.omzet === "2000000000" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Rp 3.000.000.000"
        defaultName="omzet"
        value="3000000000"
        checked={values.omzet === "3000000000" ? true : false}
        onChange={onChange}
      />
    </>
  );
};
