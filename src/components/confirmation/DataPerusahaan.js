export const DataPerusahaan = ({ data }) => {
  return (
    <>
      <h4>Data Perusahaan</h4>
      <div>
        <span>Nama Lengkap Perusahaan :</span>
        <span>{data.nama}</span>
      </div>
      <div>
        <span>Tempat Berdiri Perusahaan :</span>
        <span>{data.tempatBerdiri}</span>
      </div>
      <div>
        <span>Tanggal Berdiri Perusahaan :</span>
        <span>{data.tanggalBediri}</span>
      </div>
      <div>
        <span>Bidang Usaha :</span>
        <span>{data.bidang}</span>
      </div>
      <div>
        <span>Grup :</span>
        <span>{data.group}</span>
      </div>
    </>
  );
};
