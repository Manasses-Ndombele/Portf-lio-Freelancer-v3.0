import '../styles/components/intro-area.sass'
import '../styles/components/container-description.sass'

function IntroArea() {
    return (
        <div id="intro-area" className="px-3 d-flex flex-column align-items-center gap-2 mb-4">
            <div className="profile-area d-flex flex-column align-items-center gap-2">
                <img src="/images/perfil 1.jpg" alt="Manassés Ndombele programador Freelancer" className="rounded-circle" />
                <p className="text-center"><strong>Manassés Ndombele</strong> - Desenvolvedor Fullstack</p>
            </div>
            <div className="container-description d-flex flex-column align-items-center text-center">
                <h1 className="text-uppercase title">Programação eficaz com paixão e propósito!</h1>
                <p>Todo mundo pode escrever um código mas eu me foco em criar soluções! Procuro entender primeiramente qual problema precisa ser resolvido de forma detalhada e depois avalio suas necessidades para que no final seja entregue uma solução para os seus clientes!</p>
                <a href="#budget-container" className="w-100 d-block text-decoration-none">
                    <button type="button" className="btn-cta border-0 w-100 rounded-3 py-2">Pedir orçamento</button>
                </a>
            </div>
        </div>
    )
}

export default IntroArea
