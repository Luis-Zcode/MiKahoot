import { useContext, useEffect, useState } from "react";
import MostrarPreguntas from "../../components/MostrarPreguntas/MostrarPreguntas";
import { MiKahootContext } from "../../context";
import '../StartGame/styles.css'
import { Container } from "react-bootstrap";

const StartGame = () => {
    const { count, setCount, show, setShow } = useContext(MiKahootContext)

    useEffect(() => {
        function myCallback() {
            setCount(count - 1)
        }
        if (count > 0) {
            var intervalID = setInterval(myCallback, 1000);
            setTimeout(() => {
                clearInterval(intervalID)
            }, 1000)
        } else {
            setShow(false)
        }
    }, [count])

    return (
        <>
            {show &&
                (
                    <Container>
                        <div className="container1">
                            <div>
                                <span className="l">C</span>
                                <span className="o">O</span>
                                <span className="a">M</span>
                                <span className="d">E</span>
                                <span className="i">N</span>
                                <span className="n">Z</span>
                                <span className="g">A</span>
                                <span className="d1">N</span>
                                <span className="d2">D</span>
                                <span className="d3">O</span>
                                <span className="d4">E</span>
                                <span className="d5">N</span>
                                <span className="d6">.</span>
                                <span className="d7">.</span>
                                <span className="d8">{count}</span>
                            </div>
                        </div>
                    </Container>
                )
            }
            {!show && <MostrarPreguntas />}
        </>
    );
}

export default StartGame;