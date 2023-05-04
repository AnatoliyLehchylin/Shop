
import PropTypes from 'prop-types';
import s from './Button.module.scss';

export function Button(props) {
const {onClick, text, backgroundColor} = props;
    return (
        <button type='button' className={s.btn} onClick={onClick} style={{backgroundColor: backgroundColor}}>
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    backgroundColor: PropTypes.string
}

Button.defaultProps = {
    text: 'Button',
    backgroundColor: '#FFFF'
}
