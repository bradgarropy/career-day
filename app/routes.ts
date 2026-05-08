import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("2024", "routes/2024.tsx"),
  route("2026", "routes/2026.tsx"),
  route("2026/demo", "routes/2026.demo.tsx"),
  route("2026/demo/backup", "routes/2026.demo.backup.tsx"),
] satisfies RouteConfig;
