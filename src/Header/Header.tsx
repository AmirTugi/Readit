import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Search } from "./Search";
import readitLogo from "../assets/readit.svg";

export const Header = () => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="grey.0"
      alignItems="center"
      paddingY={3}
      paddingX={10}
    >
      <HStack spacing={8}>
        <HStack alignItems="center">
          <Image src={readitLogo} />
          <Text as="h3" textStyle="h3" color="grey.0">
            Readit
          </Text>
        </HStack>
        <Text textStyle="body2" color="grey.0">
          Home
        </Text>
      </HStack>
      <Flex flexGrow={1} />
      <HStack spacing={8}>
        <Search />
        <HStack spacing={2}>
          <Button colorScheme="yellow">Add a book</Button>
          <IconButton
            aria-label="User Settings"
            colorScheme="grey"
            icon={<SettingsIcon />}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};
