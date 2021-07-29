import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { mockReferences } from "../assets/references";
import Filter, { IFilter } from "../components/Filter";
import Ref from "../components/Reference";
import { Reference } from "../types/types";
import { groupBy } from "lodash";
import "./Refs.css";
interface ReferenceState {
  references: Reference[];
  filters: IFilter[];
}

class Refs extends React.Component<WithTranslation, ReferenceState> {
  private INITIAL_STATE: ReferenceState = {
    references: mockReferences,
    filters: mockReferences
      .map((r) => ({
        kind: r.kind,
        handle: (filter: IFilter) => this.filterClicked(filter),
        status: true,
      }))
      .sort((a, b) => a.kind.localeCompare(b.kind)),
  };
  public state: ReferenceState = this.INITIAL_STATE;

  private filterClicked = (newfilter: IFilter) => {
    this.setState((previousState) => {
      const newFilterState = [
        ...previousState.filters.filter(
          (filter) => filter.kind !== newfilter.kind
        ),
        newfilter,
      ].sort((a, b) => a.kind.localeCompare(b.kind));

      return {
        references: this.INITIAL_STATE.references.filter((reference) =>
          newFilterState
            .filter((filter) => filter.status === true)
            .map((filter) => filter.kind)
            .includes(reference.kind)
        ),
        filters: newFilterState,
      };
    });
  };
  render() {
    const { t } = this.props;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t("pages.refs.title")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{t("pages.refs.title")}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Filter props={this.state.filters}></Filter>
          <IonList>
            {Object.keys(groupBy(this.state.references, "kind")).map((kind, i) => {
              return (
                <div key={kind + "" + i.toString()}>
                  <IonListHeader key={"list-" + kind} lines="full">
                    {t("references.kinds." + kind)}
                  </IonListHeader>
                  <IonItem key={kind + "content"}>
                    {this.state.references
                      .filter((ref) => ref.kind === kind)
                      .map((ref, i) => {
                        return <Ref key={i.toString()} props={ref}></Ref>;
                      })}
                  </IonItem>
                </div>
              );
            })}
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
}

export default withTranslation()(Refs);
