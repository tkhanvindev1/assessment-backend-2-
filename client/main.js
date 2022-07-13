const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const fortuneBtn = document.getElementById("fortuneButton")

//1.GET
const getFortune = () => {
    axios
        .get("http://localhost:4000/api/fortune")
        .then(res =>{
            const data = res.data;
            alert(data);
    })
}



//2.POST



const inputFirstName = document.getElementById("fname")
const inputLastName = document.getElementById("lname")
const inputUsername = document.getElementById("username")
const submitNameBtn = document.getElementById("submitName")

const postUser = () => {
    const newUser = {
        firstname: inputFirstName.value,
        lastname: inputLastName.value,
        username: inputUsername.value
    }
    axios
        .post("http://localhost:4000/api/post/user", newUser)
        .then(res => {
            alert(res.data)
        })
}


//3.PUT

const newNameInput = document.getElementById("change-username")
const oldNameInput = document.getElementById("current-username") 
const changeUsernameBtn = document.getElementById("change-user-button")


 const putUser = () => {
         const putBody = {
            new_username: newNameInput.value
         }
         axios.put(`http://localhost:4000/api/put/name/${oldNameInput.value}`, putBody)
         .then((res) => {
            alert(res.data)
         })

}

//4.DELETE 

 const usernameToDelete = document.getElementById("delete-username")
 const deleteBtn = document.getElementById("delete-user-button")


 const deleteUser = () => {
        
         axios.delete(`http://localhost:4000/api/put/name/${usernameToDelete.value}`)
         .then ((res) => {
            alert(res.data)
         })
 }













deleteBtn.addEventListener('click', deleteUser)
changeUsernameBtn.addEventListener('click', putUser)
submitNameBtn.addEventListener('click', postUser)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)


