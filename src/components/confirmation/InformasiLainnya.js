export const InformasiLainnya = ({ data }) => {
  return (
    <>
      <h4>Informasi Lainnya</h4>
      <div className="confirmation-row">
        <div>Bidang Usaha</div>
        <div>: {data.bidang}</div>
      </div>
      <div className="confirmation-row">
        <div>Alamat Kantor</div>
        <div>: {data.alamat}</div>
      </div>
    </>
  );
};
