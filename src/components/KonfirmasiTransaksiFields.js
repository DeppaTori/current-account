import { TextBoxField } from "./TextBoxField";

export const KonfirmasiTransaksiFields = ({ onChange, errMsg }) => {
  const prefixName = "KTF_";
  return (
    <>
      <h4>Konfirmasi Transaksi</h4>
      <TextBoxField
        label="Nama Pejabat yang dihubungi"
        errMsg={errMsg.nama}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
      <TextBoxField
        label="No. Telepon"
        errMsg={errMsg.nomor}
        onChange={onChange}
        maxLength={20}
        prefixName={prefixName}
      />
      <TextBoxField
        label="Jabatan"
        errMsg={errMsg.jabatan}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
      <TextBoxField
        label="No. KTP"
        errMsg={errMsg.nomorKTP}
        onChange={onChange}
        maxLength={20}
        prefixName={prefixName}
      />
    </>
  );
};
