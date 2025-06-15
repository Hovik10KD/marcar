import { Car } from "@/lib/types/car";
import { Order, SortBy } from "@/lib/types/sort-state";
import { fetchWithInterceptor } from "../fetch-withInterceptor";

type GetCarsParams = {
  page?: number;
  sort?: SortBy;
  order?: Order;
  limit?: number;
};

type GetCarsResponse = {
  data: Car[];
  meta: {
    limit: number;
    page: number;
    total: number;
  };
};

export async function getCars({
  page = 1,
  sort,
  order,
  limit = 12,
}: GetCarsParams): Promise<GetCarsResponse> {
  const params = new URLSearchParams({
    _limit: limit.toString(),
    _page: page.toString(),
  });

  if (sort) params.append("_sort", sort);
  if (order) params.append("_order", order);

  const res = await fetchWithInterceptor(`/cars?${params.toString()}`);

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  const data = (await res.json()) as GetCarsResponse;

  return data;
}
