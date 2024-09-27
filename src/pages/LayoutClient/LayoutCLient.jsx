import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MiKahootContext } from "../../context";

const LayoutCLient = () => {    
    const { codigo } = useParams()
    const {start, test, setTest, notFound, setNotFound, preguntas} = useContext(MiKahootContext)

    useEffect(() => {
        const prueba = preguntas?.find((item) => item.codigo == codigo)
        if (!prueba) {
            setNotFound(true)
        } else {
            setTest(prueba)
        }
    }, [])
    
    return (
        <>
            {notFound && <h1>Test no encontrado!</h1>}
            {!notFound &&
                <div className="flex d-flex justify-content-center mt-5">
                    <Card className="text-center w-50">
                        <Card.Header>The Autor Game is: {test?.autor}</Card.Header>
                        <Card.Body>
                            <Card.Title>Questions in Test: {test?.preguntasCreate?.length}</Card.Title>
                            <Card.Text>
                                Time to take test: {`${test?.time} minutos`}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted"><Button variant="primary" onClick={() => start(codigo)}>Start</Button></Card.Footer>
                    </Card>
                </div>

            }
        </>
    );
}

export default LayoutCLient;