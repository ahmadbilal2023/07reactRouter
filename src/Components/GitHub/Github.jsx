import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ahmadbilal2023")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl font-bold space-y-4 sm:space-y-0">
      Github followers: {data.followers} <span className="ml-8">Following</span>{" "}
      {data.following}
      <img src={data.avatar_url} alt="github profile" width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ahmadbilal2023");
  return response.json();
};
