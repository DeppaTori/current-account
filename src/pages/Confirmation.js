import { Header } from "../components/confirmation/Header";
import { confirmationData } from "../constants";

export const Confirmation = () => {
  const { header } = confirmationData;
  return (
    <>
      <h3>Konfirmasi</h3>
      <Header data={header} />
      <button>Submit</button>
    </>
  );
};
