import React from 'react';
import { IonTitle, IonToolbar, IonHeader } from '@ionic/react';

const LargeHeader = ({title}) => {
    return(
        <IonHeader collapse="condense" >
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
export default LargeHeader;