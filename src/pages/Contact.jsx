import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4} bg="white">
    <Heading as="h1" size="xl" mb={4} color="black">Contact</Heading>
    <Text fontSize="lg" color="gray.700">
      For any inquiries, please contact us at support@textsummarizer.com.
    </Text>
  </Box>
);

export default Contact;