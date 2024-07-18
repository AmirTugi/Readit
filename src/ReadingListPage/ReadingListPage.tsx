import { Container, Heading, VStack } from "@chakra-ui/react";
import { ReadingList } from "./ReadingList";
import { Book } from "./book.type.ts";
import mockData from "./mock-data.json";
import { useMemo } from "react";

export const ReadingListPage = () => {
  const booksList: Book[] = mockData as Book[];

  const tbrBooks: Book[] = useMemo(
    () =>
      booksList.filter((book) =>
        ["TBR", "Not Recommended"].includes(book.status),
      ),
    [booksList],
  );
  const doneBooks: Book[] = useMemo(
    () => booksList.filter((book) => ["DNF", "Done"].includes(book.status)),
    [booksList],
  );

  return (
    <Container maxWidth="container.xl" padding={4}>
      <VStack alignItems="stretch">
        <Heading as="h1" textStyle="h1" color="grey.0">
          My Reading List
        </Heading>
        <ReadingList books={tbrBooks} allowReorder />
        <ReadingList title="Done" books={doneBooks} />
      </VStack>
    </Container>
  );
};
