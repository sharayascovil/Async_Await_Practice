// Async / Await / Fetch
    async function fetchCityName() {
        const res = await fetch
        ('https://geocode.xyz/seattle?json=1');

        const data = await res.json();

        console.log(data);
    }

    fetchCityName();
    

