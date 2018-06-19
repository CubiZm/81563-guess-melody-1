import musicData from './music-data';

export const gameQuestions = [
  {
    type: `guessArtist`,
    trackSrc: musicData[0].src,
    answers: {
      'answer-1': {track: musicData[0], correct: true},
      'answer-2': {track: musicData[1], correct: false},
      'answer-3': {track: musicData[2], correct: false}
    }
  },
  {
    type: `guessArtist`,
    trackSrc: musicData[1].src,
    answers: {
      'answer-1': {track: musicData[1], correct: true},
      'answer-2': {track: musicData[3], correct: false},
      'answer-3': {track: musicData[4], correct: false}
    }
  },
  {
    type: `guessArtist`,
    trackSrc: musicData[2].src,
    answers: {
      'answer-1': {track: musicData[2], correct: true},
      'answer-2': {track: musicData[5], correct: false},
      'answer-3': {track: musicData[1], correct: false}
    }
  },
  {
    type: `guessArtist`,
    trackSrc: musicData[3].src,
    answers: {
      'answer-1': {track: musicData[3], correct: true},
      'answer-2': {track: musicData[4], correct: false},
      'answer-3': {track: musicData[5], correct: false}
    }
  },
  {
    type: `guessArtist`,
    trackSrc: musicData[4].src,
    answers: {
      'answer-1': {track: musicData[4], correct: true},
      'answer-2': {track: musicData[2], correct: false},
      'answer-3': {track: musicData[3], correct: false}
    }
  },
  {
    type: `guessArtist`,
    trackSrc: musicData[5].src,
    answers: {
      'answer-1': {track: musicData[5], correct: true},
      'answer-2': {track: musicData[3], correct: false},
      'answer-3': {track: musicData[4], correct: false}
    }
  },
  {
    type: `chooseGenre`,
    title: `Выберите R&B треки`,
    answers: {
      'answer-1': {track: musicData[3], correct: true},
      'answer-2': {track: musicData[0], correct: false},
      'answer-3': {track: musicData[1], correct: false},
      'answer-4': {track: musicData[2], correct: false}
    }
  },
  {
    type: `chooseGenre`,
    title: `Выберите Country треки`,
    answers: {
      'answer-1': {track: musicData[2], correct: true},
      'answer-2': {track: musicData[3], correct: false},
      'answer-3': {track: musicData[4], correct: false},
      'answer-4': {track: musicData[5], correct: false}
    }
  },
  {
    type: `chooseGenre`,
    title: `Выберите Jazz треки`,
    answers: {
      'answer-1': {track: musicData[0], correct: true},
      'answer-2': {track: musicData[2], correct: false},
      'answer-3': {track: musicData[3], correct: false},
      'answer-4': {track: musicData[4], correct: false}
    }
  },
  {
    type: `chooseGenre`,
    title: `Выберите Pop треки`,
    answers: {
      'answer-1': {track: musicData[4], correct: true},
      'answer-2': {track: musicData[0], correct: false},
      'answer-3': {track: musicData[1], correct: false},
      'answer-4': {track: musicData[2], correct: false}
    }
  }
];
