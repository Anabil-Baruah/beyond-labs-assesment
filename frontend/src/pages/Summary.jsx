export default function Summary({formData}){
    return (
        <>
        <div style={{display:'flex', flexDirection:'column'}}>
            <h2>Summary of your details</h2>
            <p>Full Name: {formData.fullName}</p>
            <p>Email: {formData.email}</p>
            <p>Role: {formData.role}</p>
            <p>Terms accepted: {formData.termsAccepted?"Yes" :"No"}</p>
        </div>
        </>
    )
}