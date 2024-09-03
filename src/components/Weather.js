import React, { useState, useEffect } from 'react';

export default function Weather() {
    const [result, setResult] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            const url = 'https://api.weatherstack.com/current?access_key=af8d421eda3d1d46274204c345365570&query=Los Angeles&units=f';
            const options = {
                method: 'GET'
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json(); // Parse response as JSON
                if (data.success === false) {
                    // Handle error from the API response
                    setResult(data.error.info);
                } else {
                    setResult(`${data.current.temperature}°F - ${data.current.weather_descriptions[0]}`);
                }
            } catch (error) {
                console.error(error);
                setResult('Error fetching data');
            }
        };

        fetchWeather();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>Current weather in Los Angeles: <strong>{result}</strong></div>
    );
}
