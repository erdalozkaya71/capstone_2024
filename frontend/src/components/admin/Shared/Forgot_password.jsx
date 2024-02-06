import React, { useState } from "react";
import EmailInput from "./Email_input";
import OTPInput from "./OTP_input";
import ChangePassword from "./Change_password";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Change Password
  const [email, setEmail] = useState("");
  const [, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmail = (recivedEmail) => {
    // Log the email before setting it
    console.log(`Sending email to: ${recivedEmail}`);

    // Set the email to the received value
    setEmail(recivedEmail);

    console.log("Email sent! proceeding to step 2");

    // Perform email verification logic here

    // If success, proceed to setStep(2);
    setStep(2);
  };

  const handleOTP = (receivedOTP) => {
    // after email send generate OTP and send to user
    console.log(`Sending OTP to: ${email}`);
    
    // Set the OTP to the generated or received value
    const generatedOTP = "123456";  // Replace this with your OTP generation logic
    setOTP(generatedOTP);

    // perform OTP verification logic
    if (receivedOTP === generatedOTP) {
        console.log(`proceeding to the next step`);
        // Proceed to the next step or perform other actions
        setStep(3);
    } else {
        console.log("Invalid OTP");
        // Handle the case when the OTP is not valid
    }

  };

  const handleNewPassword = (receivedChangedPassword) => {
    // perform new password logic
    // Perform password change logic
    console.log(`Changing password to:${receivedChangedPassword}`);
    if(setNewPassword(receivedChangedPassword)){
        console.log("Password changed successfully to :"+newPassword);
    }
    // Reset state or navigate to a different page upon successful password change


    // Reset state
    setEmail("");
    setOTP("");
    setNewPassword("");
    setStep(1);
  };


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      {step === 1 && <EmailInput onEmailSend={handleEmail} />}
      {step === 2 && <OTPInput onOTPVerify={handleOTP} emailSentTo={email}/>}
      {step === 3 && <ChangePassword onChangePassword={handleNewPassword} emailChangedPwdTo={email} />}
    </div>
  );
};

export default ForgotPassword;
