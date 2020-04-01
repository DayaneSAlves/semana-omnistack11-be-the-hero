const connection = require('../database/connections');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ongs_id', ong_id)
            .select('*');

            return response.json(incidents);
    }
}