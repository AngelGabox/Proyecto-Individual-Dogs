const { Router } = require('express');
const { getTemps } = require('../controllers/tempController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getTemps)


module.exports = router;