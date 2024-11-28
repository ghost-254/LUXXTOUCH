"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>

            <h1 className="text-2xl font-semibold">Login</h1>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base bg-blue-500 hover:bg-blue-600"
              >
                Login
              </Button>
            </form>

            <div className="text-center space-y-4 w-full">
              <p className="text-sm">
                Don&apos;t Have An Account?{" "}
                <Link
                  href="/create-account"
                  className="text-blue-500 hover:underline"
                >
                  Create Account
                </Link>
              </p>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-muted-foreground text-sm">Or</span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
