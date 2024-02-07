import { SupabaseClient } from "@supabase/supabase-js";
import { AxiosInstance } from "axios";
import IModel from "../interfaces/IModel";
import ApiModel from "./ApiModel";
import SupabaseModel from "./SupabaseModel";

export default abstract class Model<T extends object> implements IModel<T> {
  schema: string;
  parent: SupabaseModel<T> | ApiModel<T>;
  record!: T;
  include: string[] = [];
  order: string = "";
  desc: boolean = false;
  cols: string = "*";

  constructor(schema: string) {
    this.schema = schema;
    const context = import.meta.env.VITE_APP_CONTEXT;
    switch (context) {
      case "api":
        this.parent = new ApiModel(this.schema);
        break;
      case "supabase":
        this.parent = new SupabaseModel(this.schema);
        break;
      default:
        this.parent = new ApiModel(this.schema);
        break;
    }
  }
  dataSource?: AxiosInstance | SupabaseClient<any, "public", any> | undefined;
  safeRun?(cb: Function): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   * The `injectProps` function assigns values to properties of the `parent` object.
   */
  injectProps() {
    this.parent.cols = this.cols;
    this.parent.include = this.include;
    this.parent.order = this.order;
    this.parent.desc = this.desc;
  }
  async get(): Promise<Array<T>> {
    this.injectProps();
    return await this.parent.get();
  }

  async find(filters: Record<string, any>): Promise<T> {
    this.injectProps();
    return await this.parent.find(filters);
  }
  async findById(id: number): Promise<T> {
    this.injectProps();
    return await this.parent.findById(id);
  }
  async save(data: T): Promise<T> {
    return await this.parent.save(data);
  }
  async update(dataId: number, data: T): Promise<T> {
    return await this.parent.update(dataId, data);
  }
  async updateOrCreate(
    key: string,
    value: string | number,
    data: T
  ): Promise<T> {
    return await this.parent.updateOrCreate(key, value, data);
  }
  async delete(id: number): Promise<void> {
    return await this.parent.delete(id);
  }
  async restore(id: number): Promise<T> {
    return await this.parent.restore(id);
  }
}
