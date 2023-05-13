import axios from 'axios'
export async function fetchAuth(payload ) {
    return await axios.post(
      `https://reqbin.com/echo/post/json`,//username&password fetch
      payload      
    );
  }
export async function fetchAutoLoginAuth(payload ) {
    return await axios.post(
      `https://reqbin.com/echo/post/json`,//access token to fetch
      {},
      payload      
    );
  }  
  