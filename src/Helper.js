export const generateName = (label) => label.replace(/ /g, "").toLowerCase();
export const isAlphaNumeric = (text) => text.toLowerCase().match(/^[0-9a-z]+$/);
export const isNumeric = (text) => text.toLowerCase().match(/^[0-9]+$/);
export const isAlphabet = (text) => text.toLowerCase().match(/^[a-z]+$/);

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
