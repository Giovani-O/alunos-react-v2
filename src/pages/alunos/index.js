import './styles.css'
import { Pencil, SignOut, TrashSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export default function Alunos() {
  const [alunos, setAlunos] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filtro, setFiltro] = useState([])

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

  async function editAluno(id) {
    try {
      navigate(`/aluno/novo/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  function searchAlunos(searchValue) {
    setSearchInput(searchValue)

    if (searchInput !== '') {
      const dadosFiltrados = alunos.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      })
      setFiltro(dadosFiltrados)
    } else {
      setFiltro(alunos)
    }
  }

  async function deleteAluno(id) {
    try {
      if (window.confirm('Deseja excluir o aluno de id = ' + id + '?')) {
        await api.delete(`/api/alunos/${id}`, authorization)
        setAlunos(alunos.filter((aluno) => aluno.id !== id))
      }
    } catch (error) {
      console.error(error)
    }
  }

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
        <input
          type="text"
          placeholder="Buscar por nome..."
          onChange={(e) => searchAlunos(e.target.value)}
        />
      </form>
      <h1>Alunos</h1>
      {searchInput.length > 1 ? (
        <ul>
          {filtro.map((aluno) => {
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
                      <Pencil
                        size={32}
                        color="#17202a"
                        onClick={() => editAluno(aluno.id)}
                      />
                    </button>
                    <button type="button">
                      <TrashSimple size={32} color="#17202a" />
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
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
                      <Pencil
                        size={32}
                        color="#17202a"
                        onClick={() => editAluno(aluno.id)}
                      />
                    </button>
                    <button type="button" onClick={() => deleteAluno(aluno.id)}>
                      <TrashSimple size={32} color="#17202a" />
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
