import { useCallback, useState, useEffect } from "react";


export default function useCurrencyHook(currency) {
    const [data,setData] = useState({})
    // useState(async ()=>{
    //     const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    //     const resultData = await response.json()
    //     console.log(resultData)
    //     setData(resultData[currency])
    // },[currency])
    // return data;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                const resultData = await response.json();
                console.log(resultData); // Debugging: Check the fetched data
                setData(resultData[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        if (currency) {
            fetchData();
        }
    }, [currency]); // Re-run effect when `currency` changes

    return data;
}



