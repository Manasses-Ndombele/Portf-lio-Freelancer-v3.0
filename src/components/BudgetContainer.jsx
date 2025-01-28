function BudgetContainer() {
    return (
        <div id="budget-container">
            <div className="container-title">
                <h2>Peça já um orçamento!</h2>
                <p>Insira seus dados e descreva seu projeto para mim, eu vou analisar o seu projeto e irei te enviar o orçamento através do contato fornecido o mais rápido possível! Então envia já os seus dados para darmos os primeiros passos para que a sua idéia possa ser transformada em realidade!</p>
            </div>
            <div className="budget-form">
                <form>
                    <label htmlFor="name-field">Seu nome</label>
                    <input type="text" name="name" id="name-field" placeholder="Informe seu nome" />
                    <label htmlFor="contact-field">Forma de contato</label>
                    <input type="text" name="contact-field" id="contact-fielld" placeholder="Email ou Whatsapp" />
                    <label htmlFor="description-field">Descrição</label>
                    <textarea name="description" id="description-field" placeholder="Informe detalhadamente o seu projeto"></textarea>
                    <label htmlFor="files-field">Anexar ficheiros (opcional)</label>
                    <input type="file" name="files" id="files-field" placeholder="Envie imagens ou documentos relacionados ao seu projeto" />
                </form>
                <button type="button">Enviar</button>
            </div>
        </div>
    )
}

export default BudgetContainer
