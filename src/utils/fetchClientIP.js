const fetchClientIP = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
        throw new Error("Failed to fetch IP address");
    }
    const data = await response.json();
    return data.ip;
};

export default fetchClientIP;
