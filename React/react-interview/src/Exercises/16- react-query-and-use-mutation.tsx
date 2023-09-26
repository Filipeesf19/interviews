import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

// Define a TypeScript interface for the post data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const queryClient = useQueryClient();

// Define a function to fetch data (e.g., from an API)
const fetchData = async (): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Define a function to update the title of a post
const updateTitle = async (newTitle: string): Promise<Post> => {
  const response = await axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
    title: newTitle,
  });
  return response.data;
};

function Exercise16() {
  // Use the useQuery hook to fetch and manage data
  const { data, error, isLoading } = useQuery<Post>("post", fetchData);

  // Use the useMutation hook to update data
  const mutation = useMutation(updateTitle);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>React Query Example</h1>
      {error ? (
        <div>Error: {(error as Error).message}</div>
      ) : (
        <>
          <p>Title: {data?.title}</p>
          <button onClick={() => mutation.mutate("New Title")}>Update Title</button>
        </>
      )}
    </div>
  );
}

export default Exercise16;
