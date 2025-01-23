import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <IonPage>
     

      <IonContent fullscreen className="bb">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page Content</IonTitle> {/* Static content */}
          </IonToolbar>
        </IonHeader>

      
        <div className="center-box"></div>

        <IonText>
          <div className="name-text">Nearbox</div>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Logo;