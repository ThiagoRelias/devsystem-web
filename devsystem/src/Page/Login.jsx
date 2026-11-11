import React from 'react'

export default function Login() {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main className="container login">
            <section className="login-card">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <article className="form-control">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu E-mail" />
                    </article>

                    <article className="form-control">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite sua Senha" />
                    </article>

                    <button type="submit">Entrar</button>
                </form>
            </section>
        </main>
    )
}
