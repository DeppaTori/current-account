import { RadioField } from "./RadioField";
import { TextBoxField } from "./TextBoxField";

export const AlamatElektronikFields = () => {
  return (
    <>
      <h4>Alamat Elektronik</h4>
      <TextBoxField
        label="Email"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
      <p>Jenis Rekening</p>
      <RadioField label="Giro Rupiah" />
      <RadioField label="Giro Valas" />
      <RadioField label="Others" />
      <TextBoxField
        label="Others"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={20}
      />
      <p>Jenis Valuta</p>
      <RadioField label="IDR" />
      <RadioField label="USD" />
      <TextBoxField
        label="Lain-Lain"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
    </>
  );
};
