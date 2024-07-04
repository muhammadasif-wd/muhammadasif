import config from "@/config";

// navigation fetch function
export async function fetchNavigation() {
  const result = await fetch(`${config.baseURL}/navigation`, {
    next: {
      revalidate: 10,
    },
  });

  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }

  return result.json();
}
