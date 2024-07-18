import { Stack, Text } from "@chakra-ui/react";
import { ReadingItem } from "./ReadingItem";
import { Book } from "./book.type.ts";

export const ReadingList = ({
  title,
  books,
  allowReorder = false,
}: {
  title?: string;
  books: Book[];
  allowReorder?: boolean;
}) => {
  return (
    <Stack direction="column">
      {title && (
        <Text as="h2" textStyle="h2" color="grey.0">
          {title}
        </Text>
      )}
      {books.map((book) => (
        <ReadingItem key={book.isbn} book={book} allowReorder={allowReorder} />
      ))}
    </Stack>
  );
};
