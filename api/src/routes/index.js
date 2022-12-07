const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios');
//const Dog = require('../models/Dog');
const{Dog,Temperament} = require('../db');
//const Dog = require('../models/Dog');

const router = Router();
// se utiliza async await por que no se sabe cuanto va a tardar la respuesta, para avisarle que debe esperar la respuesta antes de cargar la info a api apiUrl(rabajar de manera asincrona)
const getApiInfo = async () =>{
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiInfo = await apiUrl.data.map(el => {
        return{
            name: el.name,
            id: el.id,
            height: el.height,
            weight: el.weight,
            life_span: el.life_span,
            temperament: el.temperament,
            image:el.image,
        }
    });
    return apiInfo;
};

const getDbInfo = async () =>{
    return await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name'],
            throug: {
                attributes: [],
            },
        }
    });
};

const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

//tolowerCase para compara todos los valores sean mayusculas o minusculas
// S hace el filtrado d euan ves por name

router.get('/dogs', async (req,res) => {
   const name = req.query.name 
   let dogsTotal = await getAllDogs();
   if (name){
    let dogsName = await dogsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    dogsName.lenght ?
    res.status(200).send(dogsName) :
    res.status(404).send('The breed of dog does not exist, Sorry')
   }else{
      res.status(200).send(dogsTotal)
   }
}),

router.get('/dogs/:id', async (req,res) => {
    const id = req.params.id;
    const breedTotal = await getAllDogs()
    if(id){
       let breedId = await breedTotal.filter(el => el.id == id)
       breedId.length?
       res.status(200).json(breedId) :
    res.status(404).send('The breedId of dog does not exist, Sorry')
   
    }
})
 
router.post('/dogs', async (req, res) => {
    let{
        name,
        height,
        weight,
        life_span,
        temperament,
        image,
        createdInDb
    } = req.body

    let dogCreated = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
        createdInDb

    })

    let temperamentDb = await Temperament.findAll({
      where : { name : temperament}  
    })
    dogCreated.addTemperament(temperamentDb)
    res.send('Dog created successfully')
})



router.get('/temperaments', async (req,res) => {
    const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
    const temperaments = temperamentsApi.data.map(el => el.temperament)
    const tempEach = temperaments.map(el => {
        for (let i=0; i<el.length; i++) return el[i]})
        console.log(tempEach)
    tempEach.forEach(el =>{
        Temperament.findCreate({
            where: { name: el}
        })
    })
    const allTemperaments = await Temperament.findAll();
    res.send (allTemperaments);

 })



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
