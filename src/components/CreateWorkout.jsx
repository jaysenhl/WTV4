import Header from "./Header"
import 'boxicons'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useContext, useState,useRef, useEffect, useLayoutEffect } from 'react';
import { FaCirclePlus} from "react-icons/fa6";
import { RxEyeClosed } from "react-icons/rx";
import { RiEye2Line } from "react-icons/ri"
import '../index.css'
import { WorkoutContext } from "./WorkoutContext";
import Exercise from "./Exercise";
import gsap from "gsap";

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
        setFormData({nombre_ejercicio: '', equipo: '', peso: '', repeticiones: '', sets:'', mood: ''})
    };
    return(
        <Container className="mb-4">
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
    let [isShowing, setIsShowing] = useState(false);
    let [isExerciseListVisible, setIsExerciseListVisible] = useState(false);
    const formRef = useRef(null);
    const exerciseListRef = useRef(null);

    useLayoutEffect(() => {
        gsap.set(formRef.current, { autoAlpha: 0 }); // Set initial state for GSAP
        gsap.set(exerciseListRef.current, { autoAlpha: 0 }); // Set initial state for GSAP
    }, []);

    useLayoutEffect(() => {
        if (formRef.current && exerciseListRef.current) {
            gsap.to(formRef.current, { autoAlpha: isShowing ? 1 : 0, height: isShowing ? "auto" : 0, duration: 0.5 });
            gsap.to(exerciseListRef.current, { autoAlpha: isExerciseListVisible ? 1 : 0, height: isExerciseListVisible ? "auto" : 0, duration: 0.5 });
        }
    }, [isShowing, isExerciseListVisible]);

    const formToggle = () => {
        setIsShowing(!isShowing);
    }

    const toggleExerciseList = () => {
        setIsExerciseListVisible(!isExerciseListVisible);
    }

    return(
        <>
            <Header title="CREAR RUTINA"/>
            <div className="btnBox mb-4">
                <button id="toggleBtn" onClick={formToggle} className={isShowing ? 'bg-info' : 'bg-danger'}>
                    {isShowing ? 'Ocultar Formulario ' : 'Mostrar Formulario '}
                    {isShowing ? <RiEye2Line size="1.7rem" /> : <RxEyeClosed size="1.7rem" />}
                </button>
            </div>
            <div ref={formRef} style={{ overflow: 'hidden' }}>
                <WorkoutForm />
            </div>
            <div className="btnBox mb-4">
                <button id="toggleBtn" onClick={toggleExerciseList} className={isExerciseListVisible ? 'bg-info' : 'bg-danger'}>
                    {isExerciseListVisible ? 'Ocultar Lista de Ejercicios ' : 'Mostrar Lista de Ejercicios '}
                    {isExerciseListVisible ? <RiEye2Line size="1.7rem" /> : <RxEyeClosed size="1.7rem" />}
                </button>
            </div>
            <div ref={exerciseListRef} style={{ overflow: 'hidden' }}>
                <div className="listaEjercicio text-center mt-4 mb-4">
                    <h1 className="title">Lista de ejercicios</h1>
                    <Exercise/>
                    <div className="saveBtnBox">
                        <h4 className="text-info"><strong className="title">Guardar</strong> la lista y crear otra rutina</h4>
                        <button className="saveBtn bg-info"><strong>Guardar</strong></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateWorkout;
