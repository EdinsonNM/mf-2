// src/components/CharacterList.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useCharacterQuery } from "../../../infra/cqrs/use-character-getall";
import CharacterCard from "../../../design/atoms/card/character-card";
import Grid from "@mui/material/Grid";

const CharacterList = () => {
  const { t } = useTranslation();
  const { data = [], isLoading } = useCharacterQuery();
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignContent="center"
      data-testid="character-list"
    >
      {data.map((character) => (
        <Grid item key={character.name}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
