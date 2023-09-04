-- CreateTable
CREATE TABLE "bebe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_nasc" DATETIME NOT NULL,
    "peso_nasc" INTEGER NOT NULL,
    "altura" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "mae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "data_nasc" DATETIME NOT NULL,
    CONSTRAINT "mae_id_fkey" FOREIGN KEY ("id") REFERENCES "bebe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "medico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crm" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "especialidade" TEXT NOT NULL,
    CONSTRAINT "medico_id_fkey" FOREIGN KEY ("id") REFERENCES "bebe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
