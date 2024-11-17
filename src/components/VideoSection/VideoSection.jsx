import { Container } from "react-bootstrap";

Container

const VideoSection = () => {
    return (
        <Container>
            <div className='mb-3 d-flex justify-content-center c-border-bottom'>
                <h3>Videos</h3>
            </div>
            <div class="mb-3 row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <iframe  height={233} src="https://www.youtube.com/embed/ShXrLHhnWVA?si=jP8_CLiOsbafvgjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title">Consultorio Digital: ¿Cómo cuidar la salud mental de nuestros niños?</h5>
                                <p class="card-text">El aislamiento social puede presentar un desafio para los niños, el cambio de rutinas y espacios puede generar dificultades. El desarrollo individual así como prender habilidades sociales, manejar las emociones y enfrentarse a los problemas son aspectos fundamentales de la salud mental.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <iframe height={233} src="https://www.youtube.com/embed/FmrL3MKnhUM?si=cNk_sOhbe5lnSqla" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title">¡100 años siendo la historia que transforma el futuro!</h5>
                                
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <iframe height={233} src="https://www.youtube.com/embed/6rY6gMsLkW4?si=JvtJmRq37JhlVkWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title">Humanización de los servicios Club Noel</h5>
                                <p class="card-text">Colaboradores y usuarios de la Fundación Clínica Club Noel describen como la humanización impacta de manera positiva en la atención, prestación de servicios y estancia en nuestra institución.</p>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default VideoSection;
