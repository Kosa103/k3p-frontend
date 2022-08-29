import { TOKEN } from "../../../utils/constants";

const authErrorInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },(error) => {
      if (error?.response?.status === 401) {
        localStorage.removeItem(TOKEN);
        window.location.pathname = '/';
      }
    }
  );
};

export default authErrorInterceptor;
