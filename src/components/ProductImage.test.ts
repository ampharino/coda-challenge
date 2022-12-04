import ProductImageVue from "./ProductImage.vue";
import { render, fireEvent } from "@testing-library/vue";

describe("ProductImage", () => {
  it("should use fallback image if not able to load image", async () => {
    render(ProductImageVue, { props: { url: "" } });
    fireEvent.error(document.querySelector("img")!);
    expect(document.querySelector("img")?.getAttribute("src")).toBe(
      "/fallback.svg"
    );
  });
});
