import { Project, Recommendation } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Pomoc w wydawaniu posiłków",
    organizer: "Fundacja Daj herbatę",
    address: "Lipowa 2 Kraków",
    ageRange: "13-18 lat",
    requirements: "Praca na świeżym powietrzu, praca z osobami bezdomnymi",
    duration: "Od 25.10.2025 do 30.05.2025",
    hoursPerWeek: "minimum 3",
    accommodation: "praca w weekendy",
    food: "nie wymaga",
    description: "Dwa razy w tygodniu wydajemy ciepłe posiłki osobom w kryzysie bezdomności. Wydawanie pod siedzibą fundacji. Jednorazowo można przyjść na godzinę lub dwie lub trzy.",
    status: "verification"
  },
  {
    id: "2",
    title: "Sprzątanie lasu",
    organizer: "EkoKraków",
    address: "Las Wolski, Kraków",
    ageRange: "16-25 lat",
    requirements: "Praca na świeżym powietrzu",
    duration: "Od 15.11.2025 do 15.12.2025",
    hoursPerWeek: "minimum 2",
    accommodation: "praca w soboty",
    food: "zapewnione",
    description: "Wspólne sprzątanie lasu z odpadów. Spotykamy się w soboty rano. Narzędzia zapewniamy.",
    status: "approved"
  },
  {
    id: "3",
    title: "Sadzenie drzew",
    organizer: "Zielony Kraków",
    address: "Park Krakowski",
    ageRange: "14-20 lat",
    requirements: "Praca fizyczna na świeżym powietrzu",
    duration: "Od 01.04.2025 do 30.04.2025",
    hoursPerWeek: "minimum 4",
    accommodation: "praca po południu",
    food: "nie wymaga",
    description: "Wspólna akcja sadzenia drzew w parku. Idealne dla osób lubiących pracę na świeżym powietrzu.",
    status: "completed"
  },
  {
    id: "4",
    title: "Organizacja koncertu dla seniorów",
    organizer: "Fundacja Muzyka dla Wszystkich",
    address: "Dom Kultury, ul. Kazimierza 10",
    ageRange: "16-25 lat",
    requirements: "Praca z seniorami, organizacja wydarzeń",
    duration: "Od 10.12.2025 do 20.12.2025",
    hoursPerWeek: "minimum 5",
    accommodation: "praca wieczorami",
    food: "zapewnione",
    description: "Pomoc w organizacji koncertu świątecznego dla seniorów. Przygotowanie sali, obsługa gości, koordynacja wydarzenia.",
    status: "completed"
  }
];

export const mockRecommendations: Recommendation[] = [
  {
    id: "1",
    from: "Anna Kowalska",
    text: "Jan Kowalski angażował się jako wolontariusz przy wydawaniu jedzenia, wykazując się dużą odpowiedzialnością, zaangażowaniem oraz empatią wobec osób potrzebujących. Jej pomoc była nieoceniona i przyczyniła się do sprawnej i serdecznej obsługi beneficjentów. Z pełnym przekonaniem polecam Jana jako osobę rzetelną i godną zaufania."
  },
  {
    id: "2",
    from: "Aniela Nowak",
    text: "Jan Kowalski angażował się jako wolontariusz przy wydawaniu jedzenia, wykazując się dużą odpowiedzialnością, zaangażowaniem oraz empatią wobec osób potrzebujących. Jej pomoc była nieoceniona i przyczyniła się do sprawnej i serdecznej obsługi beneficjentów. Z pełnym przekonaniem polecam Jana jako osobę rzetelną i godną zaufania."
  },
  {
    id: "3",
    from: "Karolina Bajo",
    text: "Jan Kowalski angażował się jako wolontariusz przy wydawaniu jedzenia, wykazując się dużą odpowiedzialnością, zaangażowaniem oraz empatią wobec osób potrzebujących. Jej pomoc była nieoceniona i przyczyniła się do sprawnej i serdecznej obsługi beneficjentów. Z pełnym przekonaniem polecam Jana jako osobę rzetelną i godną zaufania."
  }
];
