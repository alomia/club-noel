import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './custom-navbar.css'

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-white d-flex justify-content-center">
            <div className='d-flex'>
                <Navbar.Brand href="#home"><img className='navbar-brand' src="src/assets/imgs/logo-club-noel-2024-horizontal.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className='custom-dropdown-item' title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#cirugia">Cirugía</NavDropdown.Item>
                            <NavDropdown.Item href="#consulta-externa">Consulta Externa</NavDropdown.Item>
                            <NavDropdown.Item href="#farmacia">Farmacia</NavDropdown.Item>
                            <NavDropdown.Item href="#hospitalización">Hospitalización</NavDropdown.Item>
                            <NavDropdown.Item href="#imágenes-diagnósticas">Imágenes Diagnósticas</NavDropdown.Item>
                            <NavDropdown.Item href="#laboratorio">Laboratorio Clínico</NavDropdown.Item>
                            <NavDropdown.Item href="#programas-clinico">Programas PYP</NavDropdown.Item>
                            <NavDropdown.Item href="#urgencias-24-horas">Urgencias 24 Horas</NavDropdown.Item>
                            <NavDropdown.Item href="#uci-pediatrica">UCI Pediátrica</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="De interés" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#noticias">Noticias</NavDropdown.Item>
                            <NavDropdown.Item href="#galerias">Galerías</NavDropdown.Item>
                            <NavDropdown.Item href="#videos">Videos</NavDropdown.Item>
                            <NavDropdown.Item href="#casos-de-exito">Casos de éxito</NavDropdown.Item>
                            <NavDropdown.Item href="#eventos">Eventos</NavDropdown.Item>
                            <NavDropdown.Item href="#club-noel-en-los-medios">Club Noel en los medios</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="¿Quienes somos?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#nuestra-historia">Nuestra Historia</NavDropdown.Item>
                            <NavDropdown.Item href="#planeación-estratégica">Planeación estratégica</NavDropdown.Item>
                            <NavDropdown.Item href="#directorio-médico">Directorio Médico</NavDropdown.Item>
                            <NavDropdown title="Políticas institucionales" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#política-de-calidad">Política de Calidad</NavDropdown.Item>
                                <NavDropdown.Item href="#política-de-humanización">Política de Humanización</NavDropdown.Item>
                                <NavDropdown.Item href="#política-de-seguridad-del-paciente">Política de Seguridad del Paciente</NavDropdown.Item>
                                <NavDropdown.Item href="#política-de-seguridad-y-salud-en-el-trabajo">Política de Seguridad y Salud en el Trabajo</NavDropdown.Item>
                                <NavDropdown.Item href="#política-de-tratamiento-de-datos-personales">Política de Tratamiento de Datos Personales</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Item href="#convenios-docencia-servicio">Convenios docencia servicio</NavDropdown.Item>
                            <NavDropdown.Item href="#certificaciones">Certificaciones</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Atención al cliente" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#derechos-y-deberes-del-paciente">Derechos y deberes del paciente</NavDropdown.Item>
                            <NavDropdown.Item href="#donaciones">Donaciones</NavDropdown.Item>
                            <NavDropdown.Item href="#pqrsf">PQRSF</NavDropdown.Item>
                            <NavDropdown.Item href="#línea-etica">Línea Ética</NavDropdown.Item>
                            <NavDropdown.Item href="#preguntas-frecuentes">Preguntas Frecuentes</NavDropdown.Item>
                            <NavDropdown.Item href="#trabajo-social">Trabajo social</NavDropdown.Item>
                            <NavDropdown.Item href="#trabaja-con-nosotros">Trabaja con nosotros</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#contacto">Contacto</Nav.Link>

                        <Nav.Link href="#buscar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default CustomNavbar;
