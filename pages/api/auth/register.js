import { initMongoose } from "@/db/connection";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    
    if(req.method !== 'POST') {
        return res.status(401).json({ error: "Problema na requisição!" })
    }

    await initMongoose()

    const {name, email, password, confirmPassword} = req.body

    if(!name || !email || !password || !confirmPassword) {
        return res.status(401).json({ error: "Por favor preencha todos os campos!" })
    }

    if(password !== confirmPassword) {
        return res.status(401).json({ error: "As senhas não conferem!" })
    }

    const userExists = await User.findOne({ email })
    if(userExists) {
        return res.status(401).json({ error: "O e-mail informado já está em uso!" })
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({ name, email, password: passwordHash })

    try {
        const newUser = await User.create(user)

        const token = jwt.sign({ name: newUser.name, id: newUser._id}, process.env.JWT_SECRET)

        return res.status(201).json({ msg: "Usuário criado com sucesso!!!", token, userId: newUser._id })
    } catch(error) {
        return res.status(500).json({ error })
    }

}