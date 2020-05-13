import React from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonRow, IonCol, IonButton, IonLoading } from '@ionic/react';
import NavHeader from "../../../components/Headers/NavHeader";
import {toast} from "../../../helpers/toast";
import useForm from '../../../hooks/UseForm';
import validatePasswordReset from '../../../validators/validatePasswordReset';
import firebase from '../../../firebase';


const INITIAL_STATE = {
    email: "",
}

const Forgot = (props) => {

    const {handleSubmit, handleChange, values, isSubmitting} = useForm(INITIAL_STATE, validatePasswordReset, handlePasswordReset)
    const [busy, setBusy] = React.useState(false);

    async function handlePasswordReset() {
        setBusy(true);
        const {email} = values;
        try{
            await firebase.resetPassword(email);
            toast("YCheck your email to rest your password.");
            props.history.push("/");
        } catch (err) {
            console.error("Password Reset Error", err);
            toast(err.message);
        }
        setBusy(false);
    }

    return(
        <IonPage>
            <NavHeader title="Password Reset"/>
            <IonLoading message="Please wait..." isOpen={busy} />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel postion="floating">Email</IonLabel>
                    <IonInput name="email" type="text" value={values.email} onIonChange={handleChange}  required></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton 
                        type="submit"
                        color="primary"
                        expand="block" onClick={handleSubmit} disabled={isSubmitting}>
                            Get Reset Link
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Forgot;