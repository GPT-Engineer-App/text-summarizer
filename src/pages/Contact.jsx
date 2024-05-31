import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Box p={8} bg="white">
    <Heading as="h1" size="2xl" mb={6} color="black" fontWeight="bold">Contact</Heading>
    <Text fontSize="lg" color="gray.700">
      For any inquiries, please contact us at support@textsummarizer.com.
    </Text>
  </Box>
);

export default Contact;