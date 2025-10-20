"use client";

import * as React from "react";
import {
  FaCamera,
  FaChartBar,
  FaTachometerAlt,
  FaDatabase,
  FaRobot,
  FaFileAlt,
  FaFileWord,
  FaFolder,
  FaQuestionCircle,
  FaListUl,
  FaFileInvoice,
  FaSearch,
  FaCog,
  FaUsers,
} from "react-icons/fa";

import { NavDocuments } from "@/components/common/nav-documents";
import { NavMain } from "@/components/common/nav-main";
import { NavSecondary } from "@/components/common/nav-secondary";
import { NavUser } from "@/components/common/nav-user";
import { OrbisLogo } from "@/components/common/orbis-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: FaTachometerAlt,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: FaListUl,
    },
    {
      title: "Analytics",
      url: "#",
      icon: FaChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: FaFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: FaUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: FaCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FaFileAlt,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FaRobot,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: FaCog,
    },
    {
      title: "Get Help",
      url: "#",
      icon: FaQuestionCircle,
    },
    {
      title: "Search",
      url: "#",
      icon: FaSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: FaDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: FaFileInvoice,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: FaFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="border-b dark:border-white/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="px-2 py-3">
              <OrbisLogo href="/" size="sm" showText={true} />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
