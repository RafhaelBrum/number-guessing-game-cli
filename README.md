# Number Guessing Game CLI

roadmap.sh backend project - https://roadmap.sh/projects/number-guessing-game

A simple command-line number guessing game. The computer randomly selects a number between 1 and 100, and you have a limited number of chances to guess it based on the difficulty level you choose.

---

## ✅ Features

- Choose between Easy (10 chances), Medium (5 chances), or Hard (3 chances)
- Get feedback whether your guess is too high or too low
- Tracks number of attempts
- Friendly CLI interface with no external libraries

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Native `readline` and `process` modules (no external dependencies)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/RafhaelBrum/number-guessing-game.git
cd number-guessing-game
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npx tsc
```

### 4. Run the game

```bash
npx number-guessing-game
```

---

## 📘 How to Play

When the game starts:

1. Choose a difficulty level:
    - Easy → 10 chances
    - Medium → 5 chances
    - Hard → 3 chances

2. Start guessing the number (between 1 and 100).
3. Get hints: "greater than" or "less than" your guess.
4. Win if you guess correctly before running out of chances.
5. At the end, choose to play again or quit.

---

## 📄 License

This project is for educational purposes only. Free to use and modify.
