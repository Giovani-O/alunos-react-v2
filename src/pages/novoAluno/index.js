import { ArrowUDownLeft } from '@phosphor-icons/react'
import './styles.css'
import { Link, useParams } from 'react-router-dom'

export default function NovoAluno() {
  const { alunoId } = useParams()

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
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Idade" />
          <button className="button" type="submit">
            {alunoId === '0' ? 'Cadastrar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </div>
  )
}
