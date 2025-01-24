"use client"; // Ensure it's client-side

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";


export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login"); // Redirect if not authenticated
    }
    setLoading(false);
  }, [isAuthenticated, loading, router]);

  return { isAuthenticated, user, loading };
}