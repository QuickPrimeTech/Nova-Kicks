ALTER TABLE "products" ALTER COLUMN "is_published" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "stock_quantity";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "images";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "available_sizes";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "colors";