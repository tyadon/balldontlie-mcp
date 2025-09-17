// Core type definitions for the MCP server

export interface Config {
  BACKEND_API_URL: string;
  API_TIMEOUT: number;
  LOG_LEVEL: string;
  NODE_ENV: string;
  ENABLE_DEBUG: boolean;
}

export interface APIRequest {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, any>;
  headers?: Record<string, string>;
  body?: any;
}

export interface APIResponse {
  data: any;
  meta?: {
    next_cursor?: number;
    per_page?: number;
  };
  error?: string;
}

export interface MCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
    additionalProperties?: boolean;
  };
  handler: (params: any, headers?: Record<string, string>) => Promise<any>;
}

export interface MCPError {
  code: string;
  message: string;
  details?: any;
}
