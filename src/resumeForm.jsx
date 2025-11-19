// This document entails the component structure for the 
// user facing form to input data for your resume preview.

import { PersonalForm } from "./components/form/PersonalForm";
import { EducationForm } from "./components/form/educationForm";
import { WorkHistoryForm } from "./components/form/workHistoryform";
import { ProjectsForm } from "./components/form/projects";

// Main form component
export function Resumeform ({ data, setData }) {
    // function to update data stored via the personal information section
    function updatePersonalInfo (field, value) {
        setData((prev => {
            return {
                ...prev,
                PersonalInfo: {
                    ...prev.PersonalInfo,
                    [field]: value, // copy over only specific fields with new data
                }
            }
        }))
    }

    // function to update data stored via the eduction section
    function updateEducationInfo (field, value) {
        setData((prev => {
            return {
                ...prev,
                Education: {
                    ...prev.Education,
                    [field]: value,
                }
            }
        }))
    }

    // function to update data stored via the work experience section
    function updateExperienceInfo (field, value) {
        setData((prev => {
            return {
                ...prev,
                Experience: [],
            }
        }))
    }

    // function to update data stored via the personal projects section (optional)
    function updateProjectsInfo (field, value) {
        setData((prev => {
            return {
                ...prev,
                Projects: {
                    ...prev.Projects,
                    [field]: value,
                }
            }
        }))
    }

    return (
        // User form structure
        <div id="resumeForm">
            <h1 className="form-title">Enter your information below</h1>
            <PersonalForm data={data} updatePersonalInfo={updatePersonalInfo}/>
            <EducationForm updateEducationInfo={updateEducationInfo} />
            <WorkHistoryForm updateExperienceInfo={updateExperienceInfo} />
            <ProjectsForm updateProjectsInfo={updateProjectsInfo} />
        </div>
    );
}