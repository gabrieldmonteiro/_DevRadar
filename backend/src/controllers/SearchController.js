const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//busca de devs num raio de 10km
//filtrar por tech

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    //$maxDistance: 10000, // Distancia = 10km
                    $maxDistance: 9999999999999999999999, // Distancia max p/ teste 
                },
            }

        });                
        return response.json({ devs });
    }    
}