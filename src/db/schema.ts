import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }).notNull(),
  fromCity: varchar("from_city", { length: 100 }).notNull(),
  toCity: varchar("to_city", { length: 100 }).notNull(),
  vehicleType: varchar("vehicle_type", { length: 100 }).notNull(),
  serviceType: varchar("service_type", { length: 50 }).notNull().default("open"),
  message: text("message"),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
