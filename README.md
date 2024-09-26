# Web-Projekt
 
# Währungsrechner 

Ein umfassendes Tool zur Umrechnung von Währungen, das Echtzeit-Wechselkurse über die **Open Exchange Rates API** verwendet und zusätzliche Funktionen wie **Favoriten**, **Verlauf**, **Diagramm-Darstellungen** und einen **Dark Mode** bietet. Dieser Währungsrechner ist ideal für Benutzer, die schnell und zuverlässig zwischen verschiedenen Währungen umrechnen möchten, und er bietet eine intuitive Benutzeroberfläche, die sowohl auf Desktop- als auch auf mobilen Geräten funktioniert.

---

## 1. Funktionen 

Diese Währungsrechner-Anwendung bietet folgende Features:

- **Echtzeit-Wechselkurse**: Nutzt die **Open Exchange Rates API**, um stets aktuelle Wechselkurse für mehr als 170 Währungen bereitzustellen.
- **Diagrammanzeige**: Nach der Umrechnung zeigt die Anwendung ein Diagramm an, das das Verhältnis zwischen der Ausgangs- und Zielwährung visualisiert. Dies hilft, die Währungsentwicklung besser zu verstehen.
- **Favoriten**: Speichere wichtige Umrechnungen als Favoriten und greife schnell über das Favoriten-Pop-up darauf zu.
- **Verlauf**: Behalte den Überblick über deine letzten fünf Umrechnungen. Der Verlauf speichert die letzten Umrechnungen und zeigt sie übersichtlich an.
- **Dark Mode**: Wechsel einfach zwischen einem hellen und dunklen Design, je nach Vorliebe oder Umgebungslicht.
- **Switch-Button**: Tausche die Ausgangs- und Zielwährung schnell per Klick auf den Switch-Button.

---

## 2. Technologie-Stack 

Die Anwendung verwendet folgende Technologien:

- **HTML5**: Bietet die grundlegende Struktur der Seite und sorgt für eine klare und saubere Codebasis.
- **CSS**: Verleiht der Seite ein modernes und benutzerfreundliches Design. Der Dark Mode und responsives Design werden ebenfalls mit CSS gesteuert.
- **JavaScript**: Führt die Umrechnungslogik aus, interagiert mit der API und ermöglicht dynamische Interaktionen auf der Seite (Favoriten speichern, Verlauf anzeigen, Diagramme darstellen).
- **Chart.js**: Ein Tool zur Visualisierung von Wechselkursen. Es wird verwendet, um ein interaktives Diagramm anzuzeigen, das das Verhältnis der gewählten Währungen zeigt.
- **Open Exchange Rates API**: Stellt aktuelle Wechselkurse für eine Vielzahl von Währungen bereit.

---

## 3. Installation und Einrichtung 

### Voraussetzungen

- Ein **moderner Webbrowser** wie Chrome, Firefox, Edge oder Safari.
- Eine **Internetverbindung**, um die Wechselkurse über die API abzurufen.


## 5. Benutzung der Anwendung 
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

## 6. Projektstruktur 
Das Projekt ist in folgende Dateien und Ordner strukturiert:

design.html: Die Haupt-HTML-Datei, die die Struktur der Seite enthält.
styles.css: Diese Datei enthält das gesamte Styling der Anwendung, einschließlich des Dark Modes.
script.js: Enthält die JavaScript-Logik für das Abrufen der Wechselkurse, die Umrechnung und die Verwaltung des Verlaufs und der Favoriten.
chart.js: Die Chart.js-Bibliothek wird verwendet, um das Wechselkursdiagramm zu erstellen.

