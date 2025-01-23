import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './LoginCustomer.css';

const LoginCustomer: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(true); 

  const handleSubmit = () => {
    console.log("Email or Phone:", emailOrPhone);
    console.log("Password:", password);

    
    if (isEmail) {
      console.log("Validating Email...");
     
    } else {
      console.log("Validating Phone Number...");
      
    }
  };

  const handleInputChange = (e: any) => {
    const value = e.detail.value!;
    setEmailOrPhone(value);

    
    if (value.includes('@')) {
      setIsEmail(true);
    } else if (value.match(/^\d+$/)) {
      setIsEmail(false);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="bb">
        <div className="center">
          <div className="intro">
            <h1>Login</h1>
            <br></br>
            <br></br>
            <p>Please enter your login details to start NearBox</p>
          </div>

          <div className="input-section">
            <h2>Email / Phone number</h2>
            <IonItem>
              <IonLabel position="floating"></IonLabel>
              <IonInput
                type={isEmail ? "email" : "tel"} 
                placeholder="Enter your email / phone"
                value={emailOrPhone}
                onIonChange={handleInputChange}
              />
            </IonItem>

            <h2>Password:</h2>
            <IonItem>
              <IonLabel position="floating"></IonLabel>
              <IonInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
            </IonItem>

            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>

            <IonButton expand="full" className="login-button" onClick={handleSubmit}>
              Login
            </IonButton>
            <br /><br />
            <div className="signup">
              <p>Don't have an account? <a href="SignupCustomer">Sign up</a></p>
            </div>
            <br />
            <IonButton expand="full" className="google-login">
              <img src="/google_logo.png" alt="Google Logo" className="google-logo" />
              <span>Login with Google</span>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginCustomer;
