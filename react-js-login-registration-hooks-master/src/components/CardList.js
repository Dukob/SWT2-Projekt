import React from 'react';
import Card from './Card';
import "./Card.css";

const cardsData = [
  {
    id: 1,
    name: 'MINI COOPER S CLUBMAN. UNTOLD EDITION',
    image: 'https://images.ctfassets.net/xdc4scvw7fiv/2mOEfZWzd6qFu1NIkRh8Ed/c099f605d8a97680a891906db9126edd/cosySec.jpg',
    category: 'Mini Cooper',
    description: 'Spitzenleistung: 131 kW / (178 PS) | Hubraum: 1.998 cm3 | Kraftstoff: Benzin. Sonderausstattung: Bereifung mit Notlaufeigenschaften, MINI Connected, MINI Untold Edition, Sport-Lederlenkrad Nappa, Dach und Spiegelkappen in Wagenfarbe, Piano Black Exterieur, Fußmatten in Velours, Dachhimmel anthrazit, Premium Plus Paket (JCW Trim/Untold Edition).',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 2,
    name: 'MINI COOPER CABRIO. RESOLUTE EDITION',
    image: 'https://images.ctfassets.net/xdc4scvw7fiv/5tKroHsUzWTyplf3HQTKFp/dd1633890a033b6fe6917713b189b8e5/mini_cooper_cabrio_resolute_edition_18_pulse_spoke_schw.jpg',
    category: 'Mini Cooper',
    description: 'Leistung: 100 kW / 136 PS | Hubraum: 1.499 cm3 | Kraftstoff: Benzin. Sobderausstattung: Sonderausstattung: Notlaufeigenschaften, Sportsitze für Fahrer und Beifahrer, MINI Resolute Edition, Sport-Lederlenkrad Nappa, Außenspiegelkappen schwarz, Piano Black Exterieur, Resolute Exterieur, Fußmatten in Velours',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 3,
    name: 'MINI COOPER 5-TÜRER',
    image: 'https://images.ctfassets.net/xdc4scvw7fiv/1PQdZ8VagcOmHMTBcSg10j/5a7a315ff48b5340f72be20caa87338e/cosySec.jpeg',
    category: 'Mini Cooper',
    description: 'Leistung: 100 kW / 136 PS | Hubraum: 1.499 cm3 | Kraftstoff: Benzin. Sonderausstattung: 16" LM Räder Victory Spoke schwarz, Midnight Black metallic, Stoff-/Leatherettekombination Black Pearl Carbon Black/Carbon Black, Interieuroberfläche Piano Black, Multifunktion für Lenkrad, Sport-Lederlenkrad, Reifendruck-Kontrolle, Warndreieck und Verbandkasten, Beifahrersitz-Höhenverstellung, Regensensor und automatische Fahrlichtsteuerung, Bordcomputer.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 4,
    name: 'MINI JOHN COOPER WORKS CABRIO',
    image: 'https://images.ctfassets.net/xdc4scvw7fiv/4lBfizS61BP2hq5abr7Ayk/dfdb06f89f99c46a6fb0b6ba4bf9bf93/cosySec__1_.jpeg',
    category: 'Mini Cooper',
    description: 'Leistung: 170 kW / 231 PS | Hubraum: 1.998 cm3| Kraftstoff: Benzin. Sonderausstattung: Melting Silver III, 17" LM Räder JCW Track Spoke schwarz, Interieuroberfläche Piano Black, Dinamica-/Stoffkombination Carbon Black, MINI Connected, Essential Trim, Spiegelkappen in Wagenfarbe, Premium Paket, Steuerung EfficientDynamics, Abgasnorm EU6 RDE II, EU spezifische Umfänge, Sport-Automatikgetriebe Steptronic, Real Time Traffic Information, Smartphone Integration, MINI Navigationssystem.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 5,
    name: 'MINI JOHN COOPER WORKS COUNTRYMAN ALL4',
    image: 'https://images.ctfassets.net/xdc4scvw7fiv/5Wv0eeGUiCiD8tmx37QbHU/e8cf0f78660b1a6bc232d1df85baea11/cosySec__3_.jpeg',
    category: 'Mini Cooper',
    description: 'Leistung: 235 kW / 306 PS | Hubraum: 1.998 cm3| Kraftstoff: Benzin. Sonderausstattung: Melting Silver III, 18" John Cooper Works Black Grip Spoke, Interieuroberfläche Piano Black, Dinamica-/Stoffkombination Carbon Black, MINI Connected, Essential Trim, Dach und Spiegelkappen schwarz, DAB-Tuner, Intelligenter Notruf, Teleservices, Real Time Traffic Information, Smartphone Integration, MINI Connected XL, Telefonie mit Wireless Charging, MINI Navigationssystem, Aktiver Fussgängerschutzt.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 6,
    name: 'BMW 4ER GRAN COUPÉ',
    image: 'https://www.bmw-joas.de/wp-content/uploads/2022/07/4ergrancoupe.jpg.webp',
    category: 'BMW',
    description: 'Leistung: 135 kW (184 PS), Hubraum: 1.998 cm³, Kraftstoff: Benzin. Sonderausstattung: Das geschmackvolle Interieur besticht durch hochwertige Materialien, modernes Design und großzügigen Komfort. Zahlreiche Individualisierungsmöglichkeiten lassen ihr einzigartiges Wohlfühlambiente entstehen. Erfreuen Sie sich zudem an einer breiten Auswahl nützlicher und instinktiver Funktionen, die das Fahren noch angenehmer und sicherer machen. Auch beim Parken werden Sie durch den serienmäßigen Parking Assistant inklusive Rückfahrkamera unterstützt.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 7,
    name: 'BMW X5',
    image: 'https://www.bmw-joas.de/wp-content/uploads/2022/10/the-bmx-x5-aussen.jpg.webp',
    category: 'BMW',
    description: 'Leistung: 210 kW (286 PS), Automatikgetriebe, Kraftstoff: Diesel. Sonderausstattung: Der BMW X5 strahlt Überlegenheit aus. Das optionale BMW Laserlicht mit blauen x-förmigen Elementen setzt ein deutliches ästhetisches Zeichen. So können Sie besser sehen und gesehen werden, ohne andere zu blenden.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 8,
    name: 'BMW i7 xDrive60 Limousine',
    image: 'https://derivates.kicker.de/image/upload/c_crop,x_0,y_90,w_2250,h_1266/w_1000,q_auto/v1/2022/11/05/4df15f8e-0073-4acf-809c-b39af95a616c.jpeg',
    category: 'BMW',
    description: 'Leistung: 400 kW (544 PS), Automatikgetriebe, Elektrische Auto. Sonderausstattung: Die Ladeperformance ist abhängig von Ladezustand, Umgebungstemperatur, individuellem Fahrprofil und Nutzung von Nebenverbrauchern. Die dargestellten Reichweiten sind bezogen auf den WLTP Best Case. Die Ladezeiten gelten für Umgebungstemperaturen von 23°C nach vorangegangener Fahrt und können entsprechend des Nutzungsverhaltens abweichen.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 9,
    name: 'BMW M850i xDrive Cabriolet',
    image: 'https://cdn.drivek.com/configurator-imgs/cars/de/800/BMW/M8-CABRIO/40945_CONVERTIBLE-2-DOORS/bmw-m8-convertible-2022-side-front.jpg',
    category: 'BMW',
    description: 'Leistung: 460 kW (625 PS), Automatikgetriebe, Kraftstoff: Benzin. Sonderausstattung: M Aerodynamikpaket, 19" M Leichtmetallräder & 18" M Sportbremse, M Einstiegsleisten, M Fahrerfußstütze und M spezifische Pedalerie, Exklusive Lackierungen und M spezifische Designelemente, Multifunktionssitze für Fahrer und Beifahrer in Leder Merino',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 10,
    name: 'BMW 3er TOURING',
    image: 'https://cdn.bimmertoday.de/wp-content/uploads/2022/05/BMW-3er-Touring-Facelift-2022-Basismodell-G21-LCI-1536x1024.jpg',
    category: 'BMW',
    description: 'Leistung: 375 kW (510 PS), Hubraum: 2.993 cm³, Kraftstoff: Benzin. Sonderausstattung: Innovative Bedienung durch moderne Technologien wie dem Intelligent Personal Assistant, Der Rückfahrassistent und weitere intelligente Fahrerassistenzsysteme für optimalen Fahrkomfort in jeder Situation, Fahrerorientiertes Cockpit und innovatives BMW Curved Display mit Touch-Bedienkonzept.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 11,
    name: 'MERCEDES EQB 250',
    image: 'https://www.mercedes-benz.de/content/germany/de/passengercars/models/suv/x243-23-1/overview/_jcr_content/root/responsivegrid/highlight_copy/slider/image_95889.component.damq4.3366236953275.jpg/mercedes-eq-eqb-x243-exterior-paintfinish-06-3302x1858-03-2023.jpg',
    category: 'Mercedes-Benz',
    description: 'Leistung: 140 kW (190 PS), Automatikgetriebe, Elektrische Energie. Sonderausstattung: Der Aktive Spurhalte-Assistent kann Sie per Lenkradvibration warnen, falls Sie unbeabsichtigt eine Fahrbahnmarkierung überfahren. Der Geschwindigkeitslimit-Assistent macht es Ihnen leichter, die Vorgaben einzuhalten und unnötige Strafzettel zu vermeiden. Das System zeigt an, was erlaubt ist. Der Aktive Park-Assistent PARKTRONIC[1] unterstützt Sie beim Parken und Rangieren. Ultraschallsensoren überwachen den vorderen und rückwärtigen Bereich Ihres Fahrzeugs.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 12,
    name: 'B-Klasse Sports Tourer',
    image: 'https://www.mercedes-benz.de/content/germany/de/passengercars/models/hatchback/b-class/overview/_jcr_content/root/responsivegrid/tabs_copy/tabitem/hotspot_module_1056677643/hotspot_simple_image.component.damq4.3366359117695.jpg/mercedes-benz-b-class-w247-exterior-hotspot-start-3302x1858-03-2023.jpg',
    category: 'Mercedes-Benz',
    description: 'Leistung: 110 kW (150 PS), Automatikgetriebe, Kraftstoff: Diesel. Sonderausstattung: DYNAMIC SELECT bietet auf Knopfdruck verschiedene Fahrprogramme, die beispielsweise Motor, Getriebe, Fahrwerk oder Lenkung vorbestimmen. Mit dem Fahrprogramm verändern Sie auch die Charakteristik des Doppelkupplungsgetriebes, wahlweise für effizientes Fahren mit niedrigen Drehzahlen oder für beeindruckende hohe Dynamik.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 13,
    name: 'CLS Coupé',
    image: 'https://www.mercedes-benz.de/content/germany/de/passengercars/models/coupe/c257-22-2/overview/_jcr_content/root/responsivegrid/tabs_1275623578/tabitem/highlight/slider/image.component.damq4.3340151074436.jpg/mercedes-benz-cls-c257-manufaktur-exterior-09-3302x1858-11-2022.jpg',
    category: 'Mercedes-Benz',
    description: 'Leistung: 286 kW (350 PS), Automatikgetriebe, Kraftstoff: Diesel. Sonderausstattung: Der optional erhältliche GUARD 360° Fahrzeugschutz bietet eine Rundum-Überwachung des Fahrzeugumfelds – etwa mit der Einbruch- und Diebstahlwarnanlage und dem Abschleppschutz. Dieses hochentwickelte System möchten Sie vor allem im Kolonnenverkehr oder in Staus nicht mehr missen. Der Aktive Lenk-Assistent bietet Ihnen einen spürbaren Komfortgewinn am Steuer: Das System kann Sie mittels sanfter Lenkeingriffe dabei unterstützen, Ihr Fahrzeug mittig in der Fahrspur zu führen.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 14,
    name: 'E-Klasse Cabriolet',
    category: 'Mercedes-Benz',
    image: 'https://www.mercedes-benz.de/content/germany/de/passengercars/models/cabriolet-roadster/a238-fl-22-2/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image.component.damq4.3340746004841.jpg/mercedes-benz-e-class-cabriolet-a238-exterior-hotspot-start-3302x1858-09-2022.jpg',
    description: 'Leistung: 143 kW (194 PS), Automatikgetriebe, Kraftstoff: Diesel. Sonderausstattung: Der Aktive Park-Assistent mit PARKTRONIC kann das Fahrzeug nicht nur selbstständig in eine Parklücke bewegen, bei einer Maximalgeschwindigkeit von bis zu 35 km/h hilft er sogar dabei, den geeigneten Parkplatz zu finden. Der Aktive Brems-Assistent erkennt jetzt auch beim Abbiegen auf der Gegenfahrbahn entgegenkommende Fahrzeuge und kann Sie noch besser vor Kollisionen schützen. Erweitertes automatisches Wiederanfahren auf Autobahnen, Streckenbasierte Geschwindigkeitsanpassung mit Stauendefunktion, Aktiver Geschwindigkeitslimit-Assistent. Sie geben das Tempo vor, das E-Klasse Cabriolet übernimmt den Rest. Das Automatikgetriebe 9G-TRONIC wechselt, ohne dass Sie es bemerken. Die neun Gänge ermöglichen stets niedrige Drehzahlen. So haben Sie immer ein angenehmes Geräuschniveau und niedrigeren Kraftstoffverbrauch.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 15,
    name: 'Mercedes T-Klasse',
    category: 'Mercedes-Benz',
    image: 'https://www.mercedes-benz.de/content/germany/de/passengercars/models/van/t-class/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image.component.damq4.3328722527362.jpg/mercedes-benz-t-class-vs11-overview-exterior-highlights-sspip137150-3302x1858-05-2022.jpg',
    description: 'Leistung: 70 kW (95 PS), Automatikgetriebe, Kraftstoff: Diesel. Sonderausstattung: Die Vorrüstung Mercedes me connect ermöglicht Ihnen die Nutzung einer Vielzahl an Services und Diensten: von hilfreichen Sicherheits- und Wartungsdiensten bis zu unterschiedlichsten Navigationsfunktionen. Sie tragen zu mehr Sicherheit, mehr Komfort und einem Plus an Konnektivität bei und können so den Alltag mit Ihrem Fahrzeug erleichtern. Die Vorrüstung für Live Traffic Information schafft die technische Voraussetzung für den Abruf aktueller und präziser Verkehrsinformationen, optimale dynamische Zielführung und exakt berechnete Ankunftszeiten. Der Verkehrszeichen-Assistent macht es Ihnen leichter, sich an Geschwindigkeitsbegrenzungen und andere Vorgaben zu halten. Er kann wichtige Schilder wie Geschwindigkeitsbegrenzungen und Überholverbote, aber auch Zusatzschilder wie zum Beispiel „Bei Nässe“ erkennen und im Kombiinstrument anzeigen. Das Aktive Sicherheits-Paket umfasst 4 Assistenzsysteme, die Sie entlasten und das Fahren sicherer machen können. Dazu gehören der Aktive Brems-Assistent, der Totwinkel-Assistent, der Aktive Spurhalte-Assistent und der Geschwindigkeitslimit-Assistent bzw. – in Verbindung mit dem Navigations-Paket – der Verkehrszeichen-Assistent. Dank KEYLESS-GO kann Ihr Fahrzeugschlüssel in der Tasche bleiben. Ihr Fahrzeug erkennt Sie mittels der gespeicherten Zugangs- und Fahrberechtigung als Besitzer und entriegelt sich bei Annäherung oder auf Knopfdruck am Türgriff, ohne dass Sie den Schlüssel in die Hand nehmen müssten.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 16,
    name: 'Toyota  Proace City Verso',
    category: 'Toyota',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/toyota/proacecityverso/1/5minimpv-combil2/toyota_20proacectyvermpvlwbmp1b_angularfront.png',
    description: 'Leistung: 96 kW (130 PS), Automatikgetriebe, Kraftstoff: Benzin. Sonderausstattung: Der Proace City Verso ist mit einer Auswahl aus drei verschiedenen Sicherheitspaketen erhältlich, passend zu deinem Bedarf. Durch seine serienmäßigen Sicherheitsfunktionen kannst du dir sicher sein, dass der Proace City Verso deinen Schutz ernst nimmt. Die Sprachaktivierungs- und Touchscreen-Technologie bietet Multimedia und Konnektivität auf allerneuestem Stand. Sein 8“-Bildschirm sorgt für ein intuitives Infotainment-Erlebnis, das weit über Audiofunktionen hinausgeht: Greife auf Smartphonefunktionen wie MirrorLink®, Apple CarPlay™ mit Siri-Assistenz, Android Auto™ mit Google Assistant oder Bluetooth® zu. Smart-Key-System: schlüsselloses Öffnen/Verschließen des Fahrzeugs über Fahrer-, Beifahrertür und Heckklappe sowie Starten des Motors per Start-/Stop-Knopf.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 17,
    name: 'Toyota Yaris Hybrid',
    category: 'Toyota',
    image: 'https://www.meinauto.de/pics/auto_neuwagen/toyota-yaris-hybrid.png',
    description: 'Leistung: 85 kW (116 PS), Automatikgetriebe, Kraftstoff: Hybrid Benzin. Sonderausstattung: Bei den Assistenzsystemen gibt sich der kleine Yaris wie ein Großer. Zum Großteil Serie sind zum Beispiel Abstandsradar, Spurhalte- und ein Notbremsassistent, der bis 180 km/h funktioniert. Bei querenden Fußgängern bremst der Yaris automatisch und beim Rückwärtsausparken warnt er vor Querverkehr. Ein Head-up-Display zeigt wichtige Infos wie Tempo oder Navigationsdaten und die Verkehrszeichenerkennung funktioniert besser als bisher. Neu: Seitenairbags, die sich zwischen den Vordersitzen aufblasen, damit Fahrer und Beifahrer bei einem Crash nicht kollidieren. Das Anfahren mit dem Hybrid geht flott vonstatten, hier kommt der Vorteil des unmittelbar anstehenden Drehmoments des Elektromotors zum Tragen. Den simulierten Überholvorgang (Beschleunigung unter Volllast von 60 auf 100 km/h) schließt der Kleinwagen nach 7,8 Sekunden ab. Laut Hersteller vergehen aus dem Stand auf Tempo 100 9,7 Sekunden, bei 175 km/h ist mit dem Vortrieb Schluss.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 18,
    name: 'Toyota Aygo X',
    category: 'Toyota',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/toyota/aygox/1/5suv-limited/toyota_22aygoxxlimitedsu1b_angularfront.png',
    description: 'Leistung: 53 kW (72 PS), Automatikgetriebe, Kraftstoff: Diesel. Sonderausstattung: Unser Pre-Collision System kann mögliche Kollisionen mit anderen Fahrzeugen, Fußgängern und Radfahrern erkennen und hilft, diese zu vermeiden. Zuerst wird der Fahrer durch akustische und optische Signale gewarnt und der Bremsassistent aktiviert. Sollte der Fahrer nicht rechtzeitig reagieren können, bremst das Fahrzeug automatisch, um eine Kollision zu vermeiden oder abzumildern. Unser Spurhalteassistent sorgt für mehr Sicherheit auf der Autobahn. Er hält das Fahrzeug zuverlässig in der Spur. Wird diese verlassen, steuert die Lenkhilfe das Fahrzeug sanft in die richtige Richtung. Mit diesem System wird das Ein- und Ausparken einfacher und sicherer. Die Aufnahmen von vier Kameras werden zu einer 360°-Rundumsicht kombiniert. Dieses System warnt den Fahrer vor örtlichen Gefahren, z. B. vor Unfällen oder rutschigen Oberflächen, indem es Informationen von anderen Fahrern sammelt und auf dem Multimedia-Bildschirm des Fahrzeugs anzeigt. Je nach Art des Multimedia-Systems können auch potenzielle Gefahren gemeldet werden, was zu einer allgemeinen Verbesserung der Verkehrssicherheit beiträgt. Wenn für eine bestimmte Zeit keine Eingriffe durch den Fahrer registriert werden, ertönt ein akustisches Warnsignal. Erfolgt keine Reaktion, wird das Fahrzeug automatisch auf der aktuellen Fahrspur sicher bis zum Stillstand abgebremst. Gleichzeitig werden andere Verkehrsteilnehmer über die aktivierte Warnblinkanlage gewarnt. Die Türen werden entriegelt, um dem Rettungsdienst bei Bedarf den Zugang zu erleichtern.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 19,
    name: 'Toyota Corolla Hybrid',
    category: 'Toyota',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/toyota/corolla/12/5hatchback-hybridclub/toyota_19corollahybstylehb12b_angularfront.png',
    description: 'Leistung: 103 kW (140 PS), Automatikgetriebe, Kraftstoff: Benzin. Standarausstattung: Myt Connected Services (Parkpositionsfinder, Routenplanung, Inspektionserinnerung etc.). Sprachsteuerung, Smart Voice Assistant, Smartphone Integration, Rückfahrkamera, Orientierungslinien statisch, Digitales Cockpit 12,3", Multimedia-System Toyota Smart Connect mit Cloud-Navigation, Klimaautomatik, 2-Zonen, Fensterheber, elektrisch ("One-Touch").',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 20,
    name: 'Toyota C-HR Hybrid',
    category: 'Toyota',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/toyota/chr/1/5suv-team/toyota_20chrhybridclubsu1fb_angularfront.png',
    description: 'Leistung: 176km/h, Automatikgetriebe, Kraftstoff: Hybrid Benzin. Sonderausstattung: Toyota Safety Sense sind Fahrerassistenzsysteme, die deine Sicherheit erhöhen. Sieben SRS-Airbags sind im gesamten Fahrzeuginnenraum verbaut und sorgen dafür, dass im Falle einer Kollision jeder Fahrzeuginsasse gut geschützt ist. Der Toyota Touch 2 bietet dir Bluetooth-Telefonintegration, MP3 / WMA-Musikkompatibilität, Toyota Real Time Traffic und Tomtom. .',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 21,
    name: 'Cupra Leon',
    category: 'Cupra',
    image: 'https://images.prismic.io/shacarlacca/ODBhZDg5YjItOTIyMy00MTVhLWJlMzAtMzk2OWUxYTdkMmM2__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1200&h=1200',
    description: 'Leistung: 110 kW (150 PS), Automatikgetriebe, Kraftstoff: Benzin. Sonderausstattung: Die Verkehrszeichen-Erkennung weist dich visuell auf Geschwindigkeits-Begrenzungen hin. Der Parklenkassistent parkt deinen CUPRA Leon selbstständig ein. Der Stauassistent beobachtet den Verkehr in der Nähe, regelt Bremsvorgänge und hält das Fahrzeug in der Spur. Perfekt bei Stop-and-go. Die Anordnung der Instrumente im 10, 25″-Vir tual-Cockpit folg t dem Wunsch des Fahrers nach Geschwindigkeit, Präzision und schnellstmöglicher Reaktion. In der Mitte positioniert: der Drehzahlmesser, Anzeige bis 8000 U/min. Roter Bereich ab etwa 6200 U/min.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 22,
    name: 'CUPRA Ateca 2.0',
    category: 'Cupra',
    image: 'https://www.schwaba.de/templates/yootheme/cache/10/cupra_ateca_beitrag-10a12ea7.webp',
    description: 'Leistung: 221 kW (300 PS), Automatikgetriebe, Kraftstoff: Benzin. Standarausstattung: Die Connectivity Box. Smartphone kabellos laden und sofort mit dem CUPRA Ateca verbinden. Die Top-View Kamera gibt dir den Blick aus der Vogelperspektive. Für perfektes Einparken. Warnt dich, wenn dir andere zu nahe kommen. Reduziert deine Geschwindigkeit, wenn du zu dicht auffährst. Und bremst in. Erkennt Hindernisse und Kurven. Die Halb-Automatische-Lenkkorrektur hält das Fahrzeug in der richtigen Spur. Ein- und Ausparken: einfach delegieren. Der Parklenkassistent übernimmt das. Automatisch.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 23,
    name: 'CUPRA Formentor',
    category: 'Cupra',
    image: 'https://www.cupraofficial.com.tr/CupraFiles/202331523158367_CUPRA%20Formentor%201.5_XL.png',
    description: 'Leistung: 150 kW (204 PS), Automatikgetriebe, Kraftstoff: Benzin. Sonderausstattung: Der Travel Assist hält dich automatisch in der richtigen Spur. Lückenlose Kontrolle. Hightech-Sensoren überwachen jeden Winkel außerhalb deines Sichtfeldes. Alles auf dem Radar. Der Front Assist verhindert mögliche Unfälle durch automatisches Bremsen. Sieht, was du nicht siehst. Sobald ein Objekt in deinem toten Winkel auftaucht, warnt dich Side Assist mit einem visuellen Hinweis. Auf alles vorbereitet. Der PreCrash Assist schließt die Fenster und strafft die Sitzgurte falls er eine gefährliche Situation registriert.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 24,
    name: 'Cupra Born',
    category: 'Cupra',
    image: 'https://i0.wp.com/www.mobiflip.de/wp-content/uploads/2021/11/cupra-born-fahrt-header.jpg?w=1600&ssl=1',
    description: 'Leistung: 170 kW (231 PS), Automatikgetriebe, Kraftstoff: Elektrik. Standarausstattung: Erneuerbare Energien. Um CO₂-Emissionen zu reduzieren. Zertifizierte Umweltprojekte. Zuhause. Unterwegs. Am Zielort. Du hast die Wahl. Geladen von 5 auf 80%. Ab 30 Minuten Ladezeit. Mit Car2X können Informationen von anderen und an andere Fahrzeuge übermittelt werden. Die lokale Gefahrenwarnung meldet anderen Fahrzeugen wesentliche Anhaltspunkte zu einer erkannten Gefahrenstelle/-situation. Empfängt ein Fahrzeug diese Hinweise so werden diese verarbeitet und an den Fahrer audiovisuell übermittelt. Passt die Reaktion des Fahrwerks an alle Fahrbedingungen, jede Kurve und Bodenwelle an. Durch Adaptive Fahrwerksregelung, die dem jeweils ausgewählten Drive Profile folgt. Persönliche Performance ist leicht machbar. CUPRA Born. Die adaptive Fahrwerksregelung DCC. In Kombination mit den 20" Leichtmetallrädern "FIRESTORM Black/Silver" mit Performancebereifung. Noch sportlicher. Der CUPRA Born erkennt den Fahrer automatisch. Mit dem schlüssellosen Schließ-und Startsystem Kessy advanced. Weiterentwickelt für den CUPRA Born. Steigt der Fahrer in das Fahrzeug ein, werden Komfortfunktionen, wie die Klimaanlage und die Sitzheizung, aktiviert. Durch betätigen des Bremspedals startet das Fahrzeug automatisch. Ganz ohne Knopfdruck. Gang einlegen. Losfahren. Verlässt der Fahrer bei Stillstand das Fahrzeug, schaltet der CUPRA Born den Motor selbsttätig ab. .',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 25,
    name: 'Cupra Leon Kombi DSG',
    category: 'Cupra',
    image: 'https://aurento.de/wp-content/uploads/2023/03/Cupra-Leaon-ST-seitlich-weiss-800x800.jpg',
    description: 'Leistung: 180 kW (245 PS), Automatikgetriebe, Kraftstoff: Benzin. Standarausstattung: Der Stauassistent bremst automatisch ab, je nachdem, was vor dir passiert und hält dich gleichzeitig in der der Mitte der Spur. Sehr praktisch, vor allem im Stop-and Go-Verkehr. Wenn beim Spurwechsel etwas in deinem toten Winkel ist, warnt dich der Blind-Spot Sensor mit einem Signal im Außenspiegel. Verbesserte und erweiterte Aerodynamik dank dem optimierten Design von Karosserie, Reifen und Klimaanalge.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 26,
    name: 'Tesla  Model X',
    category: 'Tesla',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/tesla/modelx/1/5suv-100d/tesla_17modelx100dod1b_angularfront.png',
    description: 'Leistung: 493 kW (670 PS), Automatikgetriebe, Kraftstoff: Elektrik. Standarausstattung: Das Model X wurde von Grund auf als Elektrofahrzeug gebaut. Es verfügt über eine hochfeste Architektur und eine bodenmontierte Batterie, um höchsten Insassenschutz mit geringem Überschlagrisiko zu kombinieren. Mit dem Autopilot-Assistenzsystem kann Ihr Auto unter Ihrer aktiven Aufsicht automatisch auf seiner Fahrspur lenken, beschleunigen und bremsen und so die anstrengendsten Teile des Fahrens bewältigen. Mit drahtlosen Software-Updates sind die neuesten Verbesserungen sofort verfügbar. Die Model X-Plattformen nutzen spezielle Antriebsstrang- und Batterietechnologien für unübertroffene Leistung, Reichweite und Effizienz. Die neue Thermoarchitektur für Module und Packs erlaubt schnelleres Laden und bietet Ihnen unter allen Bedingungen mehr Leistung und Ausdauer. Die Bluetooth-Funktion für mehrere Geräte erlaubt sofortige Verbindung zu Ihren Bluetooth-Geräten. Gleichzeitig können Sie Mobilgeräte kabellos oder an USB-C mit 36W schnell laden. Der 17-Zoll-Touchscreen ist links-rechts schwenkbar und bietet eine Auflösung von 2200 x 1300, Echtfarben und eine außergewöhnliche Reaktionsfähigkeit für Spiele, Filme und mehr. Das Model X bietet einen geräumigen Innenraum mit der weltweit größten Panorama-Windschutzscheibe und bis zu sieben Sitzplätzen, etc..',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 27,
    name: 'Tesla Model 3',
    category: 'Tesla',
    image: 'https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_2000/v1/ADAC-eV/KOR/Bilder/PR/tesla-3-stehend-2301_vyxf0o',
    description: 'Leistung: 377 kW (513 PS), Automatikgetriebe, Kraftstoff: Elektrik. Standarausstattung: Das riesige Glasdach des Model 3 sorgt für ein helleres und geräumigeres Ambiente im Innenraum und einen ungehinderten Blick auf den Himmel. Unser Premium-Audiosystem umfasst 14 Lautsprecher, schließt einen Subwoofer sowie zwei Verstärker ein und spielt mit fulminanter Dynamik auf, wodurch sich der Innenraum in einen Konzertsaal verwandelt. Der 15-Zoll-Touchscreen gewährt Ihnen Zugriff auf sämtliche Funktionen. Diese werden durch regelmäßige Software-Updates mit neuen Merkmalen, Funktionalitäten und Leistungen ausgebaut, damit Ihr Tesla mit der Zeit noch besser wird. Der Tesla-Allradantrieb verfügt über zwei voneinander unabhängige Elektromotoren für mehr Redundanz - jeder mit nur einem beweglichen Teil für minimalen Wartungsaufwand und maximale Lebensdauer. Im Gegensatz zu herkömmlichen Allradantrieben steuern sie das Drehmoment digital an den Vorder- und Hinterrädern, um ein wesentlich besseres Fahrverhalten und bessere Traktion zu gewährleisten. Die Autopilot-Funktionalität ermöglicht automatisches Lenken, Beschleunigen und Bremsen des Fahrzeugs auf seiner Spur. Volles Potenzial für autonomes Fahren beinhaltet zusätzliche Merkmale: Automatisches Herbeirufen Ihres Fahrzeugs, Paralleles und rechtwinkliges Einparken durch einmaliges Antippen.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 28,
    name: 'Tesla Model S',
    category: 'Tesla',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/tesla/models/1/5hatchback-plaid/tesla_21modelsplaid4wdhb1re_angularfront.png',
    description: 'Leistung: 493 kW (670 PS), Automatikgetriebe, Kraftstoff: Elektrik. Standarausstattung: Authentisches Klangumfeld: Ein 960-Watt-Audiosystem mit 22 Lautsprechern und aktiver Straßengeräuschunterdrückung bietet immersiven Audiogenuss in Studioqualität. Durch einen vorderen sowie hinteren Kofferraum und umklappbare Sitze, können Sie Ihr gesamtes Fahrrad, ohne das Rad abmontieren zu müssen, samt Ihrem Gepäck bequem verstauen. Das Model S Plaid bietet die höchste Beschleunigung aller in Produktion befindlichen Fahrzeuge. Die aktualisierte Batteriearchitektur aller Model S-Versionen ermöglicht Runde für Runde auf der Rennstrecke — ohne Leistungseinbußen. Mit dem Autopilot-Assistenzsystem kann Ihr Auto unter Ihrer aktiven Aufsicht automatisch auf seiner Fahrspur lenken, beschleunigen und bremsen und so die anstrengendsten Teile des Fahrens bewältigen. Mit drahtlosen Software-Updates sind die neuesten Verbesserungen sofort verfügbar. Der 17-Zoll-Touchscreen ist links-rechts schwenkbar und bietet eine Auflösung von 2200 x 1300, Echtfarben und eine außergewöhnliche Reaktionsfähigkeit für Spiele, Filme und mehr.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 29,
    name: 'Tesla  Model Y',
    category: 'Tesla',
    image: 'https://assets.meinauto.de/image/upload/f_auto/q_auto:eco/c_scale,w_2000/v1//prod/tesla/modely/1/5suv-longrangeawd_4wd/tesla_22modelyevlongrng4wdsu1b_angularfront.png',
    description: 'Leistung: 393 kW (534 PS), Automatikgetriebe, Kraftstoff: Elektrik. Standarausstattung: Das Model Y bietet maximale Vielseitigkeit—und Platz für bis zu 5 Insassen samt Gepäck. Jeder Sitz der 2. Sitzreihe lässt sich separat umlegen, um flexiblen Stauraum für Ski, Möbelstücke, Gepäck und vieles mehr zu bieten. Da die Heckklappe bequemen Zugang zu einer flachen Ladekante gewährt, ist Be- und Entladen einfach und schnell. Der Tesla-Allradantrieb verwendet zwei hochdynamische, separate Elektromotoren, die das Drehmoment per Digitalsteuerung auf die Vorder- und Hinterräder verteilen, um besseres Handling, überlegene Traktion und hervorragende Lenkstabilität zu garantieren. Das Model Y kann alles besser, ob im Regen, Schnee, Schlamm oder Gelände. Das Model Y ist vollelektrisch, weshalb Sie nie wieder eine Tankstelle aufsuchen müssen. Falls Sie zu Hause nachts laden, ist die Batterie voll aufgeladen, wenn Sie morgens aufwachen. Und auch unterwegs ist das Laden problemlos: Einfach an einer öffentlichen Ladestation oder einer Ladesäule des Tesla-Ladenetzes anschließen. Dank der erhöhten Sitzposition und dem relativ niedrigen Armaturenbrett haben Sie als Fahrer uneingeschränkte Sicht auf die Straße. Der Innenraum des Model Y ist einfach und aufgeräumt. Blickfang ist hier ein 15-Zoll Touchscreen, während das Klangfeld-Audiosystem wahre Konzertatmosphäre zaubert. Das weit geschwungene Glasdach wiederum gewährt Extra-Kopffreiheit und einen ungehinderten Ausblick auf den Himmel. Die wegweisenden Autopilot-Sicherheits- und Komfortfunktionen entlasten Sie beim Fahren.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },

  {
    id: 30,
    name: 'Tesla Model Q',
    category: 'Tesla',
    image: 'https://insidetesla.de/wp-content/uploads/2021/09/tesla-model-q-21000-euro-auto.jpg',
    description: 'Leistung: 400 km/h, Automatikgetriebe, Kraftstoff: Elektrik. Standarausstattung: Mit drahtlosen Software-Updates sind die neuesten Verbesserungen sofort verfügbar. Ein 960-Watt-Audiosystem mit 22 Lautsprechern und aktiver Straßengeräuschunterdrückung bietet immersiven Audiogenuss in Studioqualität. Mit dem Autopilot-Assistenzsystem kann Ihr Auto unter Ihrer aktiven Aufsicht automatisch auf seiner Fahrspur lenken, beschleunigen und bremsen und so die anstrengendsten Teile des Fahrens bewältigen. Mit drahtlosen Software-Updates sind die neuesten Verbesserungen sofort verfügbar. Automatische Spurwechsel auf der Autobahn. Paralleles und senkrechtes Parken durch eine einzige Berührung. Aktive Fahrzeugführung von Autobahneinfahrt bis -ausfahrt.',
    linkUrl: <a style={{ textDecoration: 'none' }} href={'/buchung'}></a>,
  },
];

const CardList = () => (
  <div>
    {cardsData.map((card) => (
      <Card
        key={card.id}
        category={card.category}
        name={card.name}
        image={card.image}
        description={card.description}
        linkUrl={card.linkUrl}
      />
    ))}
  </div>
);

export default CardList;