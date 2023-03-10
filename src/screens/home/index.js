import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Footer,
  Welcome,
  Title,
} from "../../components/container";
import DialogButton from "../../components/dialogButton";

const Home = () => {
  const [filePath, setFile] = useState([]);

  const openDialog = () => {
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
    <Container>
      <Title>
        <h1>Accueil</h1>
        <hr />
      </Title>

      <Welcome>
        <h2> Bienvenue sur notre application de musique</h2>
      </Welcome>
      <DialogButton onClick={() => openDialog()}></DialogButton>
      <br />
      <audio src={[filePath]} controls></audio>
      <Footer>
        <footer>- Application faite par Sofiane Draris</footer>
      </Footer>
    </Container>
  );
};

export default Home;
