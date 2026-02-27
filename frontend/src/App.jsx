import { useState } from "react";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import Summary from "./pages/Summary";


export default function App() {
    const [step, setStep] = useState(1);
    const [formDate, setFormDate] = useState({
        fullName: "",
        email: "",
        role: "",
        termsAccepted: false,
    });

    const nextStep = ()=>{ setStep(step+1) }
    const prevStep = () => {setStep(step-1)}

    return (
        <div style={{minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

        }}>
            
            { step ===1 && (
            <StepOne
                formData = {formDate}
                setFormData = {setFormDate} 
                nextStep = {nextStep}
                prevStep = {prevStep}
            />
            )}
            { step ===2 && (
            <StepTwo
                formData = {formDate}
                setFormData = {setFormDate} 
                nextStep = {nextStep}
                prevStep = {prevStep}
            />
            )}

            { step === 3 && <Summary formData={formDate}/>}
        </div>
    )
}