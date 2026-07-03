-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_type" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "mname" TEXT,
    "lname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "profile_picture_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
