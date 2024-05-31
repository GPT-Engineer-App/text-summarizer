import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4} bg="white">
    <Heading as="h1" size="xl" mb={4} color="black">About</Heading>
    <Text fontSize="lg" color="gray.700">
      This application allows you to summarize text quickly and efficiently. Simply enter your text, and the app will provide a concise summary.
    </Text>
  </Box>
);

export default About;