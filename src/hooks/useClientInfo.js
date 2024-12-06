import { useEffect, useState } from "react";
import parseUserAgent from "../utils/parseUserAgent";
import fetchClientIP from "../utils/fetchClientIP";

const useClientInfo = () => {
    const [clientInfo, setClientInfo] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const ip = await fetchClientIP();
                const userAgent = parseUserAgent();

                setClientInfo({ ip, userAgent });
            } catch (error) {
                console.error("Error fetching client info:", error);
            }
        };

        fetchInfo();
    }, []);

    return clientInfo;
};

export default useClientInfo;
