import Model from "./Model";
import Api from "../connector/Api";
import { AxiosInstance } from "axios";
import Role from "./Role";
import { IStudent } from "./Student";

export interface IUser {
  id?: number;
  email: string;
  password?: string;
  role_id: number;
  auth_id?: string;
  students?: IStudent;
}

export enum IUserRole {
  admin = 1,
  director = 2,
  pasantia = 3,
  participante = 4,
}

export default class User extends Model<IUser> {
  user: IUser = {
    email: "",
    role_id: 0,
  };

  api: AxiosInstance = Api.getInstance().api!;
  constructor() {
    super("users");
  }

  async auth(user: IUser): Promise<any> {
    try {
      const {
        data: { content },
      } = await this.api.post(
        import.meta.env.VITE_API_AUTH_URL + "auth/login",
        {
          id: user.id,
          password: user.password!,
        }
      );
      return { user: content.user, token: content.token };
    } catch (error) {
      console.log(error);
    }
  }

  async role(): Promise<any> {
    if (!this.record) return null;
    return new Role().findById(this.record.role_id);
  }
}
