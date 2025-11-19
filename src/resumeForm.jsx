import { useState } from "react";
import { PersonalForm } from "./components/form/PersonalForm";
import { EducationForm } from "./components/form/educationForm";
import { WorkHistoryForm } from "./components/form/workHistoryform";
import { ProjectsForm } from "./components/form/projects";


export function Resumeform ({ setData }) {
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

    function updateExperienceInfo (field, value) {
        setData((prev => {
            return {
                ...prev,
                Experience: [],
            }
        }))
    }

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
            <PersonalForm updatePersonalInfo={updatePersonalInfo} />
            <EducationForm updateEducationInfo={updateEducationInfo} />
            <WorkHistoryForm updateExperienceInfo={updateExperienceInfo} />
            <ProjectsForm updateProjectsInfo={updateProjectsInfo} />
        </div>
    );
}