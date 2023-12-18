import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Style/Movies.css';

import { FirstContext } from './Main';

function Movies() {
  // Use the useContext hook to access the context
  const { movie } = useContext(FirstContext);

  return (
    <div>
      <Carousel interval={4000}>
        {movie.map((item) => (
          <Carousel.Item key={item.Id}>
            <img className="carousel-image" src={item.Image} alt="" srcset="" />
            <Carousel.Caption>
              <h3>{item.Name}</h3>
              {/* Additional content for the caption */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Movies;
