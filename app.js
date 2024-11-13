import OpenAI from "openai";
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const filePath = join(__dirname, 'Zadanie dla JJunior AI Developera - tresc artykulu.txt');

let data = "";

async function loadFile() {
    try {
        data = await readFile(filePath, 'utf-8');
    } catch (err) {
        console.error('Błąd podczas wczytywania pliku:', err);
    }
}

await loadFile();
const prompt = 'Stwórz artykuł na podstawie podanego tekstu, użyj odpowiednich tagów HTML do stworzenia struktury strony bez dołączania pod żadnym pozorem głównych znaczników HTML (bez body, bez html, bez head). Nie zawieraj również kodu CSS i Javascript, jedynie treść i tagi. Zaproponuj również miejsca w artykule w których odpowiednie wydawało by się wstawienie zdjęcia używając znaczników <img> z atrybutem src w którym podasz przykładową nazwę pliku dla tego obrazka, dodaj również atrybut alt w którym zawrzesz dokładny prompt do wygenerowania danego obrazka. Odpowiedź powinna zostać uformowana jako test bez stosowania markdown. Tekst nad którym będziesz pracować: ';
const openai = new OpenAI();
const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {"role": "user", "content": prompt + '"' + data + '"'}
    ]
});
console.log(typeof(completion.choices[0].message));
let response = completion.choices[0].message.content;
async function saveToFile() {
    try {
        await writeFile('artykul.html', response, 'utf-8');
        console.log("Odpowiedź została zapisana do pliku artykul.html");
    } catch (error) {
        console.error("Błąd podczas zapisywania pliku:", error);
    }
}

saveToFile();