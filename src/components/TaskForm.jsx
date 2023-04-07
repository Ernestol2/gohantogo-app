import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export default function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description);
    }

  return (
   <Form onSubmit={handleSubmit}>
    <Form.Group className="p-2">
        <Form.Label>Nombre</Form.Label>
        <Form.Control className="bg-dark text-light" type="text" placeholder="Escribe tu nombre" />
    </Form.Group>

    <Form.Group className="p-2">
        <Form.Label>E-mail</Form.Label>
        <Form.Control  className="bg-dark text-light" type="text" placeholder="user@usermail.com" />
    </Form.Group>

    <Button className="m-2" variant="primary" type="submit">
        Guardar
    </Button> 
   </Form>
  )
}


