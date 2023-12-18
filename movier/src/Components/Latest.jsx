import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Latest() {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=9948beaa1978b07ef733bcbe5e8d2849&with_genres=28")
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ backgroundColor: 'lightgoldenrodyellow', minHeight: '100vh', color: 'white' }}>
        <Container>
          <br></br>
           <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginBottom: '20px', padding: '5px' ,marginLeft:"1000px"}}
          />

          <Row>
          {filteredMovies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ marginBottom: '20px' }}>
                  <Card.Img variant="top" src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                  <Card.Body>
                    <br />
                    <Button
                      style={{ marginLeft: "90px" }}
                      variant="primary"
                      onClick={() => handleShowModal(movie)}
                    >
                      Find More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    {selectedMovie && <Modal.Title>{selectedMovie.name || selectedMovie.title}</Modal.Title>}
  </Modal.Header>

  <Modal.Body>
    {selectedMovie && (
      <>
        <img src={`${imageUrl}${selectedMovie.poster_path}`} alt={selectedMovie.title} style={{ width: '100%', marginBottom: '10px' }} />
        <p>{selectedMovie.overview}</p>
        {selectedMovie.release_date && <p>Release Date: {selectedMovie.release_date}</p>}
        {selectedMovie.popularity && <p>Popularity: {selectedMovie.popularity}</p>}
        {selectedMovie.vote_average && <p>Vote Average: {selectedMovie.vote_average}</p>}
        {selectedMovie.vote_count && <p>Vote Count: {selectedMovie.vote_count}</p>}
        {/* Add more details as needed */}
      </>
    )}
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
 
    </div>
  );
}

export default Latest;
