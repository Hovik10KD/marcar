"use client";

import clsx from "clsx";
import { Pagination } from "@mantine/core";
import styles from "./styles.module.css";
import { FooterProps } from "./types";
import { useSearchParams, useRouter } from "next/navigation";

export const Footer = ({ totalPages }: FooterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <footer className={clsx(styles.footer)}>
      <Pagination
        total={totalPages}
        size="sm"
        radius="xs"
        value={currentPage}
        onChange={handlePageChange}
      />
    </footer>
  );
};
