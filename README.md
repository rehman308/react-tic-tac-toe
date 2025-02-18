# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with React & Vite that allows two players to play alternately. The game keeps track of player moves, determines the winner or draw, and allows resetting for a new game.

## 🎮 Play Now

[DEMO](https://rehman308.github.io/react-tic-tac-toe)

## 🛠 Features

-   Two-player functionality (Player 1: X, Player 2: O)
-   Real-time turn switching
-   Automatic winner detection
-   Draw condition handling
-   Ability to change player names
-   Game log for tracking moves
-   Reset button to restart the game

## 📦 Installation & Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/rehman308/react-tic-tac-toe.git
    cd react-tic-tac-toe
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```
4. Open the app in your browser:
    ```sh
    http://localhost:5173
    ```

## 🏗 Project Structure

```
/react-tic-tac-toe
├── src
│   ├── components
│   │   ├── GameBoard.jsx
│   │   ├── GameOver.jsx
│   │   ├── Header.jsx
│   │   ├── Log.jsx
│   │   ├── Player.jsx
│   ├── winning-combinations.js
│   ├── App.jsx
│   ├── main.jsx
├── public
│   ├── index.html
├── package.json
├── vite.config.js
├── README.md
```
