import './styles.css'
import {
  MagnifyingGlass,
  Pencil,
  SignOut,
  TrashSimple,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export default function Alunos() {
  const [nome, setNome] = useState('')
  const [alunos, setAlunos] = useState([])

  const email = localStorage.getItem('@alunos-react:email')
  const token = localStorage.getItem('@alunos-react:token')
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    api.get('api/alunos', authorization).then((response) => {
      setAlunos(response.data)
    })
  }, [])

  function logout() {
    try {
      localStorage.removeItem('@alunos-react:email')
      localStorage.removeItem('@alunos-react:token')
      localStorage.removeItem('@alunos-react:expiration')
      authorization.headers = ''
      navigate('/')
    } catch {
      console.error('Erro ao efetuar logout')
    }
  }

  const navigate = useNavigate()

  return (
    <div className="aluno-container">
      <header>
        <span>
          Bem vindo(a) <strong>{email}</strong>
        </span>
        <Link className="button add-button" to="/aluno/novo/0">
          Novo aluno
        </Link>
        <button type="button" onClick={logout}>
          <SignOut size={32} color="#17202a" />
        </button>
      </header>

      <form className="filter-form">
        <input type="text" placeholder="Nome" />
        <button>
          <MagnifyingGlass size={32} />
        </button>
      </form>
      <h1>Alunos</h1>
      <ul>
        {alunos.map((aluno) => {
          return (
            <li key={aluno.id}>
              <div className="card-content">
                <div className="card-info">
                  <b>Nome: </b>
                  {aluno.nome}
                  <br />
                  <b>Email: </b>
                  {aluno.email}
                  <br />
                  <b>Idade: </b>
                  {aluno.idade}
                  <br />
                </div>
                <div className="action-buttons">
                  <button type="button">
                    <Pencil size={32} color="#17202a" />
                  </button>
                  <button type="button">
                    <TrashSimple size={32} color="#17202a" />
                  </button>
                </div>
              </div>
            </li>
          )
        })}

        {/* <li>
          <div className="card-content">
            <div className="card-info">
              <b>Nome: </b>Gio
              <br />
              <b>Email: </b>gio@mail.com
              <br />
              <b>Idade: </b>25
              <br />
            </div>
            <div className="action-buttons">
              <button type="button">
                <Pencil size={32} color="#17202a" />
              </button>
              <button type="button">
                <TrashSimple size={32} color="#17202a" />
              </button>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  )
}
