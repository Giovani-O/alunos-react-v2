import './styles.css'
import {
  MagnifyingGlass,
  Pencil,
  SignOut,
  TrashSimple,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function Alunos() {
  return (
    <div className="aluno-container">
      <header>
        <span>
          Bem vindo(a) <strong>Gio</strong>
        </span>
        <Link className="button add-button" to="aluno/novo">
          Novo aluno
        </Link>
        <button type="button">
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
        <li>
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
        </li>

        <li>
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
        </li>
      </ul>
    </div>
  )
}
