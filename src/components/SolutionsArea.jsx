import { PiBuildingApartmentFill } from "react-icons/pi"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { SiShopify } from "react-icons/si"
import { MdQuiz } from "react-icons/md"
import { FaBlogger } from "react-icons/fa"
import { FaChartPie } from "react-icons/fa"
import { IoConstruct } from "react-icons/io5"
import { TbApi } from "react-icons/tb"
import { RiRobot2Fill } from "react-icons/ri"
import { SiChatbot } from "react-icons/si"
import { SiScrapy } from "react-icons/si"
import { IoMdMailUnread } from "react-icons/io"
import { FaChrome } from "react-icons/fa6"
import { MdForum } from "react-icons/md"
import { FaPersonRays } from "react-icons/fa6"

function SolutionsArea() {
    return (
        <div id="solutions-area">
            <div className="container-description">
                <h2>O que eu posso fazer por você?</h2>
                <p>Para mim toda a idéia pode ser transformada em um código, e todo código pode ser transformado em uma solução para o mercado! Eis algumas das soluções que posso prover:</p>
            </div>
            <div className="solutions-containers">
                <div className="icon-container">
                    <PiBuildingApartmentFill />
                    <p>Site institucional</p>
                </div>
                <div className="icon-container">
                    <FaMoneyBillTrendUp />
                    <p>Landing page</p>
                </div>
                <div className="icon-container">
                    <SiShopify />
                    <p>Loja online</p>
                </div>
                <div className="icon-container">
                    <MdQuiz />
                    <p>Quiz</p>
                </div>
                <div className="icon-container">
                    <FaBlogger />
                    <p>Blog</p>
                </div>
                <div className="icon-container">
                    <FaChartPie />
                    <p>Dashboard</p>
                </div>
                <div className="icon-container">
                    <IoConstruct />
                    <p>Sistemas web</p>
                </div>
                <div className="icon-container">
                    <TbApi />
                    <p>Integrações com APIs</p>
                </div>
                <div className="icon-container">
                    <TbApi />
                    <p>Criação de APIs</p>
                </div>
                <div className="icon-container">
                    <RiRobot2Fill />
                    <p>Bot</p>
                </div>
                <div className="icon-container">
                    <SiChatbot />
                    <p>Chatbot</p>
                </div>
                <div className="icon-container">
                    <SiScrapy />
                    <p>Webscrapping</p>
                </div>
                <div className="icon-container">
                    <IoMdMailUnread />
                    <p>Automação de emails</p>
                </div>
                <div className="icon-container">
                    <FaChrome />
                    <p>Criação de extensões do Chrome</p>
                </div>
                <div className="icon-container">
                    <MdForum />
                    <p>Fórum</p>
                </div>
                <div className="icon-container">
                    <FaPersonRays />
                    <p>Portfólio</p>
                </div>
            </div>
        </div>
    )
}

export default SolutionsArea
