import '../styles/components/container-description.sass'
import '../styles/components/history-area.sass'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function HistoryArea() {
    return (
        <div id="history-area" className="p-3">
            <div className="container-description text-center">
                <h2 className="subtitle">Quem sou eu?</h2>
            </div>
            <div className="history-container">
                <div className="img-container mb-3 d-flex justify-content-center">
                    <img src="/images/perfil 2.png" alt="Manassés Ndombele Desenvolvedor Freelancer" />
                </div>
                <div className="history-description">
                    <RiDoubleQuotesL />Minha história como programador começou em 2020, motivada por um desejo de aprender Segurança da informação (Hacking) começando com o aprendizado autodidata de Python. O que começou como uma curiosidade sobre segurança da informação rapidamente evoluiu para uma paixão por criar e programar. Ao longo dessa trajetória, conquistei certificações importantes, como as de Python, HTML5, JavaScript, MySQL, SEO, Marketing digital... Com destaque para formações do Curso em Vídeo do professor Gustavo Guanabara. Essas qualificações, aliadas à minha experiência prática, moldaram-me como um profissional focado em resultados. Hoje meu objetivo principal é transformar códigos em degraus para que o seu negócio possa escalar!<RiDoubleQuotesR />
                </div>
            </div>
        </div>
    )
}

export default HistoryArea
