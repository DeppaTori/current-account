import { DateField } from "./DateField";
import { TextBoxField } from "./TextBoxField";

export const JenisIdentitasUtamaFields = ({ errMsg, onChange }) => {
  return (
    <>
      <p>Jenis Identitas Utama</p>
      <TextBoxField
        label="Nomor Akta Pendirian Perusahaan"
        errMsg={errMsg.nomor}
        onChange={onChange}
      />
      <TextBoxField
        label="Tempat dikeluarkan Akta Pendirian"
        errMsg={errMsg.tempatKeluarAkta}
        onChange={onChange}
      />
      <DateField
        label="Tanggal berlaku akta pendirian"
        errMsg={errMsg.tglBerlakuAkta}
        onChange={onChange}
      />
      <TextBoxField
        label="Alamat kantor"
        errMsg={errMsg.alamatKantor}
        onChange={onChange}
      />
    </>
  );
};

JenisIdentitasUtamaFields.defaultProps = {
  errMsg: {
    nomor: "",
    tempatKeluarAkta: "",
  },
  onChange: () => {},
};
