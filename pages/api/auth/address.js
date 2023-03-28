import { initMongoose } from "@/db/connection";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(401).json({ error: "Problema na requisição" })
    }

    await initMongoose()

    const { city, state, cep, number, complement } = req.body

    if(!city || !state || !cep || !number) {
        return res.status(401).json({ error: "Por favor, preencha todos os campos."})
    }

    const token = req.headers.authorization
    const secret = process.env.JWT_SECRET
    try {
        jwt.verify(token, secret, async (error, encoded) => {
            if(error) {
                return res.status(401).json({ error })
            }

            if(encoded) {
                await User.updateOne({ _id: encoded.id }, {city, state, cep, number, complement})
                return res.status(200).json({ msg: "Endereço atualizado com sucesso!" })
            }

            return res.status(401).json({ error: "Você não possui autorização para alterar endereço desta conta."})
        })
    } catch(error) {
        return res.status(501).json({ error })
    }
}