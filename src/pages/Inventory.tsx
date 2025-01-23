import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,
  IonInput,
  IonFooter,
  IonToolbar,
  IonRouterLink,
  IonButton,
} from '@ionic/react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import {
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
  appsOutline,
  bagCheckOutline,
  trophyOutline,
  timerOutline,
  newspaperOutline,
} from 'ionicons/icons';
import './Inventory.css';

const Inventory: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Name'); 

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  }
  return (
    <IonPage>
      <IonContent fullscreen  className='screen'>
        <h1 className='t'>Inventory</h1>
        <h1 className='t'>Management</h1>
        <div className='para'></div>
        <div className="input-container1">
            <IonIcon icon={searchOutline} className="input-icon-left1" />
            <IonInput placeholder="Search here..." className="input-box1" />
            <IonIcon icon={micOutline} className="input-icon-right1" />
        </div>
        <div className='para'></div>
        <IonButton className='btn'>Add New Item</IonButton><br />
        <div className='para2'></div>
        <IonButton className='btn'>Edit Inventory</IonButton>
        <div className='para2'></div>
        <h1 className='h'>Filter by Category</h1>
        <div className='para'></div>
        <div className="filter">
          <div className="aa">
          <div className="circles"><IonIcon icon={appsOutline} className="footer-icon2" /></div>
          <span className="footer-text2">All</span>
          </div>
          <div className="bb">
          <div className="circles"><IonIcon icon={cartOutline} className="footer-icon2" /></div>
          <span className="footer-text2">Electronic</span>
          </div>
          <div className="c">
          <div className="circles"><IonIcon icon={bagCheckOutline} className="footer-icon2" /></div>
          <span className="footer-text2">Clothing</span>
          </div>
          <div className="d">
          <div className="circles"><IonIcon icon={homeOutline} className="footer-icon2" /></div>
          <span className="footer-text2">Home</span>
          </div>
          <div className="e">
          <div className="circles"><IonIcon icon={trophyOutline} className="footer-icon2" /></div>
          <span className="footer-text2">Sports</span>
          </div>
        </div>
        <h1 className='t'>Sort options</h1>
        <div className="slider-filter">
          <div className="filter-buttons">
            <IonButton
              fill={activeFilter === 'Name' ? 'solid' : 'outline'}
              onClick={() => handleFilterClick('Name')}
              className="filter-button"
            >
              Name
            </IonButton>
            <span>|</span>
            <IonButton
              fill={activeFilter === 'Price' ? 'solid' : 'outline'}
              onClick={() => handleFilterClick('Price')}
              className="filter-button"
            >
              Price
            </IonButton>
            <span>|</span>
            <IonButton
              fill={activeFilter === 'Stock' ? 'solid' : 'outline'}
              onClick={() => handleFilterClick('Stock')}
              className="filter-button"
            >
              Stock
            </IonButton>
          </div>
        </div>
        <div className="total-items-section">
          <label htmlFor="totalItems" className="total-items-label">
            Total Items:
          </label>
          <IonInput
            id="totalItems"
            type="number"
            placeholder="Enter total items"
            className="total-items-input"
          />
        </div>
        <div className="total-items-section">
          <label htmlFor="totalItems" className="total-items-label">
            Low Stock Alerts:
          </label>
          <IonInput
            id="totalItems"
            type="number"
            placeholder="Enter total items"
            className="total-items-input"
          />
        </div>
        <div className="total-items-section">
          <label htmlFor="totalItems" className="total-items-label">
            Out of stock items:
          </label>
          <IonInput
            id="totalItems"
            type="number"
            placeholder="Enter total items"
            className="total-items-input"
          />
        </div>
      </IonContent>
      <IonFooter>
  <IonToolbar className="footer-toolbar1" style={{ position: 'relative' }}>
    <div className="footer-icons1">
      <IonRouterLink href="/home">
        <div className="footer-item1">
          <IonIcon icon={homeOutline} className="footer-icon1" />
          <span className="footer-text">Home</span>
        </div>
      </IonRouterLink>
      <IonRouterLink href="/inventory">
        <div className="footer-item1">
          <IonIcon icon={cartOutline} className="footer-icon1" />
          <span className="footer-text">Inventory</span>
        </div>
      </IonRouterLink>
      {/* Other footer items */}
    </div>
  </IonToolbar>
</IonFooter>

    </IonPage>
  );
};

export default Inventory;
