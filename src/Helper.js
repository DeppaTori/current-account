export const generateName = (label) => label.replace(/ /g, "").toLowerCase();
export const isAlphaNumeric = (text) => text.toLowerCase().match(/^[0-9a-z]+$/);

export const generateFieldMdtryAlNumJenisIdentitasUtama = (
  label,
  setState,
  parentState,
  key,
  validationMessages
) => {
  return {
    name: generateName(label),
    setState: (val) =>
      setState({
        ...parentState,
        nomor: val,
      }),
    validations: [
      {
        validate: function () {
          if (parentState[key].length <= 0) {
            return {
              jenisIdentitasUtama: {
                ...validationMessages.jenisIdentitasUtama,
                nomor: `${label} Tidak Boleh Kosong`,
              },
            };
          } else if (!isAlphaNumeric(parentState[key])) {
            return {
              jenisIdentitasUtama: {
                ...validationMessages.jenisIdentitasUtama,
                nomor: `${label} harus alphanumeric`,
              },
            };
          }
          return {
            jenisIdentitasUtama: {
              ...validationMessages.jenisIdentitasUtama,
              nomor: "",
            },
          };
        },
      },
    ],
  };
};
