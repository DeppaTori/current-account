export const Header = ({ data }) => {
  return (
    <>
      <div>
        <span>Date :</span>
        <span>{data.date}</span>
      </div>
      <div>
        <span>Bentuk Badan Usaha :</span>
        <span>{data.bentukBadanUsaha}</span>
      </div>
    </>
  );
};
