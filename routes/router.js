const express = require('express')
const heroController = require('../controllers/heroController')
const Hero = new heroController.HeroController();

const router = express.Router();

router.post(`/heroes`, Hero.createHero);

router.post(`/heroes/:id`, Hero.updateHero);

router.put('/heroes/:id', Hero.updateHeroRe);

router.get('/heroes', Hero.getHero);

router.get('/heroes/:id', Hero.getHero);

router.get('/heroes/:name', Hero.getHeroByName);

router.delete('/heroes/:id', Hero.deleteHeroById);





module.exports = router;
