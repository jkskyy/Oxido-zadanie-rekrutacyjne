# README

## Wymagania

Aby uruchomić aplikację, na komputerze musi być zainstalowane oprogramowanie Node.js. Można je pobrać i zainstalować ze strony: [Node.js official site](https://nodejs.org/).

## Opis aplikacji

Aplikacja wykonuje automatyczne przetwarzanie tekstu zawartego w pliku tekstowym _Zadanie dla JJunior AI Developera - tresc artykulu.txt_. Korzysta z OpenAI API (model GPT-4), aby na podstawie tego tekstu stworzyć artykuł, który będzie zawierał odpowiednią strukturę HTML. Artykuł nie zawiera głównych znaczników HTML takich jak _< html >_, _< head >_ i _< body >_, a jedynie elementy strukturalne, jak nagłówki, akapity i obrazki.

**Główne funkcjonalności aplikacji:**
- Wczytanie treści z pliku tekstowego.
- Wykorzystanie modelu GPT-4 do generowania artykułu na podstawie załadowanego tekstu.
- Dodanie tagów HTML do struktury artykułu, takich jak _< h1 >_, _< h2 >_, _< p >_, _< img >_, itp.
- Zapisywanie wygenerowanego artykułu w pliku _artykul.html_.
- Proponowanie miejsc, gdzie można dodać obrazy w artykule, z przykładami nazw plików obrazów i opisami (_alt_).

## Działanie aplikacji – krok po kroku

### 1. Przygotowanie środowiska
Zanim uruchomisz aplikację, upewnij się, że na Twoim komputerze zainstalowane jest odpowiednia wersja Node.js. Możesz to zrobić, wpisując w terminalu komendę:

***node -v***

Jeśli Node.js jest poprawnie zainstalowane, zobaczysz numer wersji. Aplikacja została utworzona przy zainstalowanym Node.js w wersji ***23.2.0***.

### 2. Konfiguracja aplikacji
Aplikacja korzysta z OpenAI API, aby wygenerować artykuł. Przed uruchomieniem aplikacji, upewnij się, że masz dostęp do klucza API OpenAI. Klucz ten możesz uzyskać po rejestracji na stronie OpenAI i należy go dodać do zmiennych systemu (***setx OPENAI_API_KEY "Your_api_key_here"***).

### 3. Uruchomienie aplikacji
1. Przejdź do folderu, w którym znajduje się aplikacja.
2. Otwórz konsolę PowerShell w tym folderze. Można to zrobić klikając prawym przyciskiem myszy w folderze i wybierając opcję "Otwórz tutaj okno programu PowerShell" (Shift + PPM).
3. W konsoli wpisz poniższą komendę:

    ***node app.js***

### 4. Wczytanie pliku tekstowego
Aplikacja zacznie działać i pierwszym krokiem będzie wczytanie zawartości pliku _Zadanie dla JJunior AI Developera - tresc artykulu.txt_. Program otworzy plik i załaduje tekst, który będzie podstawą do wygenerowania artykułu.

- Jeśli plik tekstowy nie istnieje lub wystąpi problem z jego odczytem, aplikacja zgłosi błąd w konsoli, np. _Błąd podczas wczytywania pliku_.

### 5. Przesłanie danych do OpenAI
Po załadowaniu danych aplikacja przekaże tekst do modelu GPT-4, który na jego podstawie stworzy artykuł. Model GPT-4 stworzy treść, używając odpowiednich tagów HTML. 

### 6. Generowanie artykułu
Aplikacja otrzyma odpowiedź od OpenAI API. Artykuł zostanie wygenerowany bez tagów _< html >_, _< head >_ i _< body >_. Znajdą się w nim tylko tagi strukturalne, takie jak:
- _< h1 >_, _< h2 >_ dla nagłówków,
- _< p >_ dla akapitów,
- _< img >_ w miejscach sugerowanych do umieszczenia zdjęć.

### 7. Zapisanie artykułu
Po wygenerowaniu artykułu, aplikacja zapisze go do pliku _artykul.html_. Jeśli zapis zostanie zakończony pomyślnie, w konsoli pojawi się komunikat:


***Odpowiedź została zapisana do pliku artykul.html***


Jeśli wystąpi błąd podczas zapisywania, aplikacja wyświetli stosowny komunikat błędu.

### 8. Sprawdzenie wyników
Po zakończeniu działania aplikacji w folderze, w którym uruchomiłeś program, pojawi się plik _artykul.html_. Możesz otworzyć go w dowolnej przeglądarce internetowej, aby zobaczyć wygenerowany artykuł.

## Uwagi

- Aplikacja wymaga dostępu do API OpenAI, dlatego należy upewnić się, że masz prawidłowy klucz API skonfigurowany w aplikacji. Można to zrobić poprzez ustawienie odpowiednich zmiennych środowiskowych.
- Upewnij się, że plik _Zadanie dla JJunior AI Developera - tresc artykulu.txt_ znajduje się w tym samym folderze co aplikacja lub zmodyfikuj odpowiednią ścieżkę w kodzie, aby wskazywała na właściwy plik.
- Jeżeli podczas próby uruchomienia aplikacji pojawia się błąd lub aplikacja nie działa prawidłowo upewnij się że na twoim komputerze zainstalowana jest aplikacja Node.js i czy jej wersja odpowiada wersji w której aplikacja została przygotowana (***23.2.0***)