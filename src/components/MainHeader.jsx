import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BiMenuAltRight } from 'react-icons/bi'
import '../styles/components/main-header.sass'

function MainHeader() {
    const [mainMenuStatus, setMainMenuStatus] = useState(false)

    return (
        <header className="position-fixed top-0 start-0 w-100">
            <div className="main-area d-flex align-items-center justify-content-between px-3 py-2">
                <a href="/" className="brand-container d-flex gap-2 text-decoration-none">
                    <span className="logo-brand-area rounded-circle d-flex align-items-center justify-content-center">M</span>
                    <span className="name-brand">Dev<br />Manasses</span>
                </a>
                <button type="button" className="main-menu-btn border-0 bg-transparent p-0" onClick={() => { setMainMenuStatus(!mainMenuStatus) }}>
                    <span className={`closed-menu ${mainMenuStatus ? 'd-none' : 'd-block'}`}>
                        <BiMenu />
                    </span>
                    <span className={`opened-menu ${mainMenuStatus ? 'd-block' : 'd-none'}`}>
                        <BiMenuAltRight />
                    </span>
                </button>
            </div>
            <menu type="toolbar" className={`main-menu ${mainMenuStatus ? 'opened' : 'closed'} p-0 m-0`}>
                <nav className="d-flex flex-column align-items-center gap-2 my-2">
                    <a href="#solutions-area" className="text-decoration-none">Serviços</a>
                    <a href="#projects-area" className="text-decoration-none">Projetos</a>
                    <a href="#history-area" className="text-decoration-none">Quem sou eu?</a>
                </nav>
                <a href="#budget-container" className="main-cta-header d-block w-100 text-decoration-none d-flex justify-content-center p-3">
                    <button type="button" className="btn-cta border-0 w-100 rounded-3 py-2">Pedir orçamento</button>
                </a>
            </menu>
        </header>
    )
}

export default MainHeader
