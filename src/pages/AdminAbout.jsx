import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, HStack, Select } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const AdminAbout = () => {
  const [aboutContent, setAboutContent] = useState({});
  const [newContent, setNewContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    // Fetch the current about content and languages from the server
    // This is a placeholder, replace with actual fetch call
    const fetchContent = async () => {
      const response = await fetch("/api/about");
      const data = await response.json();
      setAboutContent(data.content);
      setLanguages(data.languages);
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
      body: JSON.stringify({ language: selectedLanguage, content: newContent }),
    });

    setAboutContent({ ...aboutContent, [selectedLanguage]: newContent });
    setNewContent("");
    setIsEditing(false);
  };

  const handleEdit = () => {
    setNewContent(aboutContent[selectedLanguage] || "");
    setIsEditing(true);
  };

  const handleDelete = async () => {
    // Delete the content from the server
    // This is a placeholder, replace with actual delete call
    await fetch("/api/about", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: selectedLanguage }),
    });

    const updatedContent = { ...aboutContent };
    delete updatedContent[selectedLanguage];
    setAboutContent(updatedContent);
    setNewContent("");
    setIsEditing(false);
  };

  const handleAddLanguage = async (newLanguage) => {
    // Add a new language to the server
    // This is a placeholder, replace with actual add call
    await fetch("/api/languages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: newLanguage }),
    });

    setLanguages([...languages, newLanguage]);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Manage About Page</Heading>
      <FormControl mb={4}>
        <FormLabel>Select Language</FormLabel>
        <Select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>
      </FormControl>
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
            <Button leftIcon={<FaTrash />} colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </HStack>
        </VStack>
      ) : (
        <VStack spacing={4}>
          <Text>{aboutContent[selectedLanguage]}</Text>
          <Button leftIcon={<FaEdit />} colorScheme="teal" onClick={handleEdit}>
            Edit
          </Button>
        </VStack>
      )}
      <FormControl mt={4}>
        <FormLabel>Add New Language</FormLabel>
        <HStack>
          <Input placeholder="New Language" onKeyDown={(e) => e.key === "Enter" && handleAddLanguage(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={() => handleAddLanguage(document.querySelector('input[placeholder="New Language"]').value)}>
            Add
          </Button>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default AdminAbout;