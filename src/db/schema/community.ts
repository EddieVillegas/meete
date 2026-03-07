import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const comunityTable = pgTable("comunity", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
});
