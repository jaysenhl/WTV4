import React, { useEffect, useState } from "react";
import '../index.css';

function Header({ title, iconname }) {
    const [currentTime, setCurrentTime] = useState(new Date());  // Estado para manejar la hora actual

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());  // Actualiza la hora cada segundo
        }, 1000);

        return () => clearInterval(timerId);  // Limpieza al desmontar el componente
    }, []);

    const formatedDate = currentTime.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formatedTime = currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });

    return (
        <div className="headerComponent">
            <h1 className="title">
                <box-icon animation="tada" type='solid' color="#fca311" size='sm' name={iconname}></box-icon>
                {title}
            </h1>
            <h1>{formatedDate}</h1>
            <h1>{formatedTime}</h1>
        </div>
    );
}

export default Header;
