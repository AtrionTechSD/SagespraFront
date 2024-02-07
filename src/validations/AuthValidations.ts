import { FormRules } from "element-plus";
import { Ref, ref } from "vue";

const AuthValidations: Ref<FormRules> = ref({
  email: [
    {
      required: true,
      trigger: "change",
      message: "Por favor, ingrese un correo",
    },
    {
      type: "email",
      trigger: "change",
      validator(rule, value) {
        return String(value).includes("uapa.edu.do");
      },
      message: "Ingrese un correo válido",
    },
  ],
});

export default AuthValidations;
