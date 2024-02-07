import { Ref, ref } from "vue";
import { FormInstance } from "element-plus";
import { infoStudentValidations } from "../../validations/ProfileValidations";
import useProvince from "../management/ProvinceService";
import studentService from "./StudentService";
import Student, { IStudent } from "../../data/models/Student";
import Info, { IInfo } from "../../data/models/Info";
import { authStore } from "../../stores/authStore";

export default function infoStudentService() {
  const { provinces, getProvinces } = useProvince();
  const { student, getStudent } = studentService();

  const infoModel = new Info();
  const formInfo: Ref<FormInstance | null> = ref(null);
  const info: Ref<IInfo> = ref({
    name: null,
    address: null,
    email: null,
    phone: null,
    municipe_id: null,
  });

  async function saveInfo() {
    try {
      return formInfo.value!.validate(async (valid) => {
        await getStudent();
        if (valid && student.value.id) {
          const { municipes, ...infoForSave } = info.value;
          const newInfo = await infoModel.updateOrCreate(
            "id",
            info.value.id || 0,
            infoForSave
          );
          const { campus, careers, ...cleanStudent } = student.value;
          student.value = cleanStudent;
          await updateStudent(newInfo);
          return false;
        }
        return false;
      });
    } catch (error: any) {
      return false;
    }
  }

  const updateStudent = async (info: IInfo) => {
    try {
      const studentModel = new Student();
      await studentModel.update(student.value.id!, {
        ...student.value,
        info_id: info.id!,
      });
    } catch (error: any) {
      return false;
    }
  };

  async function getInfo() {
    try {
      const student: IStudent | undefined = authStore().user.students;
      infoModel.include = ["municipes"];
      const data = await infoModel.findById(student?.info_id || 0);
      Boolean(data) && (info.value = data);
    } catch (error: any) {
      return false;
    }
  }

  return {
    info,
    provinces,
    getProvinces,
    saveInfo,
    getInfo,
    formInfo,
    infoStudentValidations,
  };
}
