import { EducationPreviewSection } from "./components/preview/educationSection";
import { PreviewHeader } from "./components/preview/previewHeader";
import { parseISO, format } from "date-fns";


export function Resumepreview ({ data }) {

    return (
        <div id="livePreview">
            <h1 className="page-section-title">Resume Preview</h1>
            <div className="preview-section">
                <PreviewHeader data={data} />
                <EducationPreviewSection data={data} />
            </div>
        </div>
    )
}

export function formatDate(date) {
    const isoDate = parseISO(date); // get new date object
    const formatDate = format(isoDate, "MMM. d");

    return formatDate;
}