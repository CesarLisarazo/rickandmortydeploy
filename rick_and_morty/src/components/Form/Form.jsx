import "./form.css";
import { useState } from "react";
import validation from "../Utilities/validation";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit=(event)=>{
event.preventDefault();
   login(userData) 
  }

  return (
    <div className="formContainer">
<div className='banner'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'></img>
</div>
     
      <form onSubmit={handleSubmit}className="card ">
      <div className =" formEmail">
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? <p style={{color:"coral"}}>ingrese ismael</p> : <p style={{color:"green"}}>ingrese ismael</p>}
        {errors.e2 ? <p>{errors.e2}</p> : null}
        {errors.e3 ? <p>{errors.e3}</p> : null}
        </div>
      
        <div className =" formPass">
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {errors.p1 ? <p>{errors.p1}</p> : null}
        {errors.p2 ? <p>{errors.p2}</p> : null}
        </div>
     
        <button disabled ={errors.e1|| errors.e2||  errors.e3|| errors.p1 ||errors.p2} className='cardButton'  type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Forms;
