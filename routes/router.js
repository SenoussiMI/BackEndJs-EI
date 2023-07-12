const express = require('express')
const heroController = require('../controllers/heroController')
const Hero = new heroController.HeroController();

const router = express.Router();

router.post(`/hero`, Hero.createHero);

router.post(`/hero/:id`, Hero.updateHero);

router.get('/heros', Hero.getHero);

router.get('/heros/:id', Hero.getHero);

router.delete('/hero/:id', Hero.deleteHeroById);

module.exports = router;
