#!/usr/bin/env python3
"""Generate circle-with-arrow control button icons."""

from pathlib import Path

from PIL import Image

OUT = Path(__file__).resolve().parent.parent / "img"
SIZE = 24
SCALE = 5
WHITE = (255, 255, 255, 255)
CLEAR = (0, 0, 0, 0)


def plot(img: Image.Image, x: int, y: int) -> None:
    if 0 <= x < img.width and 0 <= y < img.height:
        img.putpixel((x, y), WHITE)


def plot_span(img: Image.Image, x0: int, x1: int, y: int) -> None:
    for x in range(x0, x1 + 1):
        plot(img, x, y)


def circle_outline(img: Image.Image, cx: int, cy: int, r: int) -> None:
    """1px-thick pixel circle."""
    x, y = 0, r
    d = 1 - r

    def octants(ox: int, oy: int) -> None:
        for px, py in (
            (cx + ox, cy + oy),
            (cx - ox, cy + oy),
            (cx + ox, cy - oy),
            (cx - ox, cy - oy),
            (cx + oy, cy + ox),
            (cx - oy, cy + ox),
            (cx + oy, cy - ox),
            (cx - oy, cy - ox),
        ):
            plot(img, px, py)

    while x <= y:
        octants(x, y)
        if d < 0:
            d += 2 * x + 3
        else:
            d += 2 * (x - y) + 5
            y -= 1
        x += 1


def draw_arrow_up(img: Image.Image, cx: int, cy: int) -> None:
    """Chunky up arrow centered on (cx, cy)."""
    plot_span(img, cx - 1, cx + 1, cy - 7)   # tip
    plot_span(img, cx - 2, cx + 2, cy - 6)
    plot_span(img, cx - 3, cx + 3, cy - 5)
    plot_span(img, cx - 4, cx + 4, cy - 4)
    plot_span(img, cx - 5, cx + 5, cy - 3)  # chevron base
    for y in range(cy - 2, cy + 4):
        plot_span(img, cx - 2, cx + 2, y)   # stem
    plot_span(img, cx - 3, cx + 3, cy + 5)  # foot
    plot_span(img, cx - 4, cx + 4, cy + 6)


def draw_arrow_down(img: Image.Image, cx: int, cy: int) -> None:
    """Chunky down arrow centered on (cx, cy)."""
    plot_span(img, cx - 4, cx + 4, cy - 6)  # top of stem
    plot_span(img, cx - 3, cx + 3, cy - 5)
    for y in range(cy - 4, cy + 2):
        plot_span(img, cx - 2, cx + 2, y)   # stem
    plot_span(img, cx - 5, cx + 5, cy + 3)  # chevron top
    plot_span(img, cx - 4, cx + 4, cy + 4)
    plot_span(img, cx - 3, cx + 3, cy + 5)
    plot_span(img, cx - 2, cx + 2, cy + 6)
    plot_span(img, cx - 1, cx + 1, cy + 7)  # tip


def render(name: str, direction: str) -> None:
    img = Image.new("RGBA", (SIZE, SIZE), CLEAR)
    cx, cy = SIZE // 2, SIZE // 2
    circle_outline(img, cx, cy, 10)
    if direction == "up":
        draw_arrow_up(img, cx, cy)
    else:
        draw_arrow_down(img, cx, cy)
    img = img.resize((SIZE * SCALE, SIZE * SCALE), Image.NEAREST)
    path = OUT / name
    img.save(path)
    print(f"Wrote {path} ({img.size[0]}x{img.size[1]})")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    render("btn-jump.png", "up")
    render("btn-slide.png", "down")


if __name__ == "__main__":
    main()
