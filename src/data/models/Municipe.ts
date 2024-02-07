import Model from "./Model";

export interface IMunicipe {
  id?: number;
  name: string | null;
  province_id: number | null;
}

export default class Municipe extends Model<IMunicipe> {
  constructor() {
    super("municipes");
  }
}
