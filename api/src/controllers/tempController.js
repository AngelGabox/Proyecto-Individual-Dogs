const { Dog, Temperament, Op, API_KEY } = require('../db')
const axios =  require('axios')

const preloadTemps = async() => {
    try {
        const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let temperaments = data.map(d => d.temperament? d.temperament.split(', '): null)
    temperaments = temperaments.flat()
    temperaments = await Promise.all(temperaments.map(t => Temperament.findOrCreate({where: { name: t }})))
    // console.log('----> TEMPERAMENTS:', temperaments)
    return 'Se cargaron lo temperamentos exitosamente'
    } catch (error) {
        console.log(error)
        return 'No se pudieron cargar los temperamentos'
    }
}
const getTemps = async(req, res, next) => {
    try {
      let temps = await Temperament.findAll()
      res.status(200).send(temps.filter(t => t.name!==null))
    } catch (error) {
      next(error)
    }
}

module.exports = {
    preloadTemps,
    getTemps
}