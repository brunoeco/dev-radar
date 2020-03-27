const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response){
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name, avatar_url, bio } = apiResponse.data;
        
            const techsArray = techs.split(',').map(tech => tech.trim());
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            
            }

        
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            
            console.log(avatar_url);
        }
        return response.json(dev);
    },

    async update(request, response){
        const { github_username } = request.params;
        const { name, bio, techs } = request.body;

        const techsArray = techs != null ? techs.split(',').map(tech => tech.trim()): null;

        res = await Dev.updateOne({github_username},{name, bio, techs: techsArray});
  
        return response.json(res);

    },

    async destroy(request, response){
        const { github_username } = request.params;
        const res = await Dev.deleteOne({ github_username });

        return response.json(res);
    },
};
