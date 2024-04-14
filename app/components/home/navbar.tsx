'use client'

import React, {useEffect, useState} from "react";
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
import {getAuthSessionKey, removeAuthSessionKey} from "@/app/api/SessionManagement";
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_REVIEWS} from "@/app/components/home/routes";
import {usePathname} from "next/navigation";


export default function NavBar() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    getAuthSessionKey().then(val => {
      setLoading(true)
      setUserIsLoggedIn(val != undefined)
      setLoading(false)
    })
  });

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Image className="h-16" alt="reviewer_logo" src="/logo.webp"/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 space-x-4" justify="center">
        <NavbarItem isActive={usePathname() == ROUTE_HOME}>
          <Link color="foreground" aria-current="page" href={ROUTE_HOME}>
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
                {usePathname().startsWith(ROUTE_REVIEWS) ? <b>Reviews</b> : "Reviews"}
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
              href={`${ROUTE_REVIEWS}/list/open`}
            >
              Open
            </DropdownItem>
            <DropdownItem
              key="draftReviews"
              description="Your saved but incomplete reviews."
              href={`${ROUTE_REVIEWS}/list/draft`}
            >
              Drafts
            </DropdownItem>
            <DropdownItem
              key="submittedReviews"
              description="Your already submitted reviews."
              href={`${ROUTE_REVIEWS}/list/submitted`}
            >
              Submitted
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        {!loading ?
          <NavbarItem>
            {userIsLoggedIn ?
              <Button as={Link}
                      color="primary"
                      onClick={async () => await removeAuthSessionKey()}
                      href={ROUTE_LOGIN}
                      variant="flat">
                Sign Out
              </Button> :
              <Button as={Link} color="primary" href={ROUTE_LOGIN} variant="flat">
                Sign In
              </Button>
            }
          </NavbarItem> :
          <></>
        }
      </NavbarContent>
    </Navbar>
  )
}
