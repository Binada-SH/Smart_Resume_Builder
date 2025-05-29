import React from 'react'

const resume_preview = ({data}) => {

    const {personal_info, education, skills, projects} = data;

  return (
    <div className='bg-blue-200 shadow-md p-6 w-full max-w-[500px]'>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{personal_info.full_name || ""}</h2>
      
    </div>
  )
}

export default resume_preview
