import { generateName } from "../Helper";

export const RadioField = ({
  label,
  value,
  errMsg,
  onChange,
  checked,
  defaultName = null,
  disabled = false,
}) => {
  const name = defaultName ? defaultName : generateName(label);
  const id = generateName(label).concat("_id");
  return (
    <>
      <input
        type="radio"
        value={value}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>

      {errMsg.length > 0 && <span>{errMsg}</span>}
    </>
  );
};

RadioField.defaultProps = {
  errMsg: "",
};
