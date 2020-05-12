import React from 'react';
import { IonTitle, IonToolbar, IonHeader } from '@ionic/react';

const SmallHeader = ({title}) => {
    return(
        <IonHeader>
            <IonToolbar 
                style={{
                    background: "f0652f",
                }}
                color="primary" 
            >
                <IonTitle size="large" >{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}
export default SmallHeader;