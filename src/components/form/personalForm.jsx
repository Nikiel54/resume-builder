

export function PersonalForm({data, updatePersonalInfo}) {

    function handleChange(event) {
        const { name, value } = event.target;

        updatePersonalInfo(name, value);
    }

    return (
        <form id="personal-info-section">
            <header>Enter personal information below</header>
            <input 
                type="text" 
                onChange={handleChange} 
                placeholder="First Name" 
                name="firstName"
                value={data.PersonalInfo.firstName}
                required
            />
            <input 
                type="text" 
                onChange={handleChange} 
                placeholder="Last Name" 
                name="lastName"
                value={data.PersonalInfo.lastName}
                required
            />
            <input 
                type="email" 
                onChange={handleChange} 
                placeholder="Enter your email" 
                name="email"
                value={data.PersonalInfo.email}
                required 
            />
            <input 
                type="tel" 
                onChange={handleChange} 
                placeholder="Enter your phone number" 
                name="phone"
                value={data.PersonalInfo.phone}
            />
            <input 
                type="url" 
                onChange={handleChange} 
                placeholder="Enter your github"
                name="github"
                value={data.PersonalInfo.github}
            />
            <input 
                type="url" 
                onChange={handleChange} 
                placeholder="Enter your personal website" 
                name="otherWebsite"
                value={data.PersonalInfo.otherWebsite}
            />
        </form>
    )
}