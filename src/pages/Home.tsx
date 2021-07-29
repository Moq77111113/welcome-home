import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { fixedLinks } from "../private/fixed.links";
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
            <IonCard>
              <img src={fixedLinks.home} alt="home-img" />
              <IonCardContent class="display-linebreak">
                <div className="head">
                  <IonAvatar className="avatar" slot="start">
                    <img src={fixedLinks.me} alt="me" />
                  </IonAvatar>
                  <IonCardTitle>{t('pages.home.card-title')}</IonCardTitle>
                </div>
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
