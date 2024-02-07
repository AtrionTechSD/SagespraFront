import Cookie from "js-cookie";
import { defineStore } from "pinia";
import { IUser } from "../data/models/User";
import { IStudent } from "../data/models/Student";

export const authStore = defineStore("authStore", {
  state: () => {
    return {
      user: (Cookie.get("sagespraAuth") &&
      Cookie.get("sagespraAuth") != undefined
        ? JSON.parse(Cookie.get("sagespraAuth")!)
        : {}) as IUser,

      token: Cookie.get("sagespraToken") || null,
    };
  },

  getters: {
    getUser(state) {
      return state.user;
    },

    getToken(state) {
      return state.token;
    },
  },
  actions: {
    setUser: function (user: IUser | null) {
      if (user) {
        const data = { ...user, real_role_id: user.role_id };
        Cookie.set("sagespraAuth", JSON.stringify(data));
        this.user = data;
      } else {
        Cookie.remove("sagespraAuth");
      }
    },

    setToken: function (token: string | null) {
      if (token) {
        Cookie.set("sagespraToken", token);
        this.token = token;
      } else {
        Cookie.remove("sagespraToken");
      }
    },

    setFakeRole: function (role_id: number) {
      if (role_id) {
        const newUser: any = { ...this.user, role_id };
        this.user = newUser;
        Cookie.set("sagespraAuth", JSON.stringify(newUser));
      }
    },
    setStudent: function (student: IStudent) {
      const newUser: any = { ...this.user, students: student };
      this.user = newUser;
      Cookie.set("sagespraAuth", JSON.stringify(newUser));
    },
  },
});
