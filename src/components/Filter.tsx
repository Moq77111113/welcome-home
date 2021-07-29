import { IonChip, IonIcon, IonLabel } from "@ionic/react";

import { useTranslation } from "react-i18next";
import { eye, eyeOff } from "ionicons/icons";
type Props = {
  props: Array<IFilter>;
};
export interface IFilter {
  kind: string;
  handle: (filter: IFilter) => void;
  status: boolean;
}

const Filter: React.FC<Props> = ({ props }) => {
  const { t } = useTranslation();
  const setIcon = (status: boolean) =>
    status === true ? (
      <IonIcon icon={eye}></IonIcon>
    ) : (
      <IonIcon icon={eyeOff}></IonIcon>
    );
  return (
    <>
      {props.map((filter, i) => (
        <IonChip
          color="primary"
          key={i.toString()}
          onClick={() => {
            filter.handle({ ...filter, status: !filter.status });
          }}
        >
          <IonLabel>{t(`references.kinds.${filter.kind}`)}</IonLabel>
          {setIcon(filter.status)}
        </IonChip>
      ))}
    </>
  );
};

export default Filter;
