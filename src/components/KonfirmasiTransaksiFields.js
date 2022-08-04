import { TextBoxField } from "./TextBoxField";

export const KonfirmasiTransaksiFields = () => {
  return (
    <>
      <h4>Konfirmasi Transaksi</h4>
      <TextBoxField
        label="Nama Pejabat yang dihubungi"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
      <TextBoxField
        label="No. Telepon"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={20}
      />
      <TextBoxField
        label="Jabatan"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
      <TextBoxField
        label="No. KTP"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={20}
      />
    </>
  );
};
