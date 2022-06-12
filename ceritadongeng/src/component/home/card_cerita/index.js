import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card,CardGroup,Col, Container, Row} from 'react-bootstrap'
import './style.css'
const Card_cerita = ({cerita1,cerita2,cerita3,title})=>{
    

    return(
        <Container>
            <br></br>
            <h3>{title}</h3>
            <hr  width={90}/>
            <Row className="Container_Card">

                <CardGroup>
                
                    <Col>
                        <div className="Container_Card">
                            <Card border = "light" >
                                <img 
                                    src = {cerita1} 
                                    width = {350} 
                                    height = {260}
                                    alt = "pict"
                                />
                                        
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="Container_Card">
                            <Card border = "light" >
                                <img 
                                    src = {cerita2} 
                                    width = {350} 
                                    height = {260}
                                    alt = "pict"
                                    
                                    />
                                        
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="Container_Card">
                            <Card border = "light" >
                                <img 
                                    
                                    src = {cerita3} 
                                    width = {350} 
                                    height = {260}
                                    alt = "pict"
                                />
                            </Card>
                        </div>
                    </Col>


                </CardGroup>

            </Row>
        </Container>
    )
}
export default  Card_cerita;