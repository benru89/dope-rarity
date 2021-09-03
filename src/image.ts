import type { ColorFn } from "./types";

import { rarityColor, rarityDescription } from "./main";

const SVG_START =
  '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">' +
  '<style type="text/css">' +
  '@font-face {' +
  'font-family: "TI83";' +
  'src: url(data:application/font-woff;base64,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);' +
  '}' +
  '</style>' +
  '<style>' +
  'text { font-family: "TI83"; font-size: 10px; }' +
  '</style>' +
  '<rect width="100%" height="100%" fill="black" />' +
  '<rect x="5" y="5" width="340" height="340" style="stroke:white; stroke-width:1;" />' +
  '<rect x="5" y="7" width="340" height="36" style="stroke:white; stroke-width:1;" />' +
  '<rect x="5" y="45" width="340" height="299" style="stroke:white; stroke-width:1;" />' +
  '<text x="123" y="30" fill="#AF87D7">DOPE WARS LOOT</text>' +
  '<text x="77" y="30" fill="#00AFAF">* * *</text>' +
  '<text x="235" y="30" fill="#00AFAF">* * *</text>' +
  '<text x="75" y="70" fill="#808080" font-size="8px" text-anchor="end">Weapon</text>' +
  '<text x="75" y="101" fill="#808080" font-size="8px" text-anchor="end">Vehicle</text>' +
  '<text x="75" y="132" fill="#808080" font-size="8px" text-anchor="end">Drug</text>' +
  '<text x="75" y="163" fill="#808080" font-size="8px" text-anchor="end">Clothes</text>' +
  '<text x="75" y="194" fill="#808080" font-size="8px" text-anchor="end">Hands</text>' +
  '<text x="75" y="225" fill="#808080" font-size="8px" text-anchor="end">Shoes</text>' +
  '<text x="75" y="256" fill="#808080" font-size="8px" text-anchor="end">Neck</text>' +
  '<text x="75" y="287" fill="#808080" font-size="8px" text-anchor="end">Ring</text>' +
  '<text x="75" y="318" fill="#808080" font-size="8px" text-anchor="end">Waist</text>';
const SVG_END = "</svg>";

export function svgFromItems(
  items: string[],
  {
    colorFn,
    displayLevels = false,
  }: {
    colorFn?: ColorFn;
    displayLevels?: boolean;
  } = {}
) {
  items = [items[6], items[8], items[7], items[0], items[2], items[1], items[3], items[4], items[5]]

  if (items.length !== 9) {
    throw new Error("A bag should contain exactly 9 items");
  }

  let svg = SVG_START;
  let index = 0;
  while (items.length) {
    const item = items.shift()

    const level = displayLevels
      ? ` (${rarityDescription(item).slice(0, 1)})`
      : "";
    const color = rarityColor(item, { colorFn });

    const yOffset = 40 + (31 * (index + 1))
    if (item[0] === `"`) {
      const offset = item.substr(1).indexOf('"') + 2
      svg += (
        `<text x="85" y="${yOffset}" fill="#FFAF00">` + item.substr(0, offset) + `</text>`
      );
      svg += (
        `<text x="85" y="${yOffset + 15}" fill="${color}">` + item.substr(offset) + level + `</text>`
      );
    } else {
      svg += (
        `<text x="85" y="${yOffset}" fill="${color}">` + item + level + `</text>`
      );
    }

    index++
  }

  return svg + SVG_END
}

export function svgDataUri(svg: string): string {
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

const MATCH_TEXT_RE = /<text[^>]+\>([^<]+)<\/text>/;

export function itemsFromSvg(svg: string) {
  if (!svg.startsWith("<svg")) {
    throw new Error("The svg paramater doesn’t seem to be an SVG");
  }

  let matches: null | string[];
  const items = [];
  for (let i = 0; i < 9; i++) {
    matches = svg.match(MATCH_TEXT_RE);
    if (!matches) {
      throw new Error(
        "Error when parsing the SVG: couldn’t find the next item"
      );
    }
    items.push(matches[1]);
    svg = svg.slice(svg.indexOf(matches[0]) + matches[0].length);
  }
  return items;
}

export function isUri(data: string) {
  return /^(?:https?|data)\:/.test(data);
}

export function rarityImageFromItems(
  items: string[],
  {
    colorFn,
    displayLevels = false,
  }: { colorFn?: ColorFn; displayLevels?: boolean } = {}
): string {
  return svgDataUri(svgFromItems(items, { colorFn, displayLevels }));
}

export async function rarityImage(
  svgOrSvgUriOrItems: string | string[],
  {
    colorFn,
    displayLevels = false,
  }: { colorFn?: ColorFn; displayLevels?: boolean } = {}
): Promise<string> {
  if (Array.isArray(svgOrSvgUriOrItems)) {
    return rarityImageFromItems(svgOrSvgUriOrItems);
  }

  const svg = isUri(svgOrSvgUriOrItems)
    ? await fetch(svgOrSvgUriOrItems).then((res) => res.text())
    : svgOrSvgUriOrItems;

  if (!svg.startsWith("<svg")) {
    throw new Error(
      "The resource doesn’t seem to be an SVG or a URL pointing to an SVG"
    );
  }

  return rarityImageFromItems(itemsFromSvg(svg), { colorFn, displayLevels });
}