const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.heroDAO = class heroDAO {

    async create(ModelHero) {
        const result = await prisma.Hero.create({
            data: {
                name: ModelHero.name,
            },
        })
        return result;
    }

    async update(ModelHero) {
        const result = await prisma.Hero.update({
            where: {
                id: Number(ModelHero.id),
            },
            data: {
                name: ModelHero.name,
            },
        })
        return result;
    }

    async read(id) {
        if (id != null) {
            const result = await prisma.Hero.findUnique({
                where: {
                    id: Number(id),
                }
            })
            return result;
        }
        else {
            const result = await prisma.Hero.findMany()
            return result;
        }
    }

    async delete(id) {
        const result = await prisma.Hero.delete({
            where: {
                id: Number(id),
            },
        });
        return result
    }



}