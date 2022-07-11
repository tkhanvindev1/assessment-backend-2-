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

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

//POST


const submitNameBtn = document.getElementById("submitName")
const inputFirstName = document.getElementById("fname")
const inputLastName = document.getElementById("lname")

const postUser = () => {
    const newUser = {
        firstname: inputFirstName.value,
        lastname: inputLastName.value
    }
    axios
        .post("http://localhost:4000/api/users", newUser)
        .then( res => {
            const dataUser = res.body.firstname
            alert(`Welcome ${dataUser}`)
        })
}

submitNameBtn.addEventListener('click', postUser)

//PUT

const inputUsernameChange = document.getElementById("change-username")
const updateUserBtn = document.getElementById("change-user-button")


const putUsername = () => {
    let newUsername = inputUsernameChange.value
        
    axios
    .put('http://localhost:4000/api/usersname', newUsername)
    console.log(req.params)
  console.log(req.query)
  console.log(req.body)
    .then( res => {
        
        console.log(req)
    })
}

updateJobBtn.addEventListener('click', putUsername) 
