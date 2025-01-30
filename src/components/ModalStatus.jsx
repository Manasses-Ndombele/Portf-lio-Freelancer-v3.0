import '../styles/components/modal-status.sass'

function ModalStatus(props) {
    return (
        <div className="modal fade" id="modal-status" tabIndex="-1" aria-labelledby="modal-status-title" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5 fw-bold" id="modal-status-title">{props.title}</h2>
                    </div>
                    <div className="modal-body">
                        {props.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalStatus
