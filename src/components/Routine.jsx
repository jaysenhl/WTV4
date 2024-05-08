import React, { useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Routine({ date, exercises }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={toggleDropdown}>
        {date} {isOpen ? <FaEye /> : <FaEyeSlash />}
      </Dropdown.Toggle>

      <Dropdown.Menu show={isOpen}>
        <Dropdown.ItemText>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Equipo</th>
                <th>Peso</th>
                <th>Reps</th>
                <th>Sets</th>
                <th>Hora</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise.nombre_ejercicio}</td>
                  <td>{exercise.equipo}</td>
                  <td>{exercise.peso}</td>
                  <td>{exercise.repeticiones}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.hora}</td>
                  <td>{exercise.mood}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Dropdown.ItemText>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Routine;
