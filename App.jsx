import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Form from './Form';
import axios from 'axios';
import View from './View';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [dept, setDept] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [empp, setEmpp] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fname.trim()) {
      newErrors.fname = 'First name is required';
    }
    if (!lname.trim()) {
      newErrors.lname = 'Last name is required';
    }
    if (!id.trim()) {
      newErrors.id = 'Employee ID is required';
    } else if (!/^[a-zA-Z0-9]{1,10}$/.test(id)) {
      newErrors.id = 'ID must be alphanumeric and max 10 characters';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
      newErrors.email = 'Invalid email format';
    }
    if (!tel.trim()) {
      newErrors.tel = 'Phone number is required';
    } else if (!/^\d{10}$/.test(tel)) {
      newErrors.tel = 'Phone number must be 10 digits';
    }
    if (!dept.trim()) {
      newErrors.dept = 'Department is required';
    }
    if (!date.trim()) {
      newErrors.date = 'Date of joining is required';
    } else if (new Date(date) > new Date()) {
      newErrors.date = 'Date of joining cannot be in the future';
    }
    if (!role.trim()) {
      newErrors.role = 'Role is required';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newEmployee = {
        fname,
        lname,
        id,
        email,
        tel,
        dept,
        date,
        role,
      };

      setEmpp((prevEmpp) => [...prevEmpp, newEmployee]);
      axios.post("http://localhost:5000/subb", {
        fname,
        lname,
        id,
        email,
        tel,
        dept,
        date,
        role
      })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            alert("User added successfully");
            setFname("");
            setLname("");
            setId("");
            setEmail("");
            setDept("");
            setDate("");
            setTel("");
            setRole("");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Form
              fname={fname}
              setFname={setFname}
              lname={lname}
              setLname={setLname}
              id={id}
              setId={setId}
              email={email}
              setEmail={setEmail}
              tel={tel}
              setTel={setTel}
              dept={dept}
              setDept={setDept}
              date={date}
              setDate={setDate}
              role={role}
              setRole={setRole}
              errors={errors}
              handleSubmit={handleSubmit}
            />
          } 
        />
        <Route
          path="/view"
          element={<View empp={empp} setEmpp={setEmpp} />}
        />
      </Routes>

      
      <Link to="/view">
        <button className="btn">View</button>
      </Link>
    </Router>
  );
}

export default App;
