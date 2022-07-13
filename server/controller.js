
const usersData = ["skywalker243","jordan2333","royjohnbuffalo32"]


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
    console.log("POST endpoint touchdown");

    usersData.push(req.body.username)   //user stored in data base
    
    postRespose = `Welcome ${(usersData[usersData.length - 1])}!`
    console.log(postRespose)
    res.status(200).send(postRespose)
    },

    putUser: (req,res) => {
        console.log("PUT endpoint TOUCHDOWN!")
        console.log(req.params);
        console.log(req.body)
        const usernameToEdit = req.params.username
        const newUsername = req.body.new_username
        for(i = 0; i < usersData.length; i++){
            if(usersData[i] === usernameToEdit){
                usersData[i] = newUsername
            }
        }
        res.status(200).send(usersData)    
    },

    deleteUser: (req,res) => {
        console.log("DELETE endpoint TOUCHDOWN!")
        console.log(req.params);
        const usernameToDelete = String(req.params.username)
        console.log(usernameToDelete)
        indexOfUserToDelete = (usersData.indexOf(usernameToDelete))
        console.log(indexOfUserToDelete)
        
        usersData.splice(indexOfUserToDelete, 1);

        res.status(200).send(usersData)
        }
        
        
        
    
   
}