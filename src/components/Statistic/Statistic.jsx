import PropTypes from 'prop-types';
import { H1title, Ptext } from './Statistic.styled';


export const Statistic = ({ good,neutral,bad,total,positivePercentage}) => {

    return (
        <>
        <H1title>Statistic</H1title>

        <Ptext>Good: {good}</Ptext>
        <Ptext>Neutral: {neutral}</Ptext>
        <Ptext>Bad: {bad}</Ptext>
        <Ptext>Total: {total}</Ptext>
        {total > 0 && (  <Ptext>Positive feedback: {positivePercentage} %</Ptext> 
      )}
        </>
    ); 
    }

Statistic.propTypes = {
    props:  PropTypes.objectOf(PropTypes.string),
}