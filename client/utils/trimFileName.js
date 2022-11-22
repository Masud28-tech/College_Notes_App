export const TrimFileName = (fileName) => {
    if(fileName.length <= 12) return fileName;

    fileName = fileName.substr(0, 12) + "..." + fileName.substr(fileName.length - 7);

    return fileName;
}