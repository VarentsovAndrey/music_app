import { v4 as uuidv4 } from "uuid";

export const data = () => {
  return [
    {
      name: "Иван",
      cover:
        "https://img1.akspic.ru/crops/2/5/6/9/6/169652/169652-plyazh-more-okean-priroda-voda-3840x2160.jpg",
      artist: "Иванович",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Федор",
      cover:
        "https://img1.akspic.ru/crops/8/8/0/7/6/167088/167088-nacionalnyj_park_tulum-poberezhe-voda-more-priroda-3840x2160.jpg",
      artist: "Максимович",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10536",
      color: ["#EAE6D9", "#E3CF72"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Игнат",
      cover:
        "https://img2.akspic.ru/crops/1/5/1/8/5/158151/158151-televideniye-krutit_i_krutit-televizor-oblako-voda-3840x2160.jpg",
      artist: "Русланович",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11235",
      color: ["#9BA4DB", "#5E669D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Виктор",
      cover:
        "https://img3.akspic.ru/crops/8/6/4/5/5/155468/155468-otrazhenie-priroda-voda-oblako-rastenie-3840x2160.jpg",
      artist: "Палыч",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Алеша",
      cover:
        "https://img1.akspic.ru/crops/2/7/4/5/5/155472/155472-andorra-priroda-ozero-peyzash-gora-3840x2160.jpg",
      artist: "Поповский",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Игорь",
      cover:
        "https://img1.akspic.ru/crops/7/7/4/5/5/155477/155477-otrazhenie-ozero_staz-ozero_sils-sen_moric-gora-3840x2160.jpg",
      artist: "Кириллович",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Валера",
      cover:
        "https://img3.akspic.ru/crops/8/0/3/5/5/155308/155308-karerzee-dolomit-seiser_alm-ozero-voda-3840x2160.jpg",
      artist: "Валерович",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Степан",
      cover:
        "https://img3.akspic.ru/crops/0/8/7/6/5/156780/156780-priroda-les-voda-rastenie-gidroresursy-3840x2160.jpg",
      artist: "Олегович",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
};
