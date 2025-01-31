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
                        <img className="w-100" src="/images/project 1.jpg" alt="Landing page do infoproduto Emagrecimento Sem Segredos criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>ESS - Landing Page</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Esta é uma landing page para um infoproduto no nicho de emagrecimento denominado "Emagrecimento Sem Segredos", foi criado apenas para demonstrar minhas habilidades em desenvolvimento frontend e webdesign.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, JavaScript, React, React Icons, Bootstrap e Sass.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/ESS-Landing-Page" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="http://emagrecimento-sem-segredos.vercel.app/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 2.jpg" alt="Site institucional para uma empresa de consultoria criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>Borges Consulting - Site institucional</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este é um site institucional apenas de exemplo, no caso para uma empresa fictícia que presta serviços de consultoria, isto é apenas uma demonstração das minhas habilidades em desenvolvimento frontend e webdesign.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, JavaScript, React, React Router, React Icons, React Google Maps, Bootstrap e Sass.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/Borges-Consulting" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://borges-consulting.vercel.app/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 3.jpg" alt="Loja online de óculos VR criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>VR Motion - Loja online</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Esta é uma loja online ainda em andamento, ela está focada no nicho de óculos vr, e por enquanto é apenas uma demonstração das minhas habilidades em desenvolvimento frontend e webdesign.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, JavaScript, React, React Router, React Icons, Bootstrap e Sass.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/VR-Motion" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://vr-motion.vercel.app/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 4.jpg" alt="Quiz para teste de vício em compulsão criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>TVC Quiz</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este é um quiz para teste de vício em compulsão baseado em dados da OMS criado para ser adicionada a plataforma Socorre.me de Daniel Santos.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, Sass, JavaScript, PHP, Bootstrap, Chartjs.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/TVC-Quiz" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://socorre.me/quiz/pages" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 5.jpg" alt=" criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>AutoMails - Sistema web</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este é um mini sistema de envio de emails em massa usando SMTP para enviar emails de forma gratuita e rápida através de uma senha de aplicativo para que o site tenha acesso a uma conta de email de remetente.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, JavaScript, React, React Icons, React Router, Bootstrap, Sass, Python, Flask, etc.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/AutoMails" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://automails.vercel.app/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 6.jpg" alt="Landing Page para uma plataforma de aprendizado de criptomoedas criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>CriptoHacking - Landing Page</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Esta é uma landing page de exemplo para simular a venda do acesso a uma plataforma de cursos no nicho de criptomoedas denominada "CriptoHacking".</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, Sass, Bootstrap, JavaScript, Flask, Python.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/Criptohacking" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://criptohacking-sg0s.onrender.com" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 7.jpg" alt="Site institucional para uma agência de marketing digital e software house criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>Borges Company - Site institucional</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este é um site institucional criado para uma fictícia empresa prestadora de serviçõs de marketing digital e software house, é apenas para demonstrar meus conhecimentos na base da web (HTML, CSS, JS).</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, Sass, Bootstrap, JavaScript, Flask, Python.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/Borges-Company/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://borges-company-1c97.onrender.com" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
                        <img className="w-100" src="/images/project 8.jpg" alt="Chatbot para Telegram para conversão de moedas criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>KoalaBot - Telegram Chatbot</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este é um chatbot para Telegram com o objetivo de realizar conversões de moeda ele foi criado com objetivo de demonstrar minhas habilidades em automações como: criação de chatbot e integração com APIs seja do Telegram como da ExchangeRateAPI.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, Requests, etc.</p>
                        <div className="project-actions d-flex flex-column gap-2 w-100">
                            <a href="https://github.com/Manasses-Ndombele/KoalaBot/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/project 9.jpg" alt="Programa desktop para apresentação de dashboard com dados de receitas nutritivas criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>Foodboard - Dashboard</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este projeto é um programa desktop multiplataforma com objetivo de gerar receitas nutritivas para o usuário com base nos nutrientes e a quantidade em gramas selecionadas pelo usuário, as receitas são geradas através da SponnacularAPI.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, Flet (Flutter), Requests, etc.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="http://github.com/Manasses-Ndombele/FoodBoard/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://drive.google.com/file/d/1K28sSLdKTub67kWjkp6SMaAu6H63yyGn/view?usp=drive_link" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Fazer download</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/project 10.jpg" alt="Programa desktop para fazer recomendações de filmes e enviar via Whatsapp criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>YourNextFilms</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Este é um programa desktop multiplataforma criado com o objetivo de gerar recomendações de filmes baseado em dados recolhidos sobre os gêneros de filmes de interesse do usuário, essas mesmas recomendações são enviadas para o whatsapp do usuário através de um Bot.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>Python, Requests, etc.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/YourNextFilms/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://drive.google.com/file/d/1KAjvzSWeMHIXWW0rPnj4njdspxKMG47d/view?usp=drive_link" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGlobe />
                                    <span>Fazer download</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card p-3 d-flex flex-column gap-3 d-none">
                    <div className="project-img">
                        <img className="w-100" src="/images/project 11.jpg" alt="Portfólio freelancer versão 1 criado por Manassés Ndombele" />
                    </div>
                    <div className="project-description p-2">
                        <h3>Portfólio Freelancer v1.0</h3>
                        <p><span className="d-block fw-bold">Descrição</span>Esta é a versão 1.0 do meu portfólio atualmente já está na versão 3 que é esse mesmo, com mais funcionalidades como alertas de preenchimento de formulários via email e embreve na versão 3.1 vou tornar o site bilíngue expandindo para o Inglês e também com a opção de modo light e modo dark.</p>
                        <p><span className="d-block fw-bold">Tecnologias usadas</span>HTML, Sass, Bootstrap, JavaScript, Flask, Python.</p>
                        <div className="project-actions d-flex flex-column gap-2">
                            <a href="https://github.com/Manasses-Ndombele/Portfolio-Freelancer" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
                                <button type="button" className="action-btn ripple-btn w-100 rounded-2 bg-transparent d-flex justify-content-center align-items-center gap-2 text-center p-2 position-relative overflow-hidden" onMouseEnter={handleRipple}>
                                    <FaGithub />
                                    <span>Acessar repositório</span>
                                </button>
                            </a>
                            <a href="https://manassesndombele-sbmj.onrender.com/" target="_blank" rel="external" className="w-100 d-block text-decoration-none">
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
