import studentService from "./profile/StudentService";
import infoStudentService from "./profile/InfoStudentService";

export default function useProfile() {
  return { ...studentService(), ...infoStudentService() };
}
