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
import './SignupBusinessman.css';

const SignupBusinessman: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [password, setPassword] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Shop Name:', shopName);
    console.log('GST Number:', gstNumber);
    console.log('Password:', password);
    console.log('Aadhar Number:', aadharNumber);
    console.log('Terms Accepted:', isChecked);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="signup-page">
        <div className="center">
          <h1 className="signup-title">Sign up</h1>
          <p className="signup-subtitle">Create your account in seconds!</p>
            <br></br>
            <br></br>
          <IonItem className="input-field">
            <IonLabel>Full name</IonLabel>
            <IonInput
              value={fullName}
              placeholder=""
              onIonChange={(e) => setFullName(e.detail.value!)}
            />
          </IonItem>

          <IonItem className="input-field">
            <IonLabel>Email Address</IonLabel>
            <IonInput
              type="email"
              value={email}
              placeholder=""
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>

          <IonItem className="input-field">
            <IonLabel>Phone Number</IonLabel>
            <IonInput
              type="tel"
              value={phoneNumber}
              placeholder=""
              onIonChange={(e) => setPhoneNumber(e.detail.value!)}
            />
          </IonItem>

          <IonItem className="input-field">
            <IonLabel>Shop Name</IonLabel>
            <IonInput
              value={shopName}
              placeholder=""
              onIonChange={(e) => setShopName(e.detail.value!)}
            />
          </IonItem>

          <IonItem className="input-field">
            <IonLabel>GST Number</IonLabel>
            <IonInput
              value={gstNumber}
              placeholder=""
              onIonChange={(e) => setGstNumber(e.detail.value!)}
            />
          </IonItem>

          <IonItem className="input-field">
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder=""
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>

          <IonItem className="input-field">
            <IonLabel>Aadhar Number</IonLabel>
            <IonInput
              value={aadharNumber}
              placeholder=""
              onIonChange={(e) => setAadharNumber(e.detail.value!)}
            />
          </IonItem>

          <div className="terms-conditions">
            <IonCheckbox
              checked={isChecked}
              onIonChange={(e) => setIsChecked(e.detail.checked)}
            />
            <label>
              I agree to the <a href="LoginBusinessman">Terms & Conditions</a>
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
            Already have an account? <a href="LoginBusinessman">Login</a>
          </div>
          <IonButton expand="full" className="google-login">
                        <img src="/google_logo.png" alt="Google Logo" className="google-logo" />
                        <span>Login with Google</span>
                      </IonButton>
        </div>
        <div className="gap"></div>
      </IonContent>
    </IonPage>
  );
};

export default SignupBusinessman;
