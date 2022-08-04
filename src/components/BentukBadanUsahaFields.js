import { useState } from "react";
import { JENIS_USAHA_LAINNYA, JENIS_USAHA_SWASTA } from "../constants";

export const BentukBadanUsahaFields = ({
  errLainnya,
  jenisBadanUsaha,
  badanUsahaLainnya,
  handleChange,
}) => {
  return (
    <>
      <p>
        <b>Bentuk Badan Usaha</b>
      </p>

      <input
        type="radio"
        value={JENIS_USAHA_SWASTA}
        id="radiobbu1"
        name="bentukbadanusaha"
        checked={jenisBadanUsaha === JENIS_USAHA_SWASTA ? true : false}
        required
        onChange={handleChange}
      />
      <label htmlFor="radiobbu1" style={{ marginRight: "20px" }}>
        Badan Usaha Swasta
      </label>

      <input
        type="radio"
        value={JENIS_USAHA_LAINNYA}
        id="radiobbu2"
        name="bentukbadanusaha"
        checked={jenisBadanUsaha === JENIS_USAHA_LAINNYA ? true : false}
        required
        onChange={handleChange}
      />
      <label htmlFor="radiobbu2">Lainnya</label>

      <br />

      <label htmlFor="lainnya">Lainnya</label>
      <input
        id="lainnya"
        type="text"
        name="lainnya"
        maxLength="20"
        value={badanUsahaLainnya}
        onChange={handleChange}
        disabled={jenisBadanUsaha !== "lainnya" ? true : false}
      />
      <br />
      {errLainnya.length > 0 && (
        <span className="error-text">{errLainnya}</span>
      )}
      <br />
    </>
  );
};

BentukBadanUsahaFields.defaultProps = {
  errLainnya: "",
  jenisBadanUsaha: "swasta",
  badanUsahaLainnya: "",
  handleChange: () => {},
};
