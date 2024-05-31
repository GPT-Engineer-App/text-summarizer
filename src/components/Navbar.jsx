import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="teal.500" fontWeight="bold" fontSize="xl">Text Summarizer</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.100" }} color="teal.500">
              Home
            </Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.100" }} color="teal.500">
              About
            </Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.100" }} color="teal.500">
              Contact
            </Link>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;