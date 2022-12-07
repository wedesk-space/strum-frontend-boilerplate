/**
 * root단 style property 세팅
 * @param  {string} key
 * @param  {string} value
 */
export function setThemeProperty(key: string, value: string) {
  document.documentElement.style.setProperty(key, value)
}

/**
 * hex to rgb & set property
 *  - tailwind의 속성별 opacity를 적용시키기 위해서 rgba를 사용함
 *  - rgba에 사용할 rgb 코드로 변환해준다.
 * @param  {string} key
 * @param  {string} color
 */
export function setThemeColorProperty(key: string, color: string) {
  const rgb = hexToRgb(color)
  setThemeProperty(key + '-rgb', rgb)
  setThemeProperty(key, color)
}

function hexToRgb(hex: string) {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map((x) => parseInt(x, 16)).join(',')
}
