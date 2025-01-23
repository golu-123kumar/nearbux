import React, { useState,useEffect } from 'react';
import { IonPage, IonContent, IonIcon, IonInput, IonButton,IonFooter,IonToolbar,IonRouterLink } from '@ionic/react';
import './HomeB.css';
import {
  arrowBackOutline,
  cloudUploadOutline,
  createOutline,
  locationOutline,
  searchOutline,
  micOutline,
  homeOutline,
  walletOutline,
  cartOutline,
  informationCircleOutline,
  scanOutline,
  menuOutline,
  closeOutline,
  timeOutline,
  storefrontOutline,
  newspaperOutline,
  timerOutline,
} from 'ionicons/icons';

const HomeB: React.FC = () => {
  const [date, setDate] = useState('');
  const [salesAmount, setSalesAmount] = useState('');

  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  return (
    <IonPage>
      <IonContent className='french'>
        <div className="m">
          <IonIcon icon={arrowBackOutline} className="icon-left" />
          <div className="icon-right">
            <IonIcon icon={cloudUploadOutline} className="icon-left" />
            <IonIcon icon={createOutline} className="icon-left" />
          </div>
        </div>
        <br />
        <div className="images"></div>
        <div className="x"></div>
        <h2 className="sname">Shop Name</h2>
        
        <IonInput
          className='inputd'
          type="date"
          value={date}
          placeholder='Today\s date'
          onIonChange={(e) => setDate(e.detail.value!)}
          style={{ width: '150px' }}
        />
        <IonButton className='bt'>
          Notification
        </IonButton>
        <div className="para"></div>
        <h1 className="h">Quick Statistics</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <br />
          <br />
          <span style={{ marginRight: '8px', color: 'black',fontWeight:'bolder',fontSize:'20px' ,marginLeft:'20px'}}>Today's sales: Rs.</span>
          <IonInput
            type="number"
            value={salesAmount}
            onIonChange={(e) => setSalesAmount(e.detail.value!)}
            placeholder="amount"
            style={{ width: '150px' }} 
          />
        </div>
        <div  className='up' style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <br />
          <br />
          <span style={{ marginRight: '8px', color: 'black',fontWeight:'bolder',fontSize:'20px' ,marginLeft:'20px'}}>Point issued:</span>
          <IonInput
            type="number"
            value={salesAmount}
            onIonChange={(e) => setSalesAmount(e.detail.value!)}
            placeholder="100"
            style={{ width: '150px' }} 
          />
          
        </div>
       
          <div className="container1">
            <div className="c1">Create Invoice</div>
            <div className="c2">Scan Invoice</div>
          </div>
          <div className="container2">
            <div className="c1">Scan Customer QR</div>
            <div className="c2">Upload invoice</div>
          </div>

      </IonContent>
      <IonFooter>
              
      <IonToolbar className="footer-toolbar1" style={{ position: 'relative' }}>
  <div className="footer-icons1">
    <div className="footer-item1">
      <IonIcon icon={homeOutline} className="footer-icon1" />
      <IonRouterLink routerLink="/home" className="footer-text">Home</IonRouterLink>
    </div>
    <div className="footer-item1">
      <IonIcon icon={cartOutline} className="footer-icon1" />
      <IonRouterLink routerLink="/Inventory" className="footer-text">Inventory</IonRouterLink>
    </div>
    <div className="footer-item1">
      <IonIcon icon={timerOutline} className="footer-icon1" />
      <IonRouterLink routerLink="/history" className="footer-text">History</IonRouterLink>
    </div>
    <div className="footer-item1">
      <IonIcon icon={newspaperOutline} className="footer-icon1" />
      <IonRouterLink routerLink="/billing" className="footer-text1">Invoice/Billing</IonRouterLink>
    </div>
    <div className="footer-item1">
      <IonIcon icon={informationCircleOutline} className="footer-icon1" />
      <IonRouterLink routerLink="/account" className="footer-text1">Account</IonRouterLink>
    </div>
  </div>
</IonToolbar>

  </IonFooter>
    </IonPage>
  );
};

export default HomeB;