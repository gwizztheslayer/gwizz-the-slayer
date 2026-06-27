import { sql } from "@vercel/postgres";

// This file serves as the core connection matrix to your Vercel Postgres database.
// We will use this to inject and retrieve lyrics, merchandise, and manga data for the Master CMS.
export const db = sql;
