const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getDogs, dogXId, addDog} = require('../controllers/dogController')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getDogs)
router.get('/:id', dogXId)
router.post('/add', addDog)


module.exports = router;
