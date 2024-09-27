import { useContext, useEffect, useState } from "react";
import { MiKahootContext } from "../../context";

const Temporizador = ({ time, setFinish }) => {
    const { hours, setHours, minutes, setMinutes, seconds, setSeconds} = useContext(MiKahootContext)
    
    useEffect(() => {
        const horas = parseInt(time / 60)
        const minutos = time - (horas * 60)
        setHours(minutos == 0 ? horas - 1 : horas )
        setMinutes(minutos == 0 ? 59 : minutos - 1)
    }, [time])

    useEffect(() => {
        function play() {
            setSeconds(seconds - 1)
        }
        if (seconds > 0) {
            var intervalID = setInterval(play, 1000);
            setTimeout(() => {
                clearInterval(intervalID)
            }, 1000)
        } else if(minutes > 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
        }else if(hours > 0){
            setHours(hours - 1)
            setMinutes(59)
            setSeconds(59)
        }else{
            setFinish(true)
        }
    }, [seconds])

    return (
        <>
            <h1>{`${hours}: ${minutes}: ${seconds}`}</h1>
        </>
    );
}

export default Temporizador;