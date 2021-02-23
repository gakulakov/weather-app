export const weatherApi = async (city) => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=krasnodar,RU&key=5c5fe7823c0f43d78798ff8dcdd824cd&include=minutely`)
        const result = await response.json()

        return result
}

export const weatherHoursApi = async (city) => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city},RU&key=5c5fe7823c0f43d78798ff8dcdd824cd&hours=24`)
        const result = await response.json()

        return result
}
