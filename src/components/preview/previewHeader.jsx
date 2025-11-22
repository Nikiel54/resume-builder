
// PreviewHeader component displays the ui for the header of
//   the resume, which includes personal information.
export function PreviewHeader({ data }) {
    // Title name
    const firstName = data.PersonalInfo.firstName.trim().toUpperCase();
    const lastName = data.PersonalInfo.lastName.trim().toUpperCase();

    // subheading for additional info
    const phoneNumberFormatted = formatPhone(data.PersonalInfo.phone.trim());
    const contactInfo = [
        phoneNumberFormatted,
        data.PersonalInfo.email.trim(),
        data.PersonalInfo.github.trim(),
        data.PersonalInfo.otherWebsite.trim()
    ].filter(Boolean);

    return (
        <div id="header-preview-section">
            <h2 className="user-title">
                <ResumeTitleName text={firstName}/>
                {" "}
                <ResumeTitleName text={lastName}/>
            </h2>
            <p className="user-additional-info">
                {contactInfo.join(" | ")}
            </p>
        </div>
    )
}

// Helper component to format the title of the resume
function ResumeTitleName({ text }) {
    if (!text) return null;
    
    return (
        <>
            <span style={{fontSize:"30px"}}>{text.charAt(0)}</span>
            {text.slice(1)}
        </>
    )
}

// Helper function to format phone numbers.
function formatPhone(num) {
  if (!num) return "";

  // extra safety since we can't prevent non numeric letters
  const digits = num.replace(/\D/g, "");
  const length = digits.length;

  // Formats based on length
  let areaCode = null;
  let firstGrp = null;
  let lastGrp = null;
  if (length <= 3) {
    areaCode = digits.slice(0, 3);
    return `(${areaCode})`;
  } 
  else if (length <= 6) {
    areaCode = digits.slice(0, 3);
    firstGrp = digits.slice(3, 6);
    return `(${areaCode}) ${firstGrp}`;
  } else {
    areaCode = digits.slice(0, 3);
    firstGrp = digits.slice(3, 6);
    lastGrp = digits.slice(6, 10);
    return `(${areaCode}) ${firstGrp}-${lastGrp}`;
  }
}
