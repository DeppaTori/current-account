export const generateName = (label) => label.replace(/ /g, "").toLowerCase();
export const isAlphaNumeric = (text) => text.toLowerCase().match(/^[0-9a-z]+$/);

export const validateEmptyAndAlphaNumeric = (state, label) => {
  let msg = "";
  if (state.length <= 0) {
    msg = `${label} Tidak Boleh Kosong`;
  } else if (!isAlphaNumeric(state)) {
    msg = `${label} harus alphanumeric`;
  } else {
    msg = "";
  }
  return msg;
};

export const validateEmpty = (state, label) => {
  let msg = "";
  if (state.length <= 0) {
    msg = `${label} Tidak Boleh Kosong`;
  } else {
    msg = "";
  }
  return msg;
};
