# BEST PRACTICES (de urmat)

- Nume variabile si nume functii: camelCase (ex: var userCount = 100;).
- Nume constate: UPPER_SNAKE_CASE (ex: API_KEY_SERVER=...).
- Numire fisiere: kebab-case (ex: user-profile.js).
- Limba: Engleza.
- Vor exista comentarii inaintea fiecarei functii si la inceputul fiecarui fisier, in care se detaliaza pe scurt ce face fiecare functie in parte.
- Indentare: Se foloseste TAB.
- Acolada de deschidere a unei functii se pune pe acelasi rand cu antetul functiei la un spatiu distanta de paranteza de inchidere a parametrilor.
- Maxim 100 de caractere pe linie.

# REGULI GIT COMMITS

- Fiecare feature dezvoltat va avea propriul branch (https://youtu.be/1SXpE08hvGs?si=nyNuHG5K51iwkKgZ).
- Nu uitati sa preluati shimbarile de pe branch-ul in care vreti sa faceti merge.
- Formatul mesajului de commit: "[tip]: descriere".
- Folosim timpul imperativ.
- Limba: Engleza.
## Tipuri de commit-uri:
- feat: adaugare de functionalitati noi
- fix: rezolvarea unui bug
- docs: modificari aduse documentatiei
- style: modificari care nu afecteaza logica (de exemplu, formatarea codului)
- refactor: refactorizare cod (schimbari care nu afecteaza functionalitatea)
- test: adaugare sau modificare de teste
- chore: sarcini administrative sau alte schimbari care nu afecteaza codul (de exemplu modificarea configuratiilor)

## EX: 
- [fix]: repair button color change functionality
- [style]: adjust opening brace placement in function declaration