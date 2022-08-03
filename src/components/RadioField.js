import { generateName } from "../Helper";

export const RadioField = ({ label, value, errMsg, onChange, checked }) => {
  const name = generateName(label);
  const id = name.concat("_id");
  return (
    <>
      <input
        type="radio"
        value={value}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>

      <br />
      {errMsg.length > 0 && <span>{errMsg}</span>}
      <br />
    </>
  );
};

RadioField.defaultProps = {
  errMsg: "",
};
