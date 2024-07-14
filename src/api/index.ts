import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
}

const api: AxiosInstance = axios.create();

// get from .env
api.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
api.defaults.timeout = 2000;

// config interceptors

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('accessToken');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

async function request<T>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await api.request<T>({
      method,
      url,
      data,
      ...config,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error: any) {
    // Specify the type of error
    throw error.response?.data || error.message;
  }
}

// Wrapper functions for common HTTP methods
export async function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  return request<T>('GET', url, undefined, config);
}

export async function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  return request<T>('POST', url, data, config);
}

export async function put<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  return request<T>('PUT', url, data, config);
}

export async function del<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  return request<T>('DELETE', url, undefined, config);
}

export default api;
