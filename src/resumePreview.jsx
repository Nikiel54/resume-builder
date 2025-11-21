import { EducationPreviewSection } from "./components/preview/educationSection";
import { PreviewHeader } from "./components/preview/infoHeader";


export function Resumepreview ({ data }) {

    return (
        <div id="livePreview">
            <h1 className="page-section-title">Live Preview here</h1>
            <div className="preview-section">
                <PreviewHeader data={data} />
                <EducationPreviewSection data={data} />
            </div>
        </div>
    )
}