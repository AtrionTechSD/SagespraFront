import { Ref, ref, computed } from "vue";
import User, { IUser } from "../data/models/User";
import AuthValidations from "../validations/AuthValidations";
import { ElMessage, FormInstance } from "element-plus";
import { authStore } from "../stores/authStore";

export function useAuth() {
  const userModel = new User();
  const formAuth: Ref<FormInstance | null> = ref(null);
  const rules = computed(() => AuthValidations.value);
  const user: Ref<IUser> = ref({
    email: "",
    password: "",
    role_id: 0,
  });

  const login = async () => {
    await formAuth.value!.validate(async (valid: any) => {
      if (valid) {
        try {
          const role_id = 4;
          const auth = await userModel.auth(user.value);
          const newUser = await findOrSaveUser({
            email: auth.user.email,
            role_id: role_id,
            id: auth.user.id,
          });
          authStore().setUser(newUser);
          authStore().setToken(auth.token);
          location.replace("/");
        } catch (error) {
          ElMessage.error("Credenciales inválidas");
        }
      }
    });
  };

  const findOrSaveUser = async (user: IUser): Promise<IUser> => {
    try {
      userModel.include = ["students"];
      let existing = await userModel.findById(Number(user.id));
      console.log(existing);
      if (existing) return existing;
      await userModel.save(user);
      existing = await userModel.find({ id: user.id });
      return existing;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const logout = () => {
    authStore().setUser(null);
    authStore().setToken(null);
    location.replace("/");
  };
  return { user, login, rules, formAuth, logout };
}
