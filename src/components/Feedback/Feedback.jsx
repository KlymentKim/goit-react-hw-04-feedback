import PropTypes from 'prop-types';
import { BtnGroup, Btn } from './Feedback.styled';

export function Feedback({options, onLeaveFeedback}) {

  const elements = Object.keys(options);
             return (
             <BtnGroup>
              {elements.map(el => {
                return (
                  <Btn type='submit' key={el} onClick={() => onLeaveFeedback(el)}>
                    {el}
                  </Btn>
                );
              })}
            </BtnGroup>
        );
}

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
