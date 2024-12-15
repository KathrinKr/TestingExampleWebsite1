import "./App.css";
import cityPic from "./assets/cityPic.jpg";

function App() {
  return (
    <div className="App">
      <h1>Willkommen bei Neustadt!</h1>
      <img src={cityPic} className="headerImage" alt="Bild" />

      <h3>Statistiken über Städte</h3>
      <div className="stats">
        <div id="informationTable">
          <p>Stadt | Einwohnerzahl</p>
          <div className="backgroundRow1">
            <p>Neustadt: 4.5 Millionen Einwohner</p>
          </div>
          <div className="backgroundRow2">
            <p>Paris: 2.1 Millionen Einwohner</p>
          </div>
          <div className="backgroundRow3">
            <p>Tokio: 14 Millionen Einwohner</p>
          </div>
        </div>
      </div>

      <div>
        <h3>Stadtrundführung in Neustadt</h3>
        <p>
          Aktuell bieten wir eine kostenlose
          <a
            className="link"
            target={"new"}
            href={"https://www.stadtrundfahrt.com/"}
          >
            Stadtrundführung
          </a>
          an. Melde dich hier an!
        </p>
      </div>

      <div>
        <form>
          <fieldset>
            <legend>Anmeldung zur Stadtrundführung</legend>

            <label for="firstName">Vorname:</label>
            <input
              type="text"
              id="firstName"
              className="inputField"
              placeholder="Vorname eingeben"
            />

            <label for="lastName">Nachname:</label>
            <input
              type="text"
              id="lastName"
              className="inputField requiredField"
              placeholder="Nachname eingeben"
            />

            <label for="birthYear">Geburtsjahr:</label>
            <input
              type="number"
              id="birthYear"
              className="inputField requiredField"
              placeholder="Geburtsjahr eingeben"
            />

            <p className="hint">
              Die rot markierten Felder sind Pflichtfelder.
            </p>
          </fieldset>
        </form>
      </div>

      <div>
        <h3>Erfahrungsberichte der Stadtrundführung</h3>
        <p className="quote">
          Ich hab noch nie eine so schöne Stadt gesehen. Der Tour-Guide war sehr
          freundlich. Immer gerne wieder!
        </p>
        <p>-Touristin</p>
      </div>

      <div>
        <p>Impressum | Kontakt | Weitere Infos</p>
      </div>
    </div>
  );
}

export default App;
