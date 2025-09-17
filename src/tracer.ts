import tracer from "dd-trace";

// Only initialize tracer if DD_AGENT_HOST is configured
const DD_AGENT_HOST = process.env.DD_AGENT_HOST;
const ENABLE_TRACING = process.env.ENABLE_TRACING === "true";

if (DD_AGENT_HOST && ENABLE_TRACING) {
  tracer.init({
    service: "balldontlie-mcp-server",
    env: process.env.NODE_ENV || "development",
    hostname: DD_AGENT_HOST,
    profiling: process.env.DD_PROFILING_ENABLED === "true",
    logInjection: true,
    version: process.env.SERVICE_VERSION || "1.0.0",
  });

  tracer.use("express", {
    // hook will be executed right before the request span is finished
    hooks: {
      request: (span, req, res) => {
        // Don't log sensitive authorization headers
        span?.setTag("has_auth", !!req?.headers.authorization);
        span?.setTag("client", req?.headers["x-bdl-client"]);
        span?.setTag("mcp_method", (req as any)?.body?.method);
        span?.setTag("mcp_tool", (req as any)?.body?.params?.name);
        if ((res as any)?.error) {
          span?.setTag("error", (res as any).error);
        }
      },
    },
  });
}

export default tracer;
