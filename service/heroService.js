const data = require('../data/heroDAO')
const Userbdd = new data.heroDAO();

exports.heroService = class heroService {

    async getHeros(id) {
        return await Userbdd.read(id);
    };

    async createHero(ModelHero) {

        if (ModelHero.name == null || ModelHero.titre == "") { throw "Merci de préciser le nome du hero"; }
        if (ModelHero.name.lenght > 100) { throw "Le nom ne peux etre supérieur à 100 carractères"; }

        return await Userbdd.create(ModelHero);

    };

    async update(ModelHero) {

        if (ModelHero.name == null || ModelHero.name == "") { throw "Merci de préciser un nom"; }
        if (ModelHero.id == null || ModelHero.id == "") { throw "Merci de préciser un id"; }

        return await Userbdd.update(ModelHero);
    };

    async deleteHeroById(id) {
        if (id == null || id == "") {
            throw "Merci de préciser l'id";
        }

        // Récupérer le hero à partir de l'ID
        const hero = await Userbdd.read(id);

        // Vérifier si le hero existe
        if (!hero) {
            throw "Le hero avec cet ID n'existe pas";
        }
        
        else {
            return await Userbdd.delete(id);
        } 
    };


}
