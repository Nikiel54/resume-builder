

export function WorkExperienceItem({experience, index, updateExperienceField }) {
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
        </div>
    )
}