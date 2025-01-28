import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function MainFooter() {
    return (
        <footer>
            <div className="contacts-container">
                <h2>Redes sociais e contatos</h2>
                <nav>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaTelegram /></a>
                    <a href="#"><FaWhatsapp /></a>
                    <a href="#"><SiGmail /></a>
                </nav>
            </div>
            <div className="copyright">
                &copy; 2025 - Desenvolvido por Manassés Ndombele
            </div>
        </footer>
    )
}

export default MainFooter
