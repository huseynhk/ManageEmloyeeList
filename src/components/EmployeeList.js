import { useEffect, useState } from "react";
import { useContext } from "react";
import Employee from "./Employee";
import { Button, Modal , Alert } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import AddForm  from "./AddForms";
import Pagination from "./Pagination";

const EmployeeList = () =>{

        const {sortedEmployees} = useContext(EmployeeContext);
        const [showAlert , setShowAlert] = useState(false);
        const [show, setShow] = useState(false);

        const [currentPage , setCurrentPage] = useState(1);
        const [employeesPerPage] = useState(2)

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        const handleShowAlert = () => {
            setShowAlert(true);
            setTimeout(()=>{
            setShowAlert(false);
            },2000)
        }

        useEffect(() => {
            handleClose();
            return () => {
                handleShowAlert();
            }
        },[sortedEmployees])

        const indexOfLastEmployee = currentPage * employeesPerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
        const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee , indexOfLastEmployee);
        const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);

      //const myRef = useRef(null)
      
    //   const onButtonClick = () =>{
    //      myRef.current.focus();
    //   }

    return (

        <>
          
        <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
            </div>
            <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
            </div>
        </div>
        </div>

        <Alert show={showAlert} variant="success"  onClose={() => setShowAlert(false)} dismissible>
          Emloyee List Updated !
        </Alert>

            <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
                    {
                                //.sort((a,b) => a.name.localeCompare(b.name))
                            currentEmployees.map((employee) => ( 
                            <tr key={employee.id}>
                          <Employee employee={employee}/> 
                            </tr>
                        ))
                        
                    }
                </tbody>
                </table>

                <Pagination pages={totalPages} setCurrentPage={setCurrentPage}/>

                <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
            </Modal.Footer>
        </Modal>

       {/* <input ref={myRef} type="text"></input>
       <button onClick={onButtonClick}>Focus Input</button> */}

        </> 
    )
}

export default EmployeeList;