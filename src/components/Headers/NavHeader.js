import React from "react";
import {
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonHeader,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/react";

const NavHeader = ({ title, option, icon, action }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        {option && (
          <IonButtons slot="primary">
            <IonButton onClick={action}>
              <IonIcon slot="icon-only" icon={icon}></IonIcon>
            </IonButton>
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavHeader;
