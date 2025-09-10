# 📌 Rättningsrapport – fed24d-the-last-todos-Biehlen

## 🎯 Uppgiftens Krav:
# School Project - Javascript Frameworks - Todos

## 📝 Project Description
 This project was an assignment in the course Javascript Frameworks where the goal was to build a fully functional todo list using React and TypeScript. 

 The app allows users to keep track of tasks they need to complete.
 It displays a list of todos, lets users add new ones, mark them as complete or incomplete, and sort them based on different criteria. 

---

## 🔗 Demo 

Check out the live version here: 
👉 [https://medieinstitutet.github.io/fed24d-the-last-todos-Biehlen/](https://medieinstitutet.github.io/fed24d-the-last-todos-Biehlen/)

---

## 🖼️ Screenshot 

![Screenshot of the todo list app](./src/assets/todo.png)

---

## ⚙️ Tech Stack

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

---

## 🎯 Assignment Requirements 

✅ Basic (Grade G)

- Display a hardcoded list of todo items on screen.
- Mark a todo as completed and reflect the change both visually and in the JavaScript state.
- Use localStorage so that the list persists between sessions.
- Use at least one component and manage state using a list of objects.

⭐ Advanced (Grade VG)

- All of the above, plus:
- Allow toggling todos between completed and uncompleted.
- Add a form to create new todos dynamically.
- Implement sorting (e.g. by completion status or alphabetical order).
- Use a CSS framework such as Tailwind CSS or Material UI.
- Use at least three components.
- Apply the "Lifting State Up" principle to manage shared state properly.

---

## 😄 Author
Created by: 
- [Anna Biehl](https://github.com/biehlen)

---

## 🤝 Credits
This project was developed as part of the curriculum at [Medieinstitutet](https://medieinstitutet.se/) during our first year of studies.

## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla kraven för både grundläggande och avancerade nivåer (G och VG). Studenten har implementerat funktionalitet för att visa en hårdkodad lista av todo-objekt, möjliggjort att markera todos som klara eller ej, använt localStorage för att bevara listan mellan sessioner, använt flera React-komponenter samt hanterat state effektivt. CSS-ramverket Tailwind CSS används för styling, sortering är implementerad, och principen 'Lifting State Up' används. Projektet uppfyller alla uppgiftens krav och studentens kod är välstrukturerad och visar förståelse för React, TypeScript och Vite.

💡 **Förbättringsförslag:**  
Koden kan förbättras genom att implementera några ytterligare felhanteringsrutiner runt localStorage-åtkomst, eftersom dessa operationer kan kasta undantag. En annan möjlig förbättring är att separera id-genereringen och undvika Date.now() på flera efterföljande rader för att säkerställa unika värden i initialTodos-listan. Det kan vara bra att skapa en hjälpmetod för id-generering eller använda ett bibliotek som ger säkra unika ids.