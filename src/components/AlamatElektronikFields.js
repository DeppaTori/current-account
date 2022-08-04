import { RadioField } from "./RadioField";
import { TextBoxField } from "./TextBoxField";

export const AlamatElektronikFields = ({ onChange, values, errMsg }) => {
  const prefixName = "AE_";
  return (
    <>
      <h4>Alamat Elektronik</h4>
      <TextBoxField
        label="Email"
        errMsg={errMsg.email}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
      <p className="required">Jenis Rekening</p>
      <RadioField
        label="Giro Rupiah"
        defaultName="jenis_rekening"
        value="giro_rupiah"
        checked={values.jenisRekening === "giro_rupiah" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Giro Valas"
        defaultName="jenis_rekening"
        value="giro_valas"
        onChange={onChange}
        checked={values.jenisRekening === "giro_valas" ? true : false}
      />
      <RadioField
        label="Others"
        defaultName="jenis_rekening"
        value="others"
        onChange={onChange}
        checked={values.jenisRekening === "others" ? true : false}
      />
      <div style={{ marginBottom: "20px" }}></div>
      <TextBoxField
        label="Others"
        errMsg={errMsg.others}
        onChange={onChange}
        maxLength={20}
        required={false}
        disabled={values.jenisRekening === "others" ? false : true}
        prefixName={prefixName}
      />
      <p className="required">Jenis Valuta</p>
      <RadioField
        label="IDR"
        defaultName="jenis_valuta"
        value="idr"
        disabled={values.jenisRekening === "giro_valas" ? true : false}
        onChange={onChange}
        checked={values.jenisValuta === "idr" ? true : false}
      />
      <RadioField
        label="USD"
        defaultName="jenis_valuta"
        value="usd"
        onChange={onChange}
        checked={values.jenisValuta === "usd" ? true : false}
      />
      <RadioField
        label="Others"
        defaultName="jenis_valuta"
        value="others"
        onChange={onChange}
        checked={values.jenisValuta === "others" ? true : false}
      />
      <div style={{ marginBottom: "20px" }}></div>
      <TextBoxField
        label="Lain-Lain"
        errMsg={errMsg.lainlain}
        onChange={onChange}
        maxLength={40}
        required={false}
        disabled={values.jenisValuta === "others" ? false : true}
        prefixName={prefixName}
      />
    </>
  );
};
