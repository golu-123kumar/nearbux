import React, { useState } from 'react';
import './Shop.css';

import {
  IonPage,
  IonContent,
  IonIcon,
  IonInput,
  IonButton,
  IonFooter,
  IonToolbar,
} from '@ionic/react';
import { 
  locationOutline, 
  searchOutline, 
  micOutline, 
  menuOutline, 
  closeOutline, 
  starOutline, 
  star,
  homeOutline,
  cartOutline,
  walletOutline,
  informationCircleOutline
} from 'ionicons/icons';

const Shop: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ratings, setRatings] = useState<number[]>([0, 0, 0]); // Separate ratings for each shop

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleRatingClick = (shopIndex: number, starIndex: number) => {
    setRatings((prevRatings) =>
      prevRatings.map((rating, index) =>
        index === shopIndex ? starIndex : rating
      )
    );
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ss">
        <div className="parent">
          <div className="address-logo">
            <IonIcon icon={locationOutline} className="location-icon" />
            <span>1234 Customer Address</span>
          </div>
          <div className="input-container2">
            <IonIcon icon={searchOutline} className="input-icon-left" />
            <IonInput placeholder="Search here..." className="input-box" />
            <IonIcon icon={micOutline} className="input-icon-right" />
          </div>
        </div>
        <br />
        <br />
        <br />

        {[
          { address: 'Poddar shop Address', category: 'Hardware', image: 'd1.jpeg' },
          { address: 'Bhardwaj shop Address', category: 'Electronic', image: 'd2.jfif' },
          { address: 'Agarwal shop Address', category: 'Jewellery', image: 'd3.jfif' },
        ].map((shop, index) => (
          <div key={index}>
            <div
              className={`shop shop${index + 1}`}
              style={{
                backgroundImage: `url(${shop.image})`,
              }}
            ></div>
            <br />
            <br />
            
            <div className="address-logo">
              <IonIcon icon={locationOutline} className="location-icon2" />
              <span>{shop.address}</span>
              <h3 className="s">{shop.category}</h3>
              <IonButton className="btn">Open</IonButton>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <IonIcon
                    key={starIndex}
                    icon={ratings[index] >= starIndex ? star : starOutline}
                    className={`star-icon ${ratings[index] >= starIndex ? 'filled' : ''}`}
                    onClick={() => handleRatingClick(index, starIndex)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </IonContent>

      {!isSidebarOpen && (
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <IonIcon icon={menuOutline} className="menu-icon" />
        </div>
      )}

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-close" onClick={closeSidebar}>
          <IonIcon icon={closeOutline} className="close-icon" />
        </div>
        <ul className="sidebar-list">
          <li onClick={() => alert('Go to Home')}>Home</li>
          <li onClick={() => alert('Go to Settings')}>Settings</li>
          <li onClick={() => alert('Go to Profile')}>Profile</li>
          <li onClick={() => alert('Log Out')}>Log Out</li>
        </ul>
      </div>

      <IonFooter>
        <IonToolbar className="footer-toolbar">
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
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Shop;
