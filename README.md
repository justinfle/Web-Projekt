# Web-Projekt
 # Währungsrechner 

Ein Tool zur Umrechnung von Währungen, das Echtzeit-Wechselkurse über die **Open Exchange Rates API** verwendet und zusätzliche Funktionen wie **Favoriten**, **Verlauf**, **Diagramm-Darstellungen** und einen **Dark Mode** bietet. Dieser Währungsrechner ist ideal für Benutzer, die schnell und zuverlässig zwischen verschiedenen Währungen umrechnen möchten, und er bietet eine intuitive Benutzeroberfläche, die sowohl auf Desktop- als auch auf mobilen Geräten funktioniert.

---

## 1. Funktionen 

Diese Währungsrechner-Anwendung bietet folgende Features:

Die Währungsrechner-Anwendung bietet eine Vielzahl nützlicher Funktionen, die das Umrechnen von über 170 Währungen so einfach und effizient wie möglich gestalten. Im Zentrum der Anwendung steht die Nutzung der Open Exchange Rates API, welche aktuelle und präzise Echtzeit-Wechselkurse bereitstellt. Dies gewährleistet, dass die Nutzer immer mit den neuesten Wechselkursen arbeiten und auf Marktveränderungen reagieren können.

Ein besonderes Highlight ist die Diagrammanzeige, die nach jeder Umrechnung das Verhältnis zwischen der Ausgangs- und Zielwährung visuell darstellt. Dies hilft den Nutzern nicht nur, den Wechselkurs auf einen Blick zu erfassen, sondern bietet auch Einblicke in die Währungsentwicklung, was besonders nützlich ist, wenn es um die Planung von Investitionen oder den Währungstausch geht.

Zusätzlich können wichtige Umrechnungen als Favoriten gespeichert werden, was es den Nutzern ermöglicht, schnell und einfach auf häufig genutzte Währungen zuzugreifen. Diese Favoriten werden in einem eigenen Pop-up-Fenster angezeigt, das jederzeit über einen Button zugänglich ist.

Um den Überblick zu behalten, speichert die Anwendung zudem die letzten fünf Umrechnungen im Verlauf. Dies erlaubt es den Nutzern, vergangene Umrechnungen schnell nachzuvollziehen oder erneut darauf zuzugreifen, ohne den Umrechnungsprozess wiederholen zu müssen.

Ein weiteres Feature ist der Dark Mode, der es den Nutzern ermöglicht, das Design der Anwendung an die Umgebungsbeleuchtung anzupassen. Besonders in dunkleren Umgebungen bietet der Dark Mode eine augenschonende Alternative, indem die Farben auf ein dunkleres Schema umgeschaltet werden.

Der Switch-Button ist eine kleine, aber äußerst praktische Funktion, mit der die Ausgangs- und Zielwährung mit nur einem Klick getauscht werden können. Dies beschleunigt den Umrechnungsprozess erheblich, besonders wenn Nutzer mehrere Währungswechsel in beide Richtungen durchführen.

---

## 2. Technologie-Stack 

Die Anwendung verwendet folgende Technologien:

- **HTML**: Bietet die grundlegende Struktur der Seite und sorgt für eine klare und saubere Codebasis.
- **CSS**: Verleiht der Seite ein modernes und benutzerfreundliches Design. Der Dark Mode und responsives Design werden ebenfalls mit CSS gesteuert.
- **JavaScript **: Führt die Umrechnungslogik aus, interagiert mit der API und ermöglicht dynamische Interaktionen auf der Seite (Favoriten speichern, Verlauf anzeigen, Diagramme darstellen).
- **Chart.js**: Ein  Tool zur Visualisierung von Wechselkursen. Es wird verwendet, um ein interaktives Diagramm anzuzeigen, das das Verhältnis der gewählten Währungen zeigt.
- **Open Exchange Rates API**: Stellt aktuelle Wechselkurse für eine Vielzahl von Währungen bereit.

---

### 3. Voraussetzungen


Um die Währungsrechner-Anwendung optimal nutzen zu können, sind einige grundlegende Anforderungen notwendig. Zunächst wird ein moderner Webbrowser benötigt, der gängige Webstandards unterstützt. Zu den empfohlenen Browsern gehören Google Chrome, Mozilla Firefox, Microsoft Edge oder Apple Safari, die alle eine stabile und schnelle Performance bieten. Diese Browser sorgen dafür, dass die Anwendung reibungslos läuft und alle Funktionen wie die Echtzeit-Datenverarbeitung und die Darstellung von Diagrammen korrekt dargestellt werden.

Des Weiteren ist eine aktive Internetverbindung erforderlich, da die Anwendung in Echtzeit mit der Open Exchange Rates API kommuniziert, um aktuelle Wechselkurse abzurufen. Ohne eine funktionierende Internetverbindung können die Echtzeit-Wechselkurse nicht abgerufen werden, was die Hauptfunktion der Anwendung beeinträchtigt. Eine stabile Verbindung stellt sicher, dass die Wechselkurse stets auf dem neuesten Stand sind, sodass Umrechnungen präzise und zuverlässig durchgeführt werden können.


## 4. Benutzung der Anwendung 
Die Anwendung ist benutzerfreundlich gestaltet und bietet eine Vielzahl nützlicher Funktionen, die den Umrechnungsprozess schnell und unkompliziert machen. Im Folgenden wird die Bedienung Schritt für Schritt erklärt:

Betrag eingeben: Im ersten Schritt gibst du den gewünschten Betrag ein, den du umrechnen möchtest. Klicke hierzu in das entsprechende Eingabefeld und trage die Zahl ein. Dieses Feld erlaubt es dir, den Betrag flexibel anzupassen, je nachdem, wie viel du umrechnen willst.

Ausgangs- und Zielwährung auswählen: Verwende die Dropdown-Menüs, um die Ausgangs- und Zielwährung auszuwählen. Die Menüs zeigen sowohl den Währungscode (wie z. B. USD) als auch den vollständigen Währungsnamen (z. B. United States Dollar) an, was die Auswahl der gewünschten Währung erleichtert.

Umrechnung durchführen: Nachdem du den Betrag sowie die Ausgangs- und Zielwährung festgelegt hast, kannst du auf den Button „Umrechnen“ klicken. Die Umrechnung wird sofort durchgeführt, und das Ergebnis wird direkt unter den Dropdown-Menüs angezeigt.

Favoriten speichern: Solltest du eine Umrechnung häufiger benötigen, kannst du diese als Favorit speichern. Klicke dazu einfach auf den kleinen Stern neben dem Umrechnungsergebnis. Deine gespeicherten Favoriten sind über den Favoriten-Button jederzeit abrufbar und ermöglichen einen schnellen Zugriff auf wiederkehrende Umrechnungen.

Verlauf einsehen: Die Anwendung speichert automatisch die letzten fünf Umrechnungen im Verlauf. So kannst du leicht auf frühere Umrechnungen zurückgreifen, ohne den Betrag und die Währungen erneut eingeben zu müssen.

Diagrammanzeige: Nach jeder Umrechnung wird zudem ein Diagramm angezeigt, das das Verhältnis zwischen der Ausgangs- und der Zielwährung visualisiert. Diese grafische Darstellung ermöglicht es dir, den Wechselkurs besser zu verstehen und die Umrechnungen visuell nachzuvollziehen.

Diese Schritte führen dich durch den gesamten Prozess der Währungsumrechnung und bieten dir hilfreiche Zusatzfunktionen, die den Umgang mit der Anwendung einfach und effizient machen.


## 5. Projektstruktur 
Das Projekt ist in folgende Dateien und Ordner strukturiert:

design.html: Die Haupt-HTML-Datei, die die Struktur der Seite enthält.
styles.css: Diese Datei enthält das gesamte Styling der Anwendung, einschließlich des Dark Modes.
script.js: Enthält die JavaScript-Logik für das Abrufen der Wechselkurse, die Umrechnung und die Verwaltung des Verlaufs und der Favoriten.
chart.js: Die Chart.js-Bibliothek wird verwendet, um das Wechselkursdiagramm zu erstellen.

## 6. HTML (Design.html)
In der HTML-Datei haben wir die grundlegende Struktur der Währungsrechner-Anwendung aufgebaut, die für die Anzeige und Interaktivität der Benutzeroberfläche sorgt. Jede Komponente wurde so gestaltet, dass sie sowohl funktional als auch benutzerfreundlich ist. Im Folgenden wird zusammengefasst, welche Hauptbestandteile in der HTML-Datei implementiert wurden:

- Grundstruktur der Seite: Zunächst haben wir den grundlegenden Aufbau der Webseite festgelegt. Hierzu wurde der HTML-Standard verwendet, um die Seite so zu strukturieren, dass sie auf verschiedenen Geräten optimal funktioniert. Ein semantisches Grundgerüst wurde erstellt, das klare und übersichtliche Bereiche für die verschiedenen Teile der Anwendung bietet.

- Header und Titel: Im Kopfbereich der Seite haben wir den Titel der Anwendung definiert. Der Titel wird im Browser-Tab angezeigt und beschreibt kurz die Funktion der Anwendung.

- Eingabefeld für den Betrag: Ein zentrales Element der Seite ist das Eingabefeld, in das der Nutzer den Betrag eingeben kann, der umgerechnet werden soll. Dieses Feld wurde als Input-Element vom Typ „number“ definiert, damit der Benutzer nur numerische Werte 
 eingeben kann.

- Dropdown-Menüs für Währungen: Zwei Dropdown-Menüs wurden implementiert – eines für die Ausgangswährung und eines für die Zielwährung. Die Dropdown-Listen zeigen nicht nur den Währungscode (z. B. USD), sondern auch den Namen der jeweiligen Währung (z. B. 
 United States Dollar) an, um dem Benutzer die Auswahl zu erleichtern.

- Button für die Umrechnung: Unter den Eingabefeldern haben wir einen Button eingefügt, der die Umrechnung durchführt. Sobald der Benutzer auf den Button klickt, wird der eingegebene Betrag mithilfe der ausgewählten Währungen umgerechnet, und das Ergebnis wird 
 unter dem Button angezeigt.

- Switch-Button: Ein weiterer wichtiger Bestandteil ist der Switch-Button, der zwischen den Dropdown-Menüs platziert wurde. Mit diesem Button kann der Benutzer die Ausgangs- und Zielwährung mit einem Klick tauschen, um den Umrechnungsprozess noch schneller und 
 effizienter zu gestalten.

- Ergebnisanzeige: Direkt nach der Umrechnung wird das Ergebnis unterhalb der Währungsfelder angezeigt. Dies geschieht in einem eigens definierten Bereich, der das Ergebnis gut sichtbar und klar strukturiert darstellt.

- Verlauf: Um den Benutzer die Möglichkeit zu geben, auf vorherige Umrechnungen zuzugreifen, haben wir einen Verlauf-Abschnitt eingebaut. In diesem Abschnitt werden die letzten fünf Umrechnungen angezeigt. Der Verlauf hilft dem Benutzer, frühere Umrechnungen 
 ohne erneute Eingaben nachzuvollziehen.

- Favoriten: Ein weiteres Feature ist die Favoriten-Funktion. Für jede Umrechnung kann der Benutzer auf ein Sternsymbol klicken, um die Umrechnung zu seinen Favoriten hinzuzufügen. Die Favoriten werden in einem Pop-up-Fenster angezeigt, das über einen Button 
 zugänglich ist.

- Diagramm zur Visualisierung: Zur besseren Veranschaulichung der Wechselkurse wurde ein Bereich für ein Diagramm hinzugefügt. Nach jeder Umrechnung wird das Verhältnis zwischen der Ausgangs- und der Zielwährung in einem Diagramm angezeigt. Hierfür haben wir 
 Platz in der HTML-Datei reserviert, um den Diagramm-Canvas von Chart.js darzustellen.

- Dark Mode Umschalter: Ein Button zum Wechseln in den Dark Mode wurde in die Benutzeroberfläche integriert. Dieser Button ermöglicht es dem Nutzer, das Design der Anwendung von einem hellen auf ein dunkles Farbschema umzustellen, um die Anzeige an 
 unterschiedliche Lichtverhältnisse anzupassen.

- Zusätzliche Pop-ups: Neben den Favoriten haben wir auch ein Pop-up für die Benutzeranleitung eingefügt. Diese Pop-ups bieten dem Benutzer zusätzliche Informationen und Optionen, ohne dass sie die Seite verlassen müssen.

- Responsives Design: Schließlich haben wir in der HTML-Struktur auch darauf geachtet, dass die Seite responsiv ist. Das bedeutet, dass die Seite auf verschiedenen Geräten, wie Smartphones und Tablets, genauso gut funktioniert wie auf dem Desktop. Dies wurde 
 durch die Verwendung von flexiblen Layout-Elementen und Klassen erreicht.

## 7. CSS (styles.css)
In der CSS-Datei wurden das Design und Layout der Währungsrechner-Anwendung festgelegt, um eine funktionale und ästhetisch ansprechende Benutzeroberfläche zu schaffen. Die wichtigsten Gestaltungselemente und ihre Eigenschaften werden im Folgenden zusammengefasst:

1. Grundlegendes Layout und Strukturierung:
Die Grundstruktur der Seite wurde durch Definition des body-Elements und der Hauptcontainer festgelegt. Dabei kamen Abstände (Padding und Margin) zum Einsatz, um die Seite visuell zu gliedern und klar zu strukturieren. Zudem wurde eine maximale Breite für den Hauptinhalt definiert, damit die Anwendung auf verschiedenen Bildschirmgrößen gut aussieht und nicht übermäßig breit dargestellt wird.

2. Farbschema und Schriftarten:
Für die Benutzeroberfläche wurde ein Farbschema gewählt, das schlicht und modern wirkt. Die Kombination von dezenten Hintergrundfarben und klaren Kontrasten sorgt für eine gute Benutzerfreundlichkeit. Die Schriftart und die Schriftgrößen wurden standardisiert, um ein einheitliches Erscheinungsbild der Texte sicherzustellen.
 - Hintergrundfarbe: Eine neutrale Hintergrundfarbe wurde für die gesamte Seite verwendet.
 - Schriftfarbe: Dunkle Schriftfarben wurden gewählt, um eine gute Lesbarkeit auf den hellen Hintergründen zu gewährleisten.

3. Responsive Design:
Ein responsives Layout wurde durch den Einsatz von Flexbox und anderen responsive Techniken umgesetzt, um sicherzustellen, dass sich die Elemente dynamisch an verschiedene Bildschirmgrößen anpassen.
 - Mithilfe von Media Queries wurden spezielle Anpassungen vorgenommen, damit die Anwendung auf Mobilgeräten und Tablets genauso gut funktioniert wie auf Desktop-Geräten.

4. Stil für Eingabefelder und Dropdown-Listen:
Die Eingabefelder für den Betrag und die Dropdown-Listen zur Auswahl der Währungen wurden so gestaltet, dass sie gut sichtbar und benutzerfreundlich sind.
 - Die Größe der Eingabefelder und Dropdowns wurde so angepasst, dass sie leicht auf Touch-Geräten bedienbar sind.
 - Abgerundete Ecken verleihen den Feldern ein modernes und weiches Aussehen.

5. Button-Styling:
Die Buttons, wie der Umrechnen-Button, der Favoriten-Button und der Switch-Button, erhielten einheitliche Stile, um eine konsistente Benutzererfahrung zu gewährleisten.
 - Die Buttons wurden mit einer deutlichen Hintergrundfarbe gestaltet, die mit dem Farbschema der Anwendung harmoniert.
 - Abgerundete Ecken sorgen für eine moderne und angenehme Optik.
 - Hover-Effekte wurden hinzugefügt, sodass sich die Hintergrundfarbe oder die Ränder ändern, wenn der Benutzer mit der Maus über die Buttons fährt. Dies vermittelt dem Benutzer eine interaktive Rückmeldung.

6. Verlauf und Favoriten-Pop-up:
Sowohl der Verlauf als auch das Favoriten-Pop-up wurden visuell so gestaltet, dass sie sich gut in das Gesamtbild der Anwendung einfügen. Beide Bereiche wurden in Boxen eingefasst, die leicht hervorstechen, jedoch dezent bleiben.
 - Schatten wurden hinzugefügt, um die Boxen optisch vom Hintergrund abzuheben.
 - Das Favoriten-Pop-up erscheint als zentriertes modales Fenster mit einem leicht transparenten Hintergrund, um den Fokus auf die favorisierten Umrechnungen zu lenken.
 - Das Entfernen-Symbol in den Favoriten, gestaltet als rotes Kreuz, wurde rechtsbündig platziert, damit es leicht zugänglich und gut erkennbar ist.

7. Diagrammanzeige:
Für die Anzeige des Diagramms, das den Wechselkurs der Währungen visualisiert, wurde ein flexibler Container erstellt, der ausreichend Platz für die Darstellung bietet. Das Diagramm passt sich automatisch an die Größe des Bildschirms an, um auf allen Geräten gut sichtbar zu sein.

8. Dark Mode:
Ein Dark Mode wurde implementiert, der es dem Benutzer ermöglicht, zwischen einem hellen und einem dunklen Farbschema zu wechseln.
 - Im Dark Mode werden die Hintergrundfarben in dunklere Töne geändert, während die Schriftfarben in helle Farben umgewandelt werden, um einen starken Kontrast und damit eine gute Lesbarkeit zu gewährleisten.
 - Der Stern, der für die Favoriten verwendet wird, bleibt auch im Dark Mode gelb umrandet und füllt sich gelb, wenn er aktiviert wird.

9. Feine Details und Animationen:
Für eine dynamischere Benutzererfahrung wurden kleine Animationen und Übergangseffekte hinzugefügt. Hierzu zählen sanfte Übergänge beim Wechsel zwischen dem Hell- und Dunkelmodus sowie Hover-Effekte bei Buttons und interaktiven Elementen.


## 8. JavaScript (Script.js)
In der JavaScript-Datei wurde die gesamte Logik der Währungsrechner-Anwendung implementiert, um die verschiedenen Funktionen interaktiv und dynamisch zu gestalten. Die JS-Datei dient als Rückgrat der Anwendung und steuert die API-Integration, die Berechnungen, das Speichern von Favoriten, die Diagrammanzeige und weitere interaktive Elemente. Im Folgenden werden die Hauptbestandteile der JavaScript-Implementierung beschrieben:

1. Abruf der Echtzeit-Wechselkurse über die API:
Die Anwendung greift auf die Open Exchange Rates API zu, um aktuelle Wechselkurse in Echtzeit zu beziehen. Dies wurde durch eine asynchrone Funktion umgesetzt, die die API-Anfragen bearbeitet und die Daten zurückgibt.
 - Der API-Schlüssel wird in der JS-Datei definiert und in die API-Anfrage eingebunden.
 - Mithilfe von fetch() wurde eine Anfrage an die API gesendet, um die neuesten Wechselkurse zu erhalten.
 - Die Antwort der API wird in JSON-Format verarbeitet und in der Anwendung verwendet, um die Währungsumrechnungen durchzuführen.

2. Betragsumrechnung:
Die zentrale Funktion der JavaScript-Logik besteht darin, den vom Benutzer eingegebenen Betrag mithilfe der abgerufenen Wechselkurse in eine andere Währung umzurechnen.
 - Sobald der Benutzer auf den „Umrechnen“-Button klickt, wird der eingegebene Betrag genommen, die gewählten Ausgangs- und Zielwährungen identifiziert und der Wechselkurs angewendet.
 - Das Ergebnis der Umrechnung wird berechnet und anschließend direkt in der Benutzeroberfläche unter den Dropdown-Menüs angezeigt.

3. Dynamische Dropdown-Listen:
Die beiden Dropdown-Menüs für die Ausgangs- und Zielwährung wurden ebenfalls durch die JavaScript-Datei gesteuert. Die verfügbaren Währungen, die aus der API-Antwort stammen, wurden dynamisch in diese Dropdowns geladen.
 - Die Währungscodes sowie die vollständigen Währungsnamen werden in den Dropdown-Menüs angezeigt.
 - Diese Liste wird bei jedem Laden der Seite automatisch aktualisiert, um sicherzustellen, dass die neuesten Währungsdaten zur Verfügung stehen.

4. Switch-Button:
Der Switch-Button ermöglicht es dem Benutzer, die Ausgangs- und Zielwährung mit einem Klick zu tauschen. Dies spart Zeit und macht den Umrechnungsprozess schneller und effizienter.
 - Beim Klick auf den Switch-Button werden die Werte der beiden Dropdowns miteinander vertauscht, ohne dass der Benutzer die Währungen manuell erneut auswählen muss.

5. Favoritenfunktion:
Eine weitere wichtige Funktion der Anwendung ist die Möglichkeit, Umrechnungen als Favoriten zu speichern. Dazu wurde in der JavaScript-Datei die Logik implementiert, mit der eine Umrechnung durch einen Klick auf den Stern markiert und in einem Favoriten-Pop-up gespeichert werden kann.
 - Die favorisierten Umrechnungen werden in einem Array gespeichert und im Favoriten-Pop-up angezeigt.
 - Jeder Eintrag kann wieder entfernt werden, indem auf ein rotes Kreuz im Favoriten-Pop-up geklickt wird.

6. Verlaufsspeicherung:
Die letzten fünf Umrechnungen werden im Verlauf angezeigt, um dem Benutzer schnellen Zugriff auf frühere Berechnungen zu ermöglichen.
 - Eine Funktion wurde implementiert, um die letzten fünf Umrechnungen in einem Array zu speichern.
 - Sobald eine sechste Umrechnung erfolgt, wird die älteste Umrechnung aus dem Verlauf entfernt, um sicherzustellen, dass immer nur die letzten fünf angezeigt werden.
 - Der Verlauf wird in der Benutzeroberfläche unter dem Umrechnungsergebnis angezeigt.

7. Diagrammanzeige:
Für jede Umrechnung wird ein Diagramm generiert, das das Verhältnis zwischen der Ausgangs- und Zielwährung visuell darstellt. Hierfür wurde Chart.js verwendet, das in der JavaScript-Datei integriert wurde.
 - Nach jeder Umrechnung wird das Diagramm dynamisch aktualisiert, um die aktuellen Wechselkurse anzuzeigen.
 - Die Daten für das Diagramm werden aus den Wechselkursen berechnet, die aus der API abgerufen wurden.

8. Dark Mode Umschaltung:
Die Funktionalität des Dark Modes wurde durch eine Umschaltfunktion in der JavaScript-Datei gesteuert. Der Benutzer kann zwischen einem hellen und einem dunklen Farbschema wechseln.
 - Durch Klick auf den Dark Mode Button ändert sich das Farbschema der Seite, indem spezifische CSS-Klassen hinzugefügt oder entfernt werden.
 - Diese Funktion wurde so implementiert, dass der Dark Mode dynamisch und sofort ohne Neuladen der Seite aktiv wird.

9. Pop-up-Logik:
Für die Favoriten sowie die Anleitung wurden Pop-up-Fenster erstellt, die über die JavaScript-Datei gesteuert werden.
 - Die Pop-ups öffnen sich, wenn der Benutzer auf den entsprechenden Button klickt, und schließen sich, wenn der Benutzer außerhalb des Pop-ups klickt oder auf das Schließen-Symbol drückt.
 - Diese Funktion sorgt dafür, dass zusätzliche Informationen oder Favoriten in einem klar abgegrenzten Bereich angezeigt werden, ohne den Rest der Seite zu beeinträchtigen.

10. Fehlerbehandlung:
Um sicherzustellen, dass die Anwendung auch bei fehlerhaften API-Antworten oder anderen Problemen stabil bleibt, wurde eine Fehlerbehandlung in der JavaScript-Datei implementiert.
 - Bei Problemen mit dem Abrufen der API-Daten wird eine Fehlermeldung in der Konsole ausgegeben, sodass der Benutzer informiert wird, wenn die Wechselkurse nicht geladen werden können.
 - Die Anwendung bleibt auch bei einem API-Fehler weiterhin nutzbar, jedoch mit eingeschränkter Funktionalität.
