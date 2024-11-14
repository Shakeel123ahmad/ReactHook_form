import { Link } from 'react-router-dom';
const Navigator = () => {
  return ( 
    <div>
      <div className="pl-2 flex border-2 border-[#0c636e] mx-[300px] mt-[40px] mb-[10px] rounded-lg bg-aliceblue">
        <div> 
          <h3> TODOS </h3>
        </div>
        <div className="flex ml-[355px] gap-5 text-burlywood">
          <Link to="/">
            <h4> Home </h4>
          </Link>
          <Link to="/Todos">
            <h4> Todos </h4>
          </Link>
          <Link to="/About">
            <h4> Aboutus </h4>
          </Link>
          <Link to="/Form">
            <h4> Form</h4>
          </Link>
          <Link to="/Rform">
            <h4> Rform</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
