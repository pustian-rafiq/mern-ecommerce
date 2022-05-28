import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Layout from "../../components/Layout/Index"
import Input from "../../components/ui/Input"


const Signin = () => {

    return (
        <Layout>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                        <p style={{ textAlign: 'center', background: '#000', color: '#fff', fontSize: '26px', padding: '10px 20px' }}>Signin Page</p>
                            <Card.Body>
                                <Form>
                                    <Input
                                        type="email"
                                        label="Email Address"
                                        value=""
                                        placeholder="Enter your email"
                                        onChange={() => { }}
                                    />

                                    <Input
                                        type="password"
                                        label="Password"
                                        value=""
                                        placeholder="Enter your password"
                                        onChange={() => { }}
                                    />

                                    <div style={{ display: 'flex',alignItems:'center',alignContent:'center' }}>
                                        <Button variant="primary" type="submit">
                                            Signin
                                        </Button>
                                        <p style={{marginLeft:'10px'}}>Already have you any account? <NavLink to="/signup">Signup</NavLink></p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>

        </Layout>
    )
}

export default Signin