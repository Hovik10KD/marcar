const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWithInterceptor(
  input: RequestInfo,
  init?: RequestInit,
  retryCount: number = 1
): Promise<Response> {
  const url =
    typeof input === "string" && !input.startsWith("http")
      ? `${API_URL}${input}`
      : input;

  const modifiedInit: RequestInit = {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  };

  for (let attempt = 0; attempt <= retryCount; attempt++) {
    try {
      const response = await fetch(url, modifiedInit);

      if (!response.ok) {
        if (response.status >= 500 && attempt < retryCount) {
          continue;
        }

        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody?.message || `HTTP error ${response.status}`);
      }

      return response;
    } catch (error) {
      if (attempt >= retryCount) {
        console.error("Final fetch failure:", error);
        throw error;
      }

      console.warn(`Retrying request (${attempt + 1}/${retryCount})...`);
    }
  }

  throw new Error("Failed to fetch after retries");
}
