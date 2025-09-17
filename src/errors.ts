export class MCPSportsError extends Error {
  public code: string;
  public details?: any;
  public statusCode?: number;

  constructor(
    code: string,
    message: string,
    details?: any,
    statusCode?: number
  ) {
    super(message);
    this.name = "MCPSportsError";
    this.code = code;
    this.details = details;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      details: this.details,
      statusCode: this.statusCode,
    };
  }
}