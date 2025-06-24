"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { User } from "@/types/User";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  return (
    <Link href={`/users/${user.id}`}>
      <Card className="w-full shadow-md rounded-2xl">
        <CardContent className="flex items-center gap-4 p-4">
          <Avatar className="size-15 rounded-full">
            <AvatarImage src={user.image} />

            <AvatarFallback>
              {(user.firstName[0] + user.lastName[0]).toUpperCase()}
            </AvatarFallback>
          </Avatar>

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
