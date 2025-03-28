import React from 'react';
import { useState, useEffect } from 'react';
import ButtonLayout from './ButtonLayout';
import cycling from './cycling.jpg';

const DurationExercise = ({name, func, img}) => {
    let [isActive, setIsActive] = useState(false);
    let [isPaused, setIsPaused] = useState(true);
    let [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTimer((timer) => timer+10);
            }, 10);
        }
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const timerStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
    
    const timerReset = () => {
        setIsActive(false);
        setTimer(0);
    };

    return (
        <div className='exer'>
            <h2>{name}</h2>
            <img src={cycling} width='300px' height='auto' alt='stationary bike'></img>
            <p>{('0' + Math.floor((timer/60000) % 60)).slice(-2)}:{('0' + Math.floor((timer/1000) % 60)).slice(-2)}.{('0' + ((timer/10) % 100)).slice(-2)}</p>
            <ButtonLayout func1={timerStart} func2={timerReset} />
            <button className='home-button' onClick={func}><img src={img} width='40px' height='40px'/></button>
        </div>
    );
};

export default DurationExercise;