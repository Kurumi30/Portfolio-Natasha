import "../public/style.css"
import Typewriter from "./Typewriter"

const typewriter = new Typewriter(
  document.querySelector(".whitespace") as HTMLElement,
  {
    loop: true,
    typingSpeed: 50,
    deletingSpeed: 5,
  }
)

typewriter
  .typeString("Seja bem-vindo(a)!")
  .pauseFor(2000)
  .typeString("\nEste é o meu portfólio!")
  .pauseFor(1000)
  .deleteAll(100)
  .typeString("Aqui, guardarei as atividades da Profª Natasha.")
  .pauseFor(1000)
  .deleteAll(100)
  .typeString("Clique no botão abaixo para acessar as atividades :)")
  .pauseFor(2000)
  .deleteAll(100)
  .start()
