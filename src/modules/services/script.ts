import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){

    const mae1 = await prisma.mae.create({
        data: {
            id: 1,
            nome: 'Rogeria',
            endereco: 'aaaa',
            telefone: 99999999,
            data_nasc: '20/02/1980'
        }
    })
    
    const medico1 = await prisma.medico.create({
        data: {
            crm: 123123,
            nome: 'Claudio',
            especialidade: 'ortopedista',
            telefone: 1231231

        }
    })



    


    const bebe1 = await prisma.bebe.create({
        data: {
            nome: 'Gabriel',
            data_nasc: '21/03/2023',
            peso_nasc: 3,
            altura: 20,
            Mae: mae1,
            Medico: medico1
        }
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })