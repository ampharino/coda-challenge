import { fireEvent, render, screen } from "@testing-library/vue";
import { createRouter, createWebHistory, type Router } from "vue-router";
import ProductCard from "./ProductCard.vue";
import { routes } from "@/router";

describe("ProductCard", () => {
  let router: Router;

  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    router.push("/");
    await router.isReady();
  });
  it("should show product name and logo", () => {
    render(ProductCard, {
      props: {
        product: { id: 123, name: "test product", logoLocation: "testLogo" },
      },
      global: {
        plugins: [router],
      },
    });
    expect(screen.getByText("test product")).toBeTruthy();
    expect(document.querySelector("img")?.getAttribute("src")).toBe("testLogo");
  });
  it("should navigate to detail page if clicked", () => {
    vi.spyOn(router, "push");

    render(ProductCard, {
      props: {
        product: { id: 123, name: "test product", logoLocation: "testLogo" },
      },
      global: {
        plugins: [router],
      },
    });
    fireEvent.click(screen.getByText("test product"));

    expect(router.push).toHaveBeenCalledWith("/products/123");
  });
});
