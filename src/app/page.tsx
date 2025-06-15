import { Blockquote } from "@mantine/core";
import { getCars } from "@/lib/api/queries/get-cars";
import { Car } from "@/lib/types/car";
import { Order, SortBy } from "@/lib/types/sort-state";
import { HomeTemplate } from "@/components/templates/home";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;

  const rawPage = params?.page;
  const rawSort = params?.sort;
  const rawOrder = params?.order;

  const page = typeof rawPage === "string" ? Number(rawPage) : 1;
  const sort = rawSort === SortBy.PRICE ? SortBy.PRICE : undefined;
  const order =
    rawOrder === Order.ASC || rawOrder === Order.DESC ? rawOrder : undefined;

  let cars: Car[] = [];
  let totalPages = 0;

  try {
    const res = await getCars({ page, sort, order, limit: 12 });
    cars = res.data;
    totalPages = Math.ceil(res.meta.total / res.meta.limit);
  } catch {
    return (
      <Blockquote color="red" cite="Ошибка" m="xl">
        Что-то пошло не так, попробуйте еще раз позже.
      </Blockquote>
    );
  }

  return <HomeTemplate cars={cars} totalPages={totalPages} />;
}
