import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import '../styles/components/main-footer.sass'

function MainFooter() {
    return (
        <footer className="mt-5 pb-3">
            <div className="contacts-container">
                <h2 className="text-capitalize text-center">Redes sociais e contatos</h2>
                <nav className="w-100 d-flex align-items-center justify-content-center gap-3 mb-2">
                    <a href="https://github.com/Manasses-Ndombele/" target="_blank" rel="external"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ManassesNdombele" target="_blank" rel="external"><FaLinkedin /></a>
                    <a href="https://t.me/+244923224456" target="_blank" rel="external"><FaTelegram /></a>
                    <a href="https://wa.me/244923224456?text=Olá,%20gostaria%20de%20saber%20quanto%20cobrarias%20por%20um%20projeto%20com%20o%20seguinte%20objetivo:%20" target="_blank" rel="external"><FaWhatsapp /></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manassesndombelefreelancer@gmail.com?subject=Orçamento%20para%20projeto%20freelancer&body=Olá,%20gostaria%20de%20saber%20quanto%20cobrarias%20por%20um%20projeto%20com%20o%20seguinte%20objetivo:%20" target="_blank" rel="external"><SiGmail /></a>
                </nav>
            </div>
            <div className="copyright text-center">
                &copy; 2025 - Desenvolvido por Manassés Ndombele
            </div>
        </footer>
    )
}

export default MainFooter
