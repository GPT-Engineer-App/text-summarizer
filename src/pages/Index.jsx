import { useState } from "react";
import { Container, Text, VStack, Textarea, Button, Box, Heading, Link, Flex } from "@chakra-ui/react";

const Index = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Placeholder for summary logic
    const summarizedText = text.split(" ").slice(0, 10).join(" ") + "...";
    setSummary(summarizedText);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Text Summarizer</Heading>
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="sm"
          resize="vertical"
        />
        <Button colorScheme="blue" onClick={handleSummarize}>Summarize</Button>
        {summary && (
          <Box p={4} bg="gray.100" borderRadius="md" width="100%">
            <Heading as="h2" size="md">Summary</Heading>
            <Text mt={2}>{summary}</Text>
          </Box>
        )}
      </VStack>
      <Flex as="footer" width="100%" py={4} justifyContent="center" borderTop="1px solid #eaeaea" mt={4}>
        <Link href="/privacy-policy" mx={2}>Privacy Policy</Link>
        <Link href="/terms-of-service" mx={2}>Terms of Service</Link>
        <Link href="/contact-us" mx={2}>Contact Us</Link>
      </Flex>
    </Container>
  );
};

export default Index;