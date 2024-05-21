import './styles.css'

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <form>
          <h1>Acesse sua conta</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}
