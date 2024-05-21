import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Alunos from './pages/alunos'
import NovoAluno from './pages/novoAluno'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/aluno/novo/:alunoId" element={<NovoAluno />} />
      </Routes>
    </BrowserRouter>
  )
}
