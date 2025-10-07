
// src\components\AuthGuard.js

"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/store";
import { storage } from "@/utils/storage";
import { setBearerToken } from "@/utils/api/client";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const token = useAppSelector((s) => s.auth.token);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = token || storage.get("auth_token", null);
    if (!t) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    } else {
      setBearerToken(t); // make sure API calls have Authorization
      setReady(true);
    }
  }, [token, pathname, router]);

  if (!ready) return null; // or a spinner
  return <>{children}</>;
}
