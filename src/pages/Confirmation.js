import { DataPerusahaan } from "../components/confirmation/DataPerusahaan";
import { JenisIdentitasUtama } from "../components/confirmation/JenisIdentitasUtama";
import { Header } from "../components/confirmation/Header";
import { confirmationData } from "../constants";
import { InformasiLainnya } from "../components/confirmation/InformasiLainnya";

export const Confirmation = () => {
  const { header, dataPerusahaan, jenisIdentitasUtama, informasiLainnya } =
    confirmationData;
  return (
    <>
      <h3>Konfirmasi</h3>
      <Header data={header} />
      <DataPerusahaan data={dataPerusahaan} />
      <JenisIdentitasUtama dataJIU={jenisIdentitasUtama} />
      <InformasiLainnya data={informasiLainnya} />
      <button>Submit</button>
    </>
  );
};
