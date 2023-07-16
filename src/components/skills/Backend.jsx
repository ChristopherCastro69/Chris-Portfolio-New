import React from 'react'

const Backend = () => {
  return (
    <div className="skills_content">
    <h3 className="skills_title">Backend Developer</h3>
    <div className="skills_box">
        <div className="skills_group">

            {/* 1st */}
            <div className="skills_data">
                <i class='bx bx-badge-check'></i>
                
                <div>
                    <h3 className="skills_name">PHP</h3>
                    <span className="skills_level">Basic</span>
                </div>           
            </div>

              {/* 2nd */}
              <div className="skills_data">
                <i class='bx bx-badge-check'></i>
                
                <div>
                    <h3 className="skills_name">Python</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>

             {/* 3rd */}
             <div className="skills_data">
                <i class='bx bx-badge-check'></i>
                
                <div>
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>
             {/* 4th */}
             <div className="skills_data">
                <i class='bx bx-badge-check'></i>
                
                <div>
                    <h3 className="skills_name">NumPy</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>

            {/* 5th */}
            <div className="skills_data">
                <i class='bx bx-badge-check'></i>
                
                <div>
                    <h3 className="skills_name">Test</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend