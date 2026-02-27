export default function StepTwo({formData, setFormData, nextStep, prevStep}) {
    const isValid = formData.role !== "" && formData.termsAccepted;
    return (
        <>
            <div style={{display:'flex', flexDirection:'column'}}>
            <h2>Additional details :</h2>
            <label>
                Role:
                <select 
                    value={formData.role}
                    onChange={(e)=>setFormData({...formData, role: e.target.value})}
                >
                    <option value="">Select any option</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>
            </label>

            <br />

            <label>
                <input type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e)=>
                        setFormData({
                            ...formData,
                            termsAccepted:e.target.checked
                        })
                    }
                />
                Accept the terms and conditions
            </label>

            <br />
                <div style={{gap:'1rem'}}>
                    <button onClick={prevStep}>Previous</button>
                    <button disabled={!isValid} onClick={nextStep}>Submit</button>
                </div>
            </div>
        </>
    )
}