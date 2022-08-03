import { useState } from "react";

export const BentukBadanUsahaFields = () => {
  const [jenisBadan, setJenisBadan] = useState("swasta");
  const handleChange = (e) => {
    if (e.target.name === "bentukbadanusaha") {
      setJenisBadan(e.target.value);
    }
  };
  return (
    <>
      <fieldset>
        <legend>Bentuk Badan Usaha</legend>
        <div>
          <input
            type="radio"
            value="swasta"
            id="radiobbu1"
            name="bentukbadanusaha"
            checked={jenisBadan === "swasta" ? true : false}
            required
            onChange={handleChange}
          />
          <label for="radiobbu1">Badan Usaha Swasta</label>
        </div>
        <div>
          <input
            type="radio"
            value="lainnya"
            id="radiobbu2"
            name="bentukbadanusaha"
            checked={jenisBadan === "lainnya" ? true : false}
            required
            onChange={handleChange}
          />
          <label for="radiobbu2">Lainnya</label>
        </div>
      </fieldset>
      <label htmlFor="lainnya">Lainnya</label>
      <input
        id="lainnya"
        type="text"
        name="lainnya"
        maxLength="40"
        // value={branchCode}
        onChange={handleChange}
        disabled={jenisBadan !== "lainnya" ? true : false}
      />
    </>
  );
};
