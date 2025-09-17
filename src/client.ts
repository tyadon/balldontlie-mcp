import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { Config, APIResponse } from "./types.js";
import { buildQueryString } from "./utils.js";

export class APIClient {
  private client: AxiosInstance;
  private config: Config;

  constructor(config: Config) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.BACKEND_API_URL,
      timeout: config.API_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "BALLDONTLIE-MCP-Server/1.0.0",
      },
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );
  }

  async makeRequest(
    endpoint: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    try {
      const url = this.buildURL(endpoint, params);

      const requestHeaders = {
        ...headers,
      };

      if (this.config.ENABLE_DEBUG) {
        console.error(`Making request to: ${url}`);
        console.error(`Headers:`, requestHeaders);
      }

      const response: AxiosResponse = await this.client.get(url, {
        headers: requestHeaders,
      });

      return this.handleResponse(response);
    } catch (error) {
      throw this.transformError(error);
    }
  }

  private buildURL(endpoint: string, params?: Record<string, any>): string {
    let url = endpoint;

    if (params && Object.keys(params).length > 0) {
      const queryString = buildQueryString(params);
      url += `?${queryString}`;
    }

    return url;
  }

  private handleResponse(response: AxiosResponse): APIResponse {
    const data = response.data;

    // Handle different response formats
    if (data && typeof data === "object") {
      return {
        data: data.data || data,
        meta: data.meta,
      };
    }

    return { data };
  }

  private handleError(error: AxiosError): never {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data as any;

      // Extract error message from various response formats
      let message = "API request failed";
      if (typeof data === 'string') {
        message = data; // For plain text responses like "Unauthorized"
      } else if (data?.error) {
        message = data.error;
      } else if (data?.message) {
        message = data.message;
      }

      throw new Error(`API Error (${status}): ${message}`);
    } else if (error.request) {
      throw new Error("Unable to connect to the sports API");
    } else {
      throw new Error(error.message || "Unknown error occurred");
    }
  }

  private transformError(error: any): Error {
    if (error instanceof Error) {
      return error;
    }
    return new Error(String(error));
  }

  // Health check method
  async checkHealth(): Promise<boolean> {
    try {
      // Try to make a simple request to verify connectivity
      await this.makeRequest("/v1/teams", { per_page: 1 });
      return true;
    } catch (error) {
      console.error("Health check failed:", error);
      return false;
    }
  }
}
