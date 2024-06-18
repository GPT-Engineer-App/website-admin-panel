import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text fontSize="xl" color="white">Admin Panel</Text>
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button as={Link} to="/" colorScheme="teal" variant="link">
              Home
            </Button>
            <Button as={Link} to="/treatments" colorScheme="teal" variant="link">
              Treatments
            </Button>
            <Button as={Link} to="/blogs" colorScheme="teal" variant="link">
              Blogs
            </Button>
            <Button as={Link} to="/contacts" colorScheme="teal" variant="link">
              Contacts
            </Button>
            <Button as={Link} to="/seo" colorScheme="teal" variant="link">
              SEO
            </Button>
            <Button as={Link} to="/admin/about" colorScheme="teal" variant="link">
              Manage About
            </Button>
            <Button as={Link} to="/settings" colorScheme="teal" variant="link">
              Settings
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;