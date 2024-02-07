import { ICampus } from "./Campus";
import { ICareer } from "./Career";
import Model from "./Model";

export interface IStudent {
  id?: number;
  cedula: number | null;
  genre: "Masculino" | "Femenino" | null;
  info_id: number | null;
  career_id?: number | null;
  campus_id?: number | null;
  campus?: ICampus;
  careers?: ICareer;
}

export default class Student extends Model<IStudent> {
  student: IStudent | {} = {};

  constructor() {
    super("students");
  }
}
