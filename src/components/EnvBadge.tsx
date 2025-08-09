// src/components/EnvBadge.tsx
"use client";

const env =
  (typeof window !== "undefined" && window?.__NEXT_DATA__?.buildId?.includes("development"))
    ? "development"
    : process.env.NODE_ENV ?? "production";

export function EnvBadge() {
  // Renders a small fixed badge in the corner to show env
  const label = env === "development" ? "DEV" : env === "test" ? "TEST" : "PROD";
  const bg =
    env === "development" ? "#0ea5e9" : env === "test" ? "#f59e0b" : "#22c55e";

  return (
    <div
      style={{
        position: "fixed",
        right: 12,
        bottom: 12,
        padding: "6px 10px",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 600,
        background: bg,
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 50,
        letterSpacing: 0.5,
      }}
      aria-label={`Environment: ${label}`}
    >
      {label}
    </div>
  );
}
