import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const MiKahootContext = createContext()

export const MiKahootProvider = ({ children }) => {
    const navigate = useNavigate()
    const [test, setTest] = useState({})
    const [preguntas, setPreguntas] = useState(JSON.parse(localStorage.getItem('tests')))
    const [notFound, setNotFound] = useState(false)
    const [count, setCount] = useState(7)
    const [show, setShow] = useState(true)
    const [countPreguntas, setCountPreguntas] = useState(0)
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0)
    const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(0)
    const [finish, setFinish] = useState(false)
    const [pregunta, setPregunta] = useState()
    const [showCreate, setShowCreate] = useState(false)
    const [preguntasCreate, setPreguntasCreate] = useState([]);
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(59)

    const { register, control, handleSubmit, setValue, reset, getValues, formState: { errors } } = useForm({
        defaultValues: {
            pregunta: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestaCorrecta: '',
            nombreTest: '',
            autor: '',
            time: ''
        }
    })

    const start = (codigo) => {
        navigate(`/game/${codigo}/start`)
    }
    const copyLink = (code) => {
        navigator.clipboard.writeText(`${window.location}game/${code}`)
    }
    const siguientePregunta = (respuesta) => {
        if (pregunta.preguntasCreate.length - 1 > countPreguntas) {
            setCountPreguntas(countPreguntas + 1)
        } else {
            setFinish(true)
        }

        if (pregunta?.preguntasCreate[countPreguntas].respuestaCorrecta == respuesta) {
            setRespuestasCorrectas(respuestasCorrectas + 1)
        } else {
            setRespuestasIncorrectas(respuestasIncorrectas + 1)
        }
    }

    const handleShow = () => setShowCreate(true);

    const handleCreateTest = (data) => {
        const { autor, time, nombreTest } = data
        if (preguntasCreate.length > 0) {
            const guardar = {
                codigo: Math.random().toString(36).substring(2, 9), autor, time, nombreTest, preguntasCreate
            };
            const tests = JSON.parse(localStorage.getItem('tests'))
            if (tests) {
                tests.push(guardar)
                localStorage.setItem('tests', JSON.stringify(tests))
            } else {
                localStorage.setItem('tests', JSON.stringify([guardar]))
            }
            reset()
            setPreguntasCreate([])
            navigate('/')
        } else {
            alert('agrege minimo 1 pregunta')
        }

    }

    const [activate, setActivate] = useState({ respuesta1: true, respuesta2: true, respuesta3: true, respuesta4: true })

    const handleClose = () => {
        setShowCreate(false)
        setActivate({
            respuesta1: true,
            respuesta2: true,
            respuesta3: true,
            respuesta4: true
        })
        reset({
            pregunta: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestaCorrecta: '',
        })
    };

    const Onsubmit = (data) => {
        if (data.respuestaCorrecta) {
            const { autor, time, nombreTest, ...dataFilter } = data
            setPreguntasCreate([...preguntasCreate, dataFilter])
            handleClose()
        } else {
            alert('Seleccione una respuesta')
        }

    }

    const handleDelete = (index) => {
        const delet = preguntasCreate.filter((pregunta, i) => i != index)
        setPreguntasCreate(delet)
    }

    const actualizarRespuestaCorrecta = (name) => {
        setValue('respuestaCorrecta', getValues(name))
    }

    const onChangeText = (e, onChange, name) => {
        if (e.target.value != '') {
            activate[name] = false
            setActivate({ ...activate })
        } else {
            activate[name] = true
            setActivate({ ...activate })
        }
        onChange(e.target.value)
    }

    return (
        <MiKahootContext.Provider value={{
            start,
            test,
            setTest,
            notFound,
            setNotFound,
            preguntas,
            setPreguntas,
            count,
            setCount,
            show,
            setShow,
            countPreguntas,
            setCountPreguntas,
            respuestasCorrectas,
            setRespuestasCorrectas,
            respuestasIncorrectas,
            setRespuestasIncorrectas,
            finish,
            setFinish,
            siguientePregunta,
            pregunta,
            setPregunta,
            copyLink,
            setShowCreate,
            showCreate,
            preguntasCreate,
            setPreguntasCreate,
            handleCreateTest,
            reset,
            register,
            control,
            handleSubmit,
            setValue,
            getValues,
            errors,
            handleShow,
            handleClose,
            activate,
            setActivate,
            Onsubmit,
            handleDelete,
            actualizarRespuestaCorrecta,
            onChangeText,
            hours,
            setHours,
            minutes,
            setMinutes,
            seconds,
            setSeconds
        }}>
            {children}
        </MiKahootContext.Provider>
    );
}