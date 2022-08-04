export const JenisIdentitasUtama = ({ dataJIU }) => {
  const Document = ({ name, data }) => {
    return (
      <>
        <div className="confirmation-row">
          <div>{name}</div>
          <div>: {data?.nomor}</div>
        </div>
        <div className="confirmation-row">
          <div>Tempat Dikeluarkan Identitas</div>
          <div>: {data?.tempat}</div>
        </div>
        <div className="confirmation-row">
          <div>Berlaku Hingga </div>
          <div>: {data?.berlaku}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <h4>Jenis Identitas Utama</h4>
      <Document name="Akta Pendirian" data={dataJIU.aktaPendirian} />
      <div className="confirmation-row">
        <div>Alamat Kantor </div>
        <div>: {dataJIU.alamatKantor}</div>
      </div>
      <div className="confirmation-row">
        <div>Provinsi </div>
        <div>: {dataJIU.provinsi}</div>
      </div>
      <div className="confirmation-row">
        <div>Kabupaten/Kota </div>
        <div>: {dataJIU.kabupatenkota}</div>
      </div>
      <div className="confirmation-row">
        <div>Area </div>
        <div>: {dataJIU.area}</div>
      </div>
      <div className="confirmation-row">
        <div>Alamat Pabrik </div>
        <div>: {dataJIU.alamatPabrik}</div>
      </div>
      <div className="confirmation-row">
        <div>Alamat Proyek </div>
        <div>: {dataJIU.alamatProyek}</div>
      </div>
      <div className="confirmation-row">
        <div>Alamat Kirim Surat </div>
        <div>: {dataJIU.alamatKirimSurat}</div>
      </div>
      <Document name="NPWP" data={dataJIU.npwp} />
      <div style={{ marginTop: "20px" }}>
        <b>Dokumen Lainnya :</b>
      </div>
      <Document name="Nomor NIB" data={dataJIU.nib} />
      <Document name="SIUP" data={dataJIU.siup} />
      <Document name="TDP" data={dataJIU.tdp} />
      <div style={{ marginTop: "20px" }}>
        <b>Lainnya :</b>
      </div>
      <Document name="Nomor" data={dataJIU.nomor} />
    </>
  );
};
