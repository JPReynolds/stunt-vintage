export const getMockData = () => {
    return fetch("MOCK_DATA.json", { headers: { "Content-Type": "application/json", "Accept": "application/json"} })
        .then(res => {
            return res.json();
        })
        .then(myJson => {
            return myJson;
        })
}