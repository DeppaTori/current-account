import { generateName } from "../Helper";
import { TextBoxField } from "./TextBoxField";

export const DataPerusahaanFields = ({ errMsg, onChange }) => {
  return (
    <>
      <p>
        <b>Data Perusahaan</b>
      </p>

      <TextBoxField
        label="Nama Lengkap Perusahaan"
        errMsg={errMsg.nama}
        onChange={onChange}
      />
      <TextBoxField
        label="Tempat Berdiri Perusahaan"
        errMsg={errMsg.tempat}
        onChange={onChange}
      />

      <label htmlFor="tanggal">Tanggal Berdiri Perusahaan</label>
      <input
        id="tanggal"
        type="date"
        name={generateName("Tanggal Berdiri Perusahaan")}
        onChange={onChange}
      />
      <br />
      {errMsg.tanggal.length > 0 && <span>{errMsg.tanggal}</span>}
      <br />
      <label for="bidang">Bidang Usaha</label>

      <select
        name={generateName("Bidang Usaha")}
        id="bidang"
        onChange={onChange}
      >
        <option value="">---Bidang Usaha---</option>
        <option value="property">Property</option>
        <option value="pergudangan">Pergudangan</option>
      </select>
      <br />
      {errMsg.bidang.length > 0 && <span>{errMsg.bidang}</span>}
      <br />
    </>
  );
};

DataPerusahaanFields.defaultProps = {
  errMsg: {
    nama: "",
    tempat: "",
    tanggal: "",
    bidang: "",
  },
  onChange: () => {},
};
