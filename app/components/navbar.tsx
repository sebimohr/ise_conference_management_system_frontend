'use client'

import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import Link from "next/link";
import {ChevronDownIcon} from "@heroicons/react/24/outline";


export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Image className="h-16" alt="reviewer_logo" src="/logo.webp"/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 space-x-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" aria-current="page" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/papers">
            Papers
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                endContent={<ChevronDownIcon/>}
              >
                Reviews
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Review statusse"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Your saved but incomplete reviews."
              href="/reviews/drafts"
            >
              Drafts
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              description="Your already submitted reviews."
              href="/reviews/submitted"
            >
              Submitted
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
