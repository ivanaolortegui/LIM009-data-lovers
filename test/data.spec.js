global.window = global;
require('../src/data');
require('./data.spec.js');

const dataChamps = [
  {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      mp: 105.6,
      mpperlevel: 45,
      movespeed: 345,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  },

  {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  },

  {
    version: '6.24.1',
    id: 'Akali',
    key: '84',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb:
      'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    partype: 'Energy',
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  }
];

const outputdataChamps = ['Fighter', 'Tank', 'Mage', 'Assassin', 'Assassin'];

const outputUniqueTags = ['Fighter', 'Tank', 'Mage', 'Assassin'];

const outputFilterAssassin = [
  {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  },

  {
    version: '6.24.1',
    id: 'Akali',
    key: '84',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb:
      'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    partype: 'Energy',
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  }
];

const descDataChamps = [
  {
    version: '6.24.1',
    id: 'Akali',
    key: '84',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb:
      'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    partype: 'Energy',
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  },

  {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  },

  {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      mp: 105.6,
      mpperlevel: 45,
      movespeed: 345,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  }
];

const MajorDamagetoMinor = [
  {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      mp: 105.6,
      mpperlevel: 45,
      movespeed: 345,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  },

  {
    version: '6.24.1',
    id: 'Akali',
    key: '84',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb:
      'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    partype: 'Energy',
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  },

  {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  }
];
const MinorDamagetoMajor = [
  {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  },

  {
    version: '6.24.1',
    id: 'Akali',
    key: '84',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb:
      'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    partype: 'Energy',
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  },

  {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      mp: 105.6,
      mpperlevel: 45,
      movespeed: 345,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  }
];

describe('data', () => {
  it('debería ser un objeto', () => {
    expect(typeof window.data).toBe('object');
  });

  describe('data.getAllChampsTags', () => {
    it('debería ser una función', () => {
      expect(typeof window.data.getAllChampsTags).toBe('function');
    });

    it('debería retornar un array de los tags de todos los campeones', () => {
      expect(window.data.getAllChampsTags(dataChamps)).toEqual(outputdataChamps);
    });
  });

  describe('data.getAllUniqueChampsTags', () => {
    it('debería ser una función', () => {
      expect(typeof window.data.getAllUniqueChampsTags).toBe('function');
    });

    it('debería retornar un array de los únicos tags de todos los campeones', () => {
      expect(window.data.getAllUniqueChampsTags(outputdataChamps)).toEqual(outputUniqueTags);
    });
  });

  describe('data.filterData', () => {
    it('debería ser una función', () => {
      expect(typeof window.data.filterData).toBe('function');
    });

    it('deberia retornar un array con los campeones segun rol', () => {
      expect(window.data.filterData(dataChamps, 'Assassin')).toEqual(outputFilterAssassin);
    });
  });

  describe('data.sortData', () => {
    it('debería ser una función', () => {
      expect(typeof window.data.sortData).toBe('function');
    });

    it('deberia retornar array campeones ordenador de forma ascendente', () => {
      expect(window.data.sortData(descDataChamps, '1', 'id')).toEqual(dataChamps);
    });

    it('deberia retornar array campeones ordenador de forma descendente', () => {
      expect(window.data.sortData(dataChamps, '-1', 'id')).toEqual(descDataChamps);
    });

    it('deberia retornar array campeones ordenador de forma de mayor a menor daño', () => {
      expect(window.data.sortData(dataChamps, '-1', 'attackdamage')).toEqual(MajorDamagetoMinor);
    });

    it('deberia retornar array campeones ordenador de forma de menor a mayor daño', () => {
      expect(window.data.sortData(dataChamps, '1', 'attackdamage')).toEqual(MinorDamagetoMajor);
    });
  });

  describe('data.computeStats', () => {
    it('debería ser una función', () => {
      expect(typeof window.data.computeStats).toBe('function');
    });

    it('deberia retornar el promediosde nivel de daño según rol', () => {
      expect(window.data.computeStats(dataChamps, 'Fighter', 'attack')).toEqual('8.00');
    });

    it('deberia retornar el promediosde nivel de dificultad según rol', () => {
      expect(window.data.computeStats(dataChamps, 'Fighter', 'difficulty')).toEqual('4.00');
    });
  });
});

