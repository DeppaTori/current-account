import { RadioField } from "./RadioField";
import { TextBoxField } from "./TextBoxField";

export const SusunanManajemenFields = () => {
  return (
    <>
      <h4>Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan</h4>
      <TextBoxField
        label="Direktur Utama"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
      <TextBoxField
        label="Komisaris Utama"
        // errMsg={errMsg.nomor}
        // onChange={onChange}
        maxLength={40}
      />
    </>
  );
};
