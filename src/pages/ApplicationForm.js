import { useState } from "react";
import { BentukBadanUsahaFields } from "../components/BentukBadanUsahaFields";
import { JENIS_USAHA_LAINNYA } from "../constants";

export const ApplicationForm = () => {
  const [branchCode, setBranchCode] = useState("");
  const [metodePenyerahan, setMetodePenyerahan] = useState("unggahdokumen");
  const [badanUsahaLainnya, setBadanUsahaLainnya] = useState("");
  const [jenisBadanUsaha, setJenisBadanUsaha] = useState("swasta");
  const [validationMessages, setValidationMessages] = useState({
    branchcode: "",
    badanUsahaLainnya: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "branchcode") {
      setBranchCode((old) => e.target.value);
    }
    if (e.target.name === "metodepenyerahan") {
      setValidationMessages({
        ...validationMessages,
        branchcode: "",
      });
      setMetodePenyerahan((old) => e.target.value);
    }
    if (e.target.name === "bentukbadanusaha") {
      setJenisBadanUsaha(e.target.value);
      setValidationMessages({
        ...validationMessages,
        badanUsahaLainnya: "",
      });
    }
    if (e.target.name === "lainnya") {
      setBadanUsahaLainnya(e.target.value);
    }
  };

  const isAlphabet = (val) => {
    return val.toLowerCase().match(/^[a-z]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (metodePenyerahan === "kecabang") {
      let branchCodeError = "";

      if (branchCode.length <= 0) {
        branchCodeError = "Kode cabang tidak boleh kosong";
      } else if (!branchCode.toLowerCase().match(/^[0-9a-z]+$/)) {
        branchCodeError = "Kode cabang harus alfanumerik";
      } else if (branchCode.length > 40) {
        branchCodeError = "Kode cabang maksimal 40 karakter";
      }

      setValidationMessages({
        ...validationMessages,
        branchcode: branchCodeError,
      });
    }
    if (jenisBadanUsaha === JENIS_USAHA_LAINNYA) {
      let badanUsahaLainnyaError = "";
      if (badanUsahaLainnya.length <= 0) {
        badanUsahaLainnyaError = "Badan Usaha lainnya tidak boleh kosong";
      } else if (!isAlphabet(badanUsahaLainnya)) {
        badanUsahaLainnyaError = "Badan usaha lainnya harus alphabet";
      }

      setValidationMessages({
        ...validationMessages,
        badanUsahaLainnya: badanUsahaLainnyaError,
      });
    }

    console.log("Submittt...");
  };

  return (
    <>
      <h3>Form</h3>

      <form onSubmit={handleSubmit}>
        <p>Date : {new Date().toLocaleDateString()}</p>
        <fieldset>
          <legend>Metode Penyerahan Dokumen</legend>
          <div>
            <input
              type="radio"
              value="unggahdokumen"
              id="radio1"
              name="metodepenyerahan"
              checked={metodePenyerahan === "unggahdokumen" ? true : false}
              required
              onChange={handleChange}
            />
            <label htmlFor="radio1">Unggah Dokumen</label>
          </div>
          <div>
            <input
              type="radio"
              value="kecabang"
              id="radio2"
              name="metodepenyerahan"
              checked={metodePenyerahan === "kecabang" ? true : false}
              onChange={handleChange}
            />
            <label htmlFor="radio2">Diserahkan ke Cabang</label>
          </div>
        </fieldset>
        <br />
        <label htmlFor="branchcode">Branch Code</label>
        <input
          id="branchcode"
          type="text"
          name="branchcode"
          maxLength="40"
          value={branchCode}
          onChange={handleChange}
        />
        {validationMessages.branchcode.length > 0 && (
          <span>{validationMessages.branchcode}</span>
        )}
        <br />
        <BentukBadanUsahaFields
          jenisBadanUsaha={jenisBadanUsaha}
          badanUsahaLainnya={badanUsahaLainnya}
          handleChange={handleChange}
          errLainnya={validationMessages.badanUsahaLainnya}
        />
        <br />
        <input type="submit" value="Confirm" />
      </form>
    </>
  );
};
