// import React from "react"
// import "./home.css"
// import { FiCopy } from "react-icons/fi"


// const Home = () => {
  
//   return (
//     <div className="background_container">
//       <div className="main_container">
//         <div className="navbar_header">
//           {/* <p className={styles.brand_text}>IDfy</p> */}
//         </div>
//         <div className="first_view_container">
//           <div className="first_view">
//             <p className="first_view_heading">
//               Generate Unique UUID with Ease For Your App using{" "}
//               <span>IDfy</span>.
//             </p>
//             <p className="first_view_tagline">
//               IDfy is a simple and easy to use tool that generates unique ID for
//               your app.
//             </p>

//             <div className="first_view_uuid">
              
//             </div>

//             <div className="first_view_button_container">
//               <button
//                 className="first_view_button_one"
//               >
//                 Copy and Generate
//               </button>
//               <button
//                 className="first_view_button"
                
//               >
//                 Generate New
//               </button>
//             </div>
            
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   )
// }

// export default Home








import React from "react";
import "./Home.css";
import Footer from "../Footer/footer";

const Home = () => {
 
    return (
        <div className="background_container">
                <div className="first_view_container">
                    <div className="first_view">
                        <div className="first_view_texts">
                            <p className="fv_heading">
                             Unlock project success with <span> Gogetr's </span> bite-sized approach!
                            </p>

                            <p className="fv_tagline">
                            With Gogetr, you can say goodbye to overwhelming project steps and hello to a more manageable workflow. By breaking down your project into smaller, more achievable tasks, Gogetr helps you stay focused and motivated, one step at a time.
                            </p>

                            <button className="start_button" >Show Tasks</button>
                               
                        </div>
                    </div>
                </div>
                <Footer/>
        </div>
    );
};

export default Home;








// import React from "react"
// import "./Home.css"


// const Home = () => {
 
//   return (
//     <div className="background_container">
//       <div className="main_container">
//         <div className="first_view_container">
//           <div className="first_view">
//             <p className="first_view_heading">
//               Generate Unique UUID with Ease For Your App using{" "}
//               <span>IDfy</span>.
//             </p>
//             <p className="first_view_tagline">
//               IDfy is a simple and easy to use tool that generates unique ID for
//               your app.
//             </p>
//             <button className="first_view_button_one">
//                 Show Tasks
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home