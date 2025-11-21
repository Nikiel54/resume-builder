


export function EducationForm({data, updateEducationInfo}) {
    function handleChangeInEducation(event) {
        const { name, value } = event.target;

        updateEducationInfo(name, value);
    }

    return (
        <form id="personal-info-section" className="form-section">
            <header>Education below</header>
            <div className="form-row">
                <div>
                    <label htmlFor="school">University:</label>
                    <input
                        type="text"
                        onChange={handleChangeInEducation}
                        placeholder="e.g. University of Waterloo"
                        name="school"
                        id="school"
                        value={data.Education.school}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="major">Current Major:</label>
                    <input
                        type="text"
                        onChange={handleChangeInEducation}
                        placeholder="e.g. Computer Science"
                        name="major"
                        id="major"
                        value={data.Education.major}
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div>
                    <label htmlFor="graduationDate">Expected graduation:</label>
                    <input
                        type="date"
                        onChange={handleChangeInEducation}
                        placeholder="Graduation Date"
                        name="graduationDate"
                        id="graduationDate"
                        value={data.Education.graduationDate}
                        required
                    />
                </div>
            </div>
        </form>
    )
}