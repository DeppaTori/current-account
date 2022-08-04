export const InformasiLainnya = ({ data }) => {
  return (
    <>
      <h4>Informasi Lainnya</h4>
      <div>
        <span>Bidang Usaha :</span>
        <span>{data.bidang}</span>
      </div>
      <div>
        <span>Alamat Kantor :</span>
        <span>{data.alamat}</span>
      </div>
    </>
  );
};
