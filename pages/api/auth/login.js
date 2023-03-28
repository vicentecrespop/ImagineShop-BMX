import { initMongoose } from "@/db/connection"
import User from "@/models/User"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    await initMongoose()

    if(req.method !== 'POST') {
        return res.status(401).json({ error: "Problema na requisição." })
    }

    const {email, password} = req.body

    if(!email || !password) {
        return res.status(401).json({ error: "Por favor, preencha todos os campos!" })
    }

    const user = await User.findOne({ email })
    if(!user) {
        return res.status(401).json({ error: "Não há usuários cadastrados com esse e-mail!"})
    }

    const correctPassword = await bcrypt.compare(password, user.password)
    if(!correctPassword) {
        return res.status(401).json({ error: "Senha inválida!" })
    }

    const token = jwt.sign({name: user.name, email: user.email, id: user._id}, process.env.JWT_SECRET)

    return res.status(200).json({msg: "Você está autenticado!", token, userId: user._id})

}