import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Alunos from './pages/alunos'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
    </BrowserRouter>
  )
}
