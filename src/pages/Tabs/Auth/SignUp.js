import React from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonRow, IonCol, IonButton, IonLoading } from '@ionic/react';
import NavHeader from "../../../components/Headers/NavHeader";
import {toast} from "../../../helpers/toast";
import useForm from '../../../hooks/UseForm';
import validateSignUp from '../../../validators/validateSignUp';
import firebase from '../../../firebase';

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
}

const SignUp = (props) => {
    const {handleSubmit, handleChange, values, isSubmitting} = useForm(INITIAL_STATE, validateSignUp, authenticatedUser)
    const [busy, setBusy] = React.useState(false);

    async function authenticatedUser() {
        setBusy(true);
        const {name, email, password} = values;
        try{
            await firebase.register(name, email, password);
            toast("You have signed up successfully!");
            props.history.push("/");
        } catch (err) {
            console.error("Authentication Error", err);
            toast(err.message);
        }
        setBusy(false);
    }

    return(
        <IonPage>
            <NavHeader title="Sign Up"/>
            <IonLoading message="Please wait..." isOpen={busy} />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel postion="floating">Username</IonLabel>
                    <IonInput name="name" type="text" value = {values.name} onIonChange = {handleChange} required></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel postion="floating">Email</IonLabel>
                    <IonInput name="email" type="text" value = {values.email} onIonChange = {handleChange} required></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel postion="floating">Password</IonLabel>
                    <IonInput name="password" type="password" value = {values.password} onIonChange = {handleChange} required></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton 
                        type="submit"
                        color="primary"
                        expand="block" onClick={handleSubmit} disabled={isSubmitting}>
                            Sign Up
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default SignUp;