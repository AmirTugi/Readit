import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  VStack,
} from "@chakra-ui/react";

export const AddBook = ({
  isOpen,
  onClose,
}: Pick<ModalProps, "isOpen" | "onClose">) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent backgroundColor="grey.900" color="grey.0">
      <ModalHeader>Add a Book</ModalHeader>
      <ModalBody>
        <VStack>
          <FormControl>
            <FormLabel>Book Title</FormLabel>
            <Input variant="filled" />
          </FormControl>

          <FormControl>
            <FormLabel>Series (Optional)</FormLabel>
            <Input variant="filled" />
          </FormControl>

          <FormControl>
            <FormLabel>Author (Optional)</FormLabel>
            <Input variant="filled" />
          </FormControl>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <HStack>
          <Button type="submit" colorScheme="yellow">
            Add
          </Button>
          <Button colorScheme="gray">Cancel</Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
