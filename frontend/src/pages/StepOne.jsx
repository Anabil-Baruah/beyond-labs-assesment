export default function StepOne({formData, setFormData, nextStep}) {

    const isValid = formData.fullName.trim() !== "" && formData.email.trim() !== ""
    return (
        <>
            <div style={{display:'flex', flexDirection:'column'}}>
            <h2>Step1: Basic Details</h2>

            <label>
                Full Name:
                <input type="text"
                    value = {formData.fullName}
                    onChange={(e)=>setFormData({...formData, fullName: e.target.value})}
                />
            </label>
            <br />
            <label>
                Email:
                <input type="email"
                    value = {formData.email}
                    onChange={(e)=>setFormData({...formData, email: e.target.value})}
                />
            </label>
            <br />
            <button disabled ={!isValid} onClick={nextStep}>Next</button>
            </div>
        </>
    )
}