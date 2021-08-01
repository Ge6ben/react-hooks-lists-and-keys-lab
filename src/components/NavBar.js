import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links)
  return( 
  <nav>
    
    links.map( (lik) => (
    <a key={lik}  href={"#"+lik} > {lik}</a>
    ))
    }
   </nav>
    )

}

export default NavBar;
