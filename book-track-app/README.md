Detalii implementare:

- am destructurat aplicatia in folderele "board, components, styles, utils"
  1. board ar trebui sa trimita spre componentele functionale ale aplicatie, spre exemplu Navigation, CardsList, LinesList, si reprezinta o viziune functionala/o zona din aplicatie
  2. components este folderul care contine componentele generice folosite la construirea diferitelor parti ale aplicatiei(Button, Card, LoadingSpinner, Modal etc)
  3. styles este folderul menit sa tina optiunile generice sau valabile in toata aplicatia de css : mixins, variabile globale, teme etc
  4. utils este folderul menit sa tina functiile utilitare folosite la nivel global; aici vom intalni printre altele functii utilitare de merge-ui clase, extrase elemente din array dupa o anumita cheie, dar si api-urile cu call-urile de axios

- fiecare folder este compus din clasa de js, clasa de scss, si index.js. Aceasta partajare creaza o usurinta de a gasi eventualele erori(apare o problema de css pe componenta de Card, prezumtia e ca vei gasi solutia in Card.scss)
- pentru css am optat pentru BEM notations, care elimina riscul aparitiei claselor css generice care ajung in conflict
- am optat pentru creare de componente custom vs a folosi components libraries, din doua motive :
    1. componentele create pot fi customizate in functie de nevoi, neavand limitari
    2. pt o aplicatie de dimensiunile cerute, componentele importate ar aduce un overhead nenecesar in termeni de functionalitate expusa
- s-au folosit React Hooks
- implementat PropTypes pt type checking
- adaugat spinner cu animatie pt call-ul initial
- implementat animatii&tranzitii pentru un UX imbunatatit

Further improvements:
- adaugarea unui state management: Context API sau Redux(as recomanda probabil Context API, intrucat aplicatia are doar un numar limitat de adancime pe tree-ul de componente)
- imbunatatirea genericitatii componentelor, ca sa suporte mai multe proprietati de personalizare
- implementarea de teste
- imbunatatiri pe partea de responsiveness, si implementarea de media-queries care sa randeze clase diferite in functie de dimensiunea ecranului, aplicatia putand fi dusa pana la nivel de mobile

 Pentru rulare aplicatie:
 - npm install
 - npm run start
 
 Am atasat si un numar de screenshot-uri ale aplicatiei, intr-un folder 'screenshots' atasat