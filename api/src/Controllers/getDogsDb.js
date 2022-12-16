
const{Dog, Temperament} = require('../db')

const getDogsDb = async () =>{
    
    
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

module.exports = { getDogsDb };