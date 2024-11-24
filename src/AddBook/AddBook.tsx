import {
  Button,
  FormControl,
  FormErrorMessage,
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
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  author: string;
  series: string;
  comments: string;
};

export const AddBook = ({
  isOpen,
  onClose,
}: Pick<ModalProps, "isOpen" | "onClose">) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch(), errors); // watch input value by passing the name of it

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="grey.900" color="grey.0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add a Book</ModalHeader>
          <ModalBody>
            <VStack gap={4}>
              <FormControl isRequired isInvalid={!!errors.title}>
                <FormLabel>Book Title</FormLabel>
                <Input
                  variant="filled"
                  isRequired={false}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <FormErrorMessage>Title is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Series</FormLabel>
                <Input variant="filled" {...register("series")} />
              </FormControl>

              <FormControl>
                <FormLabel>Author</FormLabel>
                <Input variant="filled" {...register("author")} />
              </FormControl>

              <FormControl>
                <FormLabel>Comments</FormLabel>
                <Input variant="filled" {...register("comments")} />
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
        </form>
      </ModalContent>
    </Modal>
  );
};
