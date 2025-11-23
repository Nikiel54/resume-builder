// This document entails the component structure for the 
// user facing form to input data for your resume preview.

import { PersonalForm } from "./components/form/personalForm";
import { EducationForm } from "./components/form/educationForm";
import { WorkHistoryForm } from "./components/form/workHistoryform";

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

    function updateExperienceField(index, field, value) {
        setData(prev => {
            const updated = [...prev.Experience];

            updated[index] = {
            ...updated[index],
            [field]: value,
            };

            return {
            ...prev,
            Experience: updated,
            };
        });
    }
    
    // Add an empty Experience entry
    function addExperience() {
        setData(prev => ({
            ...prev,
            Experience: [
            ...prev.Experience,
            {
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                bullets: [],
            }
            ]
        }))
    }

    function removeExperience(index) {
        setData(prev => ({
            ...prev,
            Experience: prev.Experience.filter((_, i) => i !== index)
        }))
    }

    return (
        // User form structure
        <div id="resumeForm">
            <h1 className="page-section-title">Fill out information</h1>
            <PersonalForm data={data} updatePersonalInfo={updatePersonalInfo}/>
            <EducationForm data={data} updateEducationInfo={updateEducationInfo} />
            <WorkHistoryForm data={data} updateExperienceField={updateExperienceField} 
                addExperience={addExperience} removeExperience={removeExperience}/>
        </div>
    );
}