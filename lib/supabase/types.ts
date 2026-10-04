export type ContactSubmissionInsert = {
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  privacy_accepted: boolean;
};

export type ContactSubmissionRow = ContactSubmissionInsert & {
  id: number;
  created_at: string;
};

// Esta estructura la requiere supabase-js para tipar insert y select.
export interface Database {
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
}
