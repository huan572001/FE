export const fomatData = (dataObject) => {
  let formData = new FormData();
  for (let key in dataObject) {
    if (dataObject.hasOwnProperty(key)) {
      formData.append(key, dataObject[key]);
    }
  }
  return formData;
};
