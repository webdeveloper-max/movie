const API_KEY = "d01620e985ed528ef6c325281c66cd9f";

const requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  
};

export default requests;
