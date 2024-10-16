export default function handler(req, res) {
  // Данные, которые нужно вернуть в JSON формате
  const { cat } = req.query;
  let paths = calcPaths(cat, cards);

  const data = {
    paths: paths,
  };

  // Возвращаем JSON-ответ
  res.status(200).json(data);
}

const calcPaths = (cat, cards) => {
  return cards.filter((el) => {
    if (el.cat == cat) {
      return cat;
    }
  });
};

const cards = [
  {
    src: "/faces/edward/IMG_6480 (2).JPG",
    alt: "Edward",
    title: "Edward",
    id: 1,
    cat: "sfa",
  },
  {
    src: "/faces/diana_zvereva/IMG_6457.JPG",
    alt: "Diana Zvereva",
    title: "Diana Zvereva",
    id: 2,
    cat: "sfa",
  },
  {
    src: "/faces/artemii/IMG_6314.PNG",
    alt: "Artemii",
    title: "Artemii",
    id: 3,
    cat: "of",
  },
  {
    src: "/faces/muza/muza.png",
    alt: "Muza",
    title: "Muza",
    id: 4,
    cat: "sfa",
  },
  {
    src: "/faces/eldar/IMG_6348.JPEG",
    alt: "Eldar",
    title: "Eldar",
    id: 5,
    cat: "sfa",
  },
  {
    src: "/faces/lessy/photo_2024-10-04_22-19-06.jpg",
    alt: "Lessy",
    title: "Lessy",
    id: 6,
    cat: "sfa",
  },
  {
    src: "/faces/vesta/photo_2_2024-10-04_22-19-43.jpg",
    alt: "Vesta",
    title: "Vesta",
    id: 8,
    cat: "sfa",
  },
  {
    src: "/faces/bogdan/IMG_6308.JPG",
    alt: "Bogdan",
    title: "Bogdan",
    id: 7,
    cat: "nf",
  },
  {
    src: "/faces/sasha_rowan/IMG_6484.JPG",
    alt: "Sasha Ryabini",
    title: "Sasha Ryabini",
    id: 9,
    cat: "sfa",
  },
  {
    src: "/faces/Ally/",
    alt: "Ally",
    title: "Ally",
    id: 11,
    cat: "nf",
  },
  {
    src: "/faces/Serj/",
    alt: "Serj",
    title: "Serj",
    id: 12,
    cat: "nf",
  },
  {
    src: "/faces/Arthur/",
    alt: "Arthur",
    title: "Arthur",
    id: 13,
    cat: "of",
  },
  {
    src: "/faces/Jean/",
    alt: "Jean",
    title: "Jean",
    id: 14,
    cat: "sfa",
  },
  {
    src: "/faces/Anastasia/",
    alt: "Anastasia",
    title: "Anastasia",
    id: 15,
    cat: "of",
  },
  {
    src: "/faces/Timofey/",
    alt: "Timofey",
    title: "Timofey",
    id: 15,
    cat: "nf",
  },
  {
    src: "/faces/Vadim-u/",
    alt: "Vadim u",
    title: "Vadim u",
    id: 16,
    cat: "nf",
  },
  {
    src: "/faces/Elles-Elisabeth/",
    alt: "Elles & Elisabeth",
    title: "Elles & Elisabeth",
    id: 17,
    cat: "nf",
  },
  {
    src: "/faces/Ilya/",
    alt: "Ilya",
    title: "Ilya",
    id: 18,
    cat: "nf",
  },
  {
    src: "/faces/Kirill/",
    alt: "Kirill",
    title: "Kirill",
    id: 19,
    cat: "nf",
  },
];
