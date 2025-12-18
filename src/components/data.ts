export class Music {
  name: string;
  genre: string;
  url: string;
  img: string;

  constructor(name: string, genre: string, url: string, img: string) {
    this.name = name;
    this.genre = genre;
    this.url = url;
    this.img = img;
  }
}

export const allList = [
  new Music(
    "Ditto(NewJeans)",
    "K-POP",
    "https://www.youtube.com/watch?v=Km71Rr9K-Bw&list=RDKm71Rr9K-Bw&start_radio=1&pp=ygUMbmV3amVhbnMg5puyoAcB",
    "https://mikiki.tokyo.jp/mwimgs/0/1/-/img_0126e9586ddf91f411365d8ac434468e83525.jpg"
  ),
  new Music(
    "ETA(NewJeans)",
    "K-POP",
    "https://www.youtube.com/watch?v=s4Ow55AbdCg&list=RDs4Ow55AbdCg&start_radio=1&pp=ygUMbmV3amVhbnMg5puyoAcB",
    "https://sp-m.mu-mo.net/image/jacket/50/1_13647509.jpg?sr.dw=252&sr.dh=252"
  ),
  new Music(
    "Super Shy(NewJeans)",
    "K-POP",
    "https://www.youtube.com/watch?v=ArmDp-zijuc&list=RDArmDp-zijuc&start_radio=1&t=131s&pp=ygUMbmV3amVhbnMg5puyoAcB",
    "https://sp-m.mu-mo.net/image/jacket/50/1_13647509.jpg?sr.dw=252&sr.dh=252"
  ),
  new Music(
    "Good Day(Mrs.GREEN APPLE)",
    "J-POP",
    "https://www.youtube.com/watch?v=TLJqi0IjMwo&list=RDTLJqi0IjMwo&start_radio=1&pp=ygUQbXJzLiBncmVlbiBhcHBsZaAHAQ%3D%3D",
    "https://ogre.natalie.mu/media/news/music/2025/0928/mrsgreenapple_jkt20250927.jpg?imwidth=1460&imdensity=1&impolicy=hq"
  ),
  new Music(
    "らしさ(Official髭男dism)",
    "J-POP",
    "https://www.youtube.com/watch?v=keOnleW2eak&list=RDkeOnleW2eak&start_radio=1&pp=ygUM44OS44Ky44OA44OzoAcB",
    "https://ogre.natalie.mu/media/news/music/2025/0717/Officialhigedandism_jkt202508.jpg?imwidth=1460&imdensity=1&impolicy=hq"
  ),
  new Music(
    "ヒロイン(back number)",
    "J-POP",
    "https://www.youtube.com/watch?v=T8y_RsF4TSw&list=RDT8y_RsF4TSw&start_radio=1&pp=ygUFSi1wb3CgBwHSBwkJOgoBhyohjO8%3D",
    "https://ogre.natalie.mu/media/news/music/2014/1217/backnumber_heroine_normal_JK.jpg?imwidth=1460&imdensity=1&impolicy=hq"
  ),
  new Music(
    "I(BUMP OF CHICKEN)",
    "Rock",
    "https://www.youtube.com/watch?v=xcqjxAXsbHU&list=RDxcqjxAXsbHU&start_radio=1&pp=ygUBSaAHAQ%3D%3D",
    "https://ogre.natalie.mu/media/news/music/2025/1101/BUMPOFCHICKEN_jkt202512_CD_nor_H1.jpg?imwidth=1460&imdensity=1&impolicy=hq"
  ),
  new Music(
    "栞(クリープハイプ)",
    "Rock",
    "https://youtu.be/j4XsCJHfplg",
    "https://ogre.natalie.mu/media/news/music/2018/0817/creephyp_201809syokai.jpg?imwidth=1460&imdensity=1&impolicy=hq"
  ),
  new Music(
    "Wherever you are(ONE OK ROCK)",
    "Rock",
    "https://youtu.be/qs4Q4cQxyU4",
    "https://www.billboard-japan.com/common/sys/img/news/00000138/138305/image.png"
  ),
  new Music(
    "Shape of You(Ed Sheeran)",
    "Pop",
    "https://www.youtube.com/watch?v=JGwWNGJdvx8&list=RDJGwWNGJdvx8&start_radio=1&pp=ygUMc2hhcGUgb2YgeW91oAcB",
    "https://contents.oricon.co.jp/upimg/news/20210721/2200971_202107210781428001626807629e.jpg"
  ),
  new Music(
    "santa tell me(Ariana Grande)",
    "Pop",
    "https://www.youtube.com/watch?v=nlR0MkrRklg&list=RDnlR0MkrRklg&start_radio=1&pp=ygUNc2FudGEgdGVsbCBtZaAHAQ%3D%3D",
    "https://livedoor.sp.blogimg.jp/ksfunfactory/imgs/e/d/ed38eabd.jpg"
  ),
  new Music(
    "I Want It That Way(Backstreet Boys)",
    "Pop",
    "https://www.youtube.com/watch?v=4fndeDfaWCg&list=RD4fndeDfaWCg&start_radio=1&pp=ygUSaSB3YW50IGl0IHRoYXQgd2F5oAcB",
    "https://i.scdn.co/image/ab67616d0000b2732160c02bc56f192df0f4986b"
  ),
];

export const emotions = ["ハッピー", "ゆったり", "クール", "ロマンス", "エネルギー"];
