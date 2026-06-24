#!/usr/bin/env python3
"""Generate pixel-art obstacle and knife sprites for Bear Rush."""

from pathlib import Path
from PIL import Image

OUT = Path(__file__).resolve().parent.parent / "img"
SCALE = 4
KNIFE_SCALE = 5

# Bear-rush palette: black outlines, warm fills, crisp pixels
P = {
    ".": None,
    "K": (0, 0, 0),
    "W": (253, 253, 253),
    "G": (253, 252, 252),
    "H": (254, 254, 254),
    "B": (80, 147, 213),
    "b": (42, 42, 42),
    "R": (210, 72, 38),
    "r": (255, 140, 55),
    "O": (180, 55, 18),
    "Y": (255, 220, 60),
    "y": (230, 180, 40),
    "N": (101, 67, 33),
    "n": (139, 90, 43),
    "S": (200, 210, 220),
    "s": (140, 150, 165),
    "C": (170, 178, 188),
    "c": (110, 118, 128),
    "D": (220, 50, 50),
    "d": (180, 35, 35),
    "L": (61, 143, 74),
    "l": (45, 110, 55),
    "A": (110, 200, 240),
    "a": (70, 160, 210),
    "T": (120, 120, 120),
    "t": (90, 90, 90),
    "M": (160, 130, 95),
    "m": (120, 95, 65),
    "U": (126, 200, 232),
    "u": (184, 228, 245),
    "V": (212, 240, 200),
    "Q": (90, 130, 160),
    "q": (62, 96, 122),
    "I": (168, 118, 72),
    "i": (196, 148, 92),
    "J": (132, 188, 108),
    "j": (96, 156, 82),
    "F": (92, 168, 98),
    "f": (68, 132, 74),
    "Z": (228, 244, 252),
    "z": (200, 228, 240),
}


def render(name, rows, scale=SCALE):
    h = len(rows)
    w = max(len(r) for r in rows)
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = img.load()
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            color = P.get(ch)
            if color:
                px[x, y] = (*color, 255)
    img = img.resize((w * scale, h * scale), Image.NEAREST)
    path = OUT / name
    img.save(path)
    print(f"Wrote {path} ({img.size[0]}x{img.size[1]})")


CRATE = [
    "....KKKKKKKK....",
    "...KNNNNNNNNK...",
    "..KNNYYYYNNNK..",
    ".KNNYrrrrYYNNK.",
    "KNNYrWWrrrYYNNK",
    "KNNYrWWrryYYNNK",
    "KNNYrrrrryYYNNK",
    "KNNYYYYYYYYYNNK",
    "KNNnnnnnnnnnNNK",
    "KNNnWWWWWWWWnNK",
    "KNNnWYYYYYYWnNK",
    "KNNnWYYYYYYWnNK",
    "KNNnWWWWWWWWnNK",
    "KNNnnnnnnnnnNNK",
    "KNNYYYYYYYYYNNK",
    "KNNnnnnnnnnnNNK",
    "KNNnWWWWWWWWnNK",
    "KNNnWYYYYYYWnNK",
    "KNNnWYYYYYYWnNK",
    "KNNnWWWWWWWWnNK",
    "KNNnnnnnnnnnNNK",
    ".KNNYYYYYYYYYNNK.",
    "..KNNNNNNNNNNK..",
    "...KKKKKKKKKK...",
]

BARREL = [
    ".....KKKKK.....",
    "....KRRRRRK....",
    "...KRRrrrRRK...",
    "..KRRrrYYYrrRK.",
    ".KRRrYYYYYYrRRK",
    "KRRrYYYYYYYYrRRK",
    "KRRrYYDYYDYYrRRK",
    "KRRrYYYYYYYYrRRK",
    "KRRrYYYYYYYYrRRK",
    "KRRrYYDYYDYYrRRK",
    "KRRrYYYYYYYYrRRK",
    "KRRrrYYYYYYrrRK",
    "KRRrrrYYYYrrrRK",
    "KRRrrrrYYrrrrRK",
    ".KRRrrrrrrrrRK.",
    "..KRRRRRRRRRK..",
    "...KNNNNNNNNK...",
    "....KNNNNNNK....",
    ".....KKKKKK.....",
]

ROCK = [
    "......KKKK......",
    "....KKTTTTKK....",
    "...KTTttttTTK...",
    "..KTTttWWttTTK..",
    ".KTTtWWGGWWtTTK.",
    "KTTtWGGGGGGWtTTK",
    "KTTtWGGbbGGWtTTK",
    "KTTtWGGGGGGWtTTK",
    "KTTttWWGGWWtTTK",
    "KTTtttWWWWtTTTK",
    ".KTTtttttttTTK.",
    "..KTTTTTTTTTK..",
    "...KKKKKKKKK...",
]

CONE = [
    "......KK......",
    "......KYYK.....",
    ".....KYrrYK....",
    "....KYrrrrYK...",
    "...KYrrYYrrYK..",
    "..KYrrrrrrrrYK.",
    ".KYrrYYYYYYrrYK.",
    "KYrrrrrrrrrrrrYK",
    ".KYYYYYYYYYYYYK.",
    "..KNNNNNNNNNNK..",
    "...KKKKKKKKKK...",
]

GAP_CRACK = [
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLl..KKKK..............KKKK..lLLLLLLLLLL",
    "Ll..KAAAK..............KAAAK..lLLLLLLL",
    "l..KAAAAAK............KAAAAAK..lLLLLLL",
    "l..KAAAAAK............KAAAAAK..lLLLLLL",
    "..KAAAAAAK............KAAAAAAK..lLLLLL",
    "..KAAAAAAK..KKKKKKKK..KAAAAAAK...lLLLL",
    ".KAAAAAAAAK.KAAAAAK.KAAAAAAAAK...lLLL",
    ".KAAAAAAAAK.KAAAAAK.KAAAAAAAAK....lLL",
    "KAAAAAAAAAAKAAAAAAKAAAAAAAAAAK....lL",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK....l",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
]

GAP_BRIDGE = [
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLl..KKKK..............KKKK..lLLLLLLLLLL",
    "Ll..KNNNK..............KNNNK..lLLLLLLL",
    "l..KNNNNNK............KNNNNNK..lLLLLLL",
    "l..KNNNNNK............KNNNNNK..lLLLLLL",
    "..KNNNNNNK..NNNNNNNN..KNNNNNNK..lLLLLL",
    "..KNNNNNNK..NYYYYYN..KNNNNNNK...lLLLL",
    ".KNNYYYYYNN..NYYYYYN..NNYYYYYNNK...lLLL",
    ".KNNYYYYYNN..NYYYYYN..NNYYYYYNNK....lLL",
    "KNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNK....lL",
    "KNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNK....l",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
]

GAP_HOLE = [
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLl..KKKK..............KKKK..lLLLLLLLLLL",
    "Ll..KmmMK..............KmmMK..lLLLLLLL",
    "l..KMMMMMK............KMMMMMK..lLLLLLL",
    "l..KMMMMMK............KMMMMMK..lLLLLLL",
    "..KMMMMMMK..MMMMMM..KMMMMMMK..lLLLLL",
    "..KMMMMMMK..MYYYM..KMMMMMMK...lLLLL",
    ".KMMYYYYMMK.MYYYM.KMMYYYYMMK...lLLL",
    ".KMMYYYYMMK.MYYYM.KMMYYYYMMK....lLL",
    "KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK....lL",
    "KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK....l",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
    "KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK.....",
]

KNIFE_CLASSIC = [
    "......KKKKKKKKKKKKKK......",
    "......KWWSSSSSSSSWWK......",
    "......KWWSSSSSSSSWWK......",
    "..KKSSSSSSSSSSSSSSSSKK..",
    "..KWWSSSSSSSSSSSSSSWWK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KSSSHSSSYSSSHSSSSSSK..",
    "..KSSSSSSSSSSSSSSSSSSK..",
    "..KKSSSSSSSSSSSSSSSSKK..",
    "....KNNNNNNNNNNNNNNK....",
    "....KNNNNNNNNNNNNNNK....",
    "......KNNNNNNNNNNK......",
    "........KKKKKKKK........",
]

KNIFE_CLEAVER = [
    "...KKKKKKKKKKKKKKKKKKKK...",
    "...KWWSSSSSSSSSSSSSSWWK...",
    "...KWWSSSSSSSSSSSSSSWWK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KSSSSHSSSSYSSSSHSSSK...",
    "...KSSSSSSSSSSSSSSSSSSK...",
    "...KKSSSSSSSSSSSSSSSSKK...",
    ".....KNNNNNNNNNNNNNNK.....",
    ".....KNNNNNNNNNNNNNNK.....",
    ".......KNNNNNNNNNNK.......",
    "..........KKKKKKK.........",
]

KNIFE_SHURIKEN = [
    "........KK........",
    ".......KDDK.......",
    "......KDDDDK......",
    ".....KDDSSDDK.....",
    "....KDDSSSSDDK....",
    "...KDDSSHHSSDDK...",
    "..KDDSSHHHHSSDDK..",
    ".KDDSSHHHHHHSSDDK.",
    "KDDSSHHHHHHHHSSDDK",
    ".KDDSSHHHHHHSSDDK.",
    "..KDDSSHHHHSSDDK..",
    "...KDDSSHHSSDDK...",
    "....KDDSSSSDDK....",
    ".....KDDSSDDK.....",
    "......KDDDDK......",
    ".......KDDK.......",
    "........KK........",
]

CLOUD_A = [
    "......ZZZZ......",
    "....ZZHHZZ....",
    "...ZHHHHHHZ...",
    "..ZHHHHHHHHZ..",
    ".ZHHHHHHHHHHZ.",
    "ZHHHHHHHHHHHHZ",
    "ZHHHHHHHHHHHHZ",
    ".ZHHHHHHHHHHZ.",
    "..ZHHHHHHHHZ..",
    "...ZZHHHHZZ...",
    "....ZZZZZZ....",
]

CLOUD_B = [
    "....ZZZZ....",
    "..ZZHHHHZZ..",
    ".ZHHHHHHHHZ.",
    "ZHHHHHHHHHHZ",
    "ZHHHHHHHHHHZ",
    ".ZHHHHHHHHZ.",
    "..ZZHHHHZZ..",
    "....ZZZZ....",
]

CLOUD_C = [
    "..ZZZZZZ..",
    ".ZHHHHHHZ.",
    "ZHHHHHHHHZ",
    "ZHHHHHHHHZ",
    "ZHHHHHHHHZ",
    ".ZHHHHHHZ.",
    "..ZZHHZZ..",
]

HILL = [
    "................................................",
    "..............QQQQQQQQQQQQQQ....................",
    "............QQqqqqqqqqqqQQQQ....................",
    "..........QQq............qQQQ...................",
    "........QQq................qQQQ.................",
    "......QQq..................qQQQ.................",
    "....QQq....................qQQQ.................",
    "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
]

TREE_TALL = [
    ".......KK.......",
    "......KLLK......",
    ".....KLLLLK.....",
    "....KLLLLLLK....",
    "...KLLLLLLLLK...",
    "...KljJJJJjlK...",
    "..KljJJJJJJjlK..",
    "..KljJJJJJJjlK..",
    "...KljJJJJjlK...",
    "....KLLLLLLK....",
    ".....KNNNK......",
    ".....KNNNK......",
    ".....KNNNK......",
    "......KNNK......",
    "......KNNK......",
    ".......KK.......",
]

TREE_SHORT = [
    ".....KK.....",
    "....KLLK....",
    "...KLLLLK...",
    "..KljJJjlK..",
    "..KljJJjlK..",
    "...KLLLLK...",
    "....KNNNK...",
    "....KNNNK...",
    ".....KK.....",
]

BUSH = [
    "..KKKK..",
    ".KLLLLK.",
    "KljJJjlK",
    "KljJJjlK",
    ".KLLLLK.",
    "..KKKK..",
]

GROUND_TILE = [
    "JJJJJJJJJJJJJJJJ",
    "jFFFFFFFFFFFFFFj",
    "jFFLLLLLLLLLLFFj",
    "jFFLllllllllLFFj",
    "jFFLllllllllLFFj",
    "jFFLLLLLLLLLLFFj",
    "jFFFFFFFFFFFFFFj",
    "jFIIIIIIIIIIIIFj",
    "jFIIiiiiiiiiIIFj",
    "jFIIiiiiiiiiIIFj",
    "jFIIIIIIIIIIIIFj",
    "jFFFFFFFFFFFFFFj",
]

SPRITES = [
    ("obstacle-crate.png", CRATE),
    ("obstacle-barrel.png", BARREL),
    ("obstacle-rock.png", ROCK),
    ("obstacle-cone.png", CONE),
    ("gap-crack.png", GAP_CRACK),
    ("gap-bridge.png", GAP_BRIDGE),
    ("gap-hole.png", GAP_HOLE),
    ("knife-classic.png", KNIFE_CLASSIC),
    ("knife-cleaver.png", KNIFE_CLEAVER),
    ("knife-shuriken.png", KNIFE_SHURIKEN),
    ("bg-cloud-a.png", CLOUD_A),
    ("bg-cloud-b.png", CLOUD_B),
    ("bg-cloud-c.png", CLOUD_C),
    ("bg-hill.png", HILL),
    ("bg-tree-tall.png", TREE_TALL),
    ("bg-tree-short.png", TREE_SHORT),
    ("bg-bush.png", BUSH),
    ("bg-ground-tile.png", GROUND_TILE),
]

if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    knife_names = {"knife-classic.png", "knife-cleaver.png", "knife-shuriken.png"}
    for name, rows in SPRITES:
        render(name, rows, scale=KNIFE_SCALE if name in knife_names else SCALE)
