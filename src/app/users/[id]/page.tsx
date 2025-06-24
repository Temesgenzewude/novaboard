"use client";

import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { AppChartLineMultiple } from "@/components/AppLineChart";
import EditUserInfoSheetContent from "@/components/EditUserInfoSheetContent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import Link from "next/link";

import { fetchUserById } from "@/redux/slices/usersSlices";
import { AppDispatch, RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserDetails() {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (typeof id === "string") dispatch(fetchUserById(id));
  }, [dispatch, id]);

  const { selectedUser, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  if (loading)
    return (
      <div className="flex flex-col  h-[300px]  justify-center  items-center ">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col  h-[300px]  justify-center  items-center ">
        Error: {error}
      </div>
    );

  if (!selectedUser) return;

  const username = selectedUser.username;
  const phone = selectedUser.phone;
  const location = selectedUser.location;
  const userRole = selectedUser.role;
  const email = selectedUser.email;
  const image = selectedUser.image;
  const firstName = selectedUser.firstName;
  const lastName = selectedUser.lastName;
  return (
    <div>
      <div className="flex  space-x-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/users">Users</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{username}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Link
          href="/payments"
          className="text-muted-foreground rounded-full hover:bg-gray-800/50 hover:text-white px-2"
        >
          Payments
        </Link>
      </div>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}

          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>

            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has verified their identity by providing the
                    necessary documents.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">{userRole}</h1>

                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions!
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>

                  <p className="text-sm text-muted-foreground">
                    This use has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* INFORMATION CONTAINER */}

          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>

              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit Info</Button>
                </SheetTrigger>

                <EditUserInfoSheetContent
                  username={username}
                  email={email}
                  phone={phone}
                  location={location}
                  role={userRole}
                />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>

                <Progress value={77} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username: </span>
                <span>{username}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Email: </span>
                <span>{username}@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Phone: </span>
                <span>{phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Location: </span>
                <span>{location}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Role: </span>
                <Badge>{userRole}</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>

          {/* CARD LIST CONTAINER */}

          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER CARD CONTAINER */}

          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src={image} />

                <AvatarFallback>
                  {(firstName[0] + lastName[0]).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <h1 className="text-xl font-semibold">
                {firstName + " " + lastName}
              </h1>
            </div>

            <p className="text-sm text-muted-foreground">
              This is the users information dashboard
            </p>
          </div>

          {/* CHART CONTAINER */}

          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold mb-6">User Activities</h1>
            <AppChartLineMultiple />
          </div>
        </div>
      </div>
    </div>
  );
}
