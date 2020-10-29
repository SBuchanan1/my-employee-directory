import axios from "axios";
const BASEURL = "";
const APIKEY = "&apikey=trilogy";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
