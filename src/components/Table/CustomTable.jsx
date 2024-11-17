import Table from 'react-bootstrap/Table';
import patients from '../../data/patients';
import { Container } from 'react-bootstrap';
import "./custom_table.css"
import { useState } from 'react';




const CustomTable = () => {
    const [PatientsState, setPatients] = useState(patients);

    const deleteDate = () => {
        setPatients([])
    }

    const deletePatient = (id) => {
        setPatients(PatientsState.filter(patient => patient.id !== id));
    };


    return (
        <Container>
            <div className='mb-3 d-flex justify-content-center c-border-bottom'>
                <h3>Pacientes</h3>
            </div>

            {
                PatientsState.length != 0 ? <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Cedula</th>
                                <th>Tipo de Sangre</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                PatientsState.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.nombre}</td>
                                        <td>{row.cedula}</td>
                                        <td>{row.tipoDeSangre}</td>
                                        <td>
                                            <button onClick={() => deletePatient(row.id)} type="button" class="btn-close" aria-label="Close"></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <div className='d-flex mb-3 gap-3'>
                        <button onClick={deleteDate} type="button" className="btn btn-danger">Eliminar Todos los pacientes</button>
                        {/* <button type="button" className="btn btn-info">Agregar paciente</button> */}
                    </div>
                </div> : <div className='d-flex flex-column align-self-center'>
                    <div className='d-flex justify-content-center'>
                        <p>No hay pacientes.</p>
                    </div>
                    {/* <div className='mb-5 d-flex justify-content-center'>
                        <button type="button" class="btn btn-outline-secondary">Agregar registro</button>
                    </div> */}
                </div>
            }
        </Container>
    );
}

export default CustomTable;
