import { WorkExperienceItem } from "./experienceCard"

export function WorkHistoryForm({ data, updateExperienceField, addExperience, removeExperience }) {

    return (
        <div id="experience-section" className="form-section">
            <header>Work History</header>
            <div className="experience-item-container">
                {data.Experience.map((exp, index) => (
                    <WorkExperienceItem
                        key={index}
                        experience={exp}
                        updateExperienceField={updateExperienceField}
                        removeExperienceField={removeExperience}
                        index={index}
                    />
                ))}
            </div>
            <button type="button" onClick={addExperience}>+ Add Experience</button>
        </div>
    )
}

