import { useEffect } from 'react'
import { PiBuildingApartmentFill } from 'react-icons/pi'
import { FaMoneyBillTrendUp, FaChrome, FaPersonRays } from 'react-icons/fa6'
import { SiShopify, SiChatbot, SiScrapy } from 'react-icons/si'
import { MdQuiz, MdForum } from 'react-icons/md'
import { FaBlogger, FaChartPie } from 'react-icons/fa'
import { IoConstruct } from 'react-icons/io5'
import { TbApi } from 'react-icons/tb'
import { RiRobot2Fill } from 'react-icons/ri'
import { IoMdMailUnread } from 'react-icons/io'
import '../styles/components/solutions-area.sass'
import '../styles/components/container-description.sass'

function SolutionsArea() {
    useEffect(() => {
        let iconContainers = document.querySelectorAll('div.icon-container')
        var currentIndex = 0
        const changeContainer = () => {
            iconContainers[currentIndex].classList.replace('activated', 'deactivated')
            currentIndex = (currentIndex + 1) % iconContainers.length
            iconContainers[currentIndex].classList.replace('deactivated', 'activated')
        }

        const intervalId = setInterval(changeContainer, 6000);

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div id="solutions-area" className="p-3 mt-2">
            <div className="container-description text-center">
                <h2 className="text-capitalize subtitle">O que eu posso fazer por você?</h2>
                <p>Para mim toda a idéia pode ser transformada em um código, e todo código pode ser transformado em uma solução para o mercado! Eis algumas das soluções que posso prover:</p>
            </div>
            <div className="solutions-containers w-100 position-relative overflow-hidden">
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 activated">
                    <PiBuildingApartmentFill />
                    <h3>Site institucional</h3>
                    <p>Sites que apresentam a sua empresa e deixam a sua marca visível</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <FaMoneyBillTrendUp />
                    <h3>Landing page</h3>
                    <p>Páginas web com o objetivo de vender um produto / serviço</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <SiShopify />
                    <h3>Loja online</h3>
                    <p>Sites que apresentam uma vitrine de produtos para serem vendidos</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <MdQuiz />
                    <h3>Quiz</h3>
                    <p>Quiz como meio de interação com os leads em um funil de vendas</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <FaBlogger />
                    <h3>Blog</h3>
                    <p>Sites para criação de contéudo dinâmico</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <FaChartPie />
                    <h3>Dashboard</h3>
                    <p>Sites com resultados gráficos de análise de dados</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <IoConstruct />
                    <h3>Sistemas web</h3>
                    <p>Sites com funcionalidades específicas para a resolução de um determinado problema</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <TbApi />
                    <h3>Integrações com APIs</h3>
                    <p>Programs que se conectem com quaisquer APIs</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <TbApi />
                    <h3>Criação de APIs</h3>
                    <p>APIs seguras e práticas com FastAPI ou Flask</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <RiRobot2Fill />
                    <h3>Bot</h3>
                    <p>Automaões de tarefas repetitivas</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <SiChatbot />
                    <h3>Chatbot</h3>
                    <p>Chatbot para diversas plataformas (sites, Telegram e Whatsapp)</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <SiScrapy />
                    <h3>Webscrapping</h3>
                    <p>Raspagem de dados em sites</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <IoMdMailUnread />
                    <h3>Automação de emails</h3>
                    <p>Envios de emails em massa de forma automática</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <FaChrome />
                    <h3>Criação de extensões do Chrome</h3>
                    <p>Programas para adicionar funções específicas ao Chrome</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <MdForum />
                    <h3>Fórum</h3>
                    <p>Foruns interativos e sociais</p>
                </div>
                <div className="icon-container w-100 d-flex flex-column align-items-center gap-2 text-center position-absolute top-0 start-0 deactivated">
                    <FaPersonRays />
                    <h3>Portfólio</h3>
                    <p>Portfólio para profissionais de qualquer área</p>
                </div>
            </div>
        </div>
    )
}

export default SolutionsArea
