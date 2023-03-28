import { useState } from "react"
import { useRouter } from "next/router"

export default function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const router = useRouter()

    const login = async (e) => {
        e.preventDefault()

        const loadingBtn = document.querySelector('svg.loadingAnimation')
        loadingBtn.classList.toggle('d-none')

        const user = {email, password}

        await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error) {
                setMsg(data.error)
                loadingBtn.classList.toggle('d-none')
            } else {
                loadingBtn.classList.toggle('d-none')
            }
            if(data.token) {
                sessionStorage.setItem('jwt', data.token)
                sessionStorage.setItem('id', data.userId)
                router.push('/')
            }
        })
        .catch(e => console.log(e))
    }
    
    return (
        <div className="login-form--container w-100 p-5">
            {msg && (
                <div className="msg-container p-5 mb-5 bg-danger text-white text-center">
                    <span className="fw-bold fs-5">{msg}</span>
                </div>
            )}
            <form onSubmit={(e) => login(e)} className="login-form d-flex flex-column align-items-center text-center">
                <div className="login-form--input d-flex flex-column mb-4">
                    <label className="fs-5 fw-bold mb-4">E-MAIL</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="fs-5 py-3 px-5 border"/>
                </div>
                <div className="login-form--input d-flex flex-column mb-4">
                    <label className="fs-5 fw-bold mb-4">SENHA</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="fs-5 py-3 px-5 border"/>
                </div>
                <button type="submit" className="position-relative d-flex align-items-center fs-5 fw-bold py-3 px-5 border rounded-5 bg-success text-white mt-6">
                    ENTRAR
                    <svg className='loadingAnimation d-none' viewBox="0 0 24 24"></svg>
                </button>
            </form>
        </div>
    )
}