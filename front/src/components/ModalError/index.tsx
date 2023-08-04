
import { useNavigate } from "react-router-dom"
import { Modal } from "../Modal"


interface ModalErrorProps {
    toggleModal: () => void
}

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
    const navigate = useNavigate()

    const handleCloseandRedirect = () => {
        toggleModal()
        navigate("/")
    }

    return (
        <Modal toggleModal={toggleModal} blockClosing>
            Você não está autenticado !
            <button onClick={handleCloseandRedirect}>Ir para o login</button>
        </Modal>
    )
}