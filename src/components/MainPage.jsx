import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sushi from "../images/bg-sushi.jpg";

const myStyle = {
  backgroundImage: `url(${sushi})`,
  height: "65vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function MainPage() {
  return (
    <div className="main-page">
      <div style={myStyle} className="titles">
        <h2 className="p-2">VIVE LA EXPERIANCIA</h2>
        <h4 className="">
          GOHAN & SUSHI TO GO
        </h4>
        <h4 className="p-2">
          PRUEBA LAS MEJORES TORTAS DE SUSHI.
        </h4>
      </div>
      <div>
        <Container className="text-light p-3 news">
          <Row>
            <Col sm={4} xs={12}>
              <h6>TITULO 1</h6>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                fuga dolores, error explicabo nesciunt totam magnam
                necessitatibus unde! Impedit, aut ipsum ea quis commodi possimus
                similique atque placeat! At quam sequi alias accusantium iste,
                voluptatem repudiandae, impedit fugit deserunt repellendus
                ratione ducimus enim exercitationem atque architecto maiores
                incidunt vitae. Ut.
              </p>
            </Col>
            <Col sm={4} xs={12}>
              <h6>TITULO 2</h6>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                fuga dolores, error explicabo nesciunt totam magnam
                necessitatibus unde! Impedit, aut ipsum ea quis commodi possimus
                similique atque placeat! At quam sequi alias accusantium iste,
                voluptatem repudiandae, impedit fugit deserunt repellendus
                ratione ducimus enim exercitationem atque architecto maiores
                incidunt vitae. Ut.
              </p>
            </Col>
            <Col sm={4} xs={12}>
              <h6>TITULO 3</h6>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                fuga dolores, error explicabo nesciunt totam magnam
                necessitatibus unde! Impedit, aut ipsum ea quis commodi possimus
                similique atque placeat! At quam sequi alias accusantium iste,
                voluptatem repudiandae, impedit fugit deserunt repellendus
                ratione ducimus enim exercitationem atque architecto maiores
                incidunt vitae. Ut.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
