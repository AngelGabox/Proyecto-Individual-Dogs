const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  dogs  = require('./dogs')
const temps = require('./temperaments')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogs)
router.use('/temperaments', temps)


module.exports = router;
