import Model from "./Model";

export interface ICareer {
  id?: number;
  name: string | null;
  sigla: string | null;
  trim_pasantia: number | null;
  trim_ssu: number | null;
}

export default class Career extends Model<ICareer> {
  constructor() {
    super("careers");
  }
}
