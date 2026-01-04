// Methods

let jsonData = null;

async function getJsonFile(JsonFileName) {
    const response = await fetch(JsonFileName);
    if (response.ok) {
        return response.json();
    }
    else {
        console.error(response.error);
    }
}

async function loadData() {
    jsonData = await getJsonFile("https://uma-neo-universe.github.io/uma-rating/data/skills.json");
}

loadData();