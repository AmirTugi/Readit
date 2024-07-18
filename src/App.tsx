import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./Header";
import { ReadingListPage } from "./ReadingListPage";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                  "main"`}
      gridTemplateRows={"65px 1fr"}
      gridTemplateColumns={"1fr"}
      h="100%"
      gap="1"
      backgroundColor="grey.900"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" area={"main"} overflow="auto">
        <ReadingListPage />
      </GridItem>
    </Grid>
  );
}

export default App;
