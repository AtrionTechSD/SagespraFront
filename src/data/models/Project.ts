import { ICompany } from "./Company";
import Model from "./Model";

export interface IProject {
  id?: number;
  goal: string | null;
  department: string | null;
  type: "SSU" | "Pasantía";
  companie_id?: number;
  companies: ICompany;
}

export default class Project extends Model<IProject> {
  constructor() {
    super("project");
  }
}
