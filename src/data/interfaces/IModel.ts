import { SupabaseClient } from "@supabase/supabase-js";
import { AxiosInstance } from "axios";

export default interface IModel<T extends object> {
  schema: string;
  dataSource?: AxiosInstance | SupabaseClient;
  safeRun?(cb: Function): Promise<any>;
  get(): Promise<Array<T>>;
  find(filters: Record<string, any>): Promise<T>;
  findById(id: number): Promise<T>;
  save(data: T): Promise<T>;
  update(dataId: number, data: T): Promise<T>;
  updateOrCreate(key: string, value: string | number, data: T): Promise<T>;
  delete(id: number): Promise<void>;
  restore(id: number): Promise<T>;
  include: string[];
  order: string;
  desc: boolean;
  cols: string;
}
