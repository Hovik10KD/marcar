import { Blockquote } from "@mantine/core";
import { getCars } from "@/lib/api/queries/get-cars";
import { Car } from "@/lib/types/car";
import { Order, SortBy } from "@/lib/types/sort-state";
import { HomeTemplate } from "@/components/templates/home";

type PageParams = {
  searchParams?: {
    page?: string;
    sort?: SortBy;
    order?: Order;
  };
};

export default async function Home({ searchParams }: PageParams) {
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const sort = searchParams?.sort === SortBy.PRICE ? SortBy.PRICE : undefined;
  const order =
    searchParams?.order === Order.ASC || searchParams?.order === Order.DESC
      ? searchParams.order
      : undefined;

  let cars: Car[] = [];
  let totalPages: number = 0;

  try {
    const res = await getCars({ page, sort, order, limit: 12 });
    cars = res.data;
    totalPages = Math.ceil(res.meta.total / res.meta.limit);
  } catch {
    return (
      <Blockquote color="red" cite="Something went wrong" m="xl">
        Something went wrong, please try again later.
      </Blockquote>
    );
  }

  return <HomeTemplate cars={cars} totalPages={totalPages} />;
}
