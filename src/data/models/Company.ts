import { IInfo } from "./Info";
import Model from "./Model";
import { IProject } from "./Project";

export interface ICompany {
  id?: number;
  rnc: string | null;
  sector: "Pública" | "Privada";
  info_id?: number;
  infos?: IInfo;
  projects: Array<IProject>;
}

export default class Company extends Model<ICompany> {
  constructor() {
    super("companies");
  }
}
