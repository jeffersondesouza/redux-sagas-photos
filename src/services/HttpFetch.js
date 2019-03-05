const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const apiUrl = 'https://api.unsplash.com/';

const get = path => {
  return fetch(`${apiUrl}/${path}/?client_id=${key}&per_page=28`)
    .then(res => res.json())
    .then(photos => photos);
};

export default {
  get
};
