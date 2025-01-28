import { useEffect } from 'react'
import Typed from 'typed.js'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoSass, IoLogoDocker } from 'react-icons/io5'
import { FaPython } from 'react-icons/fa6'
import { SiPhp, SiDjango, SiFlask, SiMysql, SiSqlite, SiVite, SiGnubash } from 'react-icons/si'
import { LuFileJson } from 'react-icons/lu'
import '../styles/components/container-description.sass'
import '../styles/components/skills-area.sass'

function SkillsArea() {
    useEffect(() => {
        var typedText = new Typed('.auto-typed-text', {
            strings: ['Boa comunicação', 'Gestão de tempo', 'Resolução de problemas', 'Criatividade', 'Autodidatismo'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        })
    }, [])

    return (
        <div id="skills-area" className="p-3">
            <div className="container-description p-2 text-center">
                <h2 className="subtitle text-capitalize">Minhas habilidades</h2>
                <p><strong>AVISO:</strong> Esta é a parte deste portfólio com constantes atualizações pois as minhas habilidades vem se aprimorando a cada dia para fazer o melhor serviço com as melhores ferramentas!</p>
            </div>
            <div className="skills-subcategory-containers">
                <h3 className="text-uppercase">Habilidades técnicas</h3>
                <h4 className="my-3">1. Frontend</h4>
                <div className="skills-containers d-grid gap-3 justify-content-center">
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaHtml5 />
                        <p>HTML</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaCss3Alt />
                        <p>CSS</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <IoLogoJavascript />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaBootstrap />
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <IoLogoSass />
                        <p>Sass</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaReact />
                        <p>React</p>
                    </div>
                </div>
                <h4 className="my-3">2. Backend</h4>
                <div className="skills-containers d-grid gap-3 justify-content-center">
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaPython />
                        <p>Python</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiPhp />
                        <p>PHP</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiDjango />
                        <p>Django</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiFlask />
                        <p>Flask</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiMysql />
                        <p>MySQL</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiSqlite />
                        <p>SQLite</p>
                    </div>
                </div>
                <h4 className="my-3">3. Outras tecnologias</h4>
                <div className="skills-containers d-grid gap-3 justify-content-center">
                    <div className="skill-container d-flex flex-column align-items-start">
                        <LuFileJson />
                        <p>JSON</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaGitAlt />
                        <p>Git</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <IoLogoDocker />
                        <p>Docker</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiVite />
                        <p>Vite</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <FaGithub />
                        <p>Github</p>
                    </div>
                    <div className="skill-container d-flex flex-column align-items-start">
                        <SiGnubash />
                        <p>GNU Bash</p>
                    </div>
                </div>
            </div>
            <div className="skills-subcategory mt-3">
                <h3 className="text-uppercase">Habilidades comportamentais</h3>
                <div className="typed-skills-container">
                    <span className="auto-typed-text"></span>
                </div>
            </div>
        </div>
    )
}

export default SkillsArea
