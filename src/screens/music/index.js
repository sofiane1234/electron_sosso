import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Welcome } from "../../components/container";

const Music = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Welcome>
          <h1>Ajouter une musique</h1>
        </Welcome>
      </Container>
    </div>
  );
};

export default Music;
