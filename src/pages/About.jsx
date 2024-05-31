import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>About</Heading>
    <Text fontSize="lg">This is a text summarizer application that helps you to summarize your text quickly and efficiently.</Text>
  </Box>
);

export default About;