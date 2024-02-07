import Model from "./Model";

export interface IRole {
  id?: number;
  name: string;
}

export default class Role extends Model<IRole> {
  constructor() {
    super("roles");
  }
}
