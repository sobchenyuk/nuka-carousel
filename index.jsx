import React, { Component } from 'react';
import axios from 'axios';

// components
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import { styles } from './styles';
import ReviewsCarousel from './component/ReviewsCarousel';

const style = StyleSheet.create(styles);

export default class Reviews extends Component {
  state = {
    reviews: [],
  }
  componentDidMount() {
    axios.get(`/reviews.json`)
      .then(res => {
        const data = res.data;
        this.setState({
          reviews: data.reviews,
        });
      });
  }
  render() {
    const { reviews } = this.state;
    return (
      <section className={css(style.reviews)}>

        <div className={css(style.container)}>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>
    );
  }
}

