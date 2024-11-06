// app/admin/khach-hang/loading.tsx
"use client"
import LoadingAdmin from "@/components/loader/LoadingAdmin";
import React from "react";

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <LoadingAdmin />
    </div>
  );
}
