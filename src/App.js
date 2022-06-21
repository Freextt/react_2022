//import logo from './logo.svg';
//import './App.css';
import Character from "./components/Character";
function App() {
  return (
      <div>
        <Character
        name = {'Bart'}
        desc = {'lorem ipsum kokalola vremis morgus pilet'}
        picture = {'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
        />
          <Character
          name = {'Homer'}
          desc = {'Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t. He also serves as the main protagonist of the The Simpsons Movie.'}
          picture = {'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
          />
          <Character
          name = {'Marge'}
          desc = {'Marjorie Jacqueline "Marge" Simpson[1] (née Bouvier) is a character, based on the real Marge (Matt Groening\'s mom), in the American animated sitcom The Simpsons and part of the eponymous family. Voiced by Julie Kavner, she first appeared on television in The Tracey Ullman Show short "Good Night" on April 19, 1987. Marge was created and designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks\' office. Groening had been called to pitch a series of shorts based on Life in Hell but instead decided to create a new set of characters. He named the character after his mother Margaret Groening. After appearing on The Tracey Ullman Show for three seasons, the Simpson family received their own series on Fox, which debuted December 17, 1989.'}
          picture = {'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}
          />
          <Character
          name = {'Liza'}
          desc = {'Лі́са Марі Сімпсон (англ. Lisa Marie Simpson) — персонажка анімаційного телесеріалу «Сімпсони», озвучена Ярдлі Сміт. Автор серіалу Мет Ґрейнінґ назвав героїню іменем сестри.\n' +
              '\n' +
              'Ліса — надзвичайно розумна восьмирічна дівчинка, одина з найрозумніших у серіалі (за даними різних серій її IQ становить 156 чи 159). Феміністка. Грає на саксофоні. Полюбляє дивитися мультфільм «Чух і Сверблячка» разом з сім\'єю.'}
          picture = {'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
          />
          <Character
          name = {'Meggie'}
          desc = {'Маргарет «Меґґі» Сімпсон (англ. Margaret "Maggie" Simpson) — одна з головних героїв мультсеріалу Сімпсони, найменша дочка Гомера Сімпсона та Мардж Сімпсон. Протягом усіх років серіалу Меґґі не росте і завжди залишається немовлям у повзунках та підгузнику. Попри свій вік Меґґі потрапляє в різні пригоди разом зі своїм братом Бартом та сестрою Лісою. В одному з серіалів про майбутнє Ліси, Меґґі з\'являється дорослою, але навіть там у неї немає слів.' +
              ' Ідею цього персонажу Мет Ґрейнінґ запозичив від своєї молодшої сестри Меґґі Ґрейнінґ.'}
          picture = {'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
          />

      </div>
  );
}

export default App;
