import { useState } from 'react'
import './App.css'
import { Resumeform } from './resumeForm';
import { Resumepreview } from './resumePreview';

// JSON document to be sent to the preview component for rendering
const initialResumeData = {
    PersonalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        github: "",
        otherWebsite: "",
    },
    Education: {
        school: "",
        major: "",
        graduationDate: "",
    },
    Experience: [
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          bullets: [],
        }
    ]
}

function App() {
  const [data, setData] = useState(initialResumeData);

  return (
    <>
      <Resumeform data={data} setData={setData} />
      <Resumepreview data={data} />
    </>
  )
}

export default App
