import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("demo/magic-8-ball", "routes/demo.magic-8-ball.tsx"),
  route("demo/magic-8-ball/backup", "routes/demo.magic-8-ball.backup.tsx"),
] satisfies RouteConfig;
