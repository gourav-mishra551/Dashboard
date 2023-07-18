import NavBar from "./Navbar"
import { motion } from "framer-motion";
import "./starparallex.css"
const Starparellex = () => {
  return (
    <div className="one">
      <NavBar/>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <center>
      <div className="main">
        
        <div className="left">
        <motion.div transition={{
        x: {
          duration: 1, 
          ease: "easeIn",
        }
      }}
      animate={{ x: ["-200px", "0px"] }}>
          <h2 className="heading">
            <span>Discover. Connect.</span>
        <span> Collaborate. </span></h2>
          <p className="para">An ecosystem for Social meida Influencer and Brands.</p>
          <div style={{display:"flex"}} className="twobutton">
          <button className="button"> I am an influencer</button>
          <button className="button"> I am a brand</button>
          </div>
          </motion.div>
        </div>

        <div className="right animated fadeOut">
          <img src="https://www.freeskout.com/img/top-influencer-profiles/top-3.png" alt="iphone" />
          
        </div>
      </div>
      </center>
    </div>
  )
}

export default Starparellex
