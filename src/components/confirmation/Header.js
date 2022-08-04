export const Header = ({ data }) => {
  return (
    <>
      <div className="confirmation-row">
        <div>Date </div>
        <div>: {data.date}</div>
      </div>
      <div className="confirmation-row">
        <div>Bentuk Badan Usaha</div>
        <div>: {data.bentukBadanUsaha}</div>
      </div>
    </>
  );
};
