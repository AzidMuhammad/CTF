"use client";
import React from "react";
import { StickyNav } from "@/app/components/ui/navbar";
import { Form } from "@/app/components/ui/login";
import { Footer } from "@/app/components/ui/footer";
import { Back } from "@/app/components/ui/back";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header Section */}
      <header>
        <StickyNav />
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Back />
        <Form />
      </main>

      {/* Footer Section */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
