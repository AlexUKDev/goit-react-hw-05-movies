const imgUrlConfig = {
  baseUrl: 'https://image.tmdb.org/t/p/',
  fileSize: 'w500/',
  fileSizeOriginal: 'original',
};

export const getFullImgUrl = filePath => {
  const { baseUrl, fileSize } = imgUrlConfig;

  return `${baseUrl}${fileSize}${filePath}`;
};
