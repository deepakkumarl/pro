import "./View.css"
const View = ({ empp, setEmpp }) => {
    return (
      <div>
        <h2>Employee List</h2>
        {empp.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          <ul className="class">
            {empp.map((employee, index) => (
              <li key={index}>
                <p><strong>First Name:</strong> {employee.fname}</p>
                <p><strong>Last Name:</strong> {employee.lname}</p>
                <p><strong>ID:</strong> {employee.id}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.tel}</p>
                <p><strong>Department:</strong> {employee.dept}</p>
                <p><strong>Date of Joining:</strong> {employee.date}</p>
                <p><strong>Role:</strong> {employee.role}</p>
              
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default View;
  