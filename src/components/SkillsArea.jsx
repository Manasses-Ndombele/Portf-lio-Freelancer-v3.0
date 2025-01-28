import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoSass, IoLogoDocker } from 'react-icons/io5'
import { FaPython } from 'react-icons/fa6'
import { SiPhp, SiDjango, SiFlask, SiMysql, SiSqlite, SiVite, SiGnubash } from 'react-icons/si'
import { LuFileJson } from 'react-icons/lu'

function SkillsArea() {
    return (
        <div id="skills-area">
            <div className="container-title">
                <h2>Minhas habilidades</h2>
                <p><strong>AVISO:</strong> Esta é a parte deste portfólio com constantes atualizações pois as minhas habilidades vem se aprimorando a cada dia para fazer o melhor serviço com as melhores ferramentas!</p>
            </div>
            <div className="skills-subcategory-containers">
                <h3>Habilidades técnicas</h3>
                <h4>1. Frontend</h4>
                <div className="skills-containers">
                    <div className="skill-container">
                        <FaHtml5 />
                        <p>HTML</p>
                    </div>
                    <div className="skill-container">
                        <FaCss3Alt />
                        <p>CSS</p>
                    </div>
                    <div className="skill-container">
                        <IoLogoJavascript />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-container">
                        <FaBootstrap />
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill-container">
                        <IoLogoSass />
                        <p>Sass</p>
                    </div>
                    <div className="skill-container">
                        <FaReact />
                        <p>React</p>
                    </div>
                </div>
                <h4>2. Backend</h4>
                <div className="skills-containers">
                    <div className="skill-container">
                        <FaPython />
                        <p>Python</p>
                    </div>
                    <div className="skill-container">
                        <SiPhp />
                        <p>PHP</p>
                    </div>
                    <div className="skill-container">
                        <SiDjango />
                        <p>Django</p>
                    </div>
                    <div className="skill-container">
                        <SiFlask />
                        <p>Flask</p>
                    </div>
                    <div className="skill-container">
                        <SiMysql />
                        <p>MySQL</p>
                    </div>
                    <div className="skill-container">
                        <SiSqlite />
                        <p>SQLite</p>
                    </div>
                </div>
                <h4>3. Outras tecnologias</h4>
                <div className="skills-containers">
                    <div className="skill-container">
                        <LuFileJson />
                        <p>JSON</p>
                    </div>
                    <div className="skill-container">
                        <FaGitAlt />
                        <p>Git</p>
                    </div>
                    <div className="skill-container">
                        <IoLogoDocker />
                        <p>Docker</p>
                    </div>
                    <div className="skill-container">
                        <SiVite />
                        <p>Vite</p>
                    </div>
                    <div className="skill-container">
                        <FaGithub />
                        <p>Github</p>
                    </div>
                    <div className="skill-container">
                        <SiGnubash />
                        <p>GNU Bash</p>
                    </div>
                </div>
            </div>
            <div className="skills-subcategory">
                <h3>Habilidades comportamentais</h3>
                <div className="typed-skills-container">
                    <p className="auto-typed-text"></p>
                </div>
            </div>
        </div>
    )
}

export default SkillsArea
