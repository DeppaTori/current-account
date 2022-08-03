import { useState } from "react";
import { BentukBadanUsahaFields } from "../components/BentukBadanUsahaFields";
import { DataPerusahaanFields } from "../components/DataPerusahaanFields";
import { JENIS_USAHA_LAINNYA } from "../constants";
import { generateName, isAlphaNumeric } from "../Helper";

export const ApplicationForm = () => {
  const [branchCode, setBranchCode] = useState("");
  const [metodePenyerahan, setMetodePenyerahan] = useState("unggahdokumen");
  const [badanUsahaLainnya, setBadanUsahaLainnya] = useState("");
  const [jenisBadanUsaha, setJenisBadanUsaha] = useState("swasta");
  const [validationMessages, setValidationMessages] = useState({
    branchCode: "",
    badanUsahaLainnya: "",
    namaPerusahaan: "",
    tempatBerdiriPerusahaan: "",
    tanggalBerdiriPerusahaan: "",
    bidangUsahaPerusahaan: "",
  });
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [tempatBerdiriPerusahaan, setTempatBerdiriPerusahaan] = useState("");
  const [tanggalBerdiriPerusahaan, setTanggalBerdiriPerusahaan] = useState("");
  const [bidangUsahaPerusahaan, setBidangUsahaPerusahaan] = useState("");

  const fieldsManager = [
    {
      name: generateName("Nama Lengkap Perusahaan"),
      setState: (val) => setNamaPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (namaPerusahaan.length <= 0) {
              return { namaPerusahaan: "Nama Perusahaan Tidak Boleh Kosong" };
            } else if (!isAlphaNumeric(namaPerusahaan)) {
              return { namaPerusahaan: "Nama Perusahaan harus alphanumeric" };
            }
            return { namaPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Tempat Berdiri Perusahaan"),
      setState: (val) => setTempatBerdiriPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (tempatBerdiriPerusahaan.length <= 0) {
              return {
                tempatBerdiriPerusahaan:
                  "Tempat Berdiri Perusahaan Tidak Boleh Kosong",
              };
            } else if (!isAlphaNumeric(tempatBerdiriPerusahaan)) {
              return {
                tempatBerdiriPerusahaan:
                  "Tempat Berdiri Perusahaan harus alphanumeric",
              };
            }
            return { tempatBerdiriPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Tanggal Berdiri Perusahaan"),
      setState: (val) => setTanggalBerdiriPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (tanggalBerdiriPerusahaan.length <= 0) {
              return {
                tanggalBerdiriPerusahaan:
                  "Tanggal Berdiri Perusahaan Tidak Boleh Kosong",
              };
            }
            return { tanggalBerdiriPerusahaan: "" };
          },
        },
      ],
    },
    {
      name: generateName("Bidang Usaha"),
      setState: (val) => setBidangUsahaPerusahaan(val),
      validations: [
        {
          validate: function () {
            if (bidangUsahaPerusahaan.length <= 0) {
              return {
                bidangUsahaPerusahaan:
                  "Bidang Usaha Perusahaan Tidak Boleh Kosong",
              };
            }
            return { bidangUsahaPerusahaan: "" };
          },
        },
      ],
    },
  ];

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

    fieldsManager.forEach((field) => {
      if (e.target.name === field.name) {
        field.setState(e.target.value);
      }
    });
  };

  const isAlphabet = (val) => {
    return val.toLowerCase().match(/^[a-z]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let badanUsahaLainnyaError = "";
    let branchCodeError = "";

    if (metodePenyerahan === "kecabang") {
      if (branchCode.length <= 0) {
        branchCodeError = "Kode cabang tidak boleh kosong";
      } else if (!branchCode.toLowerCase().match(/^[0-9a-z]+$/)) {
        branchCodeError = "Kode cabang harus alfanumerik";
      } else if (branchCode.length > 40) {
        branchCodeError = "Kode cabang maksimal 40 karakter";
      }
    }
    if (jenisBadanUsaha === JENIS_USAHA_LAINNYA) {
      if (badanUsahaLainnya.length <= 0) {
        badanUsahaLainnyaError = "Badan Usaha lainnya tidak boleh kosong";
      } else if (!isAlphabet(badanUsahaLainnya)) {
        badanUsahaLainnyaError = "Badan usaha lainnya harus alphabet";
      }
    }

    let mergeErrors = {
      badanUsahaLainnya: badanUsahaLainnyaError,
      branchCode: branchCodeError,
    };

    fieldsManager.forEach((field) => {
      let errorValidation = {};
      if (field.validations.length > 0) {
        field.validations.forEach((validation) => {
          errorValidation = validation.validate();
        });
      }
      mergeErrors = {
        ...mergeErrors,
        ...errorValidation,
      };
    });

    setValidationMessages({
      ...validationMessages,
      ...mergeErrors,
    });

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
        {validationMessages.branchCode.length > 0 && (
          <span>{validationMessages.branchCode}</span>
        )}
        <br />
        <BentukBadanUsahaFields
          jenisBadanUsaha={jenisBadanUsaha}
          badanUsahaLainnya={badanUsahaLainnya}
          handleChange={handleChange}
          errLainnya={validationMessages.badanUsahaLainnya}
        />
        <br />
        <DataPerusahaanFields
          onChange={handleChange}
          errMsg={{
            nama: validationMessages.namaPerusahaan,
            tempat: validationMessages.tempatBerdiriPerusahaan,
            tanggal: validationMessages.tanggalBerdiriPerusahaan,
            bidang: validationMessages.bidangUsahaPerusahaan,
          }}
        />
        <input type="submit" value="Confirm" />
      </form>
    </>
  );
};
