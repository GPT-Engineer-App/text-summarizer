import { useState } from "react";
import { Container, Text, VStack, Textarea, Button, Box, Heading, Link, Flex, Image, SimpleGrid, GridItem } from "@chakra-ui/react";

const Index = () => {
  const [text, setText] = useState("");
  const [headerImageUrl, setHeaderImageUrl] = useState("path/to/your/image.jpg");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Placeholder for summary logic
    const summarizedText = text.split(" ").slice(0, 10).join(" ") + "...";
    setSummary(summarizedText);
  };

  return (
    <Container centerContent maxW="container.md" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
      <VStack spacing={4} width="100%">
        <Flex width="100%" alignItems="center" justifyContent="space-between" mb={4}>
          <Heading as="h1" size="xl">Text Summarizer</Heading>
          <Image src={headerImageUrl} alt="Header Image" boxSize="100px" objectFit="cover" borderRadius="full" />
        </Flex>
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

      {/* Features Section */}
      <Box width="100%" py={8}>
        <Heading as="h2" size="lg" mb={4}>Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Heading as="h3" size="md">Fast Summarization</Heading>
            <Text>Get summaries in seconds.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size="md">Accurate Results</Heading>
            <Text>High accuracy in text summarization.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size="md">Easy to Use</Heading>
            <Text>User-friendly interface.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size="md">Free to Use</Heading>
            <Text>No hidden charges.</Text>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* How It Works Section */}
      <Box width="100%" py={8} bg="gray.50">
        <Heading as="h2" size="lg" mb={4}>How It Works</Heading>
        <Text>Simply enter your text, click on the summarize button, and get a concise summary instantly.</Text>
      </Box>

      {/* Testimonials Section */}
      <Box width="100%" py={8}>
        <Heading as="h2" size="lg" mb={4}>Testimonials</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Text>"This text summarizer is amazing! It saves me so much time." - User A</Text>
          </GridItem>
          <GridItem>
            <Text>"Highly accurate and easy to use. I love it!" - User B</Text>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Call to Action Section */}
      <Box width="100%" py={8} bg="gray.50" textAlign="center">
        <Heading as="h2" size="lg" mb={4}>Try It Now!</Heading>
        <Button colorScheme="blue" size="lg">Summarize Your Text</Button>
      </Box>

      <Flex as="footer" width="100%" py={4} justifyContent="center" borderTop="1px solid #eaeaea" mt={4}>
        <Link href="/privacy-policy" mx={2}>Privacy Policy</Link>
        <Link href="/terms-of-service" mx={2}>Terms of Service</Link>
        <Link href="/contact-us" mx={2}>Contact Us</Link>
      </Flex>
    </Container>
  );
};

export default Index;