import React, { useState } from 'react'
import { initialResumeData } from './components/data/resume_data';
import ResumePreview from './components/preview/resume_preview';

const App = () => {

  const [resumeData, setResumeData] = useState (initialResumeData);

  const handelFullNameChange = (e) => {
    setResumeData ({
      ...resumeData,
      personal_info : {
        ...resumeData.personal_info,
        full_name: e.target.value
      }
    });
  };

  return (
    <div>
      <h1 className='text-center font-[ lato] text-[28px] mt-10 text-blue-400'>Smart Builder</h1>

      <label>Full Name : </label>
      <input 
      type="text"
      value={resumeData.personal_info.full_name}
      onChange={handelFullNameChange}
      placeholder='Enter Full Name'
       />
       <div className='flex-3'>
        <ResumePreview data={resumeData}/>
        
        </div>       
    </div>
  )
}

export default App
