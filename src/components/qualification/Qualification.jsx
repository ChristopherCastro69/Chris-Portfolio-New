import React,{ useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="portfolio">
        <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Projects</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">

{/* //ToggleActive */}
            <div 
            className={
                toggleState === 1 
                ? "qualification_button qualification_active button--flex" 
                : "qualification_button button--flex"
                }
                onClick={()=> toggleTab(1)}
                >
                <i className="uil uil-graduation-cap qualification_icon"></i>
                Education
            </div>
        
            {/* //ToggleActive */}
            <div className={
                toggleState === 2 
                ? "qualification_button qualification_active button--flex" 
                : "qualification_button button--flex"
                }
                onClick={()=> toggleTab(2)}
                >
                <i className="uil uil-briefcase qualification_icon"></i>
                Experience
            </div>
        </div>
            <div className="qualification_sections">
{/* Stage 1 */}

                <div className={
                    toggleState === 1 
                    ? "qualification_content qualification_content-active" 
                : "qualification_content "
                }
                >
                    

{/* Part 1 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Computer Science</h3>
                                <span className="qualification_subtitle">
                                    Cebu Institute of Technology
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                    
                            
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <div className="qualification_line"></div>
                        </div>
                    </div>

{/* Part 2 */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Art Director</h3>
                                <span className="qualification_subtitle">
                                    Udemy
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                    
                            
                        </div>
                       
                    </div>

{/* Part 3 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Development</h3>
                                <span className="qualification_subtitle">
                                    Cebu Institute of Technology
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                    
                           
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <div className="qualification_line"></div>
                        </div>                
                    </div>

{/* Part 4 */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">UX Expert</h3>
                                <span className="qualification_subtitle">
                                    Udemy
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022 - Present
                                    </div>
                                    
                            
                        </div>
                       
                    </div>   
                </div>


{/* Stage 2 */}
                <div className={
                    toggleState === 2 
                    ? "qualification_content qualification_content-active" 
                : "qualification_content "
                }
                >
                    
        {/* Part 1 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Computer Science</h3>
                                <span className="qualification_subtitle">
                                    Cebu Institute of Technology
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                    
                            
                        </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                    </div>

        {/* Part 2 */}
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Art Director</h3>
                                <span className="qualification_subtitle">
                                    Udemy
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                    
                            
                        </div>
                        
                    </div>

        {/* Part 3 */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Development</h3>
                                <span className="qualification_subtitle">
                                    Cebu Institute of Technology
                                </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                        </div>
                             <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                                        
                    </div>   
                </div>

            </div>  
      </div>
    </section>
  )
}

export default Qualification