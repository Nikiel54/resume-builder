

export function WorkExperienceItem({experience, index, updateExperienceField }) {
    function handleChangeInExp(event) {
        const { name, value } = event.target;

        updateExperienceField(index, name, value);
    }

    return (
        <div className="experience-item">
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
        </div>
    )
}