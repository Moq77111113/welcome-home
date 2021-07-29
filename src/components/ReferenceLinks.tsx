import { IonButton, IonIcon, IonItem } from "@ionic/react";
import {
  call,
  globe,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  map,
} from "ionicons/icons";
import { ReferenceInfo } from "../types/types";

type Props = {
  props: ReferenceInfo;
};

export const ReferenceLinks: React.FC<Props> = ({ props }) => {
  const openLink = (link: string, tab: boolean = true) => {
    if (tab) {
      window.open(link);
    } else {
      window.location.href = link;
    }
  };
  return (
    <>
      <IonItem>
        <IonButton
          color="light"
          disabled={!props.address}
          onClick={() => {
            if (props.address) {
              openLink(
                `https://google.fr/maps/dir/216+Rue+Eugène+Pottier,+83500+La+Seyne-sur-Mer/${props.address.replaceAll(
                  " ",
                  "+"
                )}`
              );
            }
          }}
        >
          <IonIcon slot="icon-only" icon={map} />
        </IonButton>
        <IonButton
          color="light"
          disabled={!props.phone}
          onClick={() => openLink(`tel:${props.phone}`, false)}
        >
          <IonIcon slot="icon-only" icon={call} />
        </IonButton>
        {props.socials?.map((social, i) => {
          let socialIcon = globe;
          switch (social.kind) {
            case "facebook": {
              socialIcon = logoFacebook;
              break;
            }
            case "instagram": {
              socialIcon = logoInstagram;
              break;
            }
            case "twitter": {
              socialIcon = logoTwitter;
              break;
            }
          }
          return (
            <IonButton
              key={i.toString()}
              color="light"
              onClick={() => openLink(social.link)}
            >
              <IonIcon slot="icon-only" icon={socialIcon}></IonIcon>
            </IonButton>
          );
        })}
      </IonItem>
    </>
  );
};
