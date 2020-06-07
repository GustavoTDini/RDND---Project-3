import { formatQuestion, formatUser } from '../Helpers/HelperFunctions'

let users = {
  gustavotdini: {
    id: 'gustavotdini',
    password: '123',
    name: 'Gustavo Trevisan Dini',
    avatarURL: '/static/media/Avatar_12.23aef523.svg',
    answers: {
    "3jg4v4eg21wdlt9e25e6tc": "optionOne",
    "4f3r2uphrqpx4dasuhbnef": "optionOne",
    "6ni6ok3ym7mf1p33lnez": "optionTwo",
    "8xf0y6ziyjabvozdd253nd": "optionOne",
    "9kqu6opap74w99nnyyvdm": "optionTwo",
    "am8ehyc8byjqgar0jgpub9": "optionOne",
    "ebq2m6oo1dab6yitu1a8v7": "optionTwo",
    "fu90qg4qil94gu9cp68w1g": "optionOne",
    "inl965559ijigrj1cgixc": "optionTwo",
    "loxhs1bqm25b708cmbf3g": "optionOne",
    "lpkebkv2hr7dyfheb229s6": "optionTwo",
    "mhmgvt644yz1w3g33p3b": "optionTwo",
    "pxv2uv8pxa9sfuoirgtlnd": "optionOne",
    "sn6z1zzcsmti1otdcqoxe": "optionOne",
    "tq4xer48fhbm9vpqcuvsif": "optionTwo",
    "tuwblq3qisgg6nd4m6nwk": "optionTwo",
    "vthrdm985a262al8qx3do": "optionTwo",
    "xj352vofupe1dqz9emx13r": "optionOne",
    "y2hdmd60p895hypsz8uecg": "optionOne",
    "yxp5wuder8ovu8dk7jsuo": "optionTwo",
    "yz9l21jq6xs0564a6hhcnag": "optionOne",
    },
    questions: ["yz9l21jq6xs0564a6hhcnag" , "pxv2uv8pxa9sfuoirgtlnd" , "fu90qg4qil94gu9cp68w1g" , "yxp5wuder8ovu8dk7jsuo", "y2hdmd60p895hypsz8uecg"]
  },
  isadini: {
    id: 'isadini',
    password: '123',
    name: 'Isadora Alves de Lima Dini',
    avatarURL: '/static/media/Avatar_06.b4e703f3.svg',
    answers: {
      "3jg4v4eg21wdlt9e25e6tc": "optionOne",
      "4f3r2uphrqpx4dasuhbnef": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      "9kqu6opap74w99nnyyvdm": "optionOne",
      "inl965559ijigrj1cgixc": "optionOne",
      "mhmgvt644yz1w3g33p3b": "optionTwo",
      "pxv2uv8pxa9sfuoirgtlnd": "optionTwo",
      "sn6z1zzcsmti1otdcqoxe": "optionOne",
      "tq4xer48fhbm9vpqcuvsif": "optionOne",
      "tuwblq3qisgg6nd4m6nwk": "optionOne",
      "vthrdm985a262al8qx3do": "optionOne",
    },
    questions: ["sn6z1zzcsmti1otdcqoxe" , "4f3r2uphrqpx4dasuhbnef" , "9kqu6opap74w99nnyyvdm" , "3jg4v4eg21wdlt9e25e6tc" , "tuwblq3qisgg6nd4m6nwk"]
  },
  mariaal: {
    id: 'mariaal',
    password: '123',
    name: 'Mariana Arruda Alves de Lima',
    avatarURL: '/static/media/Avatar_04.ad142434.svg',
    answers: {
      "4f3r2uphrqpx4dasuhbnef": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      "8xf0y6ziyjabvozdd253nd": "optionTwo",
      "9kqu6opap74w99nnyyvdm": "optionOne",
      "am8ehyc8byjqgar0jgpub9": "optionTwo",
      "fu90qg4qil94gu9cp68w1g": "optionOne",
      "inl965559ijigrj1cgixc": "optionOne",
      "lpkebkv2hr7dyfheb229s6": "optionTwo",
      "mhmgvt644yz1w3g33p3b": "optionTwo",
      "pxv2uv8pxa9sfuoirgtlnd": "optionOne",
      "tuwblq3qisgg6nd4m6nwk": "optionOne",
      "vthrdm985a262al8qx3do": "optionTwo",
      "y2hdmd60p895hypsz8uecg": "optionTwo",
      "yz9l21jq6xs0564a6hhcnag": "optionOne",
    },
    questions: ["lpkebkv2hr7dyfheb229s6", "mhmgvt644yz1w3g33p3b", "ebq2m6oo1dab6yitu1a8v7", "tq4xer48fhbm9vpqcuvsif", "inl965559ijigrj1cgixc"]
  },
  sarahedo: {
    id: 'sarahedo',
    password: '123',
    name: 'Sarah Edo',
    avatarURL: "/static/media/Avatar_01.f1236808.svg",
    answers: {
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "9kqu6opap74w99nnyyvdm": "optionTwo",
      "am8ehyc8byjqgar0jgpub9": "optionTwo",
      "ebq2m6oo1dab6yitu1a8v7": "optionOne",
      "inl965559ijigrj1cgixc": "optionOne",
      "loxhs1bqm25b708cmbf3g": "optionTwo",
      "lpkebkv2hr7dyfheb229s6": "optionTwo",
      "mhmgvt644yz1w3g33p3b": "optionOne",
      "pxv2uv8pxa9sfuoirgtlnd": "optionTwo",
      "sn6z1zzcsmti1otdcqoxe": "optionOne",
      "tq4xer48fhbm9vpqcuvsif": "optionTwo",
      "tuwblq3qisgg6nd4m6nwk": "optionOne",
      "vthrdm985a262al8qx3do": "optionOne",
      "xj352vofupe1dqz9emx13r": "optionTwo",
      "y2hdmd60p895hypsz8uecg": "optionOne",
      "yxp5wuder8ovu8dk7jsuo": "optionTwo",
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password: '123',
    name: 'Tyler McGinnis',
    avatarURL: '/static/media/Avatar_09.a915e564.svg',
    answers: {
      "4f3r2uphrqpx4dasuhbnef": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      "9kqu6opap74w99nnyyvdm": "optionTwo",
      "am8ehyc8byjqgar0jgpub9": "optionOne",
      "ebq2m6oo1dab6yitu1a8v7": "optionTwo",
      "fu90qg4qil94gu9cp68w1g": "optionTwo",
      "inl965559ijigrj1cgixc": "optionTwo",
      "loxhs1bqm25b708cmbf3g": "optionOne",
      "mhmgvt644yz1w3g33p3b": "optionOne",
      "pxv2uv8pxa9sfuoirgtlnd": "optionTwo",
      "sn6z1zzcsmti1otdcqoxe": "optionTwo",
      "tq4xer48fhbm9vpqcuvsif": "optionOne",
      "tuwblq3qisgg6nd4m6nwk": "optionTwo",
      "vthrdm985a262al8qx3do": "optionOne",
      "xj352vofupe1dqz9emx13r": "optionTwo",
      "y2hdmd60p895hypsz8uecg": "optionOne",
      "yz9l21jq6xs0564a6hhcnag": "optionTwo",
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    password: '123',
    name: 'John Doe',
    avatarURL: "/static/media/Avatar_13.0661bb8f.svg",
    answers: {
      "3jg4v4eg21wdlt9e25e6tc": "optionTwo",
      "4f3r2uphrqpx4dasuhbnef": "optionTwo",
      "9kqu6opap74w99nnyyvdm": "optionOne",
      "ebq2m6oo1dab6yitu1a8v7": "optionTwo",
      "fu90qg4qil94gu9cp68w1g": "optionTwo",
      "inl965559ijigrj1cgixc": "optionOne",
      "lpkebkv2hr7dyfheb229s6": "optionOne",
      "mhmgvt644yz1w3g33p3b": "optionOne",
      "pxv2uv8pxa9sfuoirgtlnd": "optionTwo",
      "sn6z1zzcsmti1otdcqoxe": "optionTwo",
      "tq4xer48fhbm9vpqcuvsif": "optionOne",
      "tuwblq3qisgg6nd4m6nwk": "optionOne",
      "vthrdm985a262al8qx3do": "optionTwo",
      "y2hdmd60p895hypsz8uecg": "optionTwo",
      "yxp5wuder8ovu8dk7jsuo": "optionOne",
      "yz9l21jq6xs0564a6hhcnag": "optionTwo",
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo", "gustavotdini"],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: ["mariaal"],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: ["mariaal", "isadini"],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ["sarahedo", "gustavotdini", "tylermcginnis"],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: ["gustavotdini", "tylermcginnis"],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ["sarahedo", "mariaal"],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: ["gustavotdini", "tylermcginnis"],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis", "isadini", "sarahedo"],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ["johndoe", "mariaal", "gustavotdini"],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ["gustavotdini"],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ["tylermcginnis", "sarahedo"],
      text: 'write Swift'
    }
  },
  "3jg4v4eg21wdlt9e25e6tc": {
    id: '3jg4v4eg21wdlt9e25e6tc',
    author: 'isadini',
    timestamp: 1591494609554,
    optionOne: {
      votes: ["gustavotdini", "isadini"],
      text: 'Be forced to sing along to every single song you hear',
    },
    optionTwo: {
      votes: ["johndoe"],
      text: 'Be forced to dance to every single song you hear'
    }
  },
  "4f3r2uphrqpx4dasuhbnef": {
    id: '4f3r2uphrqpx4dasuhbnef',
    author: 'isadini',
    timestamp: 1591494527554,
    optionOne: {
      votes: ["mariaal", "gustavotdini", "isadini", "tylermcginnis"],
      text: 'Never eat Christmas cookies ever again',
    },
    optionTwo: {
      votes: ["johndoe"],
      text: 'Never eat Halloween candy ever again'
    }
  },
  "ebq2m6oo1dab6yitu1a8v7": {
    id: 'ebq2m6oo1dab6yitu1a8v7',
    author: 'mariaal',
    timestamp: 1591494888659,
    optionOne: {
      votes: ["mariaal", "isadini", "johndoe"],
      text: 'Be asked the same question over and over again',
    },
    optionTwo: {
      votes: ["gustavotdini", "johndoe", "tylermcginnis"],
      text: 'Never be spoken to ever again'
    }
  },
  "fu90qg4qil94gu9cp68w1g": {
    id: 'fu90qg4qil94gu9cp68w1g',
    author: 'gustavotdini',
    timestamp: 1591494309985,
    optionOne: {
      votes: ["mariaal", "gustavotdini"],
      text: 'Have universal respect',
    },
    optionTwo: {
      votes: ["johndoe", "tylermcginnis"],
      text: 'Have unlimited power'
    }
  },
  "inl965559ijigrj1cgixc": {
    id: 'inl965559ijigrj1cgixc',
    author: 'mariaal',
    timestamp: 1591495312050,
    optionOne: {
      votes: ["mariaal", "isadini", "johndoe", "sarahedo"],
      text: 'Walk to work in heels',
    },
    optionTwo: {
      votes: ["gustavotdini", "tylermcginnis"],
      text: 'Drive to work in reverse'
    }
  },
  "lpkebkv2hr7dyfheb229s6": {
    id: 'lpkebkv2hr7dyfheb229s6',
    author: 'mariaal',
    timestamp: 1591494810135,
    optionOne: {
      votes: ["johndoe"],
      text: 'Be a criticized',
    },
    optionTwo: {
      votes: ["mariaal", "gustavotdini", "sarahedo"],
      text: 'Be ignored'
    }
  },
  "mhmgvt644yz1w3g33p3b": {
    id: 'mhmgvt644yz1w3g33p3b',
    author: 'mariaal',
    timestamp: 1591494853822,
    optionOne: {
      votes: ["johndoe", "sarahedo", "tylermcginnis"],
      text: 'Star in a Star Wars film',
    },
    optionTwo: {
      votes: ["mariaal", "gustavotdini", "isadini"],
      text: 'Star in a Marvel film'
    }
  },
  "pxv2uv8pxa9sfuoirgtlnd": {
    id: 'pxv2uv8pxa9sfuoirgtlnd',
    author: 'gustavotdini',
    timestamp: 1591494262269,
    optionOne: {
      votes: ["mariaal", "gustavotdini"],
      text: 'Find true love today',
    },
    optionTwo: {
      votes: ["isadini", "johndoe", "sarahedo", "tylermcginnis"],
      text: 'Win the lottery next year'
    }
  },
  "sn6z1zzcsmti1otdcqoxe": {
    id: 'sn6z1zzcsmti1otdcqoxe',
    author: 'isadini',
    timestamp: 1591494476404,
    optionOne: {
      votes: ["gustavotdini", "isadini", "sarahedo"],
      text: 'Live in a tree house',
    },
    optionTwo: {
      votes: ["johndoe", "tylermcginnis"],
      text: 'Live in a cave'
    }
  },
  "tq4xer48fhbm9vpqcuvsif": {
    id: 'tq4xer48fhbm9vpqcuvsif',
    author: 'mariaal',
    timestamp: 1591495233643,
    optionOne: {
      votes: ["isadini", "johndoe", "tylermcginnis"],
      text: 'Be Batman',
    },
    optionTwo: {
      votes: ["gustavotdini", "sarahedo"],
      text: 'Be Iron Man'
    }
  },
  "tuwblq3qisgg6nd4m6nwk": {
    id: 'tuwblq3qisgg6nd4m6nwk',
    author: 'isadini',
    timestamp: 1591494637183,
    optionOne: {
      votes: ["mariaal", "isadini", "johndoe", "sarahedo"],
      text: 'Be invisible',
    },
    optionTwo: {
      votes: ["gustavotdini", "tylermcginnis"],
      text: 'Be able to fly'
    }
  },
  "y2hdmd60p895hypsz8uecg": {
    id: 'y2hdmd60p895hypsz8uecg',
    author: 'gustavotdini',
    timestamp: 1591494433198,
    optionOne: {
      votes: ["gustavotdini", "sarahedo", "tylermcginnis"],
      text: 'Be in history books for something terrible',
    },
    optionTwo: {
      votes: ["mariaal", "johndoe"],
      text: 'Be forgotten completely after you die'
    }
  },
  "yxp5wuder8ovu8dk7jsuo": {
    id: 'yxp5wuder8ovu8dk7jsuo',
    author: 'gustavotdini',
    timestamp: 1591494361154,
    optionOne: {
      votes: ["johndoe"],
      text: 'Never be able to go out during the day',
    },
    optionTwo: {
      votes: ["gustavotdini", "sarahedo"],
      text: 'Never be able to go out at night'
    }
  },
  "yz9l21jq6xs0564a6hhcnag": {
    id: 'yz9l21jq6xs0564a6hhcnag',
    author: 'gustavotdini',
    timestamp: 1591494226542,
    optionOne: {
      votes: ["mariaal", "gustavotdini"],
      text: 'Have the ability to see 10 minutes into the future',
    },
    optionTwo: {
      votes: ["johndoe", "tylermcginnis"],
      text: 'Have the ability to see 150 years into the future'
    }
  },
  "9kqu6opap74w99nnyyvdm": {
    id: '9kqu6opap74w99nnyyvdm',
    author: 'isadini',
    timestamp: 1591494571166,
    optionOne: {
      votes: ["mariaal", "isadini", "johndoe"],
      text: 'Team up with Wonder Woman',
    },
    optionTwo: {
      votes: ["gustavotdini", "sarahedo", "tylermcginnis"],
      text: 'Team up with Captain Marvel'
    }
  },
}



/*
questions:

ebq2m6oo1dab6yitu1a8v7:
author: "mariaal"
id: "ebq2m6oo1dab6yitu1a8v7"
optionOne:
text: "Be asked the same question over and over again "
votes: ["sarahedo"]
__proto__: Object
optionTwo:
text: "Never be spoken to ever again"
votes: (3) ["gustavotdini", "johndoe", "tylermcginnis"]
__proto__: Object
timestamp: 1591494888659
__proto__: Object
fu90qg4qil94gu9cp68w1g:
author: "gustavotdini"
id: "fu90qg4qil94gu9cp68w1g"
optionOne:
text: "Have universal respect"
votes: (2) ["mariaal", "gustavotdini"]
__proto__: Object
optionTwo:
text: "Have unlimited power"
votes: (2) ["johndoe", "tylermcginnis"]
__proto__: Object
timestamp: 1591494309985
__proto__: Object
inl965559ijigrj1cgixc:
author: "mariaal"
id: "inl965559ijigrj1cgixc"
optionOne:
text: "Walk to work in heels"
votes: (4) ["mariaal", "isadini", "johndoe", "sarahedo"]
__proto__: Object
optionTwo:
text: " Drive to work in reverse"
votes: (2) ["gustavotdini", "tylermcginnis"]
__proto__: Object
timestamp: 1591495312050
__proto__: Object
loxhs1bqm25b708cmbf3g:
author: "tylermcginnis"
id: "loxhs1bqm25b708cmbf3g"
optionOne:
text: "be a front-end developer"
votes: (2) ["gustavotdini", "tylermcginnis"]
__proto__: Object
optionTwo:
text: "be a back-end developer"
votes: ["sarahedo"]
__proto__: Object
timestamp: 1482579767190
__proto__: Object
lpkebkv2hr7dyfheb229s6:
author: "mariaal"
id: "lpkebkv2hr7dyfheb229s6"
optionOne:
text: "Be a criticized"
votes: ["johndoe"]
__proto__: Object
optionTwo:
text: " Be ignored"
votes: (3) ["mariaal", "gustavotdini", "sarahedo"]
__proto__: Object
timestamp: 1591494810135
__proto__: Object
mhmgvt644yz1w3g33p3b:
author: "mariaal"
id: "mhmgvt644yz1w3g33p3b"
optionOne:
text: "Star in a Star Wars film"
votes: (3) ["johndoe", "sarahedo", "tylermcginnis"]
__proto__: Object
optionTwo:
text: "Star in a Marvel film"
votes: (3) ["mariaal", "gustavotdini", "isadini"]
__proto__: Object
timestamp: 1591494853822
__proto__: Object
pxv2uv8pxa9sfuoirgtlnd:
author: "gustavotdini"
id: "pxv2uv8pxa9sfuoirgtlnd"
optionOne:
text: "Find true love today"
votes: (2) ["mariaal", "gustavotdini"]
__proto__: Object
optionTwo:
text: "Win the lottery next year"
votes: (4) ["isadini", "johndoe", "sarahedo", "tylermcginnis"]
__proto__: Object
timestamp: 1591494262269
__proto__: Object
sn6z1zzcsmti1otdcqoxe:
author: "isadini"
id: "sn6z1zzcsmti1otdcqoxe"
optionOne:
text: "Live in a tree house"
votes: (3) ["gustavotdini", "isadini", "sarahedo"]
__proto__: Object
optionTwo:
text: " Live in a cave"
votes: (2) ["johndoe", "tylermcginnis"]
__proto__: Object
timestamp: 1591494476404
__proto__: Object
tq4xer48fhbm9vpqcuvsif:
author: "mariaal"
id: "tq4xer48fhbm9vpqcuvsif"
optionOne:
text: "Be Batman"
votes: (3) ["isadini", "johndoe", "tylermcginnis"]
__proto__: Object
optionTwo:
text: "Be Iron Man"
votes: (2) ["gustavotdini", "sarahedo"]
__proto__: Object
timestamp: 1591495233643
__proto__: Object
tuwblq3qisgg6nd4m6nwk:
author: "isadini"
id: "tuwblq3qisgg6nd4m6nwk"
optionOne:
text: "Be invisible"
votes: (4) ["mariaal", "isadini", "johndoe", "sarahedo"]
__proto__: Object
optionTwo:
text: "Be able to fly"
votes: (2) ["gustavotdini", "tylermcginnis"]
__proto__: Object
timestamp: 1591494637183
__proto__: Object
vthrdm985a262al8qx3do:
author: "tylermcginnis"
id: "vthrdm985a262al8qx3do"
optionOne:
text: "find $50 yourself"
votes: (3) ["tylermcginnis", "isadini", "sarahedo"]
__proto__: Object
optionTwo:
text: "have your best friend find $500"
votes: (4) ["johndoe", "mariaal", "gustavotdini", "johndoe"]
__proto__: Object
timestamp: 1489579767190
__proto__: Object
xj352vofupe1dqz9emx13r:
author: "johndoe"
id: "xj352vofupe1dqz9emx13r"
optionOne:
text: "write JavaScript"
votes: ["gustavotdini"]
__proto__: Object
optionTwo:
text: "write Swift"
votes: (2) ["tylermcginnis", "sarahedo"]
__proto__: Object
timestamp: 1493579767190
__proto__: Object
y2hdmd60p895hypsz8uecg:
author: "gustavotdini"
id: "y2hdmd60p895hypsz8uecg"
optionOne:
text: "Be in history books for something terrible"
votes: (3) ["gustavotdini", "sarahedo", "tylermcginnis"]
__proto__: Object
optionTwo:
text: " Be forgotten completely after you die"
votes: (2) ["mariaal", "johndoe"]
__proto__: Object
timestamp: 1591494433198
__proto__: Object
yxp5wuder8ovu8dk7jsuo:
author: "gustavotdini"
id: "yxp5wuder8ovu8dk7jsuo"
optionOne:
text: "Never be able to go out during the day"
votes: ["johndoe"]
__proto__: Object
optionTwo:
text: "Never be able to go out at night"
votes: (2) ["gustavotdini", "sarahedo"]
__proto__: Object
timestamp: 1591494361154
__proto__: Object
yz9l21jq6xs0564a6hhcnag:
author: "gustavotdini"
id: "yz9l21jq6xs0564a6hhcnag"
optionOne:
text: "Have the ability to see 10 minutes into the future"
votes: (2) ["mariaal", "gustavotdini"]
__proto__: Object
optionTwo:
text: "have the ability to see 150 years into the future"
votes: (2) ["johndoe", "tylermcginnis"]
__proto__: Object
timestamp: 1591494226542
__proto__: Object
__proto__: Object
users:

*/

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion(question)
    const authedUser = formattedQuestion.author
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, questionId, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [questionId]: answer
          }
        }
      }

      questions = {
        ...questions,
        [questionId]: {
          ...questions[questionId],
          [answer]: {
            ...questions[questionId][answer],
            votes: questions[questionId][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

export function _deleteQuestionAnswer ({ authedUser, questionId, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [questionId]: null, ...users[authedUser].answers
          }
        }
      }

      questions = {
        ...questions,
        [questionId]: {
          ...questions[questionId],
          [answer]: {
            ...questions[questionId][answer],
            votes: questions[questionId][answer].votes.filter((user) => user !== authedUser)
          }
        }
      }

      res()
    }, 500)
  })
}

export function _saveUser (user) {
  return new Promise((res, rej) => {
    const formattedUser = formatUser(user)
    setTimeout(() => {
      users = {
        ...users,
        [formattedUser.id]: formattedUser
      }

      res(formattedUser)
    }, 1000)
  })
}