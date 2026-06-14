# Misje Zuzy i Lenusi — wersja online „na lata”

To jest gotowy projekt aplikacji internetowej PWA przygotowany pod Redmi Note 12S, instalację jako ikonka na ekranie głównym i synchronizację Firebase.

## Co jest w środku
- profile Zuza i Lenusia,
- punkty indywidualne i drużynowe,
- poziomy, zwierzaki, ogród,
- obowiązki domowe z rotacją,
- tryb minimum ratunkowego,
- ćwiczenia jeździeckie z instrukcjami,
- mikrolekcje: weterynaria, szachy, matematyka, język, ICD-11, uzależnienia, psychodeliki, Ogrodnik 2.0,
- emocje i relacje,
- nagrody,
- eksport/import danych,
- przygotowanie pod synchronizację Firebase.

## Krok po kroku
1. Pobierz ZIP i rozpakuj na komputerze.
2. Załóż konto GitHub.
3. Załóż konto Netlify.
4. Załóż projekt Firebase: firebase.google.com → Go to console → Add project.
5. W Firebase dodaj aplikację Web i skopiuj firebaseConfig.
6. Wklej firebaseConfig do pliku src/firebase.js.
7. Firebase Console → Firestore Database → Create database → tryb testowy.
8. Wrzuć projekt na GitHub.
9. Netlify → Add new site → Import from Git.
10. Build command: npm run build. Publish directory: dist.
11. Otwórz link z Netlify w Chrome na Redmi → 3 kropki → Zainstaluj aplikację / Dodaj do ekranu głównego.

Bez Firebase aplikacja działa lokalnie. Z Firebase synchronizuje dane między telefonami.
