import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from "@ionic/react";
import { Reference } from "../types/types";
import "./Reference.css";
import { ReferenceLinks } from "./ReferenceLinks";

type Props = {
  props: Reference;
};

const Ref: React.FC<Props> = ({ props }) => {
  const refLinks = props.info ? <ReferenceLinks props={props.info}></ReferenceLinks> : null
  return (
    <>
      <div className="reference">
        <IonCard>
          <img src={props.image.src} alt={props.image.name} />
          <IonCardHeader>
            <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
            <IonCardTitle>{props.title}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>{props.content}</IonCardContent>
          {refLinks}
        </IonCard>
      </div>
    </>
  );
};

export default Ref;
