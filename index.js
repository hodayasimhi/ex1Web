//models
const express = require('express'),
      ctrl = require('./controller')

      
 //create server
const app = express();
const port = process.env.PORT || 3000 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.all('*', (req, res, next) => {
//     console.log("A Client is trying to connect.");
//     next();
// })

//Functions
app.get('/AllTour', ctrl.getAllTour);
app.get('/AllTour/:Serial', ctrl.getTourBySerial);
app.get('/Tourin/:date&:place', ctrl.getTourByDateandplace);
app.post('/Winner/:Serial', ctrl.editWinner);
app.get('/TourMin/:time', ctrl.getTourByMinutes);



app.listen(port, 
    () => console.log(`listening on port ${port}`)
)



