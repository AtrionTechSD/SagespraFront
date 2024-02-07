import { authStore } from "../../stores/authStore";

class AuthMiddleware {
  isAuth(): boolean {
    return Boolean(authStore().getToken) && authStore().getToken != undefined;
  }
}

export default new AuthMiddleware();
