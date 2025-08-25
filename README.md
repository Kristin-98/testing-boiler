# Todo App – React

Detta är en enkel Todo-applikation byggd med React. Appen tillåter användare att lägga till, markera som klar och slumpa ut en todo. Den är byggd med komponentbaserad struktur och testad med både enhets- och integrationstester.
Projektet använder **Tailwind CSS** för styling.

## Funktioner

- Lägg till nya todos
- Markera todos som klara / inte klara
- Slumpa en todo att börja med (RandomTodo-komponent)

## Komponenter

- **TodoList** – Huvudkomponenten som hanterar listan av todos, inputfält och slumpa-knappen.  
- **RandomTodo** – En komponent som slumpmässigt väljer en todo från TodoList.  
- **TodoItem** – Representerar en enskild todo med checkbox för klar/inte klar. 

## Installation

Kör `npm install` för att installera alla paket.

## Utveckling

Kör `npm run dev` för att starta utvecklingsservern.

## Testning

Kör `npm test` för att köra testerna. Kan köras utan att utvecklingsservern är igång.

## Coverage

Kör `npm run coverage` för att se hur stor del av kodbasen som testerna täcker.

Observera att det nu finns en mapp [coverage](./coverage) med en massa filer (en hemsida). Du kan starta [index.html](./coverage/index.html) filen med live server för att öppna hemsidan. Där ser du mer detaljer om vad dina tester faktiskt testar och inte.
