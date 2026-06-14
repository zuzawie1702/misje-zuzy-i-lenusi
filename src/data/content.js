export const TASKS = [
  { id:"read_zuza", who:"zuza", area:"Głowa", title:"Czytanie książki", frequency:"5x/tydz.", xp:10, description:"8 minut. Krótko, bez presji." },
  { id:"read_lena", who:"lena", area:"Głowa", title:"Czytanie książki", frequency:"5x/tydz.", xp:10, description:"8 minut. Może być książka, komiks albo ciekawy tekst." },
  { id:"exercise_zuza", who:"zuza", area:"Ciało", title:"Ćwiczenia jeździeckie", frequency:"5x/tydz.", xp:20, description:"20 minut: dosiad, core, biodra, balans." },
  { id:"exercise_lena", who:"lena", area:"Ciało", title:"Ćwiczenia jeździeckie", frequency:"5x/tydz.", xp:20, description:"20 minut: dosiad, core, biodra, balans." },
  { id:"stretch_zuza", who:"zuza", area:"Ciało", title:"Rozciąganie", frequency:"5x/tydz.", xp:12, description:"Mobilność bioder, pleców i nóg." },
  { id:"stretch_lena", who:"lena", area:"Ciało", title:"Rozciąganie", frequency:"5x/tydz.", xp:12, description:"Mobilność bioder, pleców i nóg." },
  { id:"roll_zuza", who:"zuza", area:"Ciało", title:"Rolowanie na macie", frequency:"5x/tydz.", xp:15, description:"Łydki, uda, pośladki, plecy." },
  { id:"roll_lena", who:"lena", area:"Ciało", title:"Rolowanie na macie", frequency:"5x/tydz.", xp:15, description:"Łydki, uda, pośladki, plecy." },
  { id:"learn_zuza", who:"zuza", area:"Głowa", title:"Nauka Zuzy", frequency:"3x/tydz.", xp:20, description:"Uzależnienia ICD-11, psychodeliki, Ogrodnik 2.0, szachy albo artykuł zawodowy." },
  { id:"learn_lena", who:"lena", area:"Głowa", title:"Nauka Lenusi", frequency:"3x/tydz.", xp:20, description:"Weterynaria, matematyka, szachy, język obcy." },
  { id:"puzzle", who:"team", area:"Głowa", title:"Łamigłówka", frequency:"3x/tydz.", xp:15, description:"Sudoku, szachy, logika, nonogram, memory." },
  { id:"emotions", who:"team", area:"Relacje", title:"Misja relacji", frequency:"2-3x/tydz.", xp:25, description:"Rozmowa bez telefonu, wdzięczność, nazwanie emocji." },
  { id:"dishwasher", who:"rotation", area:"Dom", title:"Zmywarka", frequency:"2x/tydz.", xp:15, description:"Przydział sprawiedliwy według historii." },
  { id:"trash", who:"rotation", area:"Dom", title:"Śmieci", frequency:"2x/tydz.", xp:15, description:"Przydział sprawiedliwy według historii." },
  { id:"laundry", who:"rotation", area:"Dom", title:"Pranie", frequency:"1x/tydz.", xp:25, description:"Lub częściej, jeśli trzeba." },
  { id:"zbyszek", who:"rotation", area:"Dom", title:"Odkurzanie Zbyszkiem", frequency:"1x/tydz.", xp:20, description:"Robot Zbyszek." },
  { id:"irena", who:"rotation", area:"Dom", title:"Odkurzanie Ireną", frequency:"codziennie", xp:10, description:"Robot Irena." },
  { id:"bathroom", who:"rotation", area:"Dom", title:"Sprzątanie łazienki", frequency:"1x/tydz.", xp:35, description:"Małymi krokami." },
  { id:"kitchen", who:"rotation", area:"Dom", title:"Sprzątanie kuchni", frequency:"1x/tydz.", xp:35, description:"Małymi krokami." },
  { id:"living", who:"rotation", area:"Dom", title:"Sprzątanie salonu", frequency:"1x/tydz.", xp:30, description:"Małymi krokami." },
  { id:"together", who:"team", area:"Wspólne", title:"Wspólna misja 15 minut", frequency:"dowolnie", xp:35, description:"Kuchnia, salon, spacer, herbata albo planszówka." }
];
export const WORKOUTS = [
  { name:"Stabilny dosiad", items:[["Deska","Łokcie pod barkami. Napnij brzuch i pośladki. Ciało jak prosta deska. 3 x 30 sekund.","🤸‍♀️——"],["Most biodrowy","Leżenie na plecach. Stopy na ziemi. Unieś biodra, napnij pośladki, opuść powoli. 3 x 15.","🛌⬆️⬇️"],["Przysiad przy ścianie","Plecy do ściany, kolana około 90 stopni. Oddychaj spokojnie. 3 x 30 sekund.","🧍‍♀️🧱"]]},
  { name:"Balans jeźdźca", items:[["Bird Dog","Na czworakach wyprostuj przeciwną rękę i nogę. Utrzymaj 2 sekundy. 3 x 10.","🐕➡️"],["Dead Bug","Na plecach, ręce i nogi w górze. Opuszczaj przeciwną rękę i nogę. Brzuch napięty. 3 x 10.","🐞↘️"],["Stanie na jednej nodze","Patrz w jeden punkt. Potem spróbuj z zamkniętymi oczami. 3 x 30 sekund.","🦩"]]},
  { name:"Biodra i pośladki", items:[["Clamshell","Leżenie bokiem, kolana ugięte. Otwieraj górne kolano jak muszlę. 3 x 15.","🐚"],["Wykrok biodrowy","Jedna noga z przodu, druga z tyłu. Zejdź nisko, poczuj przód biodra. 2 x 60 sekund.","🦵"],["Most jednonóż","Jak most biodrowy, ale jedna noga uniesiona. Powoli i stabilnie. 3 x 8 na stronę.","🌉"]]}
];
export const LESSONS = {
  lena: { Weterynaria: ["Koń nie potrafi wymiotować, dlatego problemy trawienne mogą być bardzo poważne. Misja: wymień 2 objawy, które mogłyby zaniepokoić opiekuna.","Uszy konia dużo mówią o emocjach. Uszy do przodu często oznaczają zainteresowanie, a położone uszy mogą oznaczać złość lub dyskomfort.","Kolka u konia to objaw bólu brzucha, a nie jedna konkretna choroba. Misja: zapamiętaj 3 zachowania, które mogą sugerować kolkę."], Szachy: ["Widełki to atak jedną figurą na dwie figury przeciwnika naraz. Misja: znajdź przykład widełek skoczkiem.","Roszada pomaga schować króla i połączyć wieże. Misja: przypomnij sobie 3 warunki roszady."], Matematyka: ["Koń waży 500 kg. 2% masy ciała to 10 kg. Policz 2% z 450 kg."], "Język obcy": ["Wybierz 5 słówek o zwierzętach w języku obcym i powiedz je na głos."] },
  zuza: { "Uzależnienia ICD-11": ["ICD-11 rozdziela zaburzenia związane z używaniem substancji i zaburzenia wynikające z zachowań nałogowych. Misja: zapisz po jednym przykładzie.","W pracy z uzależnieniem ważne jest rozróżnienie używania ryzykownego, szkodliwego wzorca i uzależnienia. Misja: zanotuj po jednym przykładzie."], Psychodeliki: ["Psychodeliki są badane w kontrolowanych warunkach klinicznych, m.in. przy depresji, PTSD i uzależnieniach. Misja: zapisz jedno pytanie badawcze.","W badaniach nad psychodelikami ważne są set, setting, kwalifikacja pacjenta i integracja doświadczenia. Misja: wypisz 3 ryzyka kliniczne."], "Ogrodnik 2.0": ["Ściółkowanie ogranicza parowanie wody, wspiera mikrożycie gleby i zmniejsza presję chwastów. Misja: znajdź jedno miejsce na ściółkę.","Ogród przyjazny zapylaczom ma rośliny kwitnące w różnych miesiącach. Misja: wybierz 3 rośliny na różne pory sezonu."], Szachy: ["Rozwój figur w debiucie oznacza szybkie wprowadzenie lekkich figur do gry. Misja: rozegraj 10 minut i zwróć uwagę na centrum."] }
};
