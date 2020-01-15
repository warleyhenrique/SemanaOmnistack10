module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(srt => srt.trim());
}