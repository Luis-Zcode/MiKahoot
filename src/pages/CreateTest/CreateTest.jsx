import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row, Table, Button, Modal, Card, ListGroup } from "react-bootstrap";
import InputRespuesta from "../../components/InputRespuesta/InputRespuesta";
import { Controller, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { MiKahootContext } from "../../context";

const CreateTest = () => {
    const { showCreate,
        handleCreateTest,
        preguntasCreate,
        register,
        control,
        handleSubmit,
        errors,
        handleShow,
        handleClose,
        activate,
        Onsubmit,
        handleDelete,
        actualizarRespuestaCorrecta,
        onChangeText,
    } = useContext(MiKahootContext)

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Row>
                            <Col className="d-flex gap-3 justify-content-end mb-4 mt-3">
                                <NavLink to={'/'}>
                                    <Button variant="danger" onClick={handleSubmit(handleCreateTest)}>
                                        Guardar cambios
                                    </Button>
                                </NavLink>
                                <Button variant="primary" onClick={handleShow}>
                                    Crear Pregunta
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Form className="mt-5">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre del Test</Form.Label>
                                <Form.Control {...register('nombreTest', { required: 'No puede dejar vacio este campo' })} type="text" placeholder="Test de" />
                                {errors.nombreTest && <p className="text-danger">{errors.nombreTest.message}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Autor del Test </Form.Label>
                                <Form.Control {...register('autor', { required: 'No puede dejar vacio este campo' })} type="text" placeholder="Autor" />
                                {errors.autor && <p className="text-danger">{errors.autor.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>{`Duracion del Test  `}
                                    <Form.Text className="text-muted">
                                        (En minutos)
                                    </Form.Text>
                                </Form.Label>
                                <Form.Control {...register('time', { required: 'No puede dejar vacio el campo', min: { value: 0, message: 'Ingrese un numero mayor a 0' } })} type="Number" placeholder="Tiempo" />
                                {errors.time && <p className="text-danger">{errors.time.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Table bordered className="text-center" variant="success">
                    {preguntasCreate.length > 0 && (
                        <thead className='table-dark'>
                            <tr>
                                <th>Pregunta</th>
                                <th>Respuestas</th>
                                <th>Respuesta correcta</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {preguntasCreate.map((pregunta, index) => (
                            <tr key={index}>
                                <td>{pregunta.pregunta}</td>
                                <td>{`${pregunta.respuesta1}, ${pregunta.respuesta2}, ${pregunta.respuesta3}, ${pregunta.respuesta4} `}</td>
                                <td>{pregunta.respuestaCorrecta}</td>
                                <td><Button onClick={() => handleDelete(index)} variant="secondary">Eliminar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <Modal show={showCreate} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pregunta</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pregunta</Form.Label>
                            <Controller
                                name="pregunta"
                                control={control}
                                rules={{ required: 'Este campo no puede estar vacio' }}
                                render={({ field }) => (
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese su pregunta"
                                        autoFocus
                                        {...field}
                                    />
                                )}
                            />
                            {errors.pregunta && (
                                <span className="text-danger" role="alert">
                                    {errors.pregunta.message}
                                </span>
                            )}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Respuesta 1</Form.Label>
                            <Controller
                                name="respuesta1"
                                control={control}
                                rules={{ required: 'Este campo no puede estar vacio' }}
                                render={({ field: { name, onChange, ref } }) => (
                                    <InputRespuesta
                                        onChange={(e) => onChangeText(e, onChange, name)}
                                        inputRef={ref}
                                        control={control}
                                        name={name}
                                        activate={activate[name]}
                                        onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                        nameRadio='respuestaCorrecta'
                                    />
                                )}
                            />
                            {errors.respuesta1 && (
                                <span className='text-danger' role="alert">
                                    {errors.respuesta1.message}
                                </span>
                            )}
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Respuesta 2</Form.Label>
                            <Controller
                                name="respuesta2"
                                control={control}
                                rules={{ required: 'este campo no puede estar vacio' }}
                                render={({ field: { name, onChange, ref } }) => (
                                    <InputRespuesta
                                        onChange={(e) => onChangeText(e, onChange, name)}
                                        inputRef={ref}
                                        control={control}
                                        name={name}
                                        activate={activate[name]}
                                        onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                        nameRadio='respuestaCorrecta'
                                    />
                                )}
                            />
                            {errors.respuesta2 && (
                                <span className='text-danger' role="alert">
                                    {errors.respuesta2.message}
                                </span>
                            )}
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Respuesta 3</Form.Label>
                            <Controller
                                name="respuesta3"
                                control={control}
                                rules={{ required: 'este campo no puede estar vacio' }}
                                render={({ field: { name, onChange, ref } }) => (
                                    <InputRespuesta
                                        onChange={(e) => onChangeText(e, onChange, name)}
                                        inputRef={ref}
                                        control={control}
                                        name={name}
                                        activate={activate[name]}
                                        onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                        nameRadio='respuestaCorrecta'
                                    />
                                )}
                            />
                            {errors.respuesta3 && (
                                <span className='text-danger' role="alert">
                                    {errors.respuesta3.message}
                                </span>
                            )}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Respuesta 4</Form.Label>
                            <Controller
                                name="respuesta4"
                                control={control}
                                rules={{ required: 'este campo no puede estar vacio' }}
                                render={({ field: { name, onChange, ref } }) => (
                                    <InputRespuesta
                                        onChange={(e) => onChangeText(e, onChange, name)}
                                        inputRef={ref}
                                        control={control}
                                        name={name}
                                        activate={activate[name]}
                                        onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                        nameRadio='respuestaCorrecta'
                                    />
                                )}
                            />
                            {errors.respuesta4 && (
                                <span className="text-danger" role="alert">
                                    {errors.respuesta4.message}
                                </span>
                            )}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(Onsubmit)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default CreateTest;