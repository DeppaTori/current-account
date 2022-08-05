export const generateName = (label) => label.replace(/ /g, "").toLowerCase();
export const isAlphaNumeric = (text) => text.toLowerCase().match(/^[0-9a-z]+$/);
export const isNumeric = (text) => text.toLowerCase().match(/^[0-9]+$/);
export const isAlphabet = (text) => text.toLowerCase().match(/^[a-z]+$/);
export const isEmail = (text) =>
  text
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

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

export const validateAlphabet = (state, label) => {
  let msg = "";
  if (state.length > 0 && !isAlphabet(state)) {
    msg = `${label} harus alphabet`;
  } else {
    msg = "";
  }
  return msg;
};

export const validateNumeric = (state, label) => {
  let msg = "";
  if (state.length > 0 && !isNumeric(state)) {
    msg = `${label} harus numeric`;
  } else {
    msg = "";
  }
  return msg;
};

export const validateAlphaNumeric = (state, label) => {
  let msg = "";
  if (state.length > 0 && !isAlphaNumeric(state)) {
    msg = `${label} harus alphanumeric`;
  } else {
    msg = "";
  }
  return msg;
};

export const validateEmptyAndNumeric = (state, label) => {
  let msg = "";
  if (state.length <= 0) {
    msg = `${label} Tidak Boleh Kosong`;
  } else if (!isNumeric(state)) {
    msg = `${label} harus numerik`;
  } else {
    msg = "";
  }
  return msg;
};

export const validateEmptyAndEmail = (state, label) => {
  let msg = "";
  if (state.length <= 0) {
    msg = `${label} Tidak Boleh Kosong`;
  } else if (!isEmail(state)) {
    msg = `${label} bukan format email`;
  } else {
    msg = "";
  }
  return msg;
};

export const validateEmptyAndAlphabet = (state, label) => {
  let msg = "";
  if (state.length <= 0) {
    msg = `${label} Tidak Boleh Kosong`;
  } else if (!isAlphabet(state)) {
    msg = `${label} harus alphabet`;
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

export const generateLabelValues = (labels, values) => {
  let labelValues = [];
  labels.forEach((label) => {
    labelValues = [
      ...labelValues,
      {
        label: label,
        value: values[label.replace(/ /g, "").replace(/\./g, "")],
      },
    ];
  });
  return labelValues;
};
