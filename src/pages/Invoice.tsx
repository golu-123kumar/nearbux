import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import { Html5Qrcode } from 'html5-qrcode';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonText,
  IonLabel,
  IonItem,
} from '@ionic/react';
import './Invoice.css';

const Invoice: React.FC = () => {
  const [invoiceText, setInvoiceText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanning, setScanning] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const qrCodeScannerRef = useRef<Html5Qrcode | null>(null);
  const qrReaderRef = useRef<HTMLDivElement | null>(null);

  // Function to handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      processImage(file);
    }
  };

  // Function to process the uploaded image using Tesseract.js
  const processImage = (image: File) => {
    setIsProcessing(true);
    Tesseract.recognize(
      image,
      'eng',
      {
        logger: (m) => console.log(m),
      }
    ).then(({ data: { text } }) => {
      setInvoiceText(text);
      setIsProcessing(false);
    }).catch((error) => {
      console.error("Error during OCR processing:", error);
      setIsProcessing(false);
    });
  };

  // Function to start the camera scanning
  const startCameraScan = () => {
    if (qrReaderRef.current && !qrCodeScannerRef.current) {
      qrCodeScannerRef.current = new Html5Qrcode('qr-reader');
      setScanning(true);

      qrCodeScannerRef.current.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          console.log(decodedText);
          setInvoiceText(decodedText);
          stopCameraScan(); // Stop after scan
        },
        (error) => {
          console.error('QR scan error:', error);
        }
      ).catch((err) => {
        console.error("Error starting camera:", err);
        setScanning(false);
      });
    }
  };

  // Function to stop the camera scan
  const stopCameraScan = () => {
    if (qrCodeScannerRef.current) {
      qrCodeScannerRef.current.stop();
      qrCodeScannerRef.current = null;
    }
    setScanning(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonButton routerLink='/Page'>Back to Scanner</IonButton>
        <IonButton>Upload Invoice</IonButton>
      </IonHeader>

      <IonContent fullscreen className='w'>
        <div className="scanner-container">
          {/* File Upload */}
          <div className="upload-container">
            <IonItem>
              <IonLabel position="floating"></IonLabel>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileUpload}
              />
            </IonItem>
          </div>

          {/* Start Camera Scanning */}
          <div id="qr-reader" ref={qrReaderRef} style={{ width: '100%', height: '300px' }}></div>
          {!scanning ? (
            <IonButton onClick={startCameraScan}>Start Camera Scan</IonButton>
          ) : (
            <IonButton color="danger" onClick={stopCameraScan}>Stop Scanning</IonButton>
          )}

          {/* Processing State */}
          {isProcessing ? (
            <IonText color="primary">Processing invoice...</IonText>
          ) : invoiceText ? (
            <div className="invoice-result">
              <h2>Invoice Details</h2>
              <p>{invoiceText}</p>
              <IonButton color="medium" onClick={() => setInvoiceText('')}>
                Clear Result
              </IonButton>
            </div>
          ) : null}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Invoice;
