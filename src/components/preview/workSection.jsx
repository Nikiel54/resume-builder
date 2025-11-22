import { formatDate } from "../../resumePreview";

const CIRCLESVG = (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="8px" height="8px">
        <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Z"/>
    </svg>
)

export function ExperiencePreviewSection({ data }) {
    return (
        <div className="resume-section">
            <div className="resume-section-header">
                <h2>EXPERIENCE</h2>
            </div>
            {data.Experience.map((exp, index) => (
                <ExperienceItem key={index} data={exp}/>
            ))}
        </div>
    )
}


function ExperienceItem({ data }) {
    const company = data.company.trim();
    const position = data.position.trim();

    const startDate = data.startDate.trim();
    const endDate = data.endDate.trim();

    const duration = !startDate && !endDate 
        ? "" 
        : `${formatDate(startDate)} - ${formatDate(endDate)}`

    const bullets = data.bullets
        .map(b => b.trim())
        .filter(Boolean)
        ;


    return (
        <div className="experience-item">
            <div className="item-header">
                <div>
                    <h3>{company}</h3>
                    <p className="date">{duration}</p>
                </div>
                <em>{position}</em>
            </div>

            {bullets.map((bullet, index) => (
                <p className="experience-bullet" key={index}>
                    {CIRCLESVG}
                    {bullet}
                </p>    
            ))}
        </div>
    )
}