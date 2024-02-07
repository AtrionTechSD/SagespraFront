import Model from "./Model";

export interface ICampus {
  id?: number;
  name: string | null;
}

export default class Campus extends Model<ICampus> {
  constructor() {
    super("campus");
  }
}
