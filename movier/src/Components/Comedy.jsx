import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';

function Comedy() {
  const [tvShows, setTvShows] = useState([]);
  const [selectedTvShow, setSelectedTvShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/tv?api_key=9948beaa1978b07ef733bcbe5e8d2849&with_networks=213")
      .then((response) => {
        console.log(response.data);
        setTvShows(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShowModal = (tvShow) => {
    setSelectedTvShow(tvShow);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTvShow(null); 
    setShowModal(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTvShows = tvShows.filter((tvShow) => 
    tvShow.name && tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', color: 'white' }}>
        <Container>
          <br />
          <input
            type="text"
            placeholder="Search for a TV show..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginBottom: '20px', padding: '5px', marginLeft: "1000px" }}
          />

          <Row>
            {filteredTvShows.map((tvShow) => (
              <Col key={tvShow.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ marginBottom: '20px' }}>
                  <Card.Img variant="top" src={`${imageUrl}${tvShow.poster_path}`} alt={tvShow.name} />
                  <Card.Body>
                    <br />
                    <Button
                      style={{ marginLeft: "90px" }}
                      variant="primary"
                      onClick={() => handleShowModal(tvShow)}
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
          {selectedTvShow && <Modal.Title>{selectedTvShow.name || selectedTvShow.title}</Modal.Title>}
        </Modal.Header>

        <Modal.Body>
          {selectedTvShow && (
            <>
              <img src={`${imageUrl}${selectedTvShow.poster_path}`} alt={selectedTvShow.title} style={{ width: '100%', marginBottom: '10px' }} />
              <p>{selectedTvShow.overview}</p>
              {selectedTvShow.release_date && <p>Release Date: {selectedTvShow.release_date}</p>}
              {selectedTvShow.popularity && <p>Popularity: {selectedTvShow.popularity}</p>}
              {selectedTvShow.vote_average && <p>Vote Average: {selectedTvShow.vote_average}</p>}
              {selectedTvShow.vote_count && <p>Vote Count: {selectedTvShow.vote_count}</p>}
            
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

export default Comedy;
