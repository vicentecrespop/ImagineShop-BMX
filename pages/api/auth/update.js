import { initMongoose } from "@/db/connection";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(401).json({ error: "Problema na requisição." })
    }

    await initMongoose()

    let {name, email, password, confirmPassword} = req.body

    if(!email || !password || !confirmPassword) {
        return res.status(401).json({ error: "Informe o e-mail e a senha."})
    }

    if(password !== confirmPassword) {
        return res.status(401).json({ error: "As senhas não conferem!" })
    }

    const user = await User.findOne({ email })
    if(!user) {
        return res.status(401).json({ error: "Usuário não encontrado." })
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    if(!name) {
        name = user.name
    }

    const token = req.headers.authorization
    const secret = process.env.JWT_SECRET
    try {
        jwt.verify(token, secret, async (err, encoded) => {
            if(err) {
                return res.status(401).json({ err })
            }
    
            if(encoded && encoded.id === user._id.toString()) {
                await User.updateOne({ _id: user._id}, {name, password: passwordHash})
                return res.status(200).json({ msg: "Usuário atualizado com sucesso!!" })
            } else {
                return res.status(401).json({ error: "Você não possui autorização para alterar os dados desta conta."})
            }
        })
    } catch(error) {
        return res.status(501).json({ error })
    }

}