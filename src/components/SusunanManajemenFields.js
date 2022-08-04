import { RadioField } from "./RadioField";
import { TextBoxField } from "./TextBoxField";

export const SusunanManajemenFields = ({ errMsg, onChange }) => {
  const prefixName = "SMJ_";
  return (
    <>
      <h4>Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan</h4>
      <TextBoxField
        label="Direktur Utama"
        errMsg={errMsg.direktur}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
      <TextBoxField
        label="Komisaris Utama"
        errMsg={errMsg.komisaris}
        onChange={onChange}
        maxLength={40}
        prefixName={prefixName}
      />
    </>
  );
};
