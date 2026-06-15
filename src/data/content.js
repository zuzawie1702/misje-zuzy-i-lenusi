
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


export const PLACEMENT_TESTS = {
  lena: {
    "Weterynaria": [
      { q:"Pies nagle kuleje i nie chce obciążać łapy. Co jest najlepszą pierwszą reakcją?", options:["Zignorować, jeśli nie piszczy","Obserwować, ograniczyć ruch i skonsultować, jeśli nie mija lub jest silne","Kazać mu dużo biegać"], answer:1 },
      { q:"Kot od 24 godzin nie je. Co robisz?", options:["To może być ważny sygnał, warto skonsultować się z weterynarzem","Czekam miesiąc","Daję tylko nową zabawkę"], answer:0 },
      { q:"Co może sugerować kolkę u konia?", options:["Spokojne jedzenie","Tarzanie się, patrzenie na brzuch, niepokój","Machanie ogonem przy muchach"], answer:1 },
      { q:"Co oznacza sprawdzanie parametrów życiowych?", options:["Ocenę temperatury, tętna, oddechu i zachowania","Tylko patrzenie na kolor sierści","Tylko ważenie karmy"], answer:0 }
    ],
    "Matematyka": [
      { q:"Ile to 10% z 80?", options:["8","18","800"], answer:0 },
      { q:"Ile to 2% z 450 kg?", options:["4,5 kg","9 kg","90 kg"], answer:1 },
      { q:"20 minut dzielimy na 4 ćwiczenia. Ile minut na jedno?", options:["4","5","8"], answer:1 },
      { q:"1/4 godziny to ile minut?", options:["10","15","25"], answer:1 }
    ],
    "Szachy": [
      { q:"Która figura porusza się po skosie?", options:["Goniec","Wieża","Król tylko do przodu"], answer:0 },
      { q:"Co to są widełki?", options:["Atak jedną figurą na dwie figury","Remis","Bicie pionem do tyłu"], answer:0 },
      { q:"Co jest celem gry w szachy?", options:["Zbić wszystkie piony","Dać mata królowi","Zrobić roszadę"], answer:1 },
      { q:"Która figura przeskakuje inne figury?", options:["Skoczek","Goniec","Wieża"], answer:0 }
    ],
    "Angielski": [
      { q:"Co oznacza vet?", options:["Weterynarz","Kopyto","Siodło"], answer:0 },
      { q:"Co oznacza pain?", options:["Ból","Radość","Karma"], answer:0 },
      { q:"Co oznacza stable?", options:["Stajnia","Kot","Głód"], answer:0 },
      { q:"Jak po angielsku jest pies?", options:["dog","cat","horse"], answer:0 }
    ],
    "Logika": [
      { q:"Jeśli wszystkie koty są zwierzętami, a Darwin jest kotem, to Darwin jest...", options:["zwierzęciem","rośliną","nie wiadomo"], answer:0 },
      { q:"Co nie pasuje: pies, kot, koń, stół?", options:["stół","koń","kot"], answer:0 },
      { q:"Jeśli dziś jest po poniedziałku, to może być...", options:["wtorek","niedziela przed poniedziałkiem","nie istnieje taki dzień"], answer:0 },
      { q:"Ciąg: 2, 4, 6, 8, ...", options:["10","9","12"], answer:0 }
    ]
  },
  zuza: {
    "ICD-11": [
      { q:"ICD-11 obejmuje m.in. zaburzenia związane z używaniem substancji oraz...", options:["zachowania nałogowe","kolor oczu","typy ogrodów"], answer:0 },
      { q:"Gaming disorder w ICD-11 dotyczy głównie...", options:["utraty kontroli nad graniem i kontynuowania mimo szkód","czytania książek","samego posiadania komputera"], answer:0 },
      { q:"Diagnoza powinna uwzględniać...", options:["funkcjonowanie i szkody","wyłącznie jedną rozmowę bez kontekstu","kolor telefonu"], answer:0 },
      { q:"W pracy klinicznej ICD pomaga przede wszystkim w...", options:["porządkowaniu rozpoznania","zastępowaniu relacji terapeutycznej","wyborze koloru gabinetu"], answer:0 }
    ],
    "Uzależnienia": [
      { q:"Craving oznacza...", options:["głód/chęć sięgnięcia","senność","nagrodę"], answer:0 },
      { q:"Nawrót warto rozumieć jako...", options:["proces, nie tylko pojedyncze zdarzenie","zawsze koniec terapii","brak jakichkolwiek sygnałów"], answer:0 },
      { q:"Wyzwalacz to...", options:["bodziec zwiększający ryzyko zachowania nałogowego","rodzaj nagrody","gatunek rośliny"], answer:0 },
      { q:"Regulacja emocji w terapii uzależnień jest...", options:["ważna","zawsze zbędna","tematem tylko dla dzieci"], answer:0 }
    ],
    "Psychodeliki": [
      { q:"Set i setting oznaczają...", options:["nastawienie i otoczenie","dawkę kawy","rodzaj muzyki tylko w radiu"], answer:0 },
      { q:"Integracja po doświadczeniu służy...", options:["nadaniu znaczenia i przełożeniu wniosków na życie","pominięciu rozmowy","zapomnieniu wszystkiego"], answer:0 },
      { q:"Badania kliniczne wymagają...", options:["kwalifikacji i bezpieczeństwa","dowolności bez zasad","braku monitorowania"], answer:0 },
      { q:"Psychodeliki w terapii to temat...", options:["badany, wymagający ostrożności","całkowicie prosty i bez ryzyka","bez potrzeby dalszych badań"], answer:0 }
    ],
    "Angielski": [
      { q:"Craving po polsku to...", options:["głód/chęć","ogród","ćwiczenie"], answer:0 },
      { q:"Relapse oznacza...", options:["nawrót","nagrodę","odpoczynek"], answer:0 },
      { q:"Coping skill oznacza...", options:["strategię radzenia sobie","rodzaj zwierzęcia","kolor"], answer:0 },
      { q:"Trigger oznacza...", options:["wyzwalacz","terapeutę","sen"], answer:0 }
    ],
    "Szachy": [
      { q:"Centrum szachownicy to najczęściej pola...", options:["e4, d4, e5, d5","a1, a8, h1, h8","tylko b2 i g7"], answer:0 },
      { q:"Roszada pomaga...", options:["schować króla i połączyć wieże","zbić własnego pionka","zakończyć grę automatycznie"], answer:0 },
      { q:"Skoczek porusza się...", options:["w kształcie litery L","tylko po skosie","jak wieża"], answer:0 },
      { q:"Mat oznacza...", options:["król jest atakowany i nie ma legalnej obrony","zbicie hetmana","remis"], answer:0 }
    ],
    "Ogrodnictwo": [
      { q:"Ściółka pomaga...", options:["ograniczyć parowanie i chronić glebę","wysuszyć glebę","usunąć całe mikrożycie"], answer:0 },
      { q:"Kompost wpływa na...", options:["żyzność i strukturę gleby","kolor nieba","temperaturę telefonu"], answer:0 },
      { q:"Rośliny dla zapylaczy powinny...", options:["kwitnąć w różnych terminach","być tylko plastikowe","nie mieć kwiatów"], answer:0 },
      { q:"Retencja wody oznacza...", options:["zatrzymywanie wody w krajobrazie/glebie","szybkie odprowadzanie wszystkiego","podlewanie tylko betonu"], answer:0 }
    ]
  }
};

export const ACHIEVEMENTS = [
  { id:"first100", icon:"💯", title:"Pierwsze 100 XP", description:"Zdobyto pierwsze 100 XP drużyny." },
  { id:"firstLesson", icon:"🎓", title:"Pierwsza lekcja", description:"Pierwsza mikrolekcja ukończona." },
  { id:"firstQuiz", icon:"🧩", title:"Pierwszy quiz", description:"Pierwszy quiz rozwiązany poprawnie." },
  { id:"animalKeeper", icon:"🐾", title:"Opiekun stada", description:"Wykonano misję troski przy zwierzęciu." },
  { id:"energyAware", icon:"🔋", title:"Obserwatorka energii", description:"Zapisano check-in energii." },
  { id:"weeklyHero", icon:"🏆", title:"Bohater tygodnia", description:"Drużyna przekroczyła 500 XP." },
  { id:"academyMaster", icon:"📚", title:"Mistrz Akademii", description:"Ukończono 5 lekcji." }
];


export const COMPANION_EVOLUTIONS = {
  zuza: {
    name:"Smok Zuzy",
    stages:[
      { level:1, icon:"🐉", title:"Mały Smok", description:"Dopiero budzi swój ogień. Wspiera start i małe kroki." },
      { level:3, icon:"🔥🐉", title:"Smok Iskry", description:"Pojawia się pierwsza moc działania. Bonus za naukę i misje głowy." },
      { level:6, icon:"📚🐉", title:"Smok Wiedzy", description:"Smok lubi akademię, angielski, ICD-11 i szachy." },
      { level:10, icon:"⚡🐉", title:"Smok Burzowy", description:"Pomaga w trudniejsze dni i przy większych wyzwaniach." },
      { level:15, icon:"👑🐉", title:"Strażnik Stada", description:"Smok staje się opiekunem całego świata misji." }
    ]
  },
  lena: {
    name:"Lis Lenusi",
    stages:[
      { level:1, icon:"🦊", title:"Mały Lis", description:"Ciekawy świata, ostrożny i uważny." },
      { level:3, icon:"🎒🦊", title:"Lis Odkrywca", description:"Lubi mikrolekcje, zagadki i nowe ciekawostki." },
      { level:6, icon:"🩺🦊", title:"Lis Weterynarz", description:"Wspiera naukę o zwierzętach i obserwację stada." },
      { level:10, icon:"♟️🦊", title:"Lis Strateg", description:"Pomaga przy szachach, logice i matematyce." },
      { level:15, icon:"✨🦊", title:"Lis Mistrzyni", description:"Ma własną mądrość i prowadzi Lenusię przez wyzwania." }
    ]
  }
};


export const WORLD_CHAPTERS = [
 {xp:0,title:"Stara mapa",text:"Smok Zuzy zauważył błysk pod starym drzewem. Lis Lenusi odgarnął liście i odkrył starą mapę prowadzącą do Ogrodu Pięciu Ścieżek."},
 {xp:300,title:"Pierwszy znak",text:"Na mapie pojawił się symbol sowy i tajemniczy ślad prowadzący do nowej części ogrodu."},
 {xp:700,title:"Kryształ odwagi",text:"Wśród korzeni starego dębu odnaleziono pierwszy kryształ."}
];

export const GARDEN_VISITORS = [
 {xp:200, icon:"🐿️", name:"Wiewiórka"},
 {xp:500, icon:"🦔", name:"Jeż"},
 {xp:1000, icon:"🦉", name:"Sowa"},
 {xp:2000, icon:"🦌", name:"Sarna"},
 {xp:5000, icon:"🦄", name:"Jednorożec"}
];


export const STORY_MISSIONS = [
  { id:"story_kind_note", area:"Relacje", title:"List od przyjaciela", description:"Zrób dziś coś miłego dla kogoś bliskiego i zapisz jedno zdanie w Kronice.", xp:30, icon:"heart", unlockXp:0 },
  { id:"story_coco_help", area:"Zwierzęta", title:"Coco potrzebuje pomocy", description:"Zadbaj o Coco albo inne zwierzę i zanotuj krótką obserwację.", xp:40, icon:"paw", unlockXp:0 },
  { id:"story_knowledge_clue", area:"Nauka", title:"Ciekawostka dnia", description:"Przeczytaj jedną mikrolekcję z Akademii i rozwiąż quiz.", xp:25, icon:"book", unlockXp:0 },
  { id:"story_old_oak", area:"Świat", title:"Znak na Starym Dębie", description:"Wykonaj dowolną misję i odblokuj kolejny ślad na mapie.", xp:35, icon:"map", unlockXp:300 },
  { id:"story_logic_key", area:"Logika", title:"Klucz Lisa", description:"Rozwiąż quiz, zagadkę albo zadanie matematyczne. Lis szuka szyfru.", xp:35, icon:"spark", unlockXp:500 },
  { id:"story_dragon_flame", area:"Smok", title:"Iskra Smoka", description:"Wybierz jedną trudniejszą misję. Smok Zuzy wzmacnia ogień działania.", xp:45, icon:"bolt", unlockXp:700 }
];

export const DISCOVERIES = [
  { id:"old_map", xp:0, icon:"map", title:"Stara mapa", description:"Pierwszy ślad Ogrodu Pięciu Ścieżek." },
  { id:"owl_feather", xp:300, icon:"feather", title:"Pióro Strażniczki", description:"Znak, że ktoś obserwuje postępy drużyny." },
  { id:"courage_crystal", xp:700, icon:"crystal", title:"Kryształ odwagi", description:"Kryształ znaleziony przy korzeniach starego dębu." },
  { id:"moon_leaf", xp:1200, icon:"leaf", title:"Księżycowy liść", description:"Liść, który świeci tylko po wykonaniu dobrej misji." },
  { id:"lost_scroll", xp:1800, icon:"scroll", title:"Fragment dziennika", description:"Część historii dawnego opiekuna ogrodu." }
];


export const ANIMAL_TRAIT_OPTIONS = [
  "odwaga","spokój","energia","ciekawość","logika","opieka","relacje","zabawa",
  "uważność","ruch","nauka","wyzwania","cisza","współpraca","strategia","troska",
  "humor","cierpliwość","samodzielność","wrażliwość","czujność","lojalność"
];

export const ANIMAL_ACTIVITY_OPTIONS = [
  "spacer","obserwacja","zabawa","głaskanie","trening","nauka","relacje","logika",
  "odpoczynek","misja ruchowa","misja jeździecka","misja akademii","misja troski"
];


export const WORLD_LOCATIONS = [
  { id:"home", icon:"⌂", name:"Dom Drużyny", unlockXp:0, description:"Centrum codziennych misji, relacji i spokojnego startu." },
  { id:"garden", icon:"✿", name:"Ogród Pięciu Ścieżek", unlockXp:0, description:"Miejsce, gdzie rosną ścieżki Nauki, Zwierząt, Relacji, Jeździectwa i Logiki." },
  { id:"stable", icon:"♞", name:"Stajnia Gai i Grafita", unlockXp:250, description:"Miejsce treningu, równowagi, odwagi i jeździeckich wyzwań." },
  { id:"academy", icon:"▣", name:"Biblioteka Akademii", unlockXp:400, description:"Tutaj pojawiają się trudniejsze lekcje, quizy i testy poziomujące." },
  { id:"forest", icon:"☾", name:"Las Odkrywców", unlockXp:750, description:"Tajemnicze miejsce zagadek, tropów i misji fabularnych." },
  { id:"crystal", icon:"◆", name:"Kryształowa Polana", unlockXp:1200, description:"Miejsce specjalnych osiągnięć i dużych kroków w rozwoju drużyny." }
];

export const LOCATION_MISSIONS = {
  home:[
    { title:"Porządek startowy", text:"Wybierz jedną małą rzecz w domu i zrób ją do końca.", xp:20 },
    { title:"Dobry komunikat", text:"Powiedz lub napisz komuś jedną życzliwą rzecz.", xp:20 }
  ],
  garden:[
    { title:"Ścieżka dnia", text:"Wybierz jeden ogród rozwoju i wykonaj pasującą misję.", xp:25 },
    { title:"Trop na mapie", text:"Zapisz w Kronice, co dziś udało się odkryć.", xp:25 }
  ],
  stable:[
    { title:"Równowaga jeźdźca", text:"Zrób krótki trening stabilizacji albo rozciągania.", xp:30 },
    { title:"Obserwacja konia", text:"Zanotuj jedną rzecz o Gai lub Graficie.", xp:30 }
  ],
  academy:[
    { title:"Lekcja z sensem", text:"Zrób jedną lekcję i quiz z Akademii.", xp:35 },
    { title:"Pytanie badacza", text:"Zapisz jedno pytanie, na które chcesz znać odpowiedź.", xp:30 }
  ],
  forest:[
    { title:"Zagadka Lisa", text:"Rozwiąż łamigłówkę, szachy albo zadanie logiczne.", xp:40 },
    { title:"Cichy trop", text:"Przez 3 minuty obserwuj coś bez telefonu.", xp:30 }
  ],
  crystal:[
    { title:"Kryształ odwagi", text:"Wybierz jedną rzecz, której unikasz, i zrób pierwszy mały krok.", xp:50 },
    { title:"Misja mistrzowska", text:"Połącz naukę, ruch i relacje w jednym dniu.", xp:60 }
  ]
};


export const RELATION_LEVELS = [
  { min:0, name:"Znajomość", icon:"◇", description:"Pierwszy kontakt i spokojne poznawanie." },
  { min:20, name:"Przyjaciel", icon:"✦", description:"Relacja zaczyna dawać poczucie wsparcia." },
  { min:40, name:"Zaufanie", icon:"◆", description:"Można odblokować pierwsze specjalne historie." },
  { min:70, name:"Partner Przygód", icon:"✧", description:"Relacja daje bonusy i mocniejsze misje." },
  { min:100, name:"Legenda Stada", icon:"★", description:"Najwyższy poziom więzi w tej wersji." }
];

export const RELATION_PAIRS = [
  { id:"zuza-dragon", owner:"zuza", targetType:"companion", targetId:"dragon", title:"Zuza ↔ Smok", icon:"🐉", description:"Relacja działania, wiedzy, odwagi i smoczego ognia." },
  { id:"lena-fox", owner:"lena", targetType:"companion", targetId:"fox", title:"Lena ↔ Lis", icon:"🦊", description:"Relacja ciekawości, logiki, weterynarii i odkrywania." },
  { id:"zuza-gaja", owner:"zuza", targetType:"animal", targetId:"gaja", title:"Zuza ↔ Gaja", icon:"🐴", description:"Relacja równowagi, spokoju, dosiadu i uważności." },
  { id:"zuza-grafit", owner:"zuza", targetType:"animal", targetId:"grafit", title:"Zuza ↔ Grafit", icon:"🐴", description:"Relacja odwagi, treningu i przełamywania trudności." },
  { id:"lena-arya", owner:"lena", targetType:"animal", targetId:"arya", title:"Lena ↔ Arya", icon:"🐕", description:"Relacja troski, opieki, spacerów i wspólnej obecności." },
  { id:"lena-lily", owner:"lena", targetType:"animal", targetId:"lily", title:"Lena ↔ Lily", icon:"🐕", description:"Relacja delikatności, emocji i spokojnego kontaktu." },
  { id:"team-coco", owner:"team", targetType:"animal", targetId:"coco", title:"Drużyna ↔ Coco", icon:"🐕", description:"Relacja energii, ruchu i codziennych rytuałów." },
  { id:"team-bagheera", owner:"team", targetType:"animal", targetId:"bagheera", title:"Drużyna ↔ Bagheera", icon:"🐈‍⬛", description:"Relacja ciszy, obserwacji i szacunku do granic." },
  { id:"team-darwin", owner:"team", targetType:"animal", targetId:"darwin", title:"Drużyna ↔ Darwin", icon:"🐈", description:"Relacja nauki, ciekawości i logicznego myślenia." },
  { id:"team-gumball", owner:"team", targetType:"animal", targetId:"gumball", title:"Drużyna ↔ Gumball", icon:"🐈", description:"Relacja zabawy, humoru i niespodzianek." }
];

export const RELATION_GIFTS = [
  { id:"treat", icon:"✦", name:"Przysmak", description:"Dobry prezent po misji troski.", value:5 },
  { id:"feather", icon:"⌁", name:"Pióro uważności", description:"Prezent za spokój, obserwację i ciszę.", value:8 },
  { id:"crystal", icon:"◆", name:"Kryształ odwagi", description:"Prezent za trudniejszą misję.", value:10 },
  { id:"badge", icon:"★", name:"Odznaka stada", description:"Prezent za wspólne działanie.", value:12 },
  { id:"scroll", icon:"☉", name:"Zwój wiedzy", description:"Prezent za naukę albo quiz.", value:8 }
];

export const ANIMAL_STORIES = {
  arya:[
    { bond:10, title:"Trop Aryi", text:"Arya zatrzymała się przy granicy Lasu Odkrywców. Coś wyczuła, ale zamiast szczekać, spojrzała na Lenę, jakby czekała na wspólną decyzję." },
    { bond:35, title:"Cichy strażnik", text:"Arya zaczęła pojawiać się przy misjach relacji. Jej obecność przypomina, że odwaga czasem oznacza spokojne bycie obok." },
    { bond:70, title:"Przysięga tropicielki", text:"Arya odnalazła ślad prowadzący do kolejnej lokacji mapy. Drużyna zyskuje nową strażniczkę ścieżek." }
  ],
  lily:[
    { bond:10, title:"Delikatny znak Lily", text:"Lily położyła głowę blisko dłoni i pokazała, że czasem najważniejsza misja to cisza, spokój i łagodność." },
    { bond:35, title:"Most emocji", text:"Lily pomaga rozpoznawać napięcie i odpoczynek. Jej historia wzmacnia Ogród Relacji." },
    { bond:70, title:"Serce stada", text:"Lily odblokowuje specjalną misję wdzięczności i uważnego kontaktu." }
  ],
  coco:[
    { bond:10, title:"Energia Coco", text:"Coco nie przynosi odpowiedzi, ale przynosi ruch. Czasem najlepszym początkiem jest wstać i zrobić pierwszy krok." },
    { bond:35, title:"Rytm spaceru", text:"Coco prowadzi drużynę przez misję ruchową. Każdy krok dodaje energii." },
    { bond:70, title:"Strażnik aktywności", text:"Coco odblokowuje bonus dla zadań ruchowych i misji domowych." }
  ],
  bagheera:[
    { bond:10, title:"Cień Bagheery", text:"Bagheera obserwuje wszystko z dystansu. Uczy, że relacja nie zawsze oznacza bliskość na siłę." },
    { bond:35, title:"Lekcja granic", text:"Bagheera odblokowuje historię o szacunku do przestrzeni i sygnałów zwierzęcia." },
    { bond:70, title:"Strażnik ciszy", text:"Bagheera pomaga w misjach regeneracyjnych i spokojnych check-inach." }
  ],
  darwin:[
    { bond:10, title:"Pytanie Darwina", text:"Darwin znalazł miejsce przy mapie, jakby sprawdzał, czy da się ją rozwiązać jak zagadkę." },
    { bond:35, title:"Kot naukowiec", text:"Darwin odblokowuje specjalną zagadkę logiczną." },
    { bond:70, title:"Mistrz hipotez", text:"Darwin pomaga przy Akademii i quizach." }
  ],
  gumball:[
    { bond:10, title:"Niespodzianka Gumballa", text:"Gumball pojawia się tam, gdzie nikt go nie szukał. Przypomina, że zabawa też jest częścią energii." },
    { bond:35, title:"Misja chaosu", text:"Gumball odblokowuje krótką misję humoru i rozluźnienia." },
    { bond:70, title:"Koci trik", text:"Gumball wzmacnia łamigłówki i misje kreatywne." }
  ],
  gaja:[
    { bond:10, title:"Oddech Gai", text:"Gaja stoi spokojnie przy ścieżce do Kryształowej Polany. Jej historia zaczyna się od równowagi." },
    { bond:35, title:"Ścieżka dosiadu", text:"Gaja odblokowuje misję jeździecką skupioną na stabilizacji i oddechu." },
    { bond:70, title:"Klacz równowagi", text:"Gaja prowadzi drużynę do misji uważności i kontroli ciała." }
  ],
  grafit:[
    { bond:10, title:"Krok Grafita", text:"Grafit rusza dopiero wtedy, gdy drużyna jest gotowa. Jego historia zaczyna się od odwagi." },
    { bond:35, title:"Próba wyzwania", text:"Grafit odblokowuje misję trudniejszego kroku." },
    { bond:70, title:"Siła stada", text:"Grafit wzmacnia misje wymagające konsekwencji i wytrwałości." }
  ]
};


export const INVENTORY_ITEMS = [
  { id:"courage_crystal", icon:"◆", name:"Kryształ odwagi", rarity:"rzadki", type:"kryształ", description:"Wzmacnia misje, które wymagają pierwszego kroku mimo oporu." },
  { id:"owl_feather", icon:"⌁", name:"Pióro Strażniczki", rarity:"niezwykły", type:"pióro", description:"Wzmacnia obserwację, uważność i spokojne decyzje." },
  { id:"fox_compass", icon:"◇", name:"Kompas Lisa", rarity:"rzadki", type:"narzędzie", description:"Pomaga wybierać zagadki i tropy na mapie." },
  { id:"dragon_flame", icon:"ϟ", name:"Iskra Smoka", rarity:"epicki", type:"moc", description:"Wzmacnia trudniejsze misje i działania wymagające energii." },
  { id:"study_scroll", icon:"☉", name:"Zwój Wiedzy", rarity:"niezwykły", type:"zwój", description:"Pojawia się po lekcjach i quizach." },
  { id:"stable_token", icon:"♞", name:"Znak Stajni", rarity:"niezwykły", type:"odznaka", description:"Nagroda za trening i zadania jeździeckie." },
  { id:"heart_gem", icon:"♡", name:"Kamień Relacji", rarity:"rzadki", type:"klejnot", description:"Wzmacnia więzi, rozmowy i misje relacyjne." },
  { id:"logic_key", icon:"♟", name:"Klucz Logiki", rarity:"rzadki", type:"klucz", description:"Otwiera ścieżki zagadek, szachów i matematyki." }
];

export const ITEM_REWARDS = {
  Nauka:["study_scroll","logic_key"], Zwierzęta:["owl_feather","heart_gem"], Relacje:["heart_gem","owl_feather"],
  Ciało:["stable_token","dragon_flame"], Głowa:["study_scroll","logic_key"], Świat:["fox_compass","courage_crystal"],
  Smok:["dragon_flame","courage_crystal"], Logika:["logic_key","fox_compass"], Dom:["heart_gem","courage_crystal"]
};

export const CRAFTING_RECIPES = [
  { id:"map_fragment", name:"Fragment Mapy", icon:"◇", requires:["owl_feather","study_scroll"], description:"Łączy wiedzę z obserwacją." },
  { id:"brave_badge", name:"Odznaka Odwagi", icon:"★", requires:["courage_crystal","dragon_flame"], description:"Nagroda za trudniejsze misje." },
  { id:"bond_charm", name:"Amulet Więzi", icon:"♡", requires:["heart_gem","owl_feather"], description:"Wzmacnia relacje ze stadem." },
  { id:"logic_lens", name:"Soczewka Logiki", icon:"✧", requires:["logic_key","fox_compass"], description:"Pomaga w zagadkach Lisa." }
];

export const COLLECTION_SETS = [
  { id:"first_relics", name:"Pierwsze Relikty", icon:"✦", items:["courage_crystal","owl_feather","study_scroll"], rewardXp:50, description:"Pierwszy zestaw odkryć." },
  { id:"dragon_path", name:"Ścieżka Smoka", icon:"ϟ", items:["dragon_flame","courage_crystal","brave_badge"], rewardXp:80, description:"Zestaw odwagi i działania." },
  { id:"fox_path", name:"Ścieżka Lisa", icon:"◇", items:["fox_compass","logic_key","logic_lens"], rewardXp:80, description:"Zestaw logiki i odkrywania." },
  { id:"herd_bond", name:"Więź Stada", icon:"♡", items:["heart_gem","owl_feather","bond_charm"], rewardXp:80, description:"Zestaw relacji i troski." }
];
