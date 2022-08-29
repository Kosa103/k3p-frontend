import { useContext, useEffect } from 'react';
import { AppContext } from './context';
import { TOKEN } from '../utils/constants';

const StorageHandler = () => {
  const [{ token = '', error = {}, isSet = false }, dispatch] = useContext(AppContext);

  useEffect(() => {
    const localToken = localStorage.getItem(TOKEN) || '';
    if (error && error.code && (error.code === 401 || error.code === 403)) {
      localStorage.removeItem(TOKEN);
      dispatch({ type: 'nullToken', token: '' });
    }
    if (localToken && !token) {
      dispatch({
        type: 'setToken',
        token: localToken,
      });
    }
  }, [token, error, isSet, dispatch]);

  return null;
}

export default StorageHandler;
