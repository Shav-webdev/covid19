export const validateTemperature = v => {
    const isNumeric = v => /^-{0,1}\d*\.{0,1}\d+$/.test(v);
    return isNumeric(v) && v >= 30 && v <= 50;
};

export const validateName = v => {
    const re = new RegExp(/^([a-zA-Z]{2,20})$/);
    return re.test(v);
};
