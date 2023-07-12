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

    async getHeroByName(req, res) {
        const { name } = req.params;
    
        try {
            const result = await Hero.getHeroByName(name);
            res.json(result);
        } catch (e) {
            res.status(500).json({ message: `Error: ${e}` });
        }
    }    

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

        async updateHeroRe(req, res) {
        const { name } = req.body;
        const { id } = req.params;

        try {
            const existingHero = await Hero.getHeros(id);
            if (!existingHero) {
            throw new Error("Le héros n'existe pas en base de données.");
            }

            const updatedHero = await Hero.updateHero(id, name);
            res.json(updatedHero);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: `Erreur : ${e}` });
        }
        }

};
