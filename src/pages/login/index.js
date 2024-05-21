import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import './styles.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function login(event) {
    event.preventDefault()

    const data = { email, password }

    try {
      const response = await api.post('/api/Account/login', data)

      localStorage.setItem('@alunos-react:email', email)
      localStorage.setItem('@alunos-react:token', response.data.token)
      localStorage.setItem('@alunos-react:expiration', response.data.expiration)

      navigate('/alunos')
    } catch (error) {
      window.alert('Credenciais inválidas', error)
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={login}>
          <h1>Acesse sua conta</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}
