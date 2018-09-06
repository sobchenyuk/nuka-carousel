import React from 'react';
import PropTypes from 'prop-types';

// component
import {
  StyleSheet,
  css,
} from 'aphrodite';
import { styles } from './styles';
import Carousel from 'nuka-carousel';

import PagingDots from './component/PagingDots';

const style = StyleSheet.create(styles);

const ReviewsCarousel = (props) => (
  <Carousel
    renderCenterLeftControls={()=>{}}
    renderCenterRightControls={()=>{}}
    renderBottomCenterControls={props => <PagingDots {...props} />}
  >
    {props.reviews.map((item, index) =>
      <article className={css(style.reviews_content)} key={index}>
        <h2 className={css(style.reviews_h)}>
          {item.title}
        </h2>
        <p className={css(style.reviews_p)}>
          {item.text}
        </p>
        <b className={css(style.reviews_name)}>
              <span>
                <i className="fas fa-user-tie"/>
              </span>&nbsp;&nbsp;
          {item.name}
        </b>
      </article>
    )}
  </Carousel>
);

ReviewsCarousel.propTypes = {
  reviews: PropTypes.array,
};


export default ReviewsCarousel;