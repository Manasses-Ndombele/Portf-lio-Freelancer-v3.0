import '../styles/components/container-description.sass'
import '../styles/components/budget-container.sass'

function BudgetContainer() {
    return (
        <div id="budget-container" className="my-3 p-3">
            <div className="container-description text-center p-2">
                <h2 className="title">Peça já um orçamento!</h2>
                <p>Insira seus dados e descreva seu projeto para mim, eu vou analisar o seu projeto e irei te enviar o orçamento através do contato fornecido o mais rápido possível! Então envia já os seus dados para darmos os primeiros passos para que a sua idéia possa ser transformada em realidade!</p>
            </div>
            <div className="budget-form">
                <form>
                    <label htmlFor="name-field" className="form-label mb-2">Seu nome</label>
                    <input type="text" name="name" id="name-field" placeholder="Informe seu nome" className="form-control mb-3" />
                    <label htmlFor="contact-field" className="form-label mb-2">Forma de contato</label>
                    <input type="text" name="contact-field" id="contact-fielld" placeholder="Email ou Whatsapp" className="form-control mb-3" />
                    <label htmlFor="description-field" className="form-label mb-2">Descrição</label>
                    <textarea name="description" id="description-field" placeholder="Informe detalhadamente o seu projeto" className="form-control mb-3"></textarea>
                    <label htmlFor="files-field" className="form-label mb-2">Anexar ficheiros (opcional)</label>
                    <input type="file" name="files" id="files-field" placeholder="Envie imagens ou documentos relacionados ao seu projeto" className="form-control mb-3" />
                </form>
                <button type="button" id="send-form-btn" className="w-100 border-0 rounded-3 py-2">Enviar</button>
            </div>
        </div>
    )
}

export default BudgetContainer
