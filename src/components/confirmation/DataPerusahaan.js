export const DataPerusahaan = ({ data }) => {
  return (
    <>
      <h4>Data Perusahaan</h4>
      <div className="confirmation-row">
        <div>Nama Lengkap Perusahaan </div>
        <div>: {data.nama}</div>
      </div>
      <div className="confirmation-row">
        <div>Tempat Berdiri Perusahaan </div>
        <div>: {data.tempatBerdiri}</div>
      </div>
      <div className="confirmation-row">
        <div>Tanggal Berdiri Perusahaan </div>
        <div>: {data.tanggalBediri}</div>
      </div>
      <div className="confirmation-row">
        <div>Bidang Usaha </div>
        <div>: {data.bidang}</div>
      </div>
      <div className="confirmation-row">
        <div>Grup </div>
        <div>: {data.group}</div>
      </div>
    </>
  );
};
