import { useState, useRef } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Container, Text, VStack, Textarea, Button, Box, Heading, Link, Flex, Image, SimpleGrid, GridItem } from "@chakra-ui/react";

const Index = () => {
  const [text, setText] = useState("");
  const [headerImageUrl, setHeaderImageUrl] = useState("path/to/your/image.jpg");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Placeholder for summary logic
    const summarizedText = text.split(" ").slice(0, 10).join(" ") + "...";
    setSummary(summarizedText);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container centerContent maxW="container.md" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" py={12} px={6} bg="white">
      <VStack spacing={12} width="100%">
        <Flex width="100%" alignItems="center" justifyContent="space-between" mb={12}>
          <Heading as="h1" size="2xl" color="black">Text Summarizer</Heading>
          <Image src={headerImageUrl} alt="Header Image" boxSize="100px" objectFit="cover" borderRadius="full" />
        </Flex>
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="md"
          resize="vertical"
          bg="gray.50"
          color="black"
        />
        <Button colorScheme="teal" onClick={handleSummarize} size="lg">Summarize</Button>
        <Button colorScheme="teal" onClick={handleUploadClick} size="lg">Upload File</Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {file && (
          <Text mt={4} color="gray.700">Uploaded File: {file.name}</Text>
        )}
        {summary && (
          <Box p={6} bg="gray.100" borderRadius="md" width="100%">
            <Heading as="h2" size="lg" color="black">Summary</Heading>
            <Text mt={4} color="gray.700">{summary}</Text>
          </Box>
        )}
      </VStack>

      {/* Features Section */}
      <Box width="100%" py={16}>
        <Heading as="h2" size="xl" mb={10} color="black">Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
          <GridItem>
            <Heading as="h3" size="lg" color="black">Fast Summarization</Heading>
            <Text mt={2} color="gray.700">Get summaries in seconds.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size="lg" color="black">Accurate Results</Heading>
            <Text mt={2} color="gray.700">High accuracy in text summarization.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size="lg" color="black">Easy to Use</Heading>
            <Text mt={2} color="gray.700">User-friendly interface.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size="lg" color="black">Free to Use</Heading>
            <Text mt={2} color="gray.700">No hidden charges.</Text>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* How It Works Section */}
      <Box width="100%" py={16} bg="gray.50">
        <Heading as="h2" size="xl" mb={10} color="black">How It Works</Heading>
        <Text fontSize="lg" color="gray.700">Simply enter your text, click on the summarize button, and get a concise summary instantly.</Text>
      </Box>

      {/* Testimonials Section */}
      <Box width="100%" py={16}>
        <Heading as="h2" size="xl" mb={10} color="black">Testimonials</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
          <GridItem>
            <Text fontSize="lg" color="gray.700">"This text summarizer is amazing! It saves me so much time." - User A</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" color="gray.700">"Highly accurate and easy to use. I love it!" - User B</Text>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Call to Action Section */}
      <Box width="100%" py={16} bg="gray.50" textAlign="center">
        <Heading as="h2" size="xl" mb={10} color="black">Try It Now!</Heading>
        <Button colorScheme="teal" size="lg">Summarize Your Text</Button>
      </Box>

      <Flex as="footer" width="100%" py={8} justifyContent="center" borderTop="1px solid #eaeaea" mt={12}>
        <Link href="/privacy-policy" mx={4} color="gray.700">Privacy Policy</Link>
        <Link href="/terms-of-service" mx={4} color="gray.700">Terms of Service</Link>
        <Link href="/contact-us" mx={4} color="gray.700">Contact Us</Link>
      </Flex>
    </Container>
  );
};

export default Index;