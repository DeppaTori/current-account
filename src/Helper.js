export const generateName = (label) => label.replace(/ /g, "").toLowerCase();
export const isAlphaNumeric = (text) => text.toLowerCase().match(/^[0-9a-z]+$/);
