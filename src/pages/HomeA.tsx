import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,
  IonInput,
  IonFooter,
  IonToolbar,
  IonRouterLink,
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
} from 'ionicons/icons';
import './HomeA.css';

const HomeA: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['d1.jpeg', 'd2.jfif', 'd3.jfif'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194, // Example coordinates for San Francisco
  };

  return (
    <IonPage>
      <IonContent fullscreen className="full">
        <div className="parent">
          <div className="address-logo">
            <IonIcon icon={locationOutline} className="location-icon" />
            <span>1234 Customer Address</span>
          </div>
          <div className="input-container">
            <IonIcon icon={searchOutline} className="input-icon-left" />
            <IonInput placeholder="Search here..." className="input-box" />
            <IonIcon icon={micOutline} className="input-icon-right" />
          </div>
        </div>
        <br />

        <div className="carousel">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}  
            className="carousel-image"
          />
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? 'active' : ''}`}  
                onClick={() => setCurrentImage(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="shopd">
          <div className="icon-container">
            <IonRouterLink href="/Page" className="clickable-div">
              <IonIcon icon={scanOutline} className="icon" />
              <div className="p1">
                <span>Scanner</span>
              </div>
            </IonRouterLink>
          </div>
          <div className="icon-container">
          <IonRouterLink href="/Wallet" className="clickable-div">
              <IonIcon icon={timeOutline} className="icon" />
              <div className="p2">
                <span>History</span>
              </div>
            </IonRouterLink>
          </div>
          <div className="icon-container">
          <IonRouterLink href="/Shop" className="clickable-div">
              <IonIcon icon={storefrontOutline} className="icon" />
              <div className="p3">
                <span>Shop</span>
              </div>
            </IonRouterLink>
          </div>
        </div>

        <h1 className="shopd">Shops Nearby</h1>
        <div className="map">
          <LoadScript googleMapsApiKey="AIzaSyAqo8u6IvZlYEkJUxCeMpnk1Ypc0Ctzi-w">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={defaultCenter}
              zoom={12}
              options={{
                disableDefaultUI: true,
              }}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
        <br />
      </IonContent>

      {!isSidebarOpen && (
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <IonIcon icon={menuOutline} className="menu-icon" />
        </div>
      )}

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>  {/* Fixed className syntax */}
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

export default HomeA;
