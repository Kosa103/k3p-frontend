import { TOKEN } from '../../../utils/constants';

const authHeaderInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (request) => {
      const token = localStorage.getItem(TOKEN) || '';
      request.headers["Authorization"] = `Bearer ${token}`;
      return request;
    },
    (error) => {
      console.error(error);
    },
  );
};

export default authHeaderInterceptor;
