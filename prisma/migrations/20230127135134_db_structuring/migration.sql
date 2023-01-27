-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "houses" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(30) NOT NULL,
    "district" VARCHAR(30) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "hasAc" BOOLEAN NOT NULL,
    "hasPool" BOOLEAN NOT NULL,

    CONSTRAINT "houses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rentals" (
    "id" SERIAL NOT NULL,
    "startdate" TIMESTAMP(6) NOT NULL,
    "enddate" TIMESTAMP(6) NOT NULL,
    "dailyprice" INTEGER NOT NULL,
    "totalprice" INTEGER NOT NULL,
    "ispaid" BOOLEAN NOT NULL,
    "downpayment" INTEGER NOT NULL,
    "houseId" INTEGER,
    "clientId" INTEGER,

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "fk_rentals_clients" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "fk_rentals_houses" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
