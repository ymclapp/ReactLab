import { useMemo, useEffect, useState } from 'react'

export default function useFetch(url) {
    //Store fetched data here
    const [loading, setLoading] = useState(true);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [toDoItems, setToDoItems] = useState(null);

    useEffect(() => {
        //Only fetch if actually loading
        if(!shouldFetch) return;

        async function fetchData() {

            let response = await fetch(url);
            let body = await response.json();

            //TODO: error handling!
            setToDoItems(body);
            setLoading(false);
        };

        setShouldFetch(false);
        fetchData();
    }, [url, shouldFetch]) //Only re-fetch when url changes

    return useMemo(() => ({
        toDoItems,
        isLoading:  loading,
        reload:  () => setShouldFetch(true),
    }), [toDoItems, loading]);
}