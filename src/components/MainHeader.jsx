import { BiMenu } from "react-icons/bi"
import { BiMenuAltRight } from "react-icons/bi";

function MainHeader() {
    return (
        <header>
            <div className="main-area">
                <a href="/" className="logo-brand-area">M</a>
                <button type="button">
                    <span className="closed-menu">
                        <BiMenu />
                    </span>
                    <span className="opened-menu">
                        <BiMenuAltRight />
                    </span>
                </button>
            </div>
            <nav>
                <a href="#solutions-area">Serviços</a>
                <a href="#projects-area">Projetos</a>
                <a href="#history-area">Quem sou eu?</a>
                <a href="#contacts">Contactos</a>
            </nav>
            <div className="main-cta-header">
                <button type="button" className="btn-cta">Pedir orçamento</button>
            </div>
        </header>
    )
}

export default MainHeader
