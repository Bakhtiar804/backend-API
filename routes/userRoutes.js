import express from "express";
import { Router } from "express";

const route = Router();

const users = [
    {
        id: 1,
        firstName: "Emily",
        lastName: "Johnson",
        age: 29,
        gender: "female",
        email: "emily@example.com",
        phone: "1234567890",
        username: "emilys",
        password: "emilyspass",
        city: "Phoenix",
        country: "United States",
        university: "University of Wisconsin",
        company: "Dooley Company",
        role: "admin"
    },
    {
        id: 2,
        firstName: "Michael",
        lastName: "Williams",
        age: 36,
        gender: "male",
        email: "michael@example.com",
        phone: "9876543210",
        username: "michaelw",
        password: "michaelwpass",
        city: "Houston",
        country: "United States",
        university: "Ohio State University",
        company: "Spinka Company",
        role: "admin"
    },
    {
        id: 3,
        firstName: "Sophia",
        lastName: "Brown",
        age: 43,
        gender: "female",
        email: "sophia@example.com",
        phone: "1122334455",
        username: "sophiab",
        password: "sophiabpass",
        city: "Washington",
        country: "United States",
        university: "Pepperdine University",
        company: "Schiller Company",
        role: "user"
    },
    {
        id: 4,
        firstName: "James",
        lastName: "Davis",
        age: 46,
        gender: "male",
        email: "james@example.com",
        phone: "5566778899",
        username: "jamesd",
        password: "jamesdpass",
        city: "Seattle",
        country: "United States",
        university: "USC",
        company: "Pagac Company",
        role: "user"
    },
    {
        id: 5,
        firstName: "Emma",
        lastName: "Miller",
        age: 31,
        gender: "female",
        email: "emma@example.com",
        phone: "9988776655",
        username: "emmaj",
        password: "emmajpass",
        city: "Jacksonville",
        country: "United States",
        university: "Northeastern University",
        company: "Graham Company",
        role: "user"
    }
]


route.get('/', (req, res) => {
    res.status(200).json(users)
    
})


route.use(express.json());
route.post('/', (req, res) => {
    const user = req.body
    user.id = users.length + 1;
    users.push(user);
    res.status(200).send({status : 200 , message : " User added successfully"})
})


route.put('/:id', (req, res) => {
    const index = Number(req.params.id);
    const user = users.find(user => user.id === index);
    if(user === undefined){
      return  res.status(404).send({status : 404 , message : "User Not Found"})
    }
    user.firstName = req.body.firstName ?? user.firstName
    user.lastName = req.body.lastName ?? user.lastName
    user.age = req.body.age ?? user.age;
    user.email = req.body.email ?? user.email;
    user.gender = req.body.gender ?? user.gender;
    user.phone = req.body.phone ?? user.phone;
    user.username = req.body.username ?? user.username;
    user.password = req.body.password ?? user.password;
    user.city = req.body.city ?? user.city;
    user.university = req.body.university ?? user.university;
    user.company = req.body.company ?? user.company;
    user.role = req.body.role ?? user.role;

    res.status(200).send({status : 200 , message :" User updated successfully"})
})


route.delete('/:id' , (req , res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(index => index.id === id);
    if (index === -1) {
    return res.status(404).send({status : 404 , message : "User Not FOund"});
}
    
    users.splice(index , 1);
    res.status(200).send({status : 200 , message : "Deleted Successfully"})
})



export default route