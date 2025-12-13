import {type FontData, fontsExtractor} from '_scripts/fontsExtractor'
import {type ColorData, colorsExtractor} from '_scripts/colorsExtractor'
import { type ImageData, imagesExtractor } from '_scripts/imagesExtractor'

export type Units = {
  images: ImageData[]
  colors: ColorData[]
  fonts: FontData[]
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'EXTRACT_UNITS') {
    sendResponse({
      images: imagesExtractor(),
      colors: colorsExtractor(),
      fonts: fontsExtractor(),
    } as Units)
  }
})