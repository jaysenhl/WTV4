import { useContext,useEffect, useState } from "react";
import { WorkoutContext } from "./WorkoutContext";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaCirclePlus} from "react-icons/fa6";


function WorkoutForm() {
    const { exercises, addExercise } = useContext(WorkoutContext)
    const [formData, setFormData] = useState({
      nombre_ejercicio: '',
      equipo: '',
      peso: '',
    //   repeticiones: '',
      sets: [],
      fecha: '',
      hora: ''
    });
  
    // Actualizar fecha y hora cada segundo
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const fecha = now.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        const hora = now.toLocaleTimeString('es-ES', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        });
        setFormData(formData => ({ ...formData, fecha, hora }));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({...prevFormData,[name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExercise(formData)
        setFormData({nombre_ejercicio: '', equipo: '', peso: ''}) // elimine sets, repeticiones y mood por ahora
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

                    {/* <Form.Group className="mb-3 text-center">
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
                    </Form.Group> */}

                    {/* <Form.Group className="mb-3 text-center">
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
                    </Form.Group> */}

                    <Button variant="primary" type="submit">
                        Añadir a la lista <br /> <FaCirclePlus/>
                    </Button>
                </Form>
            </Col>
        </Row>
        </Container>
    )
}

export default WorkoutForm