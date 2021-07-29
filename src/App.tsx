import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { map, bed, home } from "ionicons/icons";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Refs from "./pages/Refs";
import Options from "./pages/Options";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useTranslation } from "react-i18next";
import { Menu } from "./components/menu";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonApp>
      <IonReactRouter>
        <Menu></Menu>
        <IonTabs>
          <IonRouterOutlet id="main-content">
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/refs">
              <Refs />
            </Route>
            <Route path="/room">
              <Room />
            </Route>
            <Route exact path="/options">
              <Options />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="refs" href="/refs">
              <IonIcon icon={map} />
              <IonLabel>{t("tabs.refs")}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>{t("tabs.home")}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="room" href="/room">
              <IonIcon icon={bed} />
              <IonLabel>{t("tabs.room")}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
