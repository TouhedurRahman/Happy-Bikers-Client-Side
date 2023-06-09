import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'https://happy-bikers-server-site.vercel.app/bikes';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services, setServices];
};

export default useServices;