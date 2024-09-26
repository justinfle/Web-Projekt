# Web-Projekt
 
# Währungsrechner 🌍💱

Ein umfassendes Tool zur Umrechnung von Währungen, das Echtzeit-Wechselkurse über die **Open Exchange Rates API** verwendet und zusätzliche Funktionen wie **Favoriten**, **Verlauf**, **Diagramm-Darstellungen** und einen **Dark Mode** bietet. Dieser Währungsrechner ist ideal für Benutzer, die schnell und zuverlässig zwischen verschiedenen Währungen umrechnen möchten, und er bietet eine intuitive Benutzeroberfläche, die sowohl auf Desktop- als auch auf mobilen Geräten funktioniert.

---

## 1. Funktionen ✨

Diese Währungsrechner-Anwendung bietet folgende Features:

- **Echtzeit-Wechselkurse**: Nutzt die **Open Exchange Rates API**, um stets aktuelle Wechselkurse für mehr als 170 Währungen bereitzustellen.
- **Diagrammanzeige**: Nach der Umrechnung zeigt die Anwendung ein Diagramm an, das das Verhältnis zwischen der Ausgangs- und Zielwährung visualisiert. Dies hilft, die Währungsentwicklung besser zu verstehen.
- **Favoriten**: Speichere wichtige Umrechnungen als Favoriten und greife schnell über das Favoriten-Pop-up darauf zu.
- **Verlauf**: Behalte den Überblick über deine letzten fünf Umrechnungen. Der Verlauf speichert die letzten Umrechnungen und zeigt sie übersichtlich an.
- **Dark Mode**: Wechsel einfach zwischen einem hellen und dunklen Design, je nach Vorliebe oder Umgebungslicht.
- **Switch-Button**: Tausche die Ausgangs- und Zielwährung schnell per Klick auf den Switch-Button.

---

## 2. Technologie-Stack 🛠️

Die Anwendung verwendet folgende Technologien:

- **HTML5**: Bietet die grundlegende Struktur der Seite und sorgt für eine klare und saubere Codebasis.
- **CSS3**: Verleiht der Seite ein modernes und benutzerfreundliches Design. Der Dark Mode und responsives Design werden ebenfalls mit CSS gesteuert.
- **JavaScript (ES6)**: Führt die Umrechnungslogik aus, interagiert mit der API und ermöglicht dynamische Interaktionen auf der Seite (Favoriten speichern, Verlauf anzeigen, Diagramme darstellen).
- **Chart.js**: Ein leistungsstarkes Tool zur Visualisierung von Wechselkursen. Es wird verwendet, um ein interaktives Diagramm anzuzeigen, das das Verhältnis der gewählten Währungen zeigt.
- **Open Exchange Rates API**: Stellt aktuelle Wechselkurse für eine Vielzahl von Währungen bereit.

---

## 3. Installation und Einrichtung 📥

### Voraussetzungen

- Ein **moderner Webbrowser** wie Chrome, Firefox, Edge oder Safari.
- Eine **Internetverbindung**, um die Wechselkurse über die API abzurufen.

### Schritte zur Installation:

1. **Repository klonen**:
   Zuerst musst du das GitHub-Repository klonen. Führe dazu folgenden Befehl in deiner Kommandozeile aus:
   ```bash
   git clone https://github.com/DEIN_GITHUB_USERNAME/waehrungsrechner.git
Navigiere ins Verzeichnis: Wechsle in das Verzeichnis des Projekts:

bash
Code kopieren
cd waehrungsrechner
API-Schlüssel konfigurieren: Du benötigst einen API-Schlüssel von Open Exchange Rates, um die Wechselkurse abzurufen.

Registriere dich bei Open Exchange Rates und erhalte einen kostenlosen API-Schlüssel.
Öffne die Datei script.js und ersetze die Variable apiKey durch deinen eigenen API-Schlüssel:
javascript
Code kopieren
const apiKey = 'DEIN_API_KEY';
Starten der Anwendung: Öffne die Datei design.html in deinem Webbrowser.

4. API-Konfiguration 🔑
Dieses Projekt nutzt die Open Exchange Rates API, um aktuelle Wechselkurse zu beziehen. Es gibt verschiedene Tarife für die API, darunter einen kostenlosen Tarif, der tägliche Wechselkurse bietet.

API-Schlüssel erhalten
Registrierung: Gehe zu Open Exchange Rates und erstelle ein Konto.
API-Schlüssel generieren: Sobald du registriert bist, kannst du im Dashboard einen API-Schlüssel erstellen.
Schlüssel in script.js einfügen: Füge deinen API-Schlüssel wie oben beschrieben ein, um die API-Anfragen erfolgreich zu machen.
5. Benutzung der Anwendung 🚀
Die Anwendung ist einfach zu bedienen und bietet viele nützliche Funktionen:

Schritt 1: Betrag eingeben
Gebe den Betrag ein, den du umrechnen möchtest, indem du in das Eingabefeld für den Betrag klickst und die gewünschte Zahl eingibst.

Schritt 2: Ausgangs- und Zielwährung auswählen
Verwende die Dropdown-Menüs, um die Ausgangswährung und die Zielwährung auszuwählen. In der Dropdown-Liste wird sowohl der Währungscode (z. B. USD) als auch der Währungsname (z. B. United States Dollar) angezeigt.

Schritt 3: Umrechnen
Klicke auf den Button „Umrechnen“, um die Umrechnung durchzuführen. Das Ergebnis wird unterhalb der Dropdown-Menüs angezeigt.

Schritt 4: Favoriten speichern
Durch Klicken auf den Stern neben einer Umrechnung kannst du diese als Favorit speichern. Deine Favoriten sind jederzeit über den Button „Favoriten“ abrufbar.

Schritt 5: Verlauf
Die Anwendung speichert die letzten fünf Umrechnungen im Verlauf, sodass du leicht auf frühere Umrechnungen zugreifen kannst.

Schritt 6: Diagrammanzeige
Nach jeder Umrechnung wird ein Diagramm angezeigt, das das Verhältnis zwischen der Ausgangs- und der Zielwährung zeigt. Diese visuelle Darstellung hilft dir, die Wechselkurse besser zu verstehen.

6. Projektstruktur 📂
Das Projekt ist in folgende Dateien und Ordner strukturiert:

design.html: Die Haupt-HTML-Datei, die die Struktur der Seite enthält.
styles.css: Diese Datei enthält das gesamte Styling der Anwendung, einschließlich des Dark Modes.
script.js: Enthält die JavaScript-Logik für das Abrufen der Wechselkurse, die Umrechnung und die Verwaltung des Verlaufs und der Favoriten.
chart.js: Die Chart.js-Bibliothek wird verwendet, um das Wechselkursdiagramm zu erstellen.
7. Detaillierte Funktionsweise ⚙️
Währungsumrechnung
Die Währungsumrechnung erfolgt durch einen einfachen Klick auf den „Umrechnen“-Button, nachdem der Benutzer die Ausgangs- und Zielwährung ausgewählt hat. Die Anwendung verwendet den aktuellen Wechselkurs, um die Umrechnung durchzuführen, und gibt das Ergebnis im unteren Teil der Seite aus.

Favoriten und Verlauf
Der Verlauf speichert die letzten fünf Umrechnungen und zeigt diese dem Benutzer an. Mit einem Klick auf den Stern können Umrechnungen als Favorit gespeichert werden, um einen schnellen Zugriff darauf zu ermöglichen.

Diagrammanzeige
Nach jeder Umrechnung zeigt die Anwendung ein Diagramm an, das den Wechselkurs zwischen den beiden gewählten Währungen visualisiert. Dieses Diagramm wird mithilfe der Chart.js-Bibliothek erstellt und dynamisch aktualisiert.

