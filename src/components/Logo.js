import logoGreen from "../img/logoGreen.png";
import logoBlack from "../img/logoBlack.png";
import { useState } from "react";

/** Logo
 * 
 * App -> Logo
 */
function Logo() {
  let [logo, setLogo] = useState(logoGreen);

  //TODO: add logic change between the 2 colors, they also seem be diff size so...
  let styles = {
    width: "400px",
    paddingLeft: "75px",
    paddingTop: "30px"
  }
  
  return (
    <div className="Logo" style={styles}>
      <img src={logo} alt="Genshin Logo" />
    </div>
  )
}

export default Logo;