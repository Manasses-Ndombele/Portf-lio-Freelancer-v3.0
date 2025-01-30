import { useState } from 'react'
import ModalStatus from './ModalStatus'
import '../styles/components/container-description.sass'
import '../styles/components/budget-container.sass'

function BudgetContainer() {
    const [emailStatus, setEmailStatus] = useState({
        title: null,
        body: null
    })

    function submitEmail() {
        let btnForm = document.querySelector('button#send-form-btn')
        btnForm.querySelector('span').classList.add('d-none')
        btnForm.querySelector('div').classList.remove('d-none')
        btnForm.setAttribute('disabled', '')
        let mainForm = document.forms[0]
        let form = {
            senderEmail: 'ndombelemanasses@gmail.com',
            senderName: document.querySelector('input#name-field').value,
            senderServerEmail: 'google',
            senderPasswordEmail: 'qofo vhqu ufjm fewq',
            recipientsEmails: ['manassesndombelefreelancer@gmail.com'],
            subject: document.querySelector('input#project-name-field').value,
            message: `${document.querySelector('textarea#description-field').value}\n\nForma de contacto: ${document.querySelector('input#contact-field').value}`
        }
    
        const sendForm = async () => {
            try {
                const response = await fetch("https://automails.onrender.com/api/send-emails", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form)
                })
    
                let message = null
                let modalBtn = document.querySelector('button#open-modal-btn')
                if (!response.ok) {
                    message = 'Houve um erro no envio dos emails tente novamente mais tarde! Certifique-se de que está conectado a internet e recarregue a página!'
                    setEmailStatus({
                        title: 'Erro',
                        body: message
                    })

                    btnForm.querySelector('span').classList.remove('d-none')
                    btnForm.querySelector('div').classList.add('d-none')
                    btnForm.removeAttribute('disabled', '')
                    modalBtn.click()
                    throw new Error(message)
                }
    
                const emailsSent = await response.json()
                if (emailsSent.erro) {
                    console.log(emailsSent)
                    message = 'Houve um erro no processamento da mensagem tente mais tarde, ou procure me contactar através dos links abaixo, porfavor!'
                    setEmailStatus({
                        title: 'Erro',
                        body: message
                    })

                    btnForm.querySelector('span').classList.remove('d-none')
                    btnForm.querySelector('div').classList.add('d-none')
                    btnForm.removeAttribute('disabled', '')
                    modalBtn.click()
                    console.error(message)
                } else {
                    message = 'Ok. Muito obrigado por confiar seu projeto a mim assim que possível vou analisar e te passar o orçamento do projeto através do contato informado abaixo!'
                    setEmailStatus({
                        title: 'Sucesso!',
                        body: message
                    })

                    btnForm.querySelector('span').classList.remove('d-none')
                    btnForm.querySelector('div').classList.add('d-none')
                    btnForm.removeAttribute('disabled', '')
                    modalBtn.click()
                    mainForm.reset()
                }
            } catch (error) {
                console.log(emailsSent)
                message = 'Houve um erro ao tentar enviar a mensagem! Verifique atentamente a sua conexão com a internet porfavor! Tente novamente ou me contacte através dos links abaixo!'
                console.error(error)
                console.error(message)
                setEmailStatus({
                    title: 'Erro',
                    body: message
                })

                btnForm.querySelector('span').classList.remove('d-none')
                btnForm.querySelector('div').classList.add('d-none')
                btnForm.removeAttribute('disabled', '')
                modalBtn.click()
            }
        }
    
        sendForm()
    }

    return (
        <div id="budget-container" className="my-3 p-3">
            <div className="container-description text-center p-2">
                <h2 className="title">Peça já um orçamento!</h2>
                <p>Insira seus dados e descreva seu projeto para mim, eu vou analisar o seu projeto e irei te enviar o orçamento através do contato fornecido o mais rápido possível! Então envia já os seus dados para darmos os primeiros passos para que a sua idéia possa ser transformada em realidade!</p>
            </div>
            <div className="budget-form">
                <form>
                    <label htmlFor="name-field" className="form-label mb-2">Seu nome</label>
                    <input type="text" name="name" id="name-field" placeholder="Informe seu nome" className="form-control mb-3" required />
                    <label htmlFor="contact-field" className="form-label mb-2">Forma de contato</label>
                    <input type="text" name="contact-field" id="contact-field" placeholder="Email ou Whatsapp" className="form-control mb-3" required />
                    <label htmlFor="project-name-field" className="form-label mb-2">Título</label>
                    <input type="text" name="project-name" id="project-name-field" className="form-control mb-3" placeholder="Informe o nome do projeto" required />
                    <label htmlFor="description-field" className="form-label mb-2">Descrição</label>
                    <textarea name="description" id="description-field" placeholder="Informe detalhadamente o seu projeto" className="form-control mb-3" required></textarea>
                </form>
                <button type="button" id="send-form-btn" className="w-100 border-0 rounded-3 py-2" onClick={submitEmail}>
                    <span>Enviar</span>
                    <div className="spinner-border d-none" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </button>
                <button type="button" id="open-modal-btn" className="visually-hidden" data-bs-toggle="modal" data-bs-target="#modal-status"></button>
                <ModalStatus title={emailStatus.title} body={emailStatus.body} />
            </div>
        </div>
    )
}

export default BudgetContainer
