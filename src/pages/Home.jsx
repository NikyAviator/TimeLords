import React from 'react';
import { Container, Row, Col, Button, Navbar, Card } from 'react-bootstrap';
function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src="images/Logo.svg" alt="Logo for TimeLords"></img>
          </Col>
        </Row>
      </Container>
      <Container className="pt-2">
        <h3>Biggest Cities:</h3>
      </Container>
      <Container className="mt-3 pt-3">
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5">
        <h3>My Cities:</h3>
      </Container>
      <Container className="mt-3 pt-3">
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
