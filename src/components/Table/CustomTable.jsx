import Table from 'react-bootstrap/Table';
import patients from '../../data/patients';
import { Container } from 'react-bootstrap';
import "./custom_table.css"
import { useState } from 'react';
import even_patients from '../../data/evenPatients';


const CustomTable = () => {
    const [PatientsState, setPatients] = useState(patients);
    const [EvenPatients, setEvenPatients] = useState(even_patients);

    const deleteDate = () => {
        setPatients([])
        setEvenPatients([]);
    }

    const deletePatient = (cedula) => {
        setPatients(PatientsState.filter(patient => patient.cedula !== cedula));
    };

    const deleteEvenPatient = (cedula) => {
        setEvenPatients(EvenPatients.filter(patient => patient.cedula !== cedula));
    };

    const extractingEvenPatients = () => {
        setEvenPatients(prevState => {
            const evenPatients = PatientsState.filter((patient, index) => {
                // Filtrar los pacientes en posiciones pares
                return index % 2 !== 0 && !prevState.some(evenPatient => evenPatient.cedula === patient.cedula);
            });
            return [...prevState, ...evenPatients];
        });
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
                                PatientsState.map((row, index) => (
                                    <tr key={row.cedula}>
                                        <td>{index + 1}</td>
                                        <td>{row.nombre}</td>
                                        <td>{row.cedula}</td>
                                        <td>{row.tipoDeSangre}</td>
                                        <td>
                                            <button onClick={() => deletePatient(row.cedula)} type="button" class="btn-close" aria-label="Close"></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <div className='d-flex mb-3 gap-3'>
                        <button onClick={deleteDate} type="button" className="btn btn-danger">Eliminar Todos los pacientes</button>
                        <button onClick={extractingEvenPatients} type="button" className="btn btn-info">Extraer pacientes pares</button>
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
            
            {
                EvenPatients.length != 0 
                ? 
                <>
                <div className='mb-3 d-flex justify-content-center c-border-bottom'>
                <h3>Pacientes Pares</h3>
            </div>


            <div>
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
                            EvenPatients.map((row, index) => (
                                <tr key={row.cedula}>
                                    <td>{index + 1}</td>
                                    <td>{row.nombre}</td>
                                    <td>{row.cedula}</td>
                                    <td>{row.tipoDeSangre}</td>
                                    <td>
                                        <button onClick={() => deleteEvenPatient(row.cedula)} type="button" class="btn-close" aria-label="Close"></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
                </> : <></>
            }
        </Container>
    );
}

export default CustomTable;
