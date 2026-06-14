export const FAMILY_EVENTS = [
  { id:"arya-birthday", date:"02-03", title:"Urodziny Aryi", icon:"🐕", bonus:"Misje wspólne dają dziś wyjątkową energię." },
  { id:"zuza-birthday", date:"02-17", title:"Urodziny Zuzy", icon:"🐉", bonus:"Smok Zuzy świętuje! Dzień bonusowy." },
  { id:"coco-birthday", date:"04-11", title:"Urodziny Coco", icon:"🐕", bonus:"Misje ruchowe mają dziś specjalną moc." },
  { id:"grafit-birthday", date:"04-18", title:"Urodziny Grafita", icon:"🐴", bonus:"Dzień odwagi i jeździeckich wyzwań." },
  { id:"lily-birthday", date:"06-01", title:"Urodziny Lily", icon:"🐕", bonus:"Relacje i emocje są dziś szczególnie ważne." },
  { id:"gaja-birthday", date:"09-23", title:"Urodziny Gai", icon:"🐴", bonus:"Dzień równowagi, spokoju i rozciągania." },
  { id:"lena-birthday", date:"09-27", title:"Urodziny Lenusi", icon:"🦊", bonus:"Lisek Lenusi świętuje! Dzień bonusowy." },
  { id:"cats-birthday", date:"12-13", title:"Urodziny kotów: Bagheera, Darwin i Gumball", icon:"🐱", bonus:"Kocie święto nauki i łamigłówek." }
];
export const REAL_ANIMALS = [
  { id:"arya", name:"Arya", species:"pies", sex:"samica", icon:"🐕", traits:["odwaga","współpraca"] },
  { id:"lily", name:"Lily", species:"pies", sex:"samica", icon:"🐕", traits:["spokój","relacje"] },
  { id:"coco", name:"Coco", species:"pies", sex:"samiec", icon:"🐕", traits:["ruch","energia"] },
  { id:"bagheera", name:"Bagheera", species:"kot", sex:"samiec", icon:"🐈‍⬛", traits:["spokój","obserwacja"] },
  { id:"darwin", name:"Darwin", species:"kot", sex:"samiec", icon:"🐈", traits:["nauka","ciekawość"] },
  { id:"gumball", name:"Gumball", species:"kot", sex:"samiec", icon:"🐈", traits:["zabawa","niespodzianki"] },
  { id:"gaja", name:"Gaja", species:"koń", sex:"samica", icon:"🐴", traits:["równowaga","uważność"] },
  { id:"grafit", name:"Grafit", species:"koń", sex:"samiec", icon:"🐴", traits:["odwaga","wyzwania"] }
];
export const PETS = [
  { icon:"🐉", name:"Smok", unlock:0 }, { icon:"🦊", name:"Lis", unlock:0 }, { icon:"🐴", name:"Koń", unlock:0 }, { icon:"🐱", name:"Kot", unlock:0 }, { icon:"🐶", name:"Pies", unlock:0 }, { icon:"🦉", name:"Sowa", unlock:100 }, { icon:"🐺", name:"Wilk", unlock:200 }, { icon:"🐼", name:"Panda", unlock:300 }, { icon:"🐢", name:"Żółw", unlock:400 }, { icon:"🦄", name:"Jednorożec", unlock:700 }, { icon:"🦋", name:"Motyl", unlock:900 }, { icon:"🐦‍🔥", name:"Feniks", unlock:1200 }
];
export const THEMES = { zuza:[{id:"amethyst",name:"Ametystowy",color:"#8b5cf6"},{id:"dragon",name:"Smoczy fiolet",color:"#7c3aed"},{id:"forest",name:"Leśna zieleń",color:"#16a34a"},{id:"night",name:"Nocne niebo",color:"#312e81"}], lena:[{id:"pink",name:"Pastelowy róż",color:"#ec4899"},{id:"cherry",name:"Kwiat wiśni",color:"#f472b6"},{id:"rainbow",name:"Tęczowy",color:"#f97316"},{id:"fox",name:"Lisowy pomarańcz",color:"#fb923c"}] };
export const TASKS = [
  { id:"read_zuza", who:"zuza", area:"Głowa", title:"Czytanie książki", frequency:"5x/tydz.", xp:10, description:"8 minut. Krótko, bez presji." },
  { id:"read_lena", who:"lena", area:"Głowa", title:"Czytanie książki", frequency:"5x/tydz.", xp:10, description:"8 minut. Może być książka, komiks albo ciekawy tekst." },
  { id:"exercise_zuza", who:"zuza", area:"Ciało", title:"Ćwiczenia jeździeckie", frequency:"5x/tydz.", xp:20, description:"20 minut: dosiad, core, biodra, balans." },
  { id:"exercise_lena", who:"lena", area:"Ciało", title:"Ćwiczenia jeździeckie", frequency:"5x/tydz.", xp:20, description:"20 minut: dosiad, core, biodra, balans." },
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
  { id:"animal_moment", who:"team", area:"Zwierzęta", title:"5 minut uważności ze zwierzakiem", frequency:"dowolnie", xp:12, description:"Obserwacja, spokój i relacja." },
  { id:"together", who:"team", area:"Wspólne", title:"Wspólna misja 15 minut", frequency:"dowolnie", xp:35, description:"Kuchnia, salon, spacer, herbata albo planszówka." }
];
export const WORKOUTS = [
  { name:"Stabilny dosiad", items:[["Deska","Łokcie pod barkami. Napnij brzuch i pośladki. Ciało jak prosta deska. 3 x 30 sekund.","🤸‍♀️——"],["Most biodrowy","Leżenie na plecach. Stopy na ziemi. Unieś biodra, napnij pośladki, opuść powoli. 3 x 15.","🛌⬆️⬇️"],["Przysiad przy ścianie","Plecy do ściany, kolana około 90 stopni. Oddychaj spokojnie. 3 x 30 sekund.","🧍‍♀️🧱"]] },
  { name:"Balans jeźdźca", items:[["Bird Dog","Na czworakach wyprostuj przeciwną rękę i nogę. Utrzymaj 2 sekundy. 3 x 10.","🐕➡️"],["Dead Bug","Na plecach, ręce i nogi w górze. Opuszczaj przeciwną rękę i nogę. Brzuch napięty. 3 x 10.","🐞↘️"],["Stanie na jednej nodze","Patrz w jeden punkt. Potem spróbuj z zamkniętymi oczami. 3 x 30 sekund.","🦩"]] }
];
export const LESSONS = {
  lena:{
    "Weterynaria":[
      {title:"Jak rozpoznać, że pies może czuć ból?",text:"Pies nie zawsze piszczy, gdy coś go boli. Czasem ból widać po zachowaniu: pies jest cichszy, nie chce jeść, unika dotyku, liże jedno miejsce, kuleje albo chowa się.",why:"Szybkie zauważenie bólu pomaga wcześniej zareagować i skonsultować się z weterynarzem.",example:"Przykład: Coco zwykle chętnie się rusza, a dziś nie chce wstać i liże łapę.",task:"Misja: wymień 3 zachowania psa, które mogą oznaczać ból."},
      {title:"Koty i stres — subtelne sygnały",text:"Koty mogą pokazywać stres delikatnie: chowają się, unikają kontaktu, przestają się bawić, nadmiernie się wylizują albo załatwiają poza kuwetą.",why:"Stres u kota może wpływać na zdrowie, jedzenie, sen i relacje.",example:"Bagheera zwykle śpi na kanapie, ale od dwóch dni siedzi pod łóżkiem.",task:"Misja: obserwuj jednego kota przez 3 minuty."},
      {title:"Dlaczego koń nie wymiotuje?",text:"Koń ma silny mechanizm między przełykiem a żołądkiem, który utrudnia cofanie treści pokarmowej.",why:"Problemy trawienne u konia mogą wymagać szybkiej reakcji.",example:"Koń patrzy na brzuch, tarza się, poci i nie chce jeść — to może być kolka.",task:"Misja: zapisz 3 objawy kolki."}
    ],
    "Matematyka":[
      {title:"Procenty na przykładzie karmienia konia",text:"Procent oznacza część ze 100. Aby policzyć 2%, najpierw liczysz 1%, potem mnożysz przez 2.",why:"To przydaje się w żywieniu zwierząt, dawkowaniu i proporcjach.",example:"Koń waży 500 kg. 1% to 500 ÷ 100 = 5 kg. 2% to 5 × 2 = 10 kg.",steps:["Podziel masę przez 100.","Pomnóż wynik przez liczbę procentów.","Dopisz jednostkę, np. kg."],task:"Policz 2% z 450 kg. 450 ÷ 100 = 4,5; 4,5 × 2 = ?"},
      {title:"Czas treningu — dzielenie na części",text:"Jeśli trening ma 20 minut i 4 ćwiczenia, dzielisz 20 przez 4.",why:"Planowanie czasu zmniejsza chaos i ułatwia start.",example:"20 minut ÷ 4 ćwiczenia = 5 minut na każde.",steps:["Sprawdź cały czas.","Policz liczbę ćwiczeń.","Podziel czas przez liczbę ćwiczeń."],task:"Jeśli masz 15 minut i 3 ćwiczenia, ile minut przypada na jedno?"}
    ],
    "Szachy":[{title:"Widełki skoczkiem",text:"Widełki to atak jedną figurą na dwie figury przeciwnika naraz.",why:"Widełki często wygrywają materiał.",example:"Skoczek atakuje króla i wieżę jednocześnie.",task:"Ustaw przykład widełek skoczkiem."}],
    "Język obcy":[{title:"Angielski weterynaryjny",text:"Najłatwiej uczyć się języka przez tematy, które ciekawią.",why:"Angielski daje dostęp do filmów, artykułów i wiedzy o zwierzętach.",example:"vet — weterynarz, pain — ból, paw — łapa, hoof — kopyto.",task:"Ułóż 3 zdania z tymi słowami."}]
  },
  zuza:{
    "Uzależnienia ICD-11":[{title:"ICD-11: substancje i zachowania nałogowe",text:"ICD-11 odróżnia zaburzenia związane z używaniem substancji od zaburzeń wynikających z zachowań nałogowych.",why:"Pomaga to precyzyjniej myśleć diagnostycznie.",example:"Alkohol może wiązać się z objawami odstawienia, a gaming disorder z utratą kontroli mimo szkód.",task:"Zapisz jeden przykład z obu grup."}],
    "Psychodeliki":[{title:"Set, setting i integracja",text:"W badaniach klinicznych nad psychodelikami znaczenie mają kwalifikacja, przygotowanie, otoczenie, bezpieczeństwo i integracja.",why:"Bez integracji doświadczenie może być trudne albo źle zinterpretowane.",example:"Pacjent potrzebuje pomocy w przełożeniu wglądów na codzienne zachowania.",task:"Wypisz 3 pytania do kwalifikacji pacjenta."}],
    "Ogrodnik 2.0":[{title:"Ściółkowanie regeneracyjne",text:"Ściółka chroni glebę, ogranicza parowanie i wspiera mikroorganizmy.",why:"Zdrowa gleba to odporniejsze rośliny i mniejsze zużycie wody.",example:"Rabata ze zrębkami wolniej przesycha niż odsłonięta ziemia.",task:"Znajdź jedno miejsce na ściółkę."}],
    "Szachy":[{title:"Centrum w debiucie",text:"Pola e4, d4, e5 i d5 dają figurom większy wpływ na szachownicę.",why:"Kontrola centrum ułatwia rozwój figur.",example:"Pion na e4 kontroluje d5 i f5.",task:"Po 8 ruchach sprawdź wpływ figur na centrum."}],
    "Język angielski":[{title:"Angielski zawodowy",text:"Warto ćwiczyć zdania, które można realnie wykorzystać w pracy i życiu.",why:"Buduje to język praktyczny, a nie szkolny.",example:"I work as an addiction therapist. I help people understand cravings and relapse patterns.",task:"Przeczytaj przykład na głos i zmień jedno zdanie o sobie."}],
    "Łamigłówki":[{title:"Logika terapeutyczna",text:"Łamigłówki mogą trenować rozpoznawanie wzorców klinicznych.",why:"To wspiera elastyczność poznawczą.",example:"Pacjent mówi: po pracy zawsze mam ochotę się napić. Możliwe hipotezy: stres, zmęczenie, rytuał.",task:"Wypisz 3 alternatywne strategie na moment po pracy."}]
  }
};
