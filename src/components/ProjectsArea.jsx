import { FaGithub, FaGlobe } from 'react-icons/fa'
import '../styles/components/container-description.sass'
import '../styles/components/projects-area.sass'

const handleRipple = (e) => {
    const button = e.currentTarget  
    const ripple = document.createElement("span")
    ripple.className = "ripple"  
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    button.appendChild(ripple)  
    setTimeout(() => {
      ripple.remove()
    }, 600)
}

const showMoreProjects = () => {
    let projectsContainers = document.querySelectorAll('div.project-card.d-none')
    if (projectsContainers.length > 0) {
        for (let i = 0; i < projectsContainers.length; i++) {
            if (i <= 2) {
                projectsContainers[i].classList.remove('d-none')
            } else {
                break
            }
        }
    } else {
        window.alert('Todos os projetos já estão sendo apresentados na página!')
    }
}

function ProjectsArea() {
    return (
        <div id="projects-area" className="mt-4 mb-5">
            <div className="container-description text-center">
                <h2 className="subtitle">Meus projetos</h2>
                <p>Nada melhor do que ver para crer, aqui estão alguns projetos que comprovam minhas habilidades!</p>
            </div>
            <div className="projects-cards d-flex flex-column gap-3">
                <div className="project-card p-3 d-flex flex-column gap-3">
                    <div className="project-img">
                        <img className="w-100" src="/images/AliScrapp project.png" alt="Webscrapping do site do Aliexpress criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>AliScrapp - Webscrapping</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3">
                    <div className="project-img">
                        <img className="w-100" src="/images/AutoMails project.png" alt="Site de automação de envio de emails criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>AutoMails - Automação de emails</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3">
                    <div className="project-img">
                        <img className="w-100" src="/images/Borges Company project.png" alt="Site institucional da Borges Company criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>Borges Company - Site institucional</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/Borges Consulting project.png" alt="Site institucional da Borges Consulting criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>Borges Consulting - Site institucional</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/CriptoHacking project.png" alt="Landing page da plataforma criptohacking criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>CriptoHacking - Landing Page</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/ESS Landing Page project.png" alt="Landing page do treinamento Emarecimento Sem Segredos criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>ESS - Landing Page</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/KoalaBot project.png" alt="Chatbot para Telegram criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>KoalaBot - Telegram Chatbot</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/TVC Quiz project.png" alt="Quiz para teste de vício em compulsão para Socorre.me criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>TVC - Quiz</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/VR Motion project.png" alt="VR Motion loja online de óculos VR criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>VR Motion - Loja online</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id deserunt nihil voluptatum, ut repudiandae dolore. Labore adipisci modi quas quis vero beatae vitae. Animi natus deserunt minima laborum molestiae.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, HTML, CSS, JS e BS</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Acessar site</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="action-container d-flex justify-content-center w-100">
                <button type="button" className="bg-transparent border-0 text-center p-0" onClick={showMoreProjects}>Veja mais projetos</button>
            </div>
        </div>
    )
}

export default ProjectsArea
