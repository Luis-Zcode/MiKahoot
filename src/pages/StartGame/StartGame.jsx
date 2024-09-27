import { useContext, useEffect, useState } from "react";
import MostrarPreguntas from "../../components/MostrarPreguntas/MostrarPreguntas";
import { MiKahootContext } from "../../context";

const StartGame = () => {
    const {count, setCount, show, setShow} = useContext(MiKahootContext)
    
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
                    <>
                        <h1 className="text-center">Empezando...</h1>
                        <h2 className="text-center">{count}</h2>
                    </>
                )
            }
            {!show && <MostrarPreguntas />}
        </>
    );
}

export default StartGame;