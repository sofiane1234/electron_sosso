import React from "react";
import { useState, useEffect } from "react";
import { Container, Footer, Welcome, Title } from "../../components/container";
import DialogButton from "../../components/dialogButton";
import AppNamme from "../../components/AppName";
import AudioList from "../../components/AudioList";

const Home = () => {
  const [filePath, setFile] = useState([]);

  for(var index = filePath; index < filePath.length - 1; index++) {
    index = filePath[index]
  }
  
  const openDialog = () => {
    window.dialog.removeEventListener();
    window.dialog.open();
    window.dialog.getFilePath(setFile);
  };
  useEffect(() => {
    return () => {
      window.dialog.removeEventListener();
    };
  }, []);

  useEffect(() => {
    console.log(filePath);
  }, [filePath]);

  return (
    //Ajouter bouton musique
    <Container>
      <Title>
        <AppNamme Level="h1" title="Sof-Zic" />
        <Welcome>
          <h3> Bienvenue sur notre application de musique</h3>{" "}
        </Welcome>
        <hr />
      </Title>

      <DialogButton
        onClick={() => openDialog()}
        title="Ajouter un fichier"
      ></DialogButton>
      <br />
      <AudioList path={index}></AudioList>
      <audio src={filePath[index]} controls></audio>
      <audio src={filePath[1]} controls></audio>
      <audio src={filePath[2]} controls></audio>

      <Footer>
        <footer>- Application faite par Sofiane Draris</footer>
      </Footer>
    </Container>
  );
};

export default Home;
