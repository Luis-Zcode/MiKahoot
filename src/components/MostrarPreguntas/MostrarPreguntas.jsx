import { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Temporizador from "../Temporizador/Temporizador";
import { MiKahootContext } from "../../context";

const MostrarPreguntas = () => {
    const {
        preguntas,
        countPreguntas,
        finish,
        setFinish,
        pregunta,
        setPregunta,
        siguientePregunta,
        respuestasCorrectas,
        respuestasIncorrectas
    } = useContext(MiKahootContext)



    const { codigo } = useParams()
    useEffect(() => {
        const prueba = preguntas.find((item) => item.codigo == codigo)
        setPregunta(prueba)
    }, [])

    return (
        <>
            {finish &&
            <div className="flex d-flex justify-content-center text-center">
                <Card className="mb-2 w-50">
                    <Card.Header>{respuestasCorrectas > respuestasIncorrectas ? 'Felicidades' : 'suerte a la proxima'}</Card.Header>
                    <Card.Body>
                        <Card.Text className="row gap-3">
                            <span>Buenas: {respuestasCorrectas}</span>
                            <span>Malas: {respuestasIncorrectas}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                
            }
            {!finish && (
                <Container>
                    <Temporizador time={(pregunta?.time)} finish={setFinish}/>
                    <h1 className="text-center">{pregunta?.preguntasCreate[countPreguntas]?.pregunta}</h1>
                    <Row className=" text-center gap-4">
                        <Col md={12} className="d-flex justify-content-center gap-4">
                            <Button onClick={() => siguientePregunta(pregunta?.preguntasCreate[countPreguntas]?.respuesta1)} variant="primary" size="lg" style={{ width: '200px' }}>
                                {pregunta?.preguntasCreate[countPreguntas]?.respuesta1}
                            </Button>
                            <Button onClick={() => siguientePregunta(pregunta?.preguntasCreate[countPreguntas]?.respuesta2)} variant="danger" size="lg" style={{ width: '200px' }}>
                                {pregunta?.preguntasCreate[countPreguntas]?.respuesta2}
                            </Button>
                        </Col>
                        <Col md={12} className="d-flex justify-content-center gap-4">
                            <Button onClick={() => siguientePregunta(pregunta?.preguntasCreate[countPreguntas]?.respuesta3)} variant="warning" size="lg" style={{ width: '200px' }}>
                                {pregunta?.preguntasCreate[countPreguntas]?.respuesta3}
                            </Button>
                            <Button onClick={() => siguientePregunta(pregunta?.preguntasCreate[countPreguntas]?.respuesta4)} variant="info" size="lg" style={{ width: '200px' }}>
                                {pregunta?.preguntasCreate[countPreguntas]?.respuesta4}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
}

export default MostrarPreguntas;