import { useState } from 'react'
import './App.css'
import { Resumeform } from './resumeForm';
import { Resumepreview } from './resumePreview';

// JSON document to be sent to the preview component for rendering
const initialResumeData = {
    PersonalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "",
        phone: "",
        github: "",
        otherWebsite: "",
    },
    Education: {
        school: "",
        major: "",
        gpa: "",
        enrollmentDate: "",
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
      <header>
        <h1>Ready Resumes</h1>
      </header>
      <div>
        <Resumeform data={data} setData={setData} />
        <Resumepreview data={data} />
      </div>
    </>
  )
}

export default App
