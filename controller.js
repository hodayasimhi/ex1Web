//mongoose
const mongoose = require('mongoose')
//consts 
const consts = require('./const')
//Tournaments schema file from mLab
const IntTournamentsY = require('./IntTournamentsY')

const { MLAB_URL, DB_USER, DB_PASS } = consts //from consts file
const url = MLAB_URL
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: DB_USER,
    pass: DB_PASS
};


//methods
module.exports = {
    //All Tournaments in DB
    getAllTour(req, res, next){ 
        mongoose
        .connect(url, options)
        .then(async() => {
            const result = await IntTournamentsY.find({})

            if(result) res.json(result);
            else res.status(404).send('not found');

        })
        //unsucceed
        .catch(err => {
            console.error('Sorry some error occurred' , err)
            res.status(500).send(err.message)
        })

    },
    
    //Gets all Tournaments that match given conditions 
    getTourBySerial(req, res, next){
        mongoose
        .connect(url, options)
        .then(async() => {
            const{Serial = null} = req.params;
            console.log('Serial: ' + Serial)
            const result = await IntTournamentsY.find({Serial});

            if(result) res.json(result);
            else res.status(404).send('not found');

            mongoose.disconnect();

        })

        .catch(err => {
            console.error('some error occurred' , err)
            res.status(500).send(err.message)
        })

    },

    //Gets all Tournaments More than X minutes
    getTourByMinutes(req, res, next){
        mongoose
        .connect(url, options)
        .then(async() => {
            const{time = null} = req.params;
            console.log('Minutes: ' + time)
            const result = await IntTournamentsY.find({time:{$gte:time}});

            if(result) res.json(result);
            else res.status(404).send('not found');

            mongoose.disconnect();

        })

        .catch(err => {
            console.error('some error occurred' , err)
            res.status(500).send(err.message)
        })

    },


    getTourByDateandplace(req, res, next){
        mongoose
        .connect(url, options)
        .then(async() => {
            const {date = null} = req.params
            console.log('date: ' + date)
            const{place = null} = req.params
            console.log('place: ' + place)
            const result = await IntTournamentsY.find({date, place});

            if(result) res.json(result);
            else res.status(404).send('not found');

            mongoose.disconnect();

        })

        .catch(err => {
            console.error('sorry some error occurred' , err)
            res.status(500).send(err.message)
        })

    },


    editWinner(req, res, next){
        mongoose
        .connect(url, options)
        .then(async() => {
            const {Serial = null} = req.params;
            const {winner = null} = req.body;
            const result = await IntTournamentsY.updateOne({Serial},{winner});
            
            if(result) res.json(result);
            else res.status(404).send('not found');

            mongoose.disconnect();

        })

        .catch(err => {
            console.error('some error occurred' , err)
            res.status(500).send(err.message)
        })
    }
}
