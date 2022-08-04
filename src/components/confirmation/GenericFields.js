export const GenericFields = ({ title, fields, prefixId = null }) => {
  return (
    <>
      <h4>{title}</h4>
      {fields.map((item, i) => (
        <div
          className="confirmation-row"
          key={i}
          data-testid={
            prefixId
              ? prefixId + "" + item.label.replace(/ /g, "").replace(/\./g, "")
              : null
          }
        >
          <div>{item.label}</div>
          <div>: {item.value}</div>
        </div>
      ))}
    </>
  );
};
