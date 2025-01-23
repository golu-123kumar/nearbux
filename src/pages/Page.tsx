import React, { useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
} from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {
  const [result, setResult] = useState('');
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const startScanning = async () => {
    try {
      scannerRef.current = new Html5Qrcode("reader");
      setScanning(true);
      await scannerRef.current.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250
        },
        (decodedText) => {
          setResult(decodedText);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.error("Error starting scanner:", err);
      setScanning(false);
    }
  };

  const stopScanning = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current = null;
        setScanning(false);
      } catch (err) {
        console.error("Error stopping scanner:", err);
      }
    }
  };

  return (
    <IonPage className="scanner-page">
      <IonHeader className="scanner-header">
        <IonButton id="btn" routerLink='/Page'>QR Scanner</IonButton>
        <IonButton routerLink='Invoice'>Upload Invoice</IonButton>
      </IonHeader>

      <IonContent fullscreen className='d'>
        <div className="scanner-container">
          <div className="reader-container">
            <div id="reader">
              {/* The camera feed or placeholder image */}
            </div>
          </div>

          <div className="button-container">
            {!scanning ? (
              <IonButton
                className="scan-button"
                expand="block"
                onClick={startScanning}
              >
                Start Scanning
              </IonButton>
            ) : (
              <IonButton
                className="scan-button"
                expand="block"
                color="danger"
                onClick={stopScanning}
              >
                Stop Scanning
              </IonButton>
            )}
          </div>

          {result && (
            <div className="result-container">
              <h2 className="result-title">Scanned Result</h2>
              <p className="result-text">{result}</p>
              <IonButton
                className="clear-button"
                color="medium"
                onClick={() => setResult('')}
              >
                Clear Result
              </IonButton>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
