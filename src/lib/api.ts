import axios from 'axios';


const api = axios.create({
    baseURL:'https://blackpaygateway.vercel.app/api'
  });


// });

export default api;
