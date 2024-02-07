import { AxiosInstance } from "axios";
import { IUser } from "./User";
import IModel from "../interfaces/IModel";
import Api from "../connector/Api";

export default class ApiModel<T extends object> implements IModel<T> {
  schema: string;
  dataSource: AxiosInstance = Api.getInstance().api!;

  constructor(schema: string) {
    this.schema = schema;
  }
  include: string[] = [];
  order: string = "";
  desc: boolean = false;
  cols: string = "*";

  updateOrCreate(key: string, value: string | number, data: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  async safeRun(cb: Function): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async auth(user: IUser): Promise<any> {
    return await this.safeRun(async () => {
      return await this.dataSource!.post(`/auth/login`, user);
    });
  }
  async get(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  async find(filters: Record<string, any>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<T> {
    throw new Error("Method not implemented.");
  }
  async save(data: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(dataId: number, data: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  restore(id: number): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
