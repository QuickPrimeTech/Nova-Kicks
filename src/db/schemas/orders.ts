// @/db/schemas/orders.ts
import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";
import { timestamps } from "./common";

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),

  // Customer Info (Can be linked to Supabase Auth ID if users are logged in)
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone").notNull(), // Important for M-Pesa

  // Shipping
  shippingAddress: text("shipping_address").notNull(),
  city: text("city").notNull().default("Nairobi"),

  // Financials
  totalAmount: integer("total_amount").notNull(), // Total in Ksh
  status: text("status").notNull().default("pending"), // pending, paid, shipped, delivered, cancelled

  // Payment Details
  paymentMethod: text("payment_method").notNull().default("mpesa"),
  mpesaCode: text("mpesa_code").unique(), // The Safaricom Ref (e.g., RCK4...)

  ...timestamps,
});
