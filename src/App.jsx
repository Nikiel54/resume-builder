import { useState } from 'react'
import './App.css'
import { Resumeform } from './resumeForm';
import { Resumepreview } from './resumePreview';

// JSON document to be sent to the preview component for rendering
const initialResumeData = {
    PersonalInfo: {
        name: "",
        email: "",
        phone: "",
        github: "",
        personalwebsite: "",
    },
    Education: {
        School: "",
        Major: "",
        Graduationdate: "",
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
      <Resumeform setData={setData} />
      <Resumepreview data={data} />
    </>
  )
}

export default App
