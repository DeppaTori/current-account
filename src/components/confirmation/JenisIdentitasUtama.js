export const JenisIdentitasUtama = ({ dataJIU }) => {
  const Document = ({ name, data }) => {
    return (
      <>
        <div>
          <span>{name} :</span>
          <span>{data?.nomor}</span>
        </div>
        <div>
          <span>Tempat Dikeluarkan Identitas :</span>
          <span>{data?.tempat}</span>
        </div>
        <div>
          <span>Berlaku Hingga :</span>
          <span>{data?.berlaku}</span>
        </div>
      </>
    );
  };

  return (
    <>
      <h4>Jenis Identitas Utama</h4>
      <Document name="Akta Pendirian" data={dataJIU.aktaPendirian} />
      <div>
        <span>Alamat Kantor :</span>
        <span>{dataJIU.alamatKantor}</span>
      </div>
      <div>
        <span>Provinsi :</span>
        <span>{dataJIU.provinsi}</span>
      </div>
      <div>
        <span>Kabupaten/Kota :</span>
        <span>{dataJIU.kabupatenkota}</span>
      </div>
      <div>
        <span>Area :</span>
        <span>{dataJIU.area}</span>
      </div>
      <div>
        <span>Alamat Pabrik :</span>
        <span>{dataJIU.alamatPabrik}</span>
      </div>
      <div>
        <span>Alamat Proyek :</span>
        <span>{dataJIU.alamatProyek}</span>
      </div>
      <div>
        <span>Alamat Kirim Surat :</span>
        <span>{dataJIU.alamatKirimSurat}</span>
      </div>
      <Document name="NPWP" data={dataJIU.npwp} />
      <div>
        <span>Dokumen Lainnya :</span>
      </div>
      <Document name="Nomor NIB" data={dataJIU.nib} />
      <Document name="SIUP" data={dataJIU.siup} />
      <Document name="TDP" data={dataJIU.tdp} />
      <div>
        <span>Lainnya :</span>
      </div>
      <Document name="Nomor" data={dataJIU.nomor} />
    </>
  );
};
