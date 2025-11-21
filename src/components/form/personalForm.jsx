

export function PersonalForm({data, updatePersonalInfo}) {

    function handleChangeInPersonal(event) {
        const { name, value } = event.target;

        updatePersonalInfo(name, value);
    }

    return (
        <form className="form-section">
            <header>Personal Information</header>
            <div className="form-row">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        onChange={handleChangeInPersonal}
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                        value={data.PersonalInfo.firstName}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        onChange={handleChangeInPersonal}
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                        value={data.PersonalInfo.lastName}
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        onChange={handleChangeInPersonal}
                        placeholder="Email"
                        name="email"
                        id="email"
                        value={data.PersonalInfo.email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        onChange={handleChangeInPersonal}
                        placeholder="Phone Number"
                        name="phone"
                        id="phone"
                        value={data.PersonalInfo.phone}
                    />
                </div>
            </div>
            <div className="form-row">
                <div>
                    <label htmlFor="github">Link to Github:</label>
                    <input
                        type="url"
                        onChange={handleChangeInPersonal}
                        placeholder="Github (optional)"
                        name="github"
                        id="github"
                        value={data.PersonalInfo.github}
                    />
                </div>
                <div>
                    <label htmlFor="otherWebsite">Other Websites:</label>
                    <input
                        type="url"
                        onChange={handleChangeInPersonal}
                        placeholder="Other Websites (optional)"
                        name="otherWebsite"
                        id="otherWebsite"
                        value={data.PersonalInfo.otherWebsite}
                    />
                </div>
            </div>
        </form>
    )
}