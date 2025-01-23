import React, { useState } from 'react';
import {
  IonContent,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonToolbar,
  IonFooter,
} from '@ionic/react';
import './Wallet.css';
import {
  refreshOutline,
  locationOutline,
  searchOutline,
  micOutline,
  cashOutline,
  timeOutline,
  informationCircleOutline,
  personCircleOutline,
  cashSharp,
  serverOutline,
  cartOutline,
  homeOutline,
  walletOutline,
  scanOutline,
} from 'ionicons/icons';

const Wallet: React.FC = () => {
  // State for transaction rows
  const [transactions, setTransactions] = useState([
    { amount: '', date: '' },
    { amount: '', date: '' },
    { amount: '', date: '' },
    { amount: '', date: '' },
  ]);

  // State to track refresh icon animation
  const [isRotating, setIsRotating] = useState(false);

  // Update transaction data
  const handleInputChange = (index: number, field: string, value: string) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions];
      updatedTransactions[index] = {
        ...updatedTransactions[index],
        [field]: value,
      };
      return updatedTransactions;
    });
  };

 
  const handleRefresh = () => {
    setIsRotating(true); 
    
    setTimeout(() => {
      setIsRotating(false); 
    }, 500);

    
    console.log("Refreshing data...");
    setTransactions([
      { amount: '', date: '' },
      { amount: '', date: '' },
      { amount: '', date: '' },
      { amount: '', date: '' },
    ]);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="branch">
        <div className="p">
          <br />
          <div className="address-logo">
            <IonIcon icon={locationOutline} className="location-icon" />
            <span>1234 Customer Address</span>
          </div>

          <div className="point">
            <div className="input-row">
              <div className="total-coins">
                <IonLabel className="label">Total Coins:</IonLabel>
                <IonInput className="input-box" placeholder="--------" />
                <IonIcon
                  icon={refreshOutline}
                  className={`refresh-icon ${isRotating ? 'rotating' : ''}`} 
                  onClick={handleRefresh}
                />
              </div>
              <div className="last-update">
                <IonLabel className="label">Last Update:</IonLabel>
                <IonInput type="date" className="input-box" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="input-container">
            <IonIcon icon={searchOutline} className="input-icon-left" />
            <IonInput placeholder="Search here..." className="input-box" />
            <IonIcon icon={micOutline} className="input-icon-right" />
          </div>
          <br />
        </div>

        <div className="shopd">
          <div className="icon-container">
            <IonRouterLink href="/coins-page" className="clickable-div">
              <IonIcon icon={cartOutline} className="icon" />
              <div className="p1">
                <span>Coins</span>
              </div>
            </IonRouterLink>
          </div>
          <div className="icon-container">
            <IonRouterLink href="/history-page" className="clickable-div">
              <IonIcon icon={timeOutline} className="icon" />
              <div className="p2">
                <span>History</span>
              </div>
            </IonRouterLink>
          </div>
          <div className="icon-container">
            <IonRouterLink href="/about-page" className="clickable-div">
              <IonIcon icon={informationCircleOutline} className="icon" />
              <div className="p3">
                <span>About</span>
              </div>
            </IonRouterLink>
          </div>
        </div>

        <h1 className="tag">Transaction History:</h1>
        <br />
        <br />
        <div className="container">
          {transactions.map((transaction, index) => (
            <div key={index} className="transaction-row">
              <IonIcon icon={serverOutline} className="icon" />
              <IonInput
                className="dash-input"
                type="number"
                placeholder="Enter amount"
                value={transaction.amount}
                onIonChange={(e) =>
                  handleInputChange(index, 'amount', e.detail.value!)
                }
              />
              <IonInput
                className="dash-input"
                type="date"
                placeholder="Enter date"
                value={transaction.date}
                onIonChange={(e) =>
                  handleInputChange(index, 'date', e.detail.value!)
                }
              />
            </div>
          ))}
        </div>
        <br />
        <br />
      </IonContent>

      <IonFooter>
        <IonToolbar className="footer-toolbar" style={{ position: 'relative' }}>
          <div className="footer-icons">
            <div className="footer-item">
              <IonIcon icon={homeOutline} className="footer-icon" />
              <span className="footer-text">Home</span>
            </div>
            <div className="footer-item">
              <IonIcon icon={walletOutline} className="footer-icon" />
              <span className="footer-text">Wallet</span>
            </div>
            <div className="footer-item">
              <IonIcon icon={cartOutline} className="footer-icon" />
              <span className="footer-text">Cart</span>
            </div>
            <div className="footer-item">
              <IonIcon icon={informationCircleOutline} className="footer-icon" />
              <span className="footer-text">Account</span>
            </div>
          </div>
          <IonRouterLink href="/Page">
            <div className="circle">
              <IonIcon icon={scanOutline} className="circle-icon" />
            </div>
          </IonRouterLink>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Wallet;
