<template>

  <div class="container-guide">
    <div class="header">
      <IcoInfo />
      <h1 class="title pl-3">Info</h1>
    </div>
    <div class="content-info">
      <img class="pt-6" src="@/assets/icons/logo/logoM.png" alt="Master" width="10%" />
      <h2 class="title-about">Sobre nosotros</h2>
      <p>KeyMaster es una web para aprender a mejorar tu mecanografía. Ofrece varios modos de juego, un sistema de
        cuentas para poder guardar tu historial de partidas, las teclas en las que cometes más errores y poder agregar a
        tus amigos para poder jugar contra ellos. KeyMaster proporciona una retroalimentación en las partidas en tiempo
        real
        indicando al jugador errores tipográficos y su velocidad de palabras por minuto a las que es capaz de escribir.
      </p>
      <TextIco class="ico pt-6" />
      <h2>Wordtext</h2>
      <p>Wordtext es una opción predeterminada en la que KeyMaster te ofrece diferentes textos para jugar en español,
        aunque en un futuro podrás ir variando también
        en idiomas diferentes como el inglés o lenguajes de programación para que practiques tus habilidades y vayas
        mejorando la velocidad a la hora de escribir. Al mismo tiempo tu mismo podrás incluir tus textos para prácticar
        con un mínimo de 80 y un máximo de 250 carácteres.</p>

      <PlayIco class="ico pt-6" />
      <h2>Modos de juego</h2>
      <p>Atualmente KeyMaster ofrece 3 modos de juego:</p>

      <div class="lista d-flex flex-column align-items-center">
        <ZenIco class="ico-game pt-6" />
        <ul>
          <h3>Modo Zen</h3>
          <li>El modo Zen es el modo de juego en el que tú podrás prácticar la mecanografía on tranquilidad y sin
            presión,
            en ella no tendrás que competir con nadie, básicamente compites con la mejora de tus habilidades
            para ir mejorando en cada partida. Aunque el modo de juego se llame Zen, no significa que no puedas competir
            contra ti mismo y superar tus propias marcas, algo que puede llegar a ser motivante a la hora de ir
            mejorando.
          </li>
        </ul>
        <OnevoneIco class="ico-game pt-6" />
        <ul>
          <h3>1v1</h3>
          <li>El modo 1v1 es un modo de juego en el que te enfrentarás a tus propios amigos o a alguien al cual no
            conozcas, y puedas llegar establecer una amistad añadiendolo a tu lista de amigos para seguir compitiendo
            contra él. En este modo de competición en tiempo real sirve para ver quien es el más rápido a la hora de
            escribir
            y quien es capaz de cometer menos errores. Este modo de juego es ideal para aquellos que les guste la
            competición y
            quieran demostrar que son los más rápidos a la hora de escribir a partir de sus estadísticas.
          </li>
        </ul>

        <PeopleIco class="ico-game pt-6" />
        <ul>
          <h3>Multiplayer</h3>
          <li>El modo Multiplayer es un modo de juego en el que no sólo te enfrentarás a un amigo si no que pueden ser
            varios de ellos, en este modo ya no
            compites contra uno si no contra varios amigos a la vez, en el cual de nuevo podréis ver quien es el más
            rápido a la hora de escribir y quien es capaz de cometer menos errores.
            Este modo es ideal para aquel grupo de amigos que quieran desafiarse mientras mejoran sus habilidades de
            mecanografía.
          </li>
        </ul>
      </div>

      <div class="lista d-flex flex-column align-items-center">
        <StatisticsIco class="ico pt-6" />
        <h2>Estadísticas</h2>
        <p>En KeyMaster queremos que veas tu propia evolución cuanto más practiques, es por ello que ofrecemos que
          puedas ver tus
          propias estadísticas.</p>
        <HistoryIco class="ico-game pt-6" />
        <h3>Historial</h3>
        <p>Una de las cosas más importantes en tu evolución es ser consciente de la cantidad de partidas que realizas, a
          mayor cantidad de partidas que realices más habilidad obtendrás. Es por ello que podrás recurrir a tu
          historial
          de partidas. Podrás ver la fecha de la partida, el tiempo, las WPM, el número de errores, el % de errores, los
          caracteres más fallados y la longitud del texto con el que has practicado.
        </p>
        <ErrorIco class="ico-game pt-6" />
        <h3>Errores</h3>
        <p>Deberás prestar mucha atención a las letras que conforman una palabra, cualquier letra incorrecta creará un
          error y no te dejará avanzar en el texto hasta que esta se haya escrito bien, esto implica que si uno de tus
          dedos
          pulsa una letra incorrecta esta se resaltará en color rojo indicando que has pulsado mal en ese momento, es
          importante que sepas que aquí los errores son acumulativos, es decir, si una letra que no has escrito bien la
          fallas no te dejará avanzar en el texto y contará como un error,
          pero si vuelves a fallarla volverá a contar como otro error y así sucesivamente hasta que des con la tecla
          adecuada. Con este método queremos que seas lo más técnico posible a la hora de teclear y seas capaz de ver
          tus propios errores una y otra vez.
        </p>
        <WpmIco class="ico-game pt-6" />
        <h3>WPM</h3>
        <p>Las siglas "WPM" se refieren a "Words Per Minute" en inglés, lo que traducido al español significa "Palabras
          Por Minuto". Este término se utiliza comúnmente para medir la velocidad de escritura en el tecleo de una
          persona, básicamente mide la cantidad de palabras que eres capaz de escribir por minuto,a mayor cantidad de
          palabras por minuto mayor velocidad de escritura.
          En un mundo digitalizado y que se centra en la comunicación escrita, la velocidad de escritura es una
          habilidad muy preciada
          y en muchos casos indispensable. Ya sea redactando correos electrónicos,
          mensajes de texto, trabajando en documentos o participando en chats en línea, la capacidad de escribir rápido
          y con precisión puede marcar la diferencia en la eficiencia y productividad.
        </p>
        <TimeIco class="ico-game pt-6" />
        <h3>Tiempo</h3>
        <p>El tiempo también es un factor determinante a la hora de escribir un texto junto con las WPM, si las
          "Palabras por minuto" miden la cantidad de palabras que escribes, tiempo en que tardas en
          escribir el texto en conjunto te permite medir tu progreso y ver si has mejorado en la velocidad de
          escritura. Cuanto menos tiempo tardas en escribir un texto implica que tú velocidad de
          escritura ha aumentado, por lo tanto tus WPM han aumentado
          también.
        </p>
        <QuestionIco class="ico pt-6" />
        <h2>¿Preguntas?</h2>
        <p>Si es tu primera vez en una web de mecanografía y has llegado hasta aquí te instamos a que primero visites
          nuestra
        </p>
        <nav class="navbar pt-2">
          <div class="blurbg" :class="{ open: isOpen }" @click="hideNavbar" />
          <div class="links" :class="{ open: isOpen }">
            <ul>
              <li>
                <nuxt-link to="/guide" @click="hideNavbar">
                  <navbarBtn :srcIco="IcoGuide">Guía</navbarBtn>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
        <p class="mt-2">En cualquier otro caso siempre puedes contactar con nosotros mediante redes sociales o enviarnos
          un correo
          electrónico a
        </p>
        <nav class="navbar pt-2">
          <div class="blurbg" :class="{ open: isOpen }" @click="hideNavbar" />
          <div class="links" :class="{ open: isOpen }">
            <ul>
              <li>
                <nuxt-link to="mailto:info@keymaster.com" @click="hideNavbar">
                  <navbarBtn class="mailto" :srcIco="AtsignIco">KeyMail</navbarBtn>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <p class="mt-2">Si no hay más dudas ya sabes lo que toca...
      </p>
      <h1 class="title pt-8">¡ES HORA DE EMPEZAR A PRACTICAR!</h1>
    </div>
  </div>
</template>


<script setup>
import IcoInfo from "~/assets/icons/actions/info.svg"
import TextIco from "~/assets/icons/actions/textIco.svg";
import PeopleIco from "~/assets/icons/actions/peopleIco.svg";
import PlayIco from "~/assets/icons/actions/playIco.svg";
import ZenIco from "~/assets/icons/actions/zenIco.svg";
import OnevoneIco from "~/assets/icons/actions/onevoneIco.svg";
import HistoryIco from "~/assets/icons/actions/historyIco.svg";
import StatisticsIco from "~/assets/icons/actions/statisticsIco.svg";
import WpmIco from "~/assets/icons/actions/wpmIco.svg";
import TimeIco from "~/assets/icons/actions/timeIco.svg"
import ErrorIco from "~/assets/icons/actions/errorIco.svg"
import QuestionIco from "~/assets/icons/actions/questionIco.svg"
import IcoGuide from "~/assets/icons/actions/guide.svg"
import AtsignIco from "~/assets/icons/actions/atsignIco.svg"
import navbarBtn from "~/components/layout/navbar/navbarBtn.vue"

</script>

<style scoped>
.container-guide {
  color: white;
  display: flex;
  flex-direction: column;
  margin: 50px;
}

/* HEADER */
.header {
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid white;
  margin-bottom: 1rem;
  width: 100%;
}

.header svg {
  height: 30px;
  width: auto;
}

.title {
  font-size: 2rem;
  font-weight: 900;
}

img {
  max-width: 100%;
}


h2 {
  font-size: 1.5rem;
  padding-bottom: 1.25rem;
  font-weight: 900 !important;
}

h3 {
  font-size: 1.2rem;
  padding-bottom: 1.25rem;
  font-weight: 900 !important;
}

.ico {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 95px;
}

.ico-game {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
}

.guide-ico {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
}

p {
  font-size: 1.2rem;
}

.guia {
  font-size: 1.2rem;
}

li {
  font-size: 1.1rem;
  padding-bottom: 0.25rem;
  font-weight: normal !important;
}

.key-conf {
  padding-bottom: 1.5rem;
}

.lista,
.content-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.row {
  display: flex;
  justify-content: center;
  padding: 0 15px;
}

.mailto {
  width: 100%;
  white-space: nowrap;
}
</style>