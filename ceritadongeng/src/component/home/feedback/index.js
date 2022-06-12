import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card,Col, Container, Row,Button} from 'react-bootstrap'
import './style.css'

const FeedbackHome= ({img_feedback})=>{
    

    return(
        <Container>
            <br></br>
            <Row className="Container_Card">
                <Col>
                    <div className="Container_Card">
                        <Card border = "light" >
                            <img src = {img_feedback} width = {1090} height = {840} alt = "pict"/>
                            <Card.ImgOverlay>         
                                <Button   variant ="dark" className="button">
                                  Beri Ulasan      
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </Col>


               

            </Row>
        </Container>
    )
}
export default  FeedbackHome;