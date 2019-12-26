const { API_URL } = require('../../config/config');

export default async function fetchData(route) {
  console.log('FULL URL =', `${API_URL}/${route}`);
  const data = await fetch(`${API_URL}/${route}`)
    .then((res) => {
      if(res.status !== 200) {
        return res.json().then((re) => { throw new Error(re.error); });
      }
      return res.json();
    })
    .catch(err => console.log('ERROR ->', err));
  console.log('DATA in utils ->', data);
  return data;
}
