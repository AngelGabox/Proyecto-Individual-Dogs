const { Dog, Temperament, Op, API_KEY } = require('../db')
const { v4: uuid} =  require('uuid')
const axios =  require('axios')
const dogsXApi = async() => {
    try {
        const {data}= await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
        // console.log('ESTO TIENE DATA', data)
        let dogs = data.map(d => {
            return{
                id: d.id,
                name: d.name,
                height: d.height.metric,
                weight: d.weight.metric,
                // weight: d.weight.metric.length < 3? `${parseFloat(d.weight.metric)-2}-${d.weight.metric}` : d.weight.metric.replace(NaN, 'x'),
                age: d.life_span,
                img: d.image,
                temperaments: d.temperament? d.temperament.split(', '):null
            }
        })
        // console.log('--------> Dogs:', dogs)
        dogs = await Promise.all(dogs)
        // .map( async d => {
        // let perris = await Dog.create(d)
        // let temps = await Temperament.findAll({where:{name: d.temperament}})
        // // console.log('---->TEMPS:', temps)
        // perris.addTemperament(temps)
        // })
        // console.log('ARRAY DE PERRIS:', dogs);
        return dogs
    } catch (error) { 
        console.log(error)
        return "No se pudieron cargar los perritos :C"
    }
}

const dogsXDb = async() => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name', 'id'],
            through: { 
                attributes: []
            }
        }
    });
}

const allDog = async() =>{
    // const dogsA = ( await dogsXApi() ).map(p => {
    //     return {
    //         ...p,
    //         promedio: parseFloat(p.weight)
    //     }
    // })
    const dogsA = await dogsXApi()
    const dogsDb = await dogsXDb()
    const allInfo = dogsA.concat(dogsDb)
    return allInfo
}
const dogXId = async(req, res, next) =>{
    try {
        const id = req.params.id;
        let dogs = await allDog()
        dogs = await dogs.filter(c => c.id == id)

        res.status(200).send(dogs)
    } catch (error) {
        next(error)
        res.status(400).send('la raza no existe')
    }
} 
const getDogs = async(req, res, next) => {
    try {
        let { name, temperament } = req.query  
        let dogs = await allDog()

        if(name && name !== '') {
            dogs = await dogs.filter(c => c.name.toLowerCase().includes(name.toLocaleLowerCase()))
            dogs.length ? 
            dogs :
            res.status(404).send("No existe esta raza 😕😔 o escribiste mal su nombre 😅");
        }else if(temperament){
            // console.log('-----> actividad:', actividad)
            // el.toLowerCase().includes(temperament.toLocaleLowerCase())   
            dogs = await dogs.filter(c => c.temperaments?.includes(temperament))
            // console.log('---->filter temperament:', dogs)
            // console.log('---->countries.map:', countries)
            dogs.length?
            dogs:
            res.status(404).send("No se escontro una raza con este temperamento 😉");
        }
        console.log('dogs.length: ', dogs.length)
        // dogs = dogs.map(p => {
        //     return {
        //         ...p,
        //         promedio: parseFloat(p.weight)
        //     }
        // })
        
        res.status(200).json(dogs)
    } catch (error) {
        error = '----> error getDogs: ' + error
        next(error)
    }
}
    const addDog = async(req, res, next) =>{
        try {
        const {name, tempsForDog, hMin, hMax, wMin, wMax, ageMin, ageMax } = req.body

        const perris = {
          id: uuid(),
          name,
          height: `${hMin}-${hMax}`,
          weight: `${wMin}-${wMax}`,
          age: `${ageMin}-${ageMax}`
        }
        const newPerris = await Dog.create(perris)
        console.log('TEMPS PARA EL PERRIS:', tempsForDog)
        const tempsDb = await Temperament.findAll({ where: { name: tempsForDog } })
        newPerris.addTemperament(tempsDb)
        res.status(200).json({...perris, tempsDb})
        } catch (error) {
          next(error)
        }
    }  
module.exports = {
    dogXId,
    getDogs,
    addDog
}