'use client'

import React, {useState} from "react";
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
import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/24/outline";


export default function NavBar() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

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
        <Dropdown
          onOpenChange={setDropDownOpen}
        >
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                endContent={dropDownOpen ? <ChevronDownIcon/> : <ChevronRightIcon/>}
              >
                Reviews
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Review statuses"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="openReviews"
              description="Your reviews that you haven't started yet."
              href="/reviews/list/open"
            >
              Open
            </DropdownItem>
            <DropdownItem
              key="draftReviews"
              description="Your saved but incomplete reviews."
              href="/reviews/list/draft"
            >
              Drafts
            </DropdownItem>
            <DropdownItem
              key="submittedReviews"
              description="Your already submitted reviews."
              href="/reviews/list/submitted"
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
