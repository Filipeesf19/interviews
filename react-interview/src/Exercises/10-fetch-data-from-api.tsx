import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

interface UserData {
  name?: string;
  website?: string;
  email?: string;
  phone?: string;
}

const Exercise10: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({});

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: UserData = await response.json();
      setUserData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong> {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
};

export default Exercise10;
