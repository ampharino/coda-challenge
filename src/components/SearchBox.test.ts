import { routes } from "@/router";
import { fireEvent, render, screen } from "@testing-library/vue";
import { createRouter, createWebHistory, type Router } from "vue-router";
import SearchBoxVue from "./SearchBox.vue";

describe("SearchBox", () => {
  let router: Router;

  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    router.push("/");
    await router.isReady();
  });
  it("should show correct search results", async () => {
    render(SearchBoxVue, { global: { plugins: [router] } });
    const searchInput = screen.getByLabelText(
      "Search for product:"
    ) as HTMLInputElement;
    fireEvent.update(searchInput, "sultan");

    expect(await screen.findByText("Game of Sultans")).toBeTruthy();
  });
  it("should show no results found if no matching results", async () => {
    render(SearchBoxVue, { global: { plugins: [router] } });
    const searchInput = screen.getByLabelText(
      "Search for product:"
    ) as HTMLInputElement;
    fireEvent.update(searchInput, "notfound");

    expect(await screen.findByText("No results found")).toBeTruthy();
  });
  it("should navigate to product detail page if result clicked", async () => {
    vi.spyOn(router, "push");

    render(SearchBoxVue, { global: { plugins: [router] } });
    const searchInput = screen.getByLabelText(
      "Search for product:"
    ) as HTMLInputElement;
    fireEvent.update(searchInput, "sultan");
    fireEvent.click(await screen.findByText("Game of Sultans"));

    expect(router.push).toHaveBeenCalledWith("/products/1679");
  });
});
