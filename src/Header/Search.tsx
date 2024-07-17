import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Search = () => (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <SearchIcon color="gray.600" />
    </InputLeftElement>
    <Input variant="filled" placeholder="Filled" />
  </InputGroup>
);
