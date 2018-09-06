import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const PagingDots = (props) => (
  <ul style={{...styles.listStyles}}>
    {PagingDots.getIndexes(props.slideCount, props.slidesToScroll).map(index => {
      return (
        <li style={{...styles.listItemStyles}} key={index}>
          <button
            style={{...styles.buttonStyles, opacity: props.currentSlide === index ? 1 : 0.5}}
            onClick={props.goToSlide.bind(null, index)}
          >
            &bull;
          </button>
        </li>
      );
    })}
  </ul>
);

PagingDots.getIndexes = (count, inc) => {
  const arr = [];
  for (let i = 0; i < count; i += inc) {
    arr.push(i);
  }
  return arr;
};

PagingDots.propTypes = {
  slideCount: PropTypes.number,
  slidesToScroll: PropTypes.number,
  goToSlide: PropTypes.func,
  currentSlide: PropTypes.number,
};

export default PagingDots;

