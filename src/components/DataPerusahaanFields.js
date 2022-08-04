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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <label htmlFor="tanggal" className="required">
            Tanggal Berdiri Perusahaan
          </label>
        </div>
        <div>
          <input
            id="tanggal"
            type="date"
            name={generateName("Tanggal Berdiri Perusahaan")}
            onChange={onChange}
          />
          <br />
          {errMsg.tanggal.length > 0 && (
            <span className="error-text">{errMsg.tanggal}</span>
          )}
        </div>
      </div>

      <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <label for="bidang" className="required">
            Bidang Usaha
          </label>
        </div>
        <div>
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
          {errMsg.bidang.length > 0 && (
            <span className="error-text">{errMsg.bidang}</span>
          )}
        </div>
      </div>

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
