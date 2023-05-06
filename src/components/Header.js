import { useState } from "react";

const Title = () => {

  console.log("Lets check inside title");
  
  return (
    <a href="/">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
        alt="food-villa.png"
      />
    </a>
  );
};

const Header = () => {
const title ="Food villa";

const[titleHeader,settitleHeader] = useState(title);

console.log("Rendering entire component");

return (
    <div className="header">
      <Title />
      <h1>{titleHeader}</h1>
      <button onClick={()=>settitleHeader("Awesome")}>Change Title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
