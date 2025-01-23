import { IonPage, IonContent, IonButton, IonText } from '@ionic/react';
import './Divider.css';

const Divider: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="bb">
        <h1 className="welcome">Welcome To</h1>
        <h1 className="welcome">NearBux</h1>
        <div className="center-box"></div>
        
        <div className="button-container">
          <IonButton className="custom-button" id="btn" routerLink="/homeA">
            Customer
          </IonButton>
          <IonButton className="custom-button2" routerLink="/homeB">
            Business
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Divider;
