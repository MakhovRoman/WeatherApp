export type TCurrent = Record<string, number | string | TCurrent>;

export type WrapperContent = {
  className: string[],
}

export type TWeatherData = {
  current: Record<string, string |number | Record<string, number>>,
  forecast: Record<string, unknown>[],
  location: Record<string, string | number>
}
