const imageS3Url = "";
export const staticImage = (url) => {
  console.log(url, "url");
  return `/images/${url}`;
};

export const dynamicImage = (url) => {
  return `${imageS3Url}/${url}`;
};
