import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { fixedLinks } from "../private/fixed.links";
import { Menu } from "../components/menu";
import "./Home.css";
class Home extends React.Component<WithTranslation, {}> {
  render() {
    const { t } = this.props;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t("pages.home.title")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{t("pages.home.title")}</IonTitle>
              <IonText>Texte supplémentaire</IonText>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img src={fixedLinks.me} alt="me"/>
            </IonAvatar>
            <IonCard>
              <img
                src={fixedLinks.home}
                alt="home-img"
              />
              <IonCardContent class="display-linebreak">
                {t("pages.home.text")}
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }
}

export default withTranslation()(Home);
