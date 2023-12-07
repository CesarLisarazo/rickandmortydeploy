import "./error.css";
import { useNavigate } from "react-router-dom";

const Error = ()=>{
    const navigate = useNavigate();

const retrocederPagina = () => {
  navigate(-1);
};
    return (
        <div className="errorContainer">


          <img onClick={retrocederPagina} src="https://retouchcenter.org/wp-content/uploads/2019/04/error-4044.jpg" alt="404 error" />
        </div>
    )
}
export default Error;