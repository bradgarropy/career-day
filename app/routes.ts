import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("demo", "routes/demo.tsx"),
  route("demo/backup", "routes/demo.backup.tsx"),
] satisfies RouteConfig;
