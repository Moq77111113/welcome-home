import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonToolbar,
} from "@ionic/react";
import { book, business, happyOutline } from "ionicons/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { fixedLinks } from "../private/fixed.links";
import "./menu.css";
export const Menu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar color="dark">
            <IonItem>{t("menu.title")}</IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem
              className="airbnb-link"
              target="_blank"
              rel="noopener noreferrer"
              href={fixedLinks.airbnb}
            >
              <IonIcon slot="end" icon={business}></IonIcon>
              {t("menu.pages.airbnb")}
            </IonItem>
            <IonItem href="/rules">
              {t("menu.pages.rules")}
              <IonIcon slot="end" icon={book}></IonIcon>
            </IonItem>
            <IonItem href="/whoami">
              {t('menu.pages.whoami')}
              <IonIcon slot="end" icon={happyOutline}></IonIcon>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
