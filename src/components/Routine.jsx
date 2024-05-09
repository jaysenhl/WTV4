import React, { useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import { FaCalendarAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

function Routine({ date, exercises }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className='itemDropdown'>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={toggleDropdown}>
        <FaCalendarAlt size='1.5rem' /> {date} {isOpen ? <FaEye /> : <FaEyeSlash />}
      </Dropdown.Toggle>

      <Dropdown.Menu show={isOpen}>
        <Dropdown.ItemText>
          <Table bordered hover size="sm">
            <thead>
              <tr>
                <th>Ejercicio</th>
                <th>Hora</th>
                <th style={{ minWidth: "75px" }}>Equipo</th>
                <th>Peso</th>
                <th style={{ minWidth: "75px" }}>Sets</th>
                <th style={{ minWidth: "75px" }}>Reps</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise.nombre_ejercicio}</td>
                  <td>{exercise.hora}</td>
                  <td>{exercise.equipo}</td>
                  <td>{exercise.peso}</td>
                  <td>
                    {exercise.sets.map((set, setIndex) => (
                      <div key={setIndex}>
                        Set {set.num}
                      </div>
                    ))}
                  </td>
                  <td>
                    {exercise.sets.map((set, setIndex) => (
                      <div key={setIndex}>
                        {set.reps} reps
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Dropdown.ItemText>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default Routine;
