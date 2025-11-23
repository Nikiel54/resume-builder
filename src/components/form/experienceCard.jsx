import { useState } from "react";

export function WorkExperienceItem({ experience, index, updateExperienceField, removeExperienceField }) {
    const [isOpen, setIsOpen] = useState(index === 0 ? true : false);

    function toggleOpen() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    function handleChangeInExp(event) {
        const { name, value } = event.target;

        updateExperienceField(index, name, value);
    }

    function handleChangeInBullets(event) {
        const { name, value } = event.target;

        const lines = value
            .split("\n")

        updateExperienceField(index, name, lines);
    }

    return (
        <div className="experience-item">
            <div className="experience-header">
                <button type="button" className="toggle-btn" onClick={() => toggleOpen()}>
                    {isOpen ? `Experience ${index + 1} ▼` : `Experience ${index + 1} ▶`}
                </button>
                {
                    <svg xmlns="http://www.w3.org/2000/svg" className="remove-icon" 
                        index={index} id="Outline" onClick={() => removeExperienceField(index)}
                        viewBox="0 0 24 24" width="12px" height="12px">
                        <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
                    </svg>
                }
            </div>

            {isOpen && (
                <>
                    <div className="form-row">
                        <div>
                            <label>Company:
                                <input
                                    type="text"
                                    onChange={handleChangeInExp}
                                    placeholder="Company"
                                    name="company"
                                    value={experience.company}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Position:
                                <input
                                    type="text"
                                    onChange={handleChangeInExp}
                                    placeholder="Position"
                                    name="position"
                                    value={experience.position}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div>
                            <label>Start Date:
                                <input
                                    type="date"
                                    onChange={handleChangeInExp}
                                    name="startDate"
                                    value={experience.startDate}
                                />
                            </label>
                        </div>
                        <div>
                            <label>End Date:
                                <input
                                    type="date"
                                    onChange={handleChangeInExp}
                                    name="endDate"
                                    value={experience.endDate}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <label> Bullets:
                            <textarea
                                name="bullets"
                                placeholder="Enter each bullet on a new line"
                                value={experience.bullets.join("\n")}
                                onChange={handleChangeInBullets}
                            ></textarea>
                        </label>
                    </div>
                </>
            )}
        </div>
    )
}