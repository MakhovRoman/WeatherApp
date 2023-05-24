export type TWeatherForecastData = Record<string, number | string | TWeatherForecastData>;

export type WrapperContent = {
  className: string[],
}

export type TWeatherData = {
  current: EmptybleObject<TWeatherForecastData>,
  forecast: EmptybleObject<Record<string, unknown>[]>,
  location: EmptybleObject<Record<string, string | number>>
}

declare global {
  export type EmptybleObject<T> = T | object;
}
