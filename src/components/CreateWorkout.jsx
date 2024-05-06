import Header from "./Header"
import 'boxicons'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { FaCirclePlus} from "react-icons/fa6";
import { RxEyeClosed } from "react-icons/rx";
import { RiEye2Line } from "react-icons/ri"
import '../index.css'
import { WorkoutContext } from "./WorkoutContext";
import Exercise from "./Exercise";

function WorkoutForm(){
    const { addExercise } = useContext(WorkoutContext)
    const fecha = new Date().toDateString()

    const [formData, setFormData] = useState({
        nombre_ejercicio: '',
        equipo: '',
        peso: '',
        repeticiones: '',
        sets: '',
        fecha: fecha,
        // hora: '',
        mood: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({...prevFormData,[name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addExercise(formData)
        setFormData({nombre_ejercicio: '',equipo: '', peso: '', repeticiones: '', sets:'', mood: ''})
    };
    return(
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-center">
                        <Form.Label className="label">Nombre del Ejercicio</Form.Label>
                        <Form.Control
                            className="text-center"
                            placeholder="Aquí..."
                            type="text" 
                            name="nombre_ejercicio"
                            value={formData.nombre_ejercicio}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label className="label">Equipo</Form.Label>
                        <Form.Control
                            as="select"
                            name="equipo"
                            value={formData.equipo}
                            onChange={handleChange}
                            required
                            className="text-center"
                        >
                            <option value="">Seleccione equipo</option>
                            <option value="peso corporal">Peso Corporal</option>
                            <option value="barbell">Barbell</option>
                            <option value="dumbell">Dumbell</option>
                            <option value="kettlebell">Kettlebell</option>
                            <option value="maquina">Máquina</option>
                            <option value="trotadora">Trotadora</option>
                            <option value="eliptica">Elíptica</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label className="label">Peso (LIB)</Form.Label>
                        <Form.Control
                            className="text-center"
                            placeholder="Aquí..."
                            type="number"
                            name="peso"
                            value={formData.peso}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label className="label">Repeticiones</Form.Label>
                        <Form.Control
                            className="text-center"
                            placeholder="Aquí..."
                            type="number"
                            name="repeticiones"
                            value={formData.repeticiones}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label className="label">Sets</Form.Label>
                        <Form.Control
                            className="text-center"
                            placeholder="Aquí..."
                            type="number"
                            name="sets"
                            value={formData.sets}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label className="label">Estado de Ánimo</Form.Label>
                        <Form.Control
                            as="select"
                            name="mood"
                            value={formData.mood}
                            onChange={handleChange}
                            required
                            className="text-center"
                        >
                            <option value="">Selecciona tu estado de ánimo</option>
                            <option value="motivado">Motivad@ 🔥</option>
                            <option value="sin ganas">Sin ganas 😒</option>
                            <option value="molesto">Molest@ 😡</option>
                            <option value="triste">Triste 😔</option>
                            <option value="fuerte">Fuerte 💪</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Añadir a la lista <br /> <FaCirclePlus/>
                    </Button>
                </Form>
            </Col>
        </Row>
        </Container>
    )
}


function CreateWorkout(){
    let [isShowing, setIsShowing] = useState(true)
    
    const formToggle = () => {
        setIsShowing(!isShowing);
    }
    return(
        <>
            <Header iconname="file-plus" title="CREAR RUTINA"/>
            {isShowing && (
                <section className="createWorkoutComponent">
                    <WorkoutForm />
                </section>
            )}
            <div className="btnBox">
                <button id="toggleBtn" className={isShowing ? 'bg-info' : 'bg-danger'} onClick={formToggle}>
                        {isShowing ? 'Ocultar Formulario ' : 'Mostrar Formulario '}
                        {isShowing ? <RiEye2Line size="1.7rem" /> : <RxEyeClosed size="1.7rem" /> }
                </button>
            </div>
            <div className="listaEjercicio text-center">
            <h1 className="text-info">Lista de ejercicios</h1>
            <Exercise/>
            </div>
        </>
        
    )
}

export default CreateWorkout