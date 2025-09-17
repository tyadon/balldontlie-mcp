import { Config } from "./types.js";

export class ConfigManager {
  static load(): Config {
    const config = {
      BACKEND_API_URL:
        process.env.BACKEND_API_URL || "https://api.balldontlie.io",
      API_TIMEOUT: parseInt(process.env.API_TIMEOUT || "30000"),
      LOG_LEVEL: process.env.LOG_LEVEL || "info",
      NODE_ENV: process.env.NODE_ENV || "production",
      ENABLE_DEBUG: process.env.ENABLE_DEBUG === "true",
    };

    // Validate API URL
    try {
      new URL(config.BACKEND_API_URL);
    } catch (error) {
      throw new Error(`Invalid BACKEND_API_URL: ${config.BACKEND_API_URL}`);
    }

    return config;
  }
}

export function buildQueryString(params: Record<string, any>): string {
  const parts: string[] = [];

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined && item !== null) {
            parts.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(String(item))}`);
          }
        });
      } else if (value instanceof Date) {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.toISOString().split("T")[0])}`);
      } else {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
      }
    }
  }

  return parts.join('&');
}