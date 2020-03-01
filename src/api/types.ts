export interface Config {
    apiService: {
        auth: string;
        product: string;
    };
    withCredentials: boolean;
    basicToken: string;
}
