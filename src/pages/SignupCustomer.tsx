import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
} from '@ionic/react';
import './SignupCustomer.css'; 

const SignupCustomer: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Terms & Conditions Accepted:', isChecked);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="signup-page">
        <div className="center">
          <div className="intro">
            <h1>Sign up</h1>
            <p>Create your accont in second!</p>
          </div>

          <div className="input-section">
            <IonItem>
              <IonLabel position="floating">Full Name</IonLabel>
              <IonInput
                placeholder=""
                value={fullName}
                onIonChange={(e) => setFullName(e.detail.value!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email Address</IonLabel>
              <IonInput
                type="email"
                placeholder=""
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Phone Number</IonLabel>
              <IonInput
                type="tel"
                placeholder=""
                value={phoneNumber}
                onIonChange={(e) => setPhoneNumber(e.detail.value!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                placeholder=""
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
            </IonItem>

            <div className="terms-conditions">
              <IonCheckbox
                checked={isChecked}
                onIonChange={(e) => setIsChecked(e.detail.checked)}
              />
              <label>
                I agree to the <a href="#">Terms & Conditions</a>
              </label>
            </div>

            <IonButton
              expand="full"
              className="signup-button"
              disabled={!isChecked}
              onClick={handleSubmit}
            >
              Sign up
            </IonButton>

            <div className="login-link">
              <p>
                Already have an account? <a href="LoginCustomer">Login</a>
              </p>
            </div>

            <IonButton expand="full" className="google-signup">
              <img
                src="/google_logo.png"
                alt="Google Logo"
                className="google-logo"
              />
              <span>Sign up with Google</span>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignupCustomer;
