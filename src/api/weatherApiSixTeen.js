export const weatherApiSixTeen = async (city) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},RU&key=5c5fe7823c0f43d78798ff8dcdd824cd`)
    const result = await response.json()

    return result
}