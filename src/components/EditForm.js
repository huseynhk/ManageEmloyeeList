import { Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useEffect, useState } from 'react';



const EditForm = ({ theEmployee }) => {

    const { dispatch } = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const alreadyUpdatedEmployee = {id , name , email , address , phone}

    const handleSubmit = (e) => {
        e.preventDefault();
       // updateEmployee(id , alreadyUpdatedEmployee);
       dispatch({type : 'update_employee' , id , alreadyUpdatedEmployee})
    }

    

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </FormGroup>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}

                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>
    )
}
export default EditForm;