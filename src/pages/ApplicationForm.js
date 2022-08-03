import { useState } from "react";
import { BentukBadanUsahaFields } from "../components/BentukBadanUsahaFields";

export const ApplicationForm = () => {
  const [branchCode, setBranchCode] = useState("");
  const [metodePenyerahan, setMetodePenyerahan] = useState("unggahdokumen");
  const [validationMessages, setValidationMessages] = useState({
    branchcode: "",
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
        <BentukBadanUsahaFields />
        <br />
        <input type="submit" value="Confirm" />
      </form>
    </>
  );
};
