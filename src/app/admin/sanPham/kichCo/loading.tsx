// app/admin/khach-hang/loading.tsx
"use client"
import React from "react";
import LoadingAdmin from "@/app/components/loader/LoadingAdmin";

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <LoadingAdmin />
    </div>
  );
}
