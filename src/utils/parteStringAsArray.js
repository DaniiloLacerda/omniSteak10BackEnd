module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(techname => techname.trim());
};