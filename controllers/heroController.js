const heroService = require('../service/heroService');
const Hero = new heroService.heroService(); //


const herom = require('../models/heroModel');


exports.HeroController = class HeroController {

    async getHero(req, res) {
        if (req.params != null) {
            const { id } = req.params;
            const result = await Hero.getHeros(id);
            res.json(result);
        } else {
            const result = await Hero.getHeros();
            res.json(result);
        }
    };

    async createHero(req, res) {
        const { name } = req.body;
        const ModelHero = new herom.heroModel(name);

        try {
            const result = await Hero.createHero(ModelHero);
            res.json(result);
        } catch (e) {
            res.status(500).json({ message: `Erreur : ${e}` });
        }
    };

    async updateHero(req, res) {
        const { name } = req.body;
        const { id } = req.params;
        const ModelHero = new herom.heroModel(name);

        try {
            const result = await Hero.update(ModelHero);

            res.json(result);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: `Erreur : ${e}` });
        }
    };

    async deleteHeroById(req, res) {
        const { id } = req.params;

        try {
            const result = await Hero.deleteHeroById(id);
            res.json(result);
        } catch (e) {
            res.status(500).json("Erreur : " + e);
        }
    };

};
