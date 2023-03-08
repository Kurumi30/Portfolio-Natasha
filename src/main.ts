import "./style.css"
import Typewriter from "./Typewriter"

const typewriter = new Typewriter(
  document.querySelector(".whitespace") as HTMLElement,
  {
    loop: true,
    typingSpeed: 50,
    deletingSpeed: 5,
  }
);

typewriter
  .typeString("Hello World!")
  .pauseFor(2000)
  .typeString("\nI'm Fernando.")
  .pauseFor(1000)
  .deleteAll(100)
  .typeString("Welcome to my Project!")
  .pauseFor(1000)
  .deleteAll(100)
  .start()
