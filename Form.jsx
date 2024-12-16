import "./Form.css"

const Form = ({
    fname,
    setFname,
    lname,
    setLname,
    id,
    setId,
    email,
    setEmail,
    tel,
    setTel,
    dept,
    setDept,
    date,
    setDate,
    role,
    setRole,
    errors,
    handleSubmit,
  }) => {
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <span className="names">
            <input
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {errors.fname && <small className="error">{errors.fname}</small>}
  
            <input
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            {errors.lname && <small className="error">{errors.lname}</small>}
          </span>
  
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {errors.id && <small className="error">{errors.id}</small>}
  
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <small className="error">{errors.email}</small>}
  
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          {errors.tel && <small className="error">{errors.tel}</small>}
  
          <select
            name="department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          >
            <option value="" disabled>
              Select a department
            </option>
            <option value="Hr">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
          </select>
          {errors.dept && <small className="error">{errors.dept}</small>}
  
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <small className="error">{errors.date}</small>}
  
          <input
            type="text"
            placeholder="Enter Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          {errors.role && <small className="error">{errors.role}</small>}
  
          <span className="buttons">
            <button type="submit">Submit</button>
            <button type="reset" onClick={() => window.location.reload()}>
              Reset
            </button>
          </span>

          
        </form>
      </>
    );
  };
  
  export default Form;
  