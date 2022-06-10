import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Nav,ButtonGroup,Button,Container,Row,Col} from 'react-bootstrap'
import './style.css'
// import { FaBars, FaTimes } from 'react-icons/fa'
import useState from 'react-hook-use-state';


const NavbarHome = ({logo,garis,profil})=>{
    
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setClick(false)
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 20){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return(
        <div className={color?'header header-bg': 'header'}>

            <Container>
                <Row>
                    <Col xs="auto" >
                        <Nav className="justify-content-start"  >
                            <Nav.Item >
                                    <Nav.Link href="/home">
                                        <img
                                            src = {logo}
                                            
                                            width={30}
                                            height={30}
                                            margin={30}
                                            alt = "pic"
                                                    
                                        />
                                    </Nav.Link>
                            </Nav.Item>
                        </Nav>
         
                        <br></br>
                    </Col>
                    <Col >
                        <Nav className="justify-content-end"> 
                            <Nav.Item>
                                <Nav.Link href="#features">
                                    <Button variant ="outline-dark" >Bergabung</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#memes">
                                    <ButtonGroup size="sm" >
                                        <Button variant ="outline-dark">
                                            <img
                                                src = {garis}
                                                width = {30}
                                                height = {30}
                                                alt = "pict"
                                            />
                                        </Button>
                                        <Button variant ="outline-dark">
                                            <img
                                                src = {profil}
                                                width = {30}
                                                height = {30}
                                                alt = "pic"
                                            />
                                        </Button>
                                    </ButtonGroup>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                            
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}
export default NavbarHome;