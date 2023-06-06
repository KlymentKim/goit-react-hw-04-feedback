import PropTypes, { element } from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <>
        <h1 className={css.h1}>{title}</h1>
        {children}
        </>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(element).isRequired
}