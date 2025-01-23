import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Menu from './components/Menu'; // Side menu
import HomeA from './pages/HomeA';   // Home A Page
import HomeB from './pages/HomeB';   // Home B Page
import Inventory from './pages/Inventory'; // Dashboard for Home A
import DashboardB from './pages/DashboardB'; // Dashboard for Home B
import Page from './pages/Page';  
import LoginCustomer from './pages/LoginCustomer'; 
import LoginBusinessman from './pages/LoginBusinessman';  
import SignupBusinessman from './pages/SignupBusinessman'; 
import Shop from './pages/Shop';   
import Logo from './pages/Logo'; 
import Wallet from './pages/Wallet'; 
import Invoice from './pages/Invoice';   
import SignupCustomer from './pages/SignupCustomer';
import '@ionic/react/css/core.css';


import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import './theme/variables.css';
import Divider from './pages/Divider';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu /> {/* Side menu */}
          <IonRouterOutlet id="main">
            <Route path="/page" exact>
              <Page /> {/* Logo page */}
            </Route>
            <Route path="/homeA" exact>
              <HomeA /> {/* Home A page */}
            </Route>
            <Route path="/shop" exact>
              <Shop /> {/* Home A page */}
            </Route>
            <Route path="/logo" exact>
              <Logo /> {/* Home A page */}
            </Route>
            <Route path="/invoice" exact>
              <Invoice/> {/* Home A page */}
            </Route>
            <Route path="/wallet" exact>
              <Wallet/> {/* Home A page */}
            </Route>
            <Route path="/homeB" exact>
              <HomeB /> {/* Home B page */}
            </Route>
            <Route path="/logincustomer" exact>
              <LoginCustomer /> {/* Dashboard for Home A */}
            </Route>
            <Route path="/signupcustomer" exact>
              <SignupCustomer /> {/* Dashboard for Home A */}
            </Route>
            <Route path="/loginbusinessman" exact>
              <LoginBusinessman /> 
            </Route>
            <Route path="/signupbusinessman" exact>
              <SignupBusinessman /> 
            </Route>
            <Route path="/inventory" exact>
              <Inventory /> {/* Dashboard for dashboardA */}
            </Route>
            <Route path="/dashboardB" exact>
              <DashboardB /> {/* Dashboard for dashboardman*/}
            </Route>
            <Route path="/divider" exact>
              <Divider /> {/* Dashboard for Home B */}
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
