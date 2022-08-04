import { DataPerusahaan } from "../components/confirmation/DataPerusahaan";
import { Header } from "../components/confirmation/Header";
import { confirmationData } from "../constants";

export const Confirmation = () => {
  const { header, dataPerusahaan } = confirmationData;
  return (
    <>
      <h3>Konfirmasi</h3>
      <Header data={header} />
      <DataPerusahaan data={dataPerusahaan} />
      <button>Submit</button>
    </>
  );
};
