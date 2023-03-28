import { initMongoose } from '@/db/connection'
import User from '@/models/User'
import jwt from 'jsonwebtoken' 

export default async function handler(req, res) {
    if(req.method !== 'GET') {
        return res.status(401).json({ error: "Problema com a requisição" })
    }

    await initMongoose()

    const token = req.headers.authorization
    const secret = process.env.JWT_SECRET

    try {
        jwt.verify(token, secret, async (err, decoded) => {
            if(err) {
                return res.status(401).json({ error: "Token inválido."})
            }

            if(decoded) {
                const user = await User.findOne({ _id: decoded.id })
                if(!user) {
                    return res.status(401).json({ error: "Usuário não encontrado!" })
                }
                return res.status(200).json({ user })
            }
            return res.status(501).json({ error: "Problema com token Jwt."})
        })
    } catch(error) {
        return res.status(501).json({ error })
    }

    
}