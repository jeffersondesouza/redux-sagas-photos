const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const apiUrl = 'https://api.unsplash.com/';

const get = async (path, page = 1) => {
  const res = await fetch(`${apiUrl}/${path}/?client_id=${key}&per_page=28&page=${page}`);
  const images = await res.json();

  if(res.status >= 400){
    throw new Error(images.errors)
  }

  return images;
  
};

export default {
  get
};
