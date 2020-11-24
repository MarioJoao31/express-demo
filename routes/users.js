import express from "express";

const router = express.Router();

const users = [
    {
        firstname: "Mario",
        lastname: "pinto",
        age:25
    },
    {
        firstname: "Mae",
        lastname: "Galinha",
        age:44
    }
]

//AQUI AUTOMATICAMENTE ESTA O USERS POR ISSO È DESNECESSARIO METER USERS DE NOVO 
router.get('/', (req,res)=> {   
    res.send(users);
});


router.post('/', (req,res)=> {
    const user = req.body;
    console.log('user');
    
    users.push(user);

    res.send(`User ${user.firstname} adicionado a base de dados!`);
});

export default router;