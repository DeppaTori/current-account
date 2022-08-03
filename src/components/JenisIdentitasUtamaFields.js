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
        maxLength={40}
      />
      <TextBoxField
        label="Tempat dikeluarkan Akta Pendirian"
        errMsg={errMsg.tempatKeluarAkta}
        onChange={onChange}
        maxLength={40}
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
        maxLength={100}
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
