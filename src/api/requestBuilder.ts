import axios, {
    AxiosError,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import { auth, withCredentials, basicToken } from './config';
import { RequestOptions } from '.';

export type HTTPMethod =
    'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'patch';

export interface JsonBody {
    [key: string]: any;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

const getAPI = () => ({
    auth: `${auth()}`,
});

const buildRequest = (request: Request, configData: RequestOptions) => {
    const { body, method, url } = request;
    const { apiService, authorization } = configData;
    const apis = getAPI();

    const headers = authorization ?
        { 'content-type': 'multipart/form-data', Authorization: `Basic ${basicToken()}` } :
        body instanceof FormData ? { 'content-type': 'multipart/form-data' } : { 'content-type': 'application/json' };

    const serviceUrl = apis[apiService];

    const requestConfig: AxiosRequestConfig = {
        baseURL: serviceUrl,
        data: body,
        headers,
        method,
        url,
        withCredentials: withCredentials(),
    };

    return requestConfig;
};

export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    const errors = (response.data && (response.data.errors || [response.data.error])) || [];
    return {
        code: response.status,
        message: errors,
    };
};

export const makeRequest = async (request: Request, configData: RequestOptions) => {
    const requestConfig = buildRequest(request, configData);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then((response: AxiosResponse) => {
                if (configData.withHeaders) {
                    resolve(response);
                } else {
                    resolve(response.data);
                }
            })
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    });
};
