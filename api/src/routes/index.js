const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//const Dog = require('../models/Dog');
const{getAllDogs} = require('../Controllers/getAllDogs.js');
//const Dog = require('../models/Dog');

const router = Router();
// se utiliza async await por que no se sabe cuanto va a tardar la respuesta, para avisarle que debe esperar la respuesta antes de cargar la info a api apiUrl(rabajar de manera asincrona)


//tolowerCase para compara todos los valores sean mayusculas o minusculas
// S hace el filtrado d euan ves por name
router.get("/dogs", async (req, res, next) => {
    try {
      let allDogs = await getAllDogs();
      res.status(200).json(allDogs);
    } catch (err) {
      console.log(err);
    }
  });







// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
