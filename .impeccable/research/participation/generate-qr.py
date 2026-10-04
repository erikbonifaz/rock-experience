from pathlib import Path

from reportlab.graphics import renderSVG
from reportlab.graphics.barcode import createBarcodeDrawing, qr
from reportlab.lib.colors import HexColor

destination = Path(__file__).resolve().parents[3] / "public/images/contact"
destination.mkdir(parents=True, exist_ok=True)
url = "https://rock-experience-ten.vercel.app/arquitectura"

code = qr.QrCodeWidget(
    url,
    barLevel="M",
    barBorder=4,
    barWidth=164,
    barHeight=164,
    barFillColor=HexColor("#101010"),
)
code.draw()
matrix = code.qr.modules
quiet_zone = 4
size = len(matrix) + quiet_zone * 2
segments = []
for row_index, row in enumerate(matrix):
    column = 0
    while column < len(row):
        if not row[column]:
            column += 1
            continue
        start = column
        while column < len(row) and row[column]:
            column += 1
        length = column - start
        segments.append(
            f"M{start + quiet_zone} {row_index + quiet_zone}h{length}v1h-{length}z"
        )

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" width="164" height="164" '
    f'viewBox="0 0 {size} {size}" shape-rendering="crispEdges">'
    f'<path fill="#101010" d="{"".join(segments)}"/></svg>\n'
)
(destination / "architecture-qr.svg").write_text(svg, encoding="utf-8")

barcode = createBarcodeDrawing(
    "Standard39",
    value="ROCK",
    checksum=False,
    humanReadable=False,
    quiet=False,
    barWidth=1,
    barHeight=44,
    barFillColor=HexColor("#101010"),
)
renderSVG.drawToFile(barcode, str(destination / "rock-barcode.svg"))
print(f"QR estático: {url}; nivel M; margen de cuatro módulos.")
print(f"Código de barras decorativo: ROCK. Destino: {destination}")
