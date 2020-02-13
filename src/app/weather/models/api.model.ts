export interface ILocation {
    title: string,
    location_type: string,
    woeid: number,
    latt_long: string
}

export interface IWeather {
        consolidated_weather: Array<IWeatherForecast>,
        time: string,
        sun_rise: string,
        sun_set: string,
        timezone_name: string,
        parent: IParentLocation,
        sources: Array<IDataSource>,
        title: string,
        location_type: string,
        woeid: number,
        latt_long: string,
        timezone: string
}

export interface IWeatherForecast {
    id: number,
    weather_state_name: string,
    weather_state_abbr: string,
    wind_direction_compass: string,
    created: string,
    applicable_date: string,
    min_temp: number,
    max_temp: number,
    the_temp: number,
    wind_speed: number,
    wind_direction: number,
    air_pressure: number,
    humidity: number,
    visibility: number,
    predictability: number
}

interface IParentLocation {
    title: string,
    location_type: string,
    woeid: number,
    latt_long: string,
}

interface IDataSource {
    title: string,
    slug: string,
    url: string,
    crawl_rate: number
}

export interface IGeoLocation {
    coords: Coordinates,
    timestamp: number
}

interface Coordinates {
    latitude: number,
    longitude: number
    altitude: number
    accuracy: number
    altitudeAccuracy: number
    heading: number
    speed: number
}

