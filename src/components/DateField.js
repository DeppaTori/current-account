import { generateName } from "../Helper";

export const DateField = ({ label, value, maxLength, errMsg, onChange }) => {
  const name = generateName(label);
  const id = name.concat("_id");
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="date"
        name={name}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <br />
      {errMsg.length > 0 && <span>{errMsg}</span>}
      <br />
    </>
  );
};

DateField.defaultProps = {
  errMsg: "",
};
