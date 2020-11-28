export default function _fetch_json(url) {
    let pets = [];
    fetch(url)
        .then((response) => {
            return response.json();
        })
}