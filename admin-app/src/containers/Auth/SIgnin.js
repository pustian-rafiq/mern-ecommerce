import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import Layout from "../../components/Layout/Index"
import Input from "../../components/ui/Input"


const Signin = () => {

    return (
        <Layout>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
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

                                    <Button variant="primary" type="submit">
                                        Signin
                                    </Button>
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