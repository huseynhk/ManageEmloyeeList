import {Form, Button, FormGroup, FormControl} from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';


const AddForm = () =>{

    const {addEmployee} = useContext(EmployeeContext);

    // const [name , setName] = useState("");
    // const [email , setEmail] = useState("");
    // const [address , setAddress] = useState("");
    // const [phone , setPhone] = useState("");

    const [newEmployee , setNewEmloyee] = useState({
        name:"", email:"",address:"",phone:""
    });
    
    const {name , email ,address , phone} = newEmployee;

    const onInputChange = (e) => {
        setNewEmloyee({...newEmployee , [e.target.name] : e.target.value})
    } 
    
    const handleSubmit = (e) => {
     e.preventDefault();
     addEmployee(name , email , address , phone)
    }
    
   
    

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl 
                type="text"
                placeholder="Name *"
                value = {name}
                name="name"
                // onChange={e => setName(e.target.value)}
                onChange={e => onInputChange(e)}

                required
                />
            </FormGroup>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    value = {email}
                    name="email"
                    // onChange={e => setEmail(e.target.value)}
                    onChange={e => onInputChange(e)}
                    required 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    value = {address}
                    name="address"
                    // onChange={e => setAddress(e.target.value)}
                    onChange={e => onInputChange(e)}

                    rows={3} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    value = {phone}
                    name="phone"
                    // onChange={e => setPhone(e.target.value)}
                    onChange={e => onInputChange(e)}


                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>
    )
}
export default AddForm;