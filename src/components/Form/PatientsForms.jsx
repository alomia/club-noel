import { Container } from "react-bootstrap";


const PatientsForms = () => {
    let paciente = {}
    
    const handlerSumit = (event) => {

    }

    return (
        <Container>
            <form>
                <legend>Disabled fieldset example</legend>
                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Nombre</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Carlos Ruiz" />
                </div>
                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Tipo de cedula</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="1007112734" />
                </div>
                <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Tipo de sangre</label>
                    <div className="d-flex">
                        <select id="disabledSelect" class="form-select">
                            <option>A</option>
                            <option>B</option>
                            <option>AB</option>
                            <option>O</option>
                        </select>
                        <select id="disabledSelect" class="form-select">
                            <option>+</option>
                            <option>-</option>
                        </select>
                    </div>
                </div>
                <button onClick={handlerSumit} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </Container>
    );
}

export default PatientsForms;
