import { createClient, SupabaseClient } from "@supabase/supabase-js";
export default class Supabase {
  private static _instance: Supabase | null;

  private client!: SupabaseClient | null;
  private constructor() {
    this.setClient();
  }

  static getInstance(): Supabase {
    if (!Supabase._instance) {
      Supabase._instance = new Supabase();
    }
    return Supabase._instance;
  }

  setClient() {
    const client = createClient(
      import.meta.env.VITE_API_URL,
      import.meta.env.VITE_API_KEY
    );
    this.client = client;
  }

  getCLient() {
    return this.client;
  }
}
