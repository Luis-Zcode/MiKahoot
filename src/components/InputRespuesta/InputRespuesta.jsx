import { Form, InputGroup } from "react-bootstrap";

const InputRespuesta = ({activate, nameRadio, onChange, inputRef, onChangeTwo, name}) => {
    return (
        <>
            <InputGroup>
                <Form.Control onChange={onChange} name={name} ref={inputRef} aria-label="Text input with radio button" />
                <InputGroup.Radio disabled={activate} name={nameRadio} onChange={onChangeTwo} aria-label="Radio button for following text input" />
            </InputGroup>
        </>
    );
}

export default InputRespuesta;