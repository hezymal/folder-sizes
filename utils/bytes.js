const KBYTE = 1024;
const MBYTE = KBYTE * 1024;
const GBYTE = MBYTE * 1024;
const TBYTE = GBYTE * 1024;

export const formatBytes = (bytes, fractionDigits = 2) => {
    if (bytes < KBYTE) {
        return `${bytes} B`;
    }

    if (bytes < MBYTE) {
        return `${(bytes / KBYTE).toFixed(fractionDigits)} Kb`;
    }

    if (bytes < GBYTE) {
        return `${(bytes / MBYTE).toFixed(fractionDigits)} Mb`;
    }

    if (bytes < TBYTE) {
        return `${(bytes / GBYTE).toFixed(fractionDigits)} Gb`;
    }

    return `${(bytes / TBYTE).toFixed(fractionDigits)} Tb`;
};
