import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FcAlarmClock } from "react-icons/fc";

function RestConfigurator() {
    const timerIntervalRef = useRef(null);
    const [showOptions, setShowOptions] = useState(false);
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        return () => {
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
            }
        };
    }, []);

    const handleRest = () => {
        let totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
        Swal.fire({
            title: 'Tiempo Restante',
            html: `<b style="font-size: 5rem;">${Math.floor(totalSeconds / 60)}:${(totalSeconds % 60).toString().padStart(2, '0')}</b>`,
            timerProgressBar: true,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
                timerIntervalRef.current = setInterval(() => {
                    totalSeconds--;
                    if (totalSeconds < 0) {
                        clearInterval(timerIntervalRef.current);
                        Swal.fire({
                            icon: 'success',
                            title: 'Descanso terminado!',
                            html: '<b style="font-size: 1.5rem;">¡Tiempo de volver al trabajo!</b>',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK'
                        });
                    } else {
                        Swal.update({
                            html: `<b style="font-size: 5rem;">${Math.floor(totalSeconds / 60)}:${(totalSeconds % 60).toString().padStart(2, '0')}</b>`
                        });
                    }
                }, 1000);
            },
            willClose: () => {
                clearInterval(timerIntervalRef.current);
            }
        });
    };


    return (
        <div className="restBtn">
            <Dropdown onToggle={() => setShowOptions(!showOptions)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='mt-3 mb-4'>
                    Configurar Descanso <FcAlarmClock size='1.5rem' />
                </Dropdown.Toggle>

                <Dropdown.Menu show={showOptions}>
                    <div style={{ padding: '20px' }}>
                        <input type="number" placeholder="minutos" value={minutes} onChange={(e) => setMinutes(e.target.value)} className="form-control mb-2" />
                        <input type="number" placeholder="segundos" value={seconds} onChange={(e) => setSeconds(e.target.value)} className="form-control mb-2" />
                        <button className="btn btn-warning text-white" onClick={handleRest}>DESCANSAR</button>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default RestConfigurator;
