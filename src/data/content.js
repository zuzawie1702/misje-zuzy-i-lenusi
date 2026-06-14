
export const FAMILY_EVENTS = [
  { id:"arya-birthday", date:"02-03", title:"Urodziny Aryi", icon:"🐕", bonus:"Misje wspólne i opieka nad stadem mają dziś bonus." },
  { id:"zuza-birthday", date:"02-17", title:"Urodziny Zuzy", icon:"🐉", bonus:"Smok Zuzy świętuje. Dzień bonusowy!" },
  { id:"coco-birthday", date:"04-11", title:"Urodziny Coco", icon:"🐕", bonus:"Misje ruchowe mają dziś specjalną moc." },
  { id:"grafit-birthday", date:"04-18", title:"Urodziny Grafita", icon:"🐴", bonus:"Dzień odwagi i jeździeckich wyzwań." },
  { id:"lily-birthday", date:"06-01", title:"Urodziny Lily", icon:"🐕", bonus:"Relacje, emocje i troska są dziś szczególnie ważne." },
  { id:"gaja-birthday", date:"09-23", title:"Urodziny Gai", icon:"🐴", bonus:"Dzień równowagi, spokoju i rozciągania." },
  { id:"lena-birthday", date:"09-27", title:"Urodziny Lenusi", icon:"🦊", bonus:"Lisek Lenusi świętuje. Dzień bonusowy!" },
  { id:"cats-birthday", date:"12-13", title:"Urodziny kotów: Bagheera, Darwin i Gumball", icon:"🐱", bonus:"Kocie święto nauki, ciekawości i łamigłówek." }
];

export const REAL_ANIMALS = [
  { id:"arya", name:"Arya", species:"pies", sex:"samica", icon:"🐕", traits:["odwaga","współpraca","opieka"] },
  { id:"lily", name:"Lily", species:"pies", sex:"samica", icon:"🐕", traits:["spokój","relacje","emocje"] },
  { id:"coco", name:"Coco", species:"pies", sex:"samiec", icon:"🐕", traits:["ruch","energia","spacer"] },
  { id:"bagheera", name:"Bagheera", species:"kot", sex:"samiec", icon:"🐈‍⬛", traits:["spokój","obserwacja","cisza"] },
  { id:"darwin", name:"Darwin", species:"kot", sex:"samiec", icon:"🐈", traits:["nauka","ciekawość","logika"] },
  { id:"gumball", name:"Gumball", species:"kot", sex:"samiec", icon:"🐈", traits:["zabawa","niespodzianki","chaos"] },
  { id:"gaja", name:"Gaja", species:"koń", sex:"samica", icon:"🐴", traits:["równowaga","uważność","dosiad"] },
  { id:"grafit", name:"Grafit", species:"koń", sex:"samiec", icon:"🐴", traits:["odwaga","wyzwania","siła"] }
];

export const PETS = [
  { icon:"🐉", name:"Smok", unlock:0 },
  { icon:"🦊", name:"Lis", unlock:0 },
  { icon:"🐴", name:"Koń", unlock:0 },
  { icon:"🐱", name:"Kot", unlock:0 },
  { icon:"🐶", name:"Pies", unlock:0 },
  { icon:"🦉", name:"Sowa", unlock:100 },
  { icon:"🐺", name:"Wilk", unlock:200 },
  { icon:"🐼", name:"Panda", unlock:300 },
  { icon:"🐢", name:"Żółw", unlock:400 },
  { icon:"🦄", name:"Jednorożec", unlock:700 },
  { icon:"🦋", name:"Motyl", unlock:900 },
  { icon:"🐦‍🔥", name:"Feniks", unlock:1200 }
];

export const THEMES = {
  zuza:[
    { id:"amethyst", name:"Ametystowy", color:"#8b5cf6" },
    { id:"dragon", name:"Smoczy fiolet", color:"#7c3aed" },
    { id:"forest", name:"Leśna zieleń", color:"#16a34a" },
    { id:"night", name:"Nocne niebo", color:"#312e81" }
  ],
  lena:[
    { id:"pink", name:"Pastelowy róż", color:"#ec4899" },
    { id:"cherry", name:"Kwiat wiśni", color:"#f472b6" },
    { id:"rainbow", name:"Tęczowy", color:"#f97316" },
    { id:"fox", name:"Lisowy pomarańcz", color:"#fb923c" }
  ]
};

export const WEEKLY_REWARDS = [
  { name:"Wspólny film", xp:350, icon:"🎬" },
  { name:"Pizza", xp:500, icon:"🍕" },
  { name:"Kino", xp:800, icon:"🎥" },
  { name:"Restauracja", xp:1000, icon:"🍽️" },
  { name:"Park trampolin", xp:1300, icon:"🦘" }
];

export const TASKS = [
  { id:"read_zuza", who:"zuza", area:"Głowa", title:"Czytanie książki", frequency:"5x/tydz.", xp:10, description:"8 minut. Krótko, bez presji." },
  { id:"read_lena", who:"lena", area:"Głowa", title:"Czytanie książki", frequency:"5x/tydz.", xp:10, description:"8 minut. Może być książka, komiks albo ciekawy tekst." },
  { id:"exercise_zuza", who:"zuza", area:"Ciało", title:"Ćwiczenia jeździeckie", frequency:"5x/tydz.", xp:20, description:"20 minut: dosiad, core, biodra, balans." },
  { id:"exercise_lena", who:"lena", area:"Ciało", title:"Ćwiczenia jeździeckie", frequency:"5x/tydz.", xp:20, description:"20 minut: dosiad, core, biodra, balans." },
  { id:"stretch_zuza", who:"zuza", area:"Ciało", title:"Rozciąganie", frequency:"5x/tydz.", xp:12, description:"Mobilność bioder, pleców i nóg." },
  { id:"stretch_lena", who:"lena", area:"Ciało", title:"Rozciąganie", frequency:"5x/tydz.", xp:12, description:"Mobilność bioder, pleców i nóg." },
  { id:"roll_zuza", who:"zuza", area:"Ciało", title:"Rolowanie na macie", frequency:"5x/tydz.", xp:15, description:"Łydki, uda, pośladki, plecy." },
  { id:"roll_lena", who:"lena", area:"Ciało", title:"Rolowanie na macie", frequency:"5x/tydz.", xp:15, description:"Łydki, uda, pośladki, plecy." },
  { id:"learn_zuza", who:"zuza", area:"Głowa", title:"Nauka Zuzy", frequency:"3x/tydz.", xp:20, description:"Uzależnienia ICD-11, psychodeliki, Ogrodnik 2.0, angielski, szachy albo artykuł." },
  { id:"learn_lena", who:"lena", area:"Głowa", title:"Nauka Lenusi", frequency:"3x/tydz.", xp:20, description:"Weterynaria, matematyka, szachy, język obcy." },
  { id:"puzzle_zuza", who:"zuza", area:"Głowa", title:"Łamigłówka Zuzy", frequency:"3x/tydz.", xp:15, description:"Szachy, logika, sudoku, zagadka terapeutyczna albo ogrodnicza." },
  { id:"puzzle_lena", who:"lena", area:"Głowa", title:"Łamigłówka Lenusi", frequency:"3x/tydz.", xp:15, description:"Sudoku, szachy, logika, nonogram, memory." },
  { id:"emotions", who:"team", area:"Relacje", title:"Misja relacji", frequency:"2-3x/tydz.", xp:25, description:"Rozmowa bez telefonu, wdzięczność, nazwanie emocji." },
  { id:"dishwasher", who:"rotation", area:"Dom", title:"Zmywarka", frequency:"2x/tydz.", xp:15, description:"Przydział sprawiedliwy według tygodnia." },
  { id:"trash", who:"rotation", area:"Dom", title:"Śmieci", frequency:"2x/tydz.", xp:15, description:"Przydział sprawiedliwy według tygodnia." },
  { id:"laundry", who:"rotation", area:"Dom", title:"Pranie", frequency:"1x/tydz.", xp:25, description:"Lub częściej, jeśli trzeba." },
  { id:"zbyszek", who:"rotation", area:"Dom", title:"Odkurzanie Zbyszkiem", frequency:"1x/tydz.", xp:20, description:"Robot Zbyszek." },
  { id:"irena", who:"rotation", area:"Dom", title:"Odkurzanie Ireną", frequency:"codziennie", xp:10, description:"Robot Irena." },
  { id:"bathroom", who:"rotation", area:"Dom", title:"Sprzątanie łazienki", frequency:"1x/tydz.", xp:40, description:"Większy obowiązek, dlatego daje więcej XP." },
  { id:"kitchen", who:"rotation", area:"Dom", title:"Sprzątanie kuchni", frequency:"1x/tydz.", xp:35, description:"Małymi krokami." },
  { id:"living", who:"rotation", area:"Dom", title:"Sprzątanie salonu", frequency:"1x/tydz.", xp:30, description:"Małymi krokami." },
  { id:"animal_water", who:"team", area:"Zwierzęta", title:"Sprawdzenie wody zwierząt", frequency:"codziennie", xp:10, description:"Psy, koty i konie są częścią stada." },
  { id:"animal_observe", who:"team", area:"Zwierzęta", title:"Obserwacja zwierzęcia", frequency:"dowolnie", xp:12, description:"Wybierz psa, kota lub konia i obserwuj zachowanie przez 3 minuty." },
  { id:"animal_play", who:"team", area:"Zwierzęta", title:"Zabawa albo kontakt ze zwierzakiem", frequency:"dowolnie", xp:12, description:"Krótka, spokojna interakcja: zabawa, głaskanie, obecność." },
  { id:"together", who:"team", area:"Wspólne", title:"Wspólna misja 15 minut", frequency:"dowolnie", xp:35, description:"Kuchnia, salon, spacer, herbata albo planszówka." }
];

export const WORKOUTS = [
  { name:"Stabilny dosiad", items:[
    ["Deska", "Łokcie pod barkami. Napnij brzuch i pośladki. Ciało jak prosta deska. 3 x 30 sekund.", "🤸‍♀️——"],
    ["Most biodrowy", "Leżenie na plecach. Stopy na ziemi. Unieś biodra, napnij pośladki, opuść powoli. 3 x 15.", "🛌⬆️⬇️"],
    ["Przysiad przy ścianie", "Plecy do ściany, kolana około 90 stopni. Oddychaj spokojnie. 3 x 30 sekund.", "🧍‍♀️🧱"]
  ]},
  { name:"Balans jeźdźca", items:[
    ["Bird Dog", "Na czworakach wyprostuj przeciwną rękę i nogę. Utrzymaj 2 sekundy. 3 x 10.", "🐕➡️"],
    ["Dead Bug", "Na plecach, ręce i nogi w górze. Opuszczaj przeciwną rękę i nogę. Brzuch napięty. 3 x 10.", "🐞↘️"],
    ["Stanie na jednej nodze", "Patrz w jeden punkt. Potem spróbuj z zamkniętymi oczami. 3 x 30 sekund.", "🦩"]
  ]},
  { name:"Biodra i pośladki", items:[
    ["Clamshell", "Leżenie bokiem, kolana ugięte. Otwieraj górne kolano jak muszlę. 3 x 15.", "🐚"],
    ["Wykrok biodrowy", "Jedna noga z przodu, druga z tyłu. Zejdź nisko, poczuj przód biodra. 2 x 60 sekund.", "🦵"],
    ["Most jednonóż", "Jak most biodrowy, ale jedna noga uniesiona. Powoli i stabilnie. 3 x 8 na stronę.", "🌉"]
  ]}
];

export const LESSONS = {
  lena: {
    "Weterynaria": [
      {
        title:"Jak rozpoznać, że pies może czuć ból?",
        text:"Pies nie zawsze piszczy, gdy coś go boli. Czasem ból widać po zachowaniu: pies jest cichszy, nie chce jeść, unika dotyku, liże jedno miejsce, kuleje albo chowa się.",
        why:"Szybkie zauważenie bólu pomaga wcześniej skonsultować się z weterynarzem.",
        example:"Coco zwykle chętnie się rusza, a dziś nie chce wstać i liże łapę. To sygnał do obserwacji.",
        task:"Wymień 3 zachowania psa, które mogą oznaczać ból.",
        quiz:{ q:"Co jest najważniejsze przy ocenie bólu u psa?", options:["Czy pies ma ładną sierść","Zmiana normalnego zachowania","Czy pies lubi smakołyki"], answer:1, explain:"Zmiana normalnego zachowania często jest najważniejszym sygnałem, że coś może być nie tak."}
      },
      {
        title:"Koty i stres — subtelne sygnały",
        text:"Koty często pokazują stres delikatniej niż psy. Mogą się chować, unikać kontaktu, przestać się bawić, nadmiernie się wylizywać albo załatwiać poza kuwetą.",
        why:"Stres u kota może wpływać na zdrowie, jedzenie, sen i relacje z ludźmi.",
        example:"Bagheera zwykle śpi na kanapie, ale od dwóch dni siedzi pod łóżkiem. Warto sprawdzić, czy coś się zmieniło.",
        task:"Wybierz jednego kota i przez 3 minuty obserwuj, czy wygląda na rozluźnionego czy napiętego.",
        quiz:{ q:"Który sygnał może wskazywać na stres u kota?", options:["Ukrywanie się częściej niż zwykle","Spanie zawsze w tym samym miejscu","Mrugnięcie raz"], answer:0, explain:"Częstsze ukrywanie się może być sygnałem stresu lub dyskomfortu."}
      },
      {
        title:"Dlaczego koń nie wymiotuje?",
        text:"Koń ma bardzo silny mechanizm między przełykiem a żołądkiem, który utrudnia cofanie treści pokarmowej. Dlatego problemy trawienne mogą być u konia szczególnie poważne.",
        why:"Ból brzucha u konia może wymagać szybkiej reakcji.",
        example:"Koń patrzy na brzuch, tarza się, poci i nie chce jeść. To może być sygnał kolki.",
        task:"Zapisz 3 objawy, które mogą zaniepokoić opiekuna konia.",
        quiz:{ q:"Co może być objawem kolki u konia?", options:["Tarzanie się i patrzenie na brzuch","Machanie ogonem przy muchach","Spokojne jedzenie siana"], answer:0, explain:"Tarzanie się, pocenie, niepokój i patrzenie na brzuch mogą sugerować ból brzucha."}
      }
    ],
    "Matematyka": [
      {
        title:"Procenty na przykładzie karmienia konia",
        text:"Procent oznacza część ze 100. Jeśli chcesz policzyć 2% z masy konia, najpierw liczysz 1%, a potem mnożysz wynik przez 2.",
        why:"To przydaje się w żywieniu zwierząt, dawkowaniu i obliczaniu proporcji.",
        example:"Koń waży 500 kg. 1% to 500 ÷ 100 = 5 kg. 2% to 5 × 2 = 10 kg.",
        steps:["Podziel masę przez 100, żeby dostać 1%.","Pomnóż wynik przez liczbę procentów.","Zapisz jednostkę, np. kg."],
        task:"Policz 2% z 450 kg. Podpowiedź: 450 ÷ 100 = 4,5; 4,5 × 2 = ?",
        quiz:{ q:"Ile to 2% z 450 kg?", options:["4,5 kg","9 kg","45 kg"], answer:1, explain:"1% z 450 kg to 4,5 kg. 2% to 4,5 × 2 = 9 kg."}
      }
    ],
    "Szachy": [
      {
        title:"Widełki skoczkiem",
        text:"Widełki to atak jedną figurą na dwie figury przeciwnika naraz. Skoczek jest do tego świetny, bo porusza się nietypowo.",
        why:"Widełki często wygrywają materiał.",
        example:"Skoczek atakuje jednocześnie króla i wieżę. Przeciwnik musi ratować króla, a wieża zostaje do zbicia.",
        task:"Ustaw przykład widełek skoczkiem.",
        quiz:{ q:"Która figura często robi widełki dzięki nietypowemu ruchowi?", options:["Skoczek","Pion","Król"], answer:0, explain:"Skoczek przeskakuje figury i może atakować w zaskakujący sposób."}
      }
    ],
    "Język obcy": [
      {
        title:"Angielski weterynaryjny — podstawy",
        text:"Najłatwiej uczyć się języka przez tematy, które naprawdę ciekawią. Jeśli lubisz zwierzęta, słowa o weterynarii będą łatwiejsze do zapamiętania.",
        why:"Angielski otwiera dostęp do filmów, artykułów i wiedzy o zwierzętach.",
        example:"vet — weterynarz, pain — ból, paw — łapa, hoof — kopyto, stable — stajnia.",
        task:"Ułóż 3 zdania z dowolnymi słowami z listy.",
        quiz:{ q:"Co oznacza słowo vet?", options:["Stajnia","Weterynarz","Kopyto"], answer:1, explain:"Vet to skrót od veterinarian, czyli weterynarz."}
      }
    ]
  },
  zuza: {
    "Uzależnienia ICD-11": [
      {
        title:"ICD-11: substancje i zachowania nałogowe",
        text:"ICD-11 odróżnia zaburzenia związane z używaniem substancji od zaburzeń wynikających z zachowań nałogowych.",
        why:"To pomaga precyzyjniej myśleć diagnostycznie i terapeutycznie.",
        example:"Alkohol może wiązać się z objawami fizjologicznymi, a gaming disorder bardziej z utratą kontroli i kontynuowaniem mimo szkód.",
        task:"Zapisz jeden przykład substancji i jeden przykład zachowania nałogowego.",
        quiz:{ q:"Co jest przykładem zachowania nałogowego w ICD-11?", options:["Hazard/gaming","Witamina C","Sen"], answer:0, explain:"ICD-11 opisuje m.in. gambling disorder i gaming disorder."}
      }
    ],
    "Psychodeliki": [
      {
        title:"Psychodeliki: set, setting i integracja",
        text:"W badaniach klinicznych nad psychodelikami sama substancja nie jest całą terapią. Ważne są kwalifikacja, przygotowanie, otoczenie, bezpieczeństwo oraz integracja.",
        why:"Bez przygotowania i integracji doświadczenie może być trudne, chaotyczne albo źle zinterpretowane.",
        example:"Pacjent po intensywnym doświadczeniu potrzebuje pomocy w przełożeniu wglądów na codzienne decyzje.",
        task:"Wypisz 3 pytania do kwalifikacji pacjenta.",
        quiz:{ q:"Co oznacza integracja po sesji?", options:["Pomijanie rozmowy","Przełożenie doświadczenia na rozumienie i zmianę","Tylko odpoczynek"], answer:1, explain:"Integracja pomaga nadać doświadczeniu znaczenie i przełożyć je na życie."}
      }
    ],
    "Ogrodnik 2.0": [
      {
        title:"Ściółkowanie jako technika regeneracyjna",
        text:"Ściółka chroni glebę przed przesuszeniem, ogranicza wahania temperatury, wspiera mikroorganizmy i zmniejsza wzrost chwastów.",
        why:"Zdrowa gleba oznacza odporniejsze rośliny i mniejsze zużycie wody.",
        example:"Rabata z odsłoniętą ziemią szybciej traci wodę niż rabata przykryta zrębkami, słomą lub kompostem.",
        task:"Znajdź jedno miejsce, gdzie ściółka poprawiłaby warunki roślin.",
        quiz:{ q:"Po co stosuje się ściółkę?", options:["Żeby gleba szybciej wyschła","Żeby ograniczyć parowanie i wspierać glebę","Żeby usunąć wszystkie organizmy"], answer:1, explain:"Ściółka chroni glebę, wodę i mikrożycie."}
      }
    ],
    "Szachy": [
      {
        title:"Centrum w debiucie",
        text:"W debiucie ważna jest walka o centrum. Pola e4, d4, e5 i d5 dają figurom większy wpływ na szachownicę.",
        why:"Kontrola centrum ułatwia rozwój figur i planowanie ataku.",
        example:"Pion na e4 kontroluje d5 i f5, a skoczek na f3 pomaga w rozwoju.",
        task:"Rozegraj 10 minut i sprawdź, ile Twoich figur wpływa na centrum.",
        quiz:{ q:"Które pola tworzą centrum?", options:["a1, h1, a8, h8","e4, d4, e5, d5","b2, b7, g2, g7"], answer:1, explain:"Najczęściej mówi się o centrum jako polach e4, d4, e5 i d5."}
      }
    ],
    "Język angielski": [
      {
        title:"Angielski terapeutyczny: craving",
        text:"Craving oznacza głód lub silną chęć sięgnięcia po substancję albo powrotu do zachowania nałogowego.",
        why:"To ważne słowo w terapii uzależnień i czytaniu literatury anglojęzycznej.",
        example:"I noticed a craving after a stressful day. — Zauważyłam głód po stresującym dniu.",
        task:"Ułóż własne zdanie z wyrazem craving.",
        quiz:{ q:"Co znaczy craving?", options:["Głód/chęć sięgnięcia","Senność","Nagroda"], answer:0, explain:"Craving to silna chęć lub głód."}
      }
    ],
    "Łamigłówki": [
      {
        title:"Logika terapeutyczna",
        text:"Łamigłówki mogą trenować myślenie kliniczne: rozpoznawanie wzorców, hipotez i konsekwencji.",
        why:"To wspiera elastyczność poznawczą i utrzymanie koncentracji.",
        example:"Pacjent mówi: 'Po pracy zawsze mam ochotę się napić'. Możliwe hipotezy: stres, rytuał przejścia, zmęczenie, samotność.",
        task:"Wypisz 3 alternatywne strategie na moment po pracy.",
        quiz:{ q:"Co warto zrobić najpierw w analizie klinicznej?", options:["Założyć jedną przyczynę","Postawić kilka hipotez","Pominąć kontekst"], answer:1, explain:"Kilka hipotez pomaga uniknąć zbyt szybkich wniosków."}
      }
    ]
  }
};
