import { Book } from "./book.type.ts";
import { Flex, Image, Stack, Text, Badge } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

const statusBadgeMap: Record<Book["status"], { label: string; color: string }> =
  {
    TBR: { label: "TBR", color: "yellow" },
    Done: { label: "Done", color: "green" },
    DNF: { label: "DNF", color: "orange" },
    "Not Recommended": { label: "Not Recommended", color: "red" },
  };

const StatusBadge = ({ status }: { status: Book["status"] }) => (
  <Badge colorScheme={statusBadgeMap[status].color}>
    {statusBadgeMap[status].label}
  </Badge>
);

export const ReadingItem = ({
  book,
  allowReorder,
}: {
  book: Book;
  allowReorder?: boolean;
}) => {
  return (
    <Flex paddingX={4} paddingY={3} width="100%" gap={4} alignItems="center">
      <Image
        src={book.coverURL}
        alt={`${book.name} cover`}
        height="70px"
        width="70px"
        borderRadius="md"
      />
      <Stack direction="column" alignItems="flex-start">
        <Text textStyle="body2" color="grey.0">
          {book.name}
        </Text>
        <StatusBadge status={book.status} />
        <Text textStyle="body2" color="grey.300">
          {book.author}
        </Text>
      </Stack>
      <Flex flexGrow={1} />
      {allowReorder && <DragHandleIcon color="grey.300" />}
    </Flex>
  );
};
