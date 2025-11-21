import { WorkExperienceItem } from "./experienceCard"

export function WorkHistoryForm({data, updateExperienceField, addExperience}) {

    return (
        <div id="experience-section" className="form-section">
            <header>Work History</header>
            <div className="experience-item-container">
                {data.Experience.map((exp, index) => (
                    <WorkExperienceItem
                        key={index}
                        experience={exp}
                        updateExperienceField={updateExperienceField}
                        index={index}
                    />
                ))}
            </div>
            <button type="button" onClick={addExperience}>+ Add Experience</button>
        </div>
    )
}

