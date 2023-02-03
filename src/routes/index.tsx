import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const logged = true;

  return logged ? <AppRoutes /> : <AuthRoutes />

};
