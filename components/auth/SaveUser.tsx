"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function SaveUser() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("SaveUser Loaded");
    if (status !== "authenticated") return;

    const saveUser = async () => {
      try {
       const response = await axios.post("http://localhost:5000/users", {
         name: session.user?.name,
         email: session.user?.email,
         image: session.user?.image,
        });

        console.log("Response:", response.data);
        
      } catch (error: any) {
        console.log("API Error:", error.response?.data);
        console.log(error.message);
      }
    };

    saveUser();
  }, [session, status]);

  return null;
}