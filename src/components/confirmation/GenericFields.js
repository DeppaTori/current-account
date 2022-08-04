export const GenericFields = ({ title, fields }) => {
  return (
    <>
      <h4>{title}</h4>
      {fields.map((item, i) => (
        <div key={i}>
          <span>{item.label} :</span>
          <span>{item.value}</span>
        </div>
      ))}
    </>
  );
};
