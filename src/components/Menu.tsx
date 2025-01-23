import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonItem routerLink="/page">
            <IonLabel>OCR</IonLabel>
          </IonItem>
          <IonItem routerLink="/wallet">
            <IonLabel>Wallet</IonLabel>
          </IonItem>
          <IonItem routerLink="/invoice">
            <IonLabel>Invoice</IonLabel>
          </IonItem>
          <IonItem routerLink="/logo">
            <IonLabel>Logo</IonLabel>
          </IonItem>
          <IonItem routerLink="/Divider">
            <IonLabel>Divider</IonLabel>
          </IonItem>
          <IonItem routerLink="/homeA">
            <IonLabel>Home A</IonLabel>
          </IonItem>
          <IonItem routerLink="/homeB">
            <IonLabel>Home B</IonLabel>
          </IonItem>
          <IonItem routerLink="/shop">
            <IonLabel>Shop</IonLabel>
          </IonItem>
          <IonItem routerLink="/logincustomer">
            <IonLabel>LoginCustomer</IonLabel>
          </IonItem>
          <IonItem routerLink="/signupcustomer">
            <IonLabel>SignupCustomer</IonLabel>
          </IonItem>
          <IonItem routerLink="/signupbusinessman">
            <IonLabel>SignupBusinessman</IonLabel>
          </IonItem>
          <IonItem routerLink="/loginbusinessman">
            <IonLabel>loginBusinessman</IonLabel>
          </IonItem>
          <IonItem routerLink="/inventory">
            <IonLabel>Inventory</IonLabel>
          </IonItem>
          <IonItem routerLink="/DashboardB">
            <IonLabel>Coin Dashboard B</IonLabel>
          </IonItem>
          
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
