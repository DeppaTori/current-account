import { DateField } from "./DateField";
import { TextBoxField } from "./TextBoxField";
import { RadioField } from "./RadioField";

export const JenisIdentitasUtamaFields = ({ errMsg, onChange, values }) => {
  return (
    <>
      <p>
        <b>Jenis Identitas Utama</b>
      </p>
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
      {/* <RadioField label="Alamat Kirim Surat" /> */}
      <TextBoxField
        label="NPWP"
        errMsg={errMsg.nomorNPWP}
        onChange={onChange}
        maxLength={15}
      />
      <TextBoxField
        label="Tempat dikeluarkan NPWP"
        errMsg={errMsg.tempatNPWP}
        onChange={onChange}
        maxLength={40}
      />
      <DateField
        label="Tanggal berlaku NPWP"
        errMsg={errMsg.tanggalNPWP}
        onChange={onChange}
      />
      <br />
      <div>
        <p>Dokumen Lainnya</p>
        <input type="checkbox" id="doklainnya" name="NIB" onChange={onChange} />
        <label for="doklainnya">NIB</label>

        <input
          type="checkbox"
          id="doklainnya2"
          name="SIUP"
          onChange={onChange}
        />
        <label for="doklainnya2">SIUP</label>

        <input
          type="checkbox"
          id="doklainnya3"
          name="TDP"
          onChange={onChange}
        />
        <label for="doklainnya3">TDP</label>
        <br />
        <br />
        <br />
      </div>
      <TextBoxField
        label="Nomor NIB"
        errMsg={errMsg.nomorNIB}
        onChange={onChange}
        maxLength={13}
        required={values.dokumenLainnya.NIB ? true : false}
      />
      <TextBoxField
        label="Tempat Dikeluarkan NIB"
        errMsg={errMsg.tempatNIB}
        onChange={onChange}
        maxLength={40}
        required={values.dokumenLainnya.NIB ? true : false}
      />
      <DateField
        label="Tanggal berlaku NIB"
        errMsg={errMsg.tanggalNIB}
        onChange={onChange}
        required={values.dokumenLainnya.NIB ? true : false}
      />
      <TextBoxField
        label="Nomor SIUP"
        errMsg={errMsg.nomorSIUP}
        onChange={onChange}
        maxLength={13}
        required={values.dokumenLainnya.SIUP ? true : false}
      />
      <TextBoxField
        label="Tempat Dikeluarkan SIUP"
        errMsg={errMsg.tempatSIUP}
        onChange={onChange}
        maxLength={40}
        required={
          values.dokumenLainnya.SIUP && values.dokumenLainnya.TDP ? true : false
        }
      />
      <DateField
        label="Tanggal berlaku SIUP"
        errMsg={errMsg.tanggalSIUP}
        onChange={onChange}
        required={
          values.dokumenLainnya.SIUP && values.dokumenLainnya.TDP ? true : false
        }
      />
      <TextBoxField
        label="TDP"
        errMsg={errMsg.nomorTDP}
        onChange={onChange}
        maxLength={13}
        required={values.dokumenLainnya.TDP ? true : false}
      />
      <TextBoxField
        label="Tempat Dikeluarkan TDP"
        errMsg={errMsg.tempatTDP}
        onChange={onChange}
        maxLength={40}
        required={
          values.dokumenLainnya.SIUP && values.dokumenLainnya.TDP ? true : false
        }
      />
      <DateField
        label="Tanggal berlaku TDP"
        errMsg={errMsg.tanggalTDP}
        onChange={onChange}
        required={
          values.dokumenLainnya.SIUP && values.dokumenLainnya.TDP ? true : false
        }
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
