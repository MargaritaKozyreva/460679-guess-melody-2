export let settings = {
  gameTimes: 5,
  errorCount: 3
};

export let questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/ru/transcoded/d/d1/Rammstein_-_Keine_Lust.ogg/Rammstein_-_Keine_Lust.ogg.mp3`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/4/40/Madonna_-_You%27ll_See.ogg/Madonna_-_You%27ll_See.ogg.mp3`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/8/89/My_Kind_Of_Town_clip.ogg/My_Kind_Of_Town_clip.ogg.mp3`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/7/7d/ACDC_Itsalongway.ogg/ACDC_Itsalongway.ogg.mp3`,
        genre: `rock`
      }
    ]
  },
  {
    type: `genre`,
    genre: `folk`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/7/7d/ACDC_Itsalongway.ogg/ACDC_Itsalongway.ogg.mp3`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/4/40/Madonna_-_You%27ll_See.ogg/Madonna_-_You%27ll_See.ogg.mp3`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/8/89/My_Kind_Of_Town_clip.ogg/My_Kind_Of_Town_clip.ogg.mp3`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/e/e7/David_Byrne_and_Brian_Eno_-_Life_Is_Long.ogg/David_Byrne_and_Brian_Eno_-_Life_Is_Long.ogg.mp3`,
        genre: `folk`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Michael Jackson`,
      src: `https://upload.wikimedia.org/wikipedia/en/transcoded/b/b0/Michael_Jackson_-_They_Don%27t_Care_About_Us.ogg/Michael_Jackson_-_They_Don%27t_Care_About_Us.ogg.mp3`
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Michael Jackson`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Bruno Mars`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Enrique Iglesias`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Queen`,
      src: `https://upload.wikimedia.org/wikipedia/en/transcoded/2/2a/Queen_-_News_Of_The_World_-_We_Will_Rock_You.ogg/Queen_-_News_Of_The_World_-_We_Will_Rock_You.ogg.mp3`
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Justin Bieber`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Queen`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Nirvana`
      }
    ]
  }
];
