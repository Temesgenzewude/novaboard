"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


import Image from "next/image";
import Link from "next/link";
import { User } from "@/types/User";

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  return (
    <Link href={`/users/${user.id}`}>
      <Card className="w-full shadow-md rounded-2xl">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src={user.image}
            alt={user.username}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-lg">{user.username}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-sm">{user.location}</p>
            <p className="text-sm">{user.phone}</p>
          </div>
          <Badge variant={user.role === "Admin" ? "default" : "outline"}>
            {user.role}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
