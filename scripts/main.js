// Methods

async function GetJsonFile(JsonFileName) {
    const response = await fetch(JsonFileName);
    if (response.ok) {
        return response.json();
    }
    else {
        console.error(response.error);
    }
}

console.log(GetJsonFile("https://uma-neo-universe.github.io/uma-rating/data/skills.json"))