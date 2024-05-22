import { ArrowUDownLeft } from '@phosphor-icons/react'
import './styles.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export default function NovoAluno() {
  const [id, setId] = useState(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState(0)

  const { alunoId } = useParams()
  const navigate = useNavigate()

  const token = localStorage.getItem('@alunos-react:token')
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    if (alunoId === '0') return
    else loadAluno()
  }, [alunoId])

  async function loadAluno() {
    try {
      const response = await api.get(`/api/Alunos/${alunoId}`, authorization)

      setId(response.data.id)
      setNome(response.data.nome)
      setEmail(response.data.email)
      setIdade(response.data.idade)
    } catch (error) {
      console.error(error)
      navigate('/alunos')
    }
  }

  async function saveOrUpdate(event) {
    event.preventDefault()

    const data = {
      nome,
      email,
      idade,
    }

    try {
      if (alunoId === '0') {
        await api.post('/api/alunos', data, authorization)
      } else {
        data.id = id
        await api.put(`/api/alunos/${id}`, data, authorization)
      }
    } catch (error) {
      console.error(error)
    }
    navigate('/alunos')
  }

  return (
    <div className="novo-aluno-container">
      <div className="content">
        <section className="form">
          <h1>
            {alunoId === '0' ? 'Cadastrar novo aluno' : 'Atualizar informações'}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            eaque error nemo quod possimus minima eum molestiae.
          </p>
          <Link className="back-link" to="/alunos">
            <ArrowUDownLeft size={24} />
            Retornar
          </Link>
        </section>
        <form onSubmit={saveOrUpdate}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <button className="button" type="submit">
            {alunoId === '0' ? 'Cadastrar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </div>
  )
}
