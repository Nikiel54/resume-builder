


export function EducationForm({data, updateEducationInfo}) {
    function handleChangeInEducation(event) {
        const { name, value } = event.target;

        updateEducationInfo(name, value);
    }


    // Helper function to control gpa inputs, which then calls 
    //   the update value function updateEducationInfo.
    function handleGpaChange(e) {
        let value = e.target.value;

        // Allow only: digits, one decimal point, max 2 decimals.
        if (/^\d{0,1}(\.\d{0,2})?$/.test(value)) {
            updateEducationInfo("gpa", value);
        }
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
                    <label htmlFor="gpa">GPA:</label>
                    <input
                        type="text"
                        name="gpa"
                        id="gpa"
                        inputMode="decimal"
                        value={data.Education.gpa}
                        onChange={handleGpaChange}
                        placeholder="e.g., 4.00"
                    />
                </div>
                <div>
                    <label htmlFor="enrollmentDate">Enrollment date:</label>
                    <input
                        type="date"
                        onChange={handleChangeInEducation}
                        placeholder="Enrollment date"
                        name="enrollmentDate"
                        id="enrollmentDate"
                        value={data.Education.enrollmentDate}
                    />
                </div>
            </div>
        </form>
    )
}