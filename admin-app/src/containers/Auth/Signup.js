import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Layout from "../../components/Layout/Index"
import Input from "../../components/ui/Input"

const Signup = () => {

    return (
        <Layout>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <p style={{ textAlign: 'center', background: '#000', color: '#fff', fontSize: '26px', padding: '10px 20px' }}>Signup our site before proceeding</p>
                            <Card.Body>
                                <Form>
                                    <Input
                                        type="text"
                                        label="First Name"
                                        value=""
                                        placeholder="Enter your first name"
                                        onChange={() => { }}
                                    />
                                    <Input
                                        type="text"
                                        label="Last Name"
                                        value=""
                                        placeholder="Enter your last name"
                                        onChange={() => { }}
                                    />
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
                                    <Input
                                        type="password"
                                        label="Confirm Password"
                                        value=""
                                        placeholder="Enter your confirm password"
                                        onChange={() => { }}
                                    />

                                    <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                        <Button variant="primary" type="submit">
                                            Signup
                                        </Button>
                                        <p style={{ marginLeft: '10px' }}>Already have you registered? <NavLink to="/signin">Signin</NavLink></p>
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

export default Signup