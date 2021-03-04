import { AxiosRequestConfig } from 'axios';

export type ApiFetch = (url: string, config: AxiosRequestConfig) => Promise<unknown>;