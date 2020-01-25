/** @format */

const fetchData = language => {
  const API = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;

  return fetch(API)
    .then(data => data.json())
    .then(repos => repos.items)
    .catch(error => {
      console.log(error);
      return null;
    });
};

export default fetchData;
