import axios from "axios";
import { toast } from 'react-toastify';

axios.create({
    baseURL: "http://192.168.1.65:3000/api/",
});

const postApi = (url, payload) => {
    axios.post(url, payload ).then((res) => {
        console.log(res);
        
      })
      .catch(err => {
          toast.error(err.response.data.message)
      })
}
export default postApi;