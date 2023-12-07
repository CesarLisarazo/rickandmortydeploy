import './about.css'
import { Link } from 'react-router-dom';
const About= ()=>{
return (
<div className="aboutContainer">
<div className="card aboutCard">
     
      <h2 className='charName'><p>Name : Cesar</p></h2>
   <Link to="/Home">
      <img src="https://scontent.fcor11-1.fna.fbcdn.net/v/t39.30808-6/393783677_292118453714275_1735758429959703300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4uXTeHwFd9FDJ7AyMtmk7URvYsDSYXHtRG9iwNJhce9IYFLnlqnPzsqdU93oGaObtIB3-bPqoiFmVHomrk81i&_nc_ohc=krMaTo4w-4sAX-tR0na&_nc_ht=scontent.fcor11-1.fna&oh=00_AfAIVf51METKaPVcxOjuBKPH-1lM32nNirQlZGoNSFQHTg&oe=655C0FBB" alt={name} />
      </Link>
      <h2>Status : Alive</h2>
      <h2>Species : Humanoid</h2>
      <h2>Gender : Male</h2>
      <h2>Origin : Earth</h2>
    </div>
</div>

)
}

export default About;