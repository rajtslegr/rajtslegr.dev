-- CreateTable
CREATE TABLE "views" (
    "id" VARCHAR(128) NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);
