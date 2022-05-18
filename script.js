// import the word lists
const targetWords = [
  "akita",
  "bison",
  "camel",
  "coral",
  "crane",
  "dhole",
  "dingo",
  "eagle",
  "gecko",
  "goose",
  "guppy",
  "heron",
  "horse",
  "human",
  "hyena",
  "koala",
  "lemur",
  "moose",
  "mouse",
  "otter",
  "prawn",
  "quail",
  "robin",
  "sheep",
  "skunk",
  "sloth",
  "snail",
  "snake",
  "squid",
  "tapir",
  "tiger",
  "zebra"
]

const dictionary = [
  "akita",
  "bison",
  "booby",
  "camel",
  "coati",
  "coral",
  "crane",
  "dhole",
  "dingo",
  "eagle",
  "fossa",
  "gecko",
  "goose",
  "guppy",
  "heron",
  "horse",
  "human",
  "hyena",
  "indri",
  "koala",
  "lemur",
  "liger",
  "macaw",
  "molly",
  "moose",
  "mouse",
  "okapi",
  "otter",
  "prawn",
  "quail",
  "quoll",
  "robin",
  "saola",
  "sheep",
  "skunk",
  "sloth",
  "snail",
  "snake",
  "squid",
  "stoat",
  "tapir",
  "tetra",
  "tiger",
  "xerus",
  "zebra",
  "zorse"
]
// end



// user interaction
startInteraction()

function startInteraction() {
  document.addEventListener("click", handleMouseClick)
  document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick)
  document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess()
    return
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey()
    return
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess()
    return
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey()
    return
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key)
    return
  }
}
// end