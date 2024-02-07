import { SupabaseClient } from "@supabase/supabase-js";
import Supabase from "../connector/Supabase";
import IModel from "../interfaces/IModel";
import { ElLoading, ElMessage } from "element-plus";

export default class SupabaseModel<T extends object> implements IModel<T> {
  schema: string;
  dataSource: SupabaseClient = Supabase.getInstance().getCLient()!;
  include: string[] = [];
  order: string = "";
  desc: boolean = false;
  cols: string = "*";
  constructor(schema: string) {
    this.schema = schema;
  }

  formatSelect(): string {
    let columns: string | string[] = this.include;
    columns = columns.map((c) => `${c}(*)`);

    columns = [...columns, this.cols || "*"];
    columns = columns.join(", ");
    return columns;
  }
  async safeRun(cb: Function): Promise<any> {
    const loading = ElLoading.service({
      lock: true,
      text: "Cargando",
      background: "rgba(0, 0, 0, 0.7)",
    });
    return new Promise<any>(async (resolve, reject) => {
      try {
        const res = await cb();
        loading.close();
        resolve(res);
      } catch (error: any) {
        if (error) {
          ElMessage.error({
            message: error.details || error.message,
            duration: 0,
            showClose: true,
          });
          loading.close();
          reject();
        }
      }
    });
  }
  async updateOrCreate(
    key: string,
    value: string | number,
    data: T
  ): Promise<T> {
    return await this.safeRun(async () => {
      const existing: any = await this.find({ [key]: value });
      let result;
      if (existing) {
        result = this.update(existing.id, data);
      } else {
        result = this.save({ ...data, [key]: value });
      }
      return result;
    });
  }

  async get(): Promise<Array<T>> {
    const columns = this.formatSelect();
    return await this.safeRun(async () => {
      const { data, error } = await this.dataSource
        .from(this.schema)
        .select(String(columns));
      if (error) throw error;
      return data;
    });
  }

  async find(filters: Record<string, any>): Promise<T> {
    const columns = this.formatSelect();
    return await this.safeRun(async () => {
      let client = this.dataSource.from(this.schema).select(String(columns));
      Object.keys(filters).forEach((key: string) => {
        client = client.eq(key, filters[key]);
      });
      const { data, error } = await client.limit(1);
      if (error) throw error;
      return data[0] || null;
    });
  }
  async findById(id: number): Promise<T> {
    const columns = this.formatSelect();
    return await this.safeRun(async () => {
      let client = this.dataSource.from(this.schema).select(String(columns));
      client = client.eq("id", id);
      const { data, error } = await client.limit(1);
      if (error) throw error;
      return data[0] || null;
    });
  }
  async save(newData: T): Promise<T> {
    return await this.safeRun(async () => {
      const { data, error } = await this.dataSource
        .from(this.schema)
        .insert([newData])
        .select();
      if (error) throw error;
      return data[0];
    });
  }

  async update(dataId: number, newData: T | any): Promise<T> {
    return await this.safeRun(async () => {
      const { id, ...dataToUpdate } = newData;
      const { data, error } = await this.dataSource
        .from(this.schema)
        .update(dataToUpdate)
        .eq("id", dataId)
        .select();
      if (error) throw error;
      return data[0];
    });
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  restore(id: number): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
