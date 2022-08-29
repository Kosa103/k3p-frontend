import axios from 'axios'
import { NO_SERVER, TOKEN } from './constants';

const handleErrorSet = (error = {}, setError = () => { }) => {
  const text = (error && error.response && error.response.statusText) || NO_SERVER;
  const code = (error && error.response && error.response.status) || 400;
  if(code === 401) {
    localStorage.removeItem(TOKEN);
  }
  return setError({ text, code });
}

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * 
 */
const getToken = async (username, password, setErrorStatus) => {
  try {
    const response = await axios.post(process.env.REACT_APP_AUTH_URL, {
      identifier: username,
      password,
    });
    const { data: { jwt = '', message = [] }, status = 0 } = response || {};
    if (jwt && status === 200) {
      return jwt;
    } else {
      const [messages = {}] = message;
      const { messages: [errorObject] } = messages;
      const errorMessage = (errorObject && errorObject.message) || '';
      setErrorStatus({ text: errorMessage, code: 401 });
    }
  } catch (error) {
    handleErrorSet(error, setErrorStatus);
  }
}

/**
 *
 * @param {String} path the endpoint you want to fetch from
 * @param {String} token the auth token
 * 
 */
const fetchEndpoint = async (path, token, setErrorStatus) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_DATA_URL}/${path}?_limit=-1`, {
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      }
    });
    const { data = {}, status = 0 } = response || {};
    if (data && status === 200) {
      return response.data;
    } else {
      const [messages = {}] = (data && data.message) || [];
      const { messages: [errorObject] } = messages;
      const errorMessage = (errorObject && errorObject.message) || '';
      setErrorStatus({ text: errorMessage, code: 400 });
    }
  }
  catch (error) {
    handleErrorSet(error, setErrorStatus);
  }
}

export { getToken, fetchEndpoint, handleErrorSet };
