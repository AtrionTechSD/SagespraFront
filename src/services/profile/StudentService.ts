/**
 * The `studentService` function returns an object with methods and data related to managing student
 * information, including saving a student, retrieving a student, and form validations.
 * @returns The function `studentService` returns an object with the following properties:
 */
import { Ref, ref } from "vue";
import Student, { IStudent } from "../../data/models/Student";
import { authStore } from "../../stores/authStore";
import { FormInstance } from "element-plus";
import { studentValidations } from "../../validations/ProfileValidations";
import useCampus from "../management/CampusService";
import useCareer from "../management/CareerService";

export default function studentService() {
  const { campus, getCampus } = useCampus();
  const { careers, getCareers } = useCareer();

  const studentModel = new Student();
  const formStudent: Ref<FormInstance | null> = ref(null);
  const student: Ref<IStudent> = ref({
    id: authStore().user.id,
    cedula: null,
    genre: null,
    info_id: null,
    career_id: null,
    campus_id: null,
  });

  async function saveStudent(): Promise<boolean> {
    try {
      await formStudent.value!.validate(async (valid) => {
        if (valid) {
          const { campus, careers, ...studentForSave } = student.value; //Remove relations before save
          const newStudent = await studentModel.updateOrCreate(
            "id",
            Number(student.value.id),
            studentForSave
          );
          authStore().setStudent(newStudent);
          return true;
        }
      });
      return false;
    } catch (error) {
      return false;
    }
  }

  async function updateAcademic(): Promise<boolean> {
    try {
      if (student.value.id) {
        const { campus, careers, ...studentForUpdate } = student.value; //Remove relations before update
        const newStudent = await studentModel.update(
          student.value.id!,
          studentForUpdate
        );
        authStore().setStudent(newStudent);
        return true;
      }
      return false;
    } catch (error: any) {
      return false;
    }
  }

  const getStudent = async () => {
    try {
      const user_id = authStore().user.id;
      studentModel.include = ["campus", "careers"];
      const data = await studentModel.find({ id: user_id });
      Boolean(data) && (student.value = data);
    } catch (error: any) {
      return false;
    }
  };

  const loadAcademics = async () => {
    await getCampus();
    await getCareers();
  };
  return {
    student,
    saveStudent,
    updateAcademic,
    getStudent,
    studentValidations,
    formStudent,
    campus,
    careers,
    loadAcademics,
  };
}
