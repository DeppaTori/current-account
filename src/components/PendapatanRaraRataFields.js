import { RadioField } from "./RadioField";

export const PendapatanRataRataFields = () => {
  return (
    <>
      <h4>Pendapatan Rata-Rata per bulan</h4>

      <p>Pendapatan Operasional</p>
      <RadioField label="Rp 1.000.000.000" />
      <RadioField label="Rp 2.000.000.000" />
      <RadioField label="Rp 3.000.000.000" />
      <p>Pendapatan Non Operasional</p>
      <RadioField label="Rp 11.000.000.000" />
      <RadioField label="Rp 22.000.000.000" />
      <RadioField label="Rp 33.000.000.000" />
      <p>Tujuan Berhubungan dengan Bank</p>
      <RadioField label="Hubungan A" />
      <RadioField label="Hubungan B" />
    </>
  );
};
