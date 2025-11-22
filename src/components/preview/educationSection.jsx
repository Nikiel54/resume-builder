
import { formatDate } from "../../resumePreview";


export function EducationPreviewSection({ data }) {
    // Formatting for university and major
    const university = data.Education.school.trim();
    const major = data.Education.major.trim();
    const gpa = data.Education.gpa.trim();
    let degree = "";
    if (major !== "" && gpa !== "") {
        degree = `Bachelors in ${major} (GPA: ${gpa})`;
    }
    else if (major !== "" && gpa === "") {
        degree = `Bachelors in ${major}`;
    }

    // Degree duration
    const enrollmentDate = data.Education.enrollmentDate.trim();
    const degreeDuration = enrollmentDate !== "" ? `${formatDate(enrollmentDate)} - Present`: "";

    return (
        <div className="resume-section">
            <div className="resume-section-header">
                <h2>EDUCATION</h2>
            </div>
            <div className="item-header">
                <div>
                    <h3>{university}</h3>
                    <p className="date">{degreeDuration}</p>
                </div>
                <em>{degree}</em>
            </div>
        </div>
    )
}
