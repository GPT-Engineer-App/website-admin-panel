import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, HStack } from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon } from "react-icons/fa";

const AdminAbout = () => {
  const [aboutContent, setAboutContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch the current about content from the server
    // This is a placeholder, replace with actual fetch call
    const fetchContent = async () => {
      const response = await fetch("/api/about");
      const data = await response.json();
      setAboutContent(data.content);
    };

    fetchContent();
  }, []);

  const handleSave = async () => {
    // Save the new content to the server
    // This is a placeholder, replace with actual save call
    await fetch("/api/about", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newContent }),
    });

    setAboutContent(newContent);
    setNewContent("");
    setIsEditing(false);
  };

  const handleEdit = () => {
    setNewContent(aboutContent);
    setIsEditing(true);
  };

  const handleDelete = async () => {
    // Delete the content from the server
    // This is a placeholder, replace with actual delete call
    await fetch("/api/about", {
      method: "DELETE",
    });

    setAboutContent("");
    setNewContent("");
    setIsEditing(false);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Manage About Page</Heading>
      {isEditing ? (
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>About Content</FormLabel>
            <Textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
          </FormControl>
          <HStack spacing={4}>
            <Button colorScheme="teal" onClick={handleSave}>
              Save
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </HStack>
        </VStack>
      ) : (
        <VStack spacing={4}>
          <Text>{aboutContent}</Text>
          <Button leftIcon={<EditIcon />} colorScheme="teal" onClick={handleEdit}>
            Edit
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default AdminAbout;