// Methods

async function GetJsonFile(JsonFileName) {
    const response = await fetch(JsonFileName);
    if (!response.ok) {
        return response.json();
    }
}

console.log(GetJsonFile("data/skill_data.json"))