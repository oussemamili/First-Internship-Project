import axios from "axios";

const Movies_APIs = (pageNumber) => {
  const options = {
    method: "GET",
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: { page: pageNumber },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGJmMzAzZjgzMDA0NTMxN2M5N2Y3Mzg3MTg3OGE2YyIsInN1YiI6IjY0YmU0ZDk5ODVjMGEyMDEyNTUwNTQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytW_yXLVSvHwNoFMjGRN5hb6IUPua9tWqGv4HPJ-Q2c",
    },
  };

  return axios
    .request(options)
    .then((response) => {
      console.log("🚀 ~ file: Movies APIs.js:18 ~ .then ~ response:", response);
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default Movies_APIs;
