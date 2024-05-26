"use client"

import {FC} from "react";
import {Tab, Tabs} from "@nextui-org/tabs";
import {BookMarked, BookmarkPlus, BookUser, Users} from "lucide-react";
import Link from "next/link";

export const TabPanel: FC = () => {
    return (
        <nav className="lg:flex justify-center my-5 overflow-x-auto">
            <Tabs aria-label="sections" color="primary" variant="bordered">
                <Tab
                    key="users"
                    title={
                        <Link href="/admin" className="flex items-center space-x-2">
                            <Users />
                            <span>Користувачі</span>
                        </Link>
                    }
                >

                </Tab>
                <Tab
                    key="books"
                    title={
                        <Link href="/admin/books" className="flex items-center space-x-2">
                            <BookMarked />
                            <span>Книги</span>
                        </Link>
                    }
                />
                <Tab
                    key="authors"
                    title={
                        <Link href="/admin/authors" className="flex items-center space-x-2">
                            <BookUser />
                            <span>Автори</span>
                        </Link>
                    }
                />
                <Tab
                    key="categories"
                    title={
                        <Link  href="/admin/categories" className="flex items-center space-x-2">
                            <BookmarkPlus />
                            <span>Категорії</span>
                        </Link>
                    }
                />
            </Tabs>
        </nav>
    )
}

