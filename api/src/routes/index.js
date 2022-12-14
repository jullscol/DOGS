const { default: axios } = require('axios');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//const Dog = require('../models/Dog');
const{getAllDogs} = require('../Controllers/getAllDogs.js');
const{Temperament} = require('../models/Temperament');

//const Dog = require('../models/Dog');

const router = Router();
// se utiliza async await por que no se sabe cuanto va a tardar la respuesta, para avisarle que debe esperar la respuesta antes de cargar la info a api apiUrl(rabajar de manera asincrona)


//tolowerCase para compara todos los valores sean mayusculas o minusculas
// S hace el filtrado d euan ves por name
router.get("/dogs", async (req, res, next) => {
    const name = req.query.name
      let allDogs = await getAllDogs();
      if(name){
        let dogsName = await allDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase));
        dogsName.lenght ?
        res.status(200).send(dogsName) :
        res.status(404).send('The dog is not found, Sorry');
      }else{
        res.status(200).send(allDogs)
      }

})


router.get('/dogs/:id', async (req, res) =>{
  const id = req.params.id;
  const allDogs = await getAllDogs()
  if(id){
    let dogsId = await allDogs.filter(el => el.id ==id)
    dogsId.length?
    res.status(200).json(dogsId) : 
    res.status(404).send('Dog not found')
  }

})

/* router.get("/temperaments", async (req, res) =>{
    const temperamentApi = await axios.get('https://api.thedogapi.com/v1/breeds')
    const temperaments = temperamentApi.data.map(el => el.temperament)
    const tempEach = temperaments.map(el =>{
      for(let i=0; i<length; i++) return el[i]})
      tempEach.forEach(el => {
        Temperament.findCreate({
          where: {name: el}
        })
    })
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
  })
     

    
router.post('/dogs', async (req,res) =>{
 let{
  name,
  height,
  weight,
  life_span,
  createdInDb,
  temperament,
  image,
 } = req.body

 let dogCreated = await Dog.create({
  name,
  height,
  weight,
  life_span,
  createdInDb,
  image
 })

 let temperamentDb = await Temperament.findAll({where: { name : temperament}})
 dogCreated.addTemperament(temperamentDb)
 res.send('Dog created successfully')
});

 */






// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
