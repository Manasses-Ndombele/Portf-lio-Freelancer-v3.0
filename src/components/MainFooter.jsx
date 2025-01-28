import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import '../styles/components/main-footer.sass'

function MainFooter() {
    return (
        <footer className="mt-5">
            <div className="contacts-container">
                <h2 className="text-capitalize text-center">Redes sociais e contatos</h2>
                <nav className="w-100 d-flex align-items-center justify-content-center gap-3 mb-2">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaTelegram /></a>
                    <a href="#"><FaWhatsapp /></a>
                    <a href="#"><SiGmail /></a>
                </nav>
            </div>
            <div className="copyright text-center">
                &copy; 2025 - Desenvolvido por Manassés Ndombele
            </div>
        </footer>
    )
}

export default MainFooter
