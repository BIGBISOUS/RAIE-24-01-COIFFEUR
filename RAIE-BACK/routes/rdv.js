const Rdv = require('../models/rdv')

module.exports = (express) => {
    const rdvs = express.Router()
    // http:get /rdv
rdvs.get('/', (req, res) => {
    Rdv.findAll({ raw: true }).then(rdv => {
        res.send(
            JSON.stringify(rdv)
        );
    });
});

    rdvs.post('/create', async (req, next) => {
        // console.log(req.body)
        try {
            let rdv = req.body

            console.log("RDV ID : " + rdv.id);

            // Créer un RDV
            RdvId = await Rdv.create(rdv)

        } catch (e) {
            next(e)
        }
    })


    rdvs.get('/getRdv',  async (res) => {
        console.log("wait a moment getRdv run you're request...");
        console.log(rdvs);
        res.send(await Rdv.findAll())
    })

    return rdvs
}