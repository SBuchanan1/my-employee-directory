import axios from "axios";
const BASEURL = "http://dummy.restapiexample.com/api/v1/employees";
const APIKEY = "&apikey=trilogy";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
