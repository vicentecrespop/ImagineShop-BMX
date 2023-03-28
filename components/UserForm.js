import { useState } from "react"
import { useRouter } from "next/router"

export default function UserForm({ newUser = true }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [msg, setMsg] = useState('')
    const router = useRouter()

    const submitForm = (e) => {
        e.preventDefault()

        newUser ? registerUser() : updateUser()
    }

    const registerUser = async () => {

        const loadingBtn = document.querySelector('svg.loadingAnimation')
        loadingBtn.classList.toggle('d-none')
        
        const user = {name, email, password, confirmPassword}
        await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setMsg(data.error)
                loadingBtn.classList.toggle('d-none')
            } else {
                router.push('/login')
            }
        })
        .catch(e => console.log(e))
    }

    const updateUser = async () => {
        console.log('update')
    }

    return (
        <div className="user-form--container d-flex flex-column align-items-center w-100 p-5">
            {msg && (
                <div className="msg-container p-5 mb-5 bg-danger text-white text-center">
                    <span className="fw-bold fs-5">{msg}</span>
                </div>
            )}
            <form onSubmit={(e) => submitForm(e)} className="user-form d-flex p-5 flex-column align-items-center text-center">
                <div className="user-form--input d-flex flex-column mb-4">
                    <label className="fs-5 fw-bold mb-4">NOME</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="fs-5 py-3 px-5 border"/>
                </div>
                <div className="user-form--input d-flex flex-column mb-4">
                    <label className="fs-5 fw-bold mb-4">E-MAIL</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="fs-5 py-3 px-5 border"/>
                </div>
                <div className="user-form--input d-flex flex-column mb-4">
                    <label className="fs-5 fw-bold mb-4">SENHA</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="fs-5 py-3 px-5 border"/>
                </div>
                <div className="user-form--input d-flex flex-column mb-4">
                    <label className="fs-5 fw-bold mb-4">CONFIRMAÇÃO DE SENHA</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="fs-5 py-3 px-5 border"/>
                </div>
                <button type="submit" className="relative d-flex align-items-center fs-5 fw-bold py-3 px-5 border bg-success text-white rounded-5 mt-6">
                    {newUser ? 'ENVIAR' : 'ATUALIZAR'}
                    <svg className="loadingAnimation d-none" viewBox="0 0 24 24"></svg>
                </button>
            </form>
        </div>
    )
}