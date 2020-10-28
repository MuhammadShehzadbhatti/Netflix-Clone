import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
  // base url is required to make the requests this is the base url and we can make other pages' requests just attaching page names after the url
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
