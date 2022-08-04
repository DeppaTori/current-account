export const GenericFields = ({ title, fields, prefixId = null }) => {
  return (
    <>
      <h4>{title}</h4>
      {fields.map((item, i) => (
        <div
          key={i}
          data-testid={
            prefixId
              ? prefixId + "" + item.label.replace(/ /g, "").replace(/\./g, "")
              : null
          }
        >
          <span>{item.label} :</span>
          <span>{item.value}</span>
        </div>
      ))}
    </>
  );
};
