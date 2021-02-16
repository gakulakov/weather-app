export const weatherApi = async (city) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=64a44bf6d1b65cbca94928d15987fedf`)
        const result = await response.json()

        return result
}
