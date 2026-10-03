import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { ParticipationFormValues } from "@/features/contact/schema";

type ContactSubmissionInsert = Omit<
  ParticipationFormValues,
  "company" | "privacy"
> & {
  company: string | null;
  privacy_accepted: ParticipationFormValues["privacy"];
};

export type ContactSubmissionRow = ContactSubmissionInsert & {
  id: number;
  created_at: string;
};

type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmissionRow;
        Insert: ContactSubmissionInsert;
        Update: Partial<ContactSubmissionInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export function createSupabaseServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Supabase server configuration is missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
