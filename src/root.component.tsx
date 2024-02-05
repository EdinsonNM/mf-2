import "reflect-metadata";
import { Container } from "@mui/material";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CharacterMain from "./presentation/containers/characters-main/character-main";
import useLanguage from "./presentation/hooks/use-language";

const queryClient = new QueryClient();
export default function Root(props) {
  useLanguage();
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth={"lg"} data-testid='root'>
        <CharacterMain />
      </Container>
    </QueryClientProvider>
  );
}
