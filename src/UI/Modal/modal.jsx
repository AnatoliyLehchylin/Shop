
import PropTypes from 'prop-types';
import s from "./Modal.module.scss"

export function Modal (props) {
const {header, closeButton, text, actions, openModal, onClose} = props;
    return (
        <>
            {openModal &&
                <div className={s.wrapperModal}>
                    <div className={s.overlayModal}/>
                    <div className={s.contentModal}>
                        <div className={s.headerWrapper}>
                            <h3 className={s.headerModal}>{header} </h3>
                            {closeButton && <button className={s.modalCloseButton} onClick={onClose}>X</button>}
                        </div>
                        <div className={s.textModal}>{text} </div>
                        <div className={s.actionModal}>{actions} </div>
                    </div>
                </div>
            }
        </>
    )
}

Modal.propTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string,
    actions: PropTypes.node,
    openModal: PropTypes.bool,
    onClose: PropTypes.func
}

Modal.defaultProps = {
    header: 'Modal header',
    closeButton: true,
    text: 'Modal text',
    openModal: false,
}
