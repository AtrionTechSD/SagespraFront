import Model from "./Model";

export interface IProvince {
  id?: number;
  name: string;
  municipes?: any[];
}

export default class Province extends Model<IProvince> {
  constructor() {
    super("provinces");
  }
}
