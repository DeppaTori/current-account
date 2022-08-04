import { generateName } from "../Helper";

export const TextBoxField = ({
  label,
  value,
  maxLength,
  errMsg,
  onChange,
  required = true,
  prefixName = "",
  disabled = false,
}) => {
  const name = prefixName + "" + generateName(label);
  const id = name.concat("_id");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <label htmlFor={id} className={required ? "required" : ""}>
          {label}
        </label>
      </div>
      <div>
        <input
          id={id}
          type="text"
          name={name}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <br />
        {errMsg.length > 0 && <span className="error-text">{errMsg}</span>}
      </div>

      <br />
      <br />
    </div>
  );
};

TextBoxField.defaultProps = {
  errMsg: "",
};
