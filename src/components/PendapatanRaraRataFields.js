import { RadioField } from "./RadioField";

export const PendapatanRataRataFields = ({ onChange, values }) => {
  return (
    <>
      <h4>Pendapatan Rata-Rata per bulan</h4>

      <p className="required">Pendapatan Operasional</p>
      <RadioField
        label="Rp 9.000.000.000"
        defaultName="operasional"
        value="9000000000"
        checked={values.operasional === "9000000000" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Rp 91.000.000.000"
        defaultName="operasional"
        value="91000000000"
        checked={values.operasional === "91000000000" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Rp 93.000.000.000"
        defaultName="operasional"
        value="93000000000"
        checked={values.operasional === "93000000000" ? true : false}
        onChange={onChange}
      />

      <p className="required">Pendapatan Non Operasional</p>
      <RadioField
        label="Rp 11.000.000.000"
        defaultName="nonoperasional"
        value="11000000000"
        checked={values.nonOperasional === "11000000000" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Rp 22.000.000.000"
        defaultName="nonoperasional"
        value="22000000000"
        checked={values.nonOperasional === "22000000000" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Rp 33.000.000.000"
        defaultName="nonoperasional"
        value="33000000000"
        checked={values.nonOperasional === "33000000000" ? true : false}
        onChange={onChange}
      />

      <p className="required">Tujuan Berhubungan dengan Bank</p>
      <RadioField
        label="Hubungan A"
        defaultName="tujuanhubungan"
        value="A"
        checked={values.tujuanHubungan === "A" ? true : false}
        onChange={onChange}
      />
      <RadioField
        label="Hubungan B"
        defaultName="tujuanhubungan"
        value="B"
        checked={values.tujuanHubungan === "B" ? true : false}
        onChange={onChange}
      />
    </>
  );
};
