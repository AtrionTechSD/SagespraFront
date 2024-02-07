import { FormRules } from "element-plus";
import { Ref, ref } from "vue";

const studentValidations: Ref<FormRules> = ref({
  cedula: [
    {
      required: true,
      message: "Ingrese la cédula o pasaporte",
      trigger: "change",
    },
    {
      min: 11,
      max: 18,
      message: "Revise el formato y extensión",
    },
  ],
  genre: [
    {
      required: true,
      message: "Indique su sexo",
      trigger: "change",
    },
    {
      enum: ["Masculino", "Femenino"],
      message: "Ingrese un valor válido",
      trigger: "change",
    },
  ],
});

const infoStudentValidations: Ref<FormRules> = ref({
  name: [
    {
      required: true,
      message: "Debe ingresar un nombre",
      trigger: "change",
    },
  ],
  phone: [
    {
      required: true,
      message: "Debe ingresar un teléfono",
      trigger: "change",
    },
  ],
  email: [
    {
      required: true,
      type: "email",
      message: "Debe ingresar un correo válido",
      trigger: "change",
    },
  ],
  address: [
    {
      required: true,
      type: "string",
      message: "Debe ingresar una dirección",
      trigger: "change",
    },
    {
      min: 5,
      max: 150,
      message: "Revise la longitud de la dirección",
    },
  ],
  municipe_id: [
    {
      required: true,
      type: "number",
      message: "Seleccione un municipio",
      trigger: "change",
    },
  ],
});
export { studentValidations, infoStudentValidations };
