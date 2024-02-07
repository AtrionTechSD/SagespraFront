import Model from "./Model";
import { IMunicipe } from "./Municipe";

export interface IInfo {
  id?: number;
  name: string | null;
  address: string | null;
  email: string | null;
  phone: string | null;
  municipe_id: number | null;
  municipes?: IMunicipe;
}

export default class Info extends Model<IInfo> {
  constructor() {
    super("infos");
  }
}
