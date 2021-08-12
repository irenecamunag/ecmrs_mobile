import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonThumbnail, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  /*return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ECMRS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">hello?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );*/
  return (
    <IonPage>

      <div className="header">
        <img
          className="header_logo"
          alt="Back4App Logo"
          src={
            'http://52.54.81.207/css/i/CaseBox-Logo-medium.png'
          }
        />
        <p className="header_text">{'ECMRS Login'}</p>
      </div>

      <IonContent>

        <IonList>

          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput></IonInput>
          </IonItem>

        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Home;
