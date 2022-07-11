



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense. ", "A fresh start will put you on your way. ","A golden egg of opportunity falls into your lap this month ","A hunch is creativity trying to tell you something. ","A light heart carries you through all the hard times. "]
       
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    postUser: (req,res) => {
        const usersData = []

    console.log("POST endpoint touchdown");
    console.log(req.body)
    console.log(req.body.firstname)
    
    usersData.push(req.body)   //user stored in data base
    console.log(usersData)
    res.status(200).send(usersData[usersData.length - 1])
    },

    putUsername: (req,res) => {
        const people = require('./db.json')
        
        console.log('PUT endpoint touchdown!')
        


        

        
                res.status("Username has been updated")
            }
        }
