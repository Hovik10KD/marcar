"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@mantine/core";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { Order, SortBy } from "@/lib/types/sort-state";

export const SortingButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentOrder = searchParams.get("order") as Order | null;
  const currentSort = searchParams.get("sort") as SortBy | null;

  const nextOrder =
    !currentOrder || currentOrder === Order.DESC ? Order.ASC : Order.DESC;

  const handleClick = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("sort", SortBy.PRICE);
    params.set("order", nextOrder);
    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  const isSortedByPrice = currentSort === SortBy.PRICE;
  const icon =
    currentOrder === Order.DESC ? (
      <IconArrowDown size={16} />
    ) : (
      <IconArrowUp size={16} />
    );

  return (
    <Button
      onClick={handleClick}
      variant={isSortedByPrice ? "filled" : "outline"}
    >
      Сортировать по цене {isSortedByPrice && icon}
    </Button>
  );
};
