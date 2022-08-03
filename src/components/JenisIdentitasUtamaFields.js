import { DateField } from "./DateField";
import { TextBoxField } from "./TextBoxField";
import { RadioField } from "./RadioField";

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
      <RadioField label="Alamat Kirim Surat" />
      <TextBoxField
        label="NPWP"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={15}
      />
      <TextBoxField
        label="Tempat dikeluarkan NPWP"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={40}
      />
      <DateField
        label="Tanggal berlaku NPWP"
        // errMsg={errMsg.tglBerlakuAkta}
        onChange={onChange}
      />
      <br />
      <div>
        <input type="checkbox" id="doklainnya" name="doklainnya" value="NIB" />
        <label for="doklainnya">NIB</label>
        <br />
        <input
          type="checkbox"
          id="doklainnya2"
          name="doklainnya2"
          value="SIUP"
        />
        <label for="doklainnya2">SIUP</label>
        <br />
        <input
          type="checkbox"
          id="doklainnya3"
          name="doklainnya3"
          value="TDP"
        />
        <label for="doklainnya3">TDP</label>
        <br />
      </div>
      <TextBoxField
        label="Nomor NIB"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={13}
      />
      <TextBoxField
        label="Tempat Dikeluarkan NIB"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={40}
      />
      <DateField
        label="Tanggal berlaku NIB"
        // errMsg={errMsg.tglBerlakuAkta}
        onChange={onChange}
      />
      <TextBoxField
        label="Nomor SIUP"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={13}
      />
      <TextBoxField
        label="Tempat Dikeluarkan SIUP"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={40}
      />
      <DateField
        label="Tanggal berlaku SIUP"
        // errMsg={errMsg.tglBerlakuAkta}
        onChange={onChange}
      />
      <TextBoxField
        label="TDP"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={13}
      />
      <TextBoxField
        label="Tempat Dikeluarkan TDP"
        // errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={40}
      />
      <DateField
        label="Tanggal berlaku TDP"
        // errMsg={errMsg.tglBerlakuAkta}
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
