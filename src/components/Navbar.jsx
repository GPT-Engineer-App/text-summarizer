import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Text Summarizer</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              Home
            </Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              About
            </Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              Contact
            </Link>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;