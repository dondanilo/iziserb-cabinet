// ============================================================
// WORDS — Ключевые слова и глаголы сербского языка
// ============================================================
const WORDS = [
  {
    id: 1, serbian: 'бити', translation: 'быть',
    transcription: 'БИ́ТИ', note: 'Основной глагол. Настоящее: јесам/јеси/јесте',
    example: { serbian: 'Ја сам из Русије.', ru: 'Я из России.' }
  },
  {
    id: 2, serbian: 'имати', translation: 'иметь / у меня есть',
    transcription: 'И́МАТИ',
    example: { serbian: 'Имам стан у Београду.', ru: 'У меня есть квартира в Белграде.' }
  },
  {
    id: 3, serbian: 'хтети', translation: 'хотеть',
    transcription: 'ХТЕ́ТИ',
    example: { serbian: 'Хоћу да научим српски.', ru: 'Я хочу выучить сербский.' }
  },
  {
    id: 4, serbian: 'радити', translation: 'работать / делать',
    transcription: 'РА́ДИТИ',
    example: { serbian: 'Радим у IT компанији.', ru: 'Я работаю в IT компании.' }
  },
  {
    id: 5, serbian: 'говорити', translation: 'говорить',
    transcription: 'ГОВОРИТИ',
    example: { serbian: 'Говорим мало српски.', ru: 'Я немного говорю по-сербски.' }
  },
  {
    id: 6, serbian: 'ићи', translation: 'идти / ехать',
    transcription: 'И́ЋИ',
    example: { serbian: 'Идем у продавницу.', ru: 'Я иду в магазин.' }
  },
  {
    id: 7, serbian: 'видети', translation: 'видеть',
    transcription: 'ВИ́ДЕТИ',
    example: { serbian: 'Видим Калемегдан из прозора.', ru: 'Вижу Калемегдан из окна.' }
  },
  {
    id: 8, serbian: 'знати', translation: 'знать',
    transcription: 'ЗНА́ТИ',
    example: { serbian: 'Знам мало српских речи.', ru: 'Знаю немного сербских слов.' }
  },
  {
    id: 9, serbian: 'живети', translation: 'жить',
    transcription: 'ЖИВЕТИ',
    example: { serbian: 'Живим у Новом Саду годину дана.', ru: 'Живу в Новом Саду уже год.' }
  },
  {
    id: 10, serbian: 'купити', translation: 'купить',
    transcription: 'КУ́ПИТИ',
    example: { serbian: 'Хоћу да купим намирнице.', ru: 'Хочу купить продукты.' }
  },
  {
    id: 11, serbian: 'јести', translation: 'есть / кушать',
    transcription: 'ЈЕ́СТИ',
    example: { serbian: 'Једем ћевапе сваки петак.', ru: 'Ем чевапе каждую пятницу.' }
  },
  {
    id: 12, serbian: 'пити', translation: 'пить',
    transcription: 'ПИ́ТИ',
    example: { serbian: 'Пијем кафу сваког јутра.', ru: 'Пью кофе каждое утро.' }
  },
  {
    id: 13, serbian: 'доћи', translation: 'прийти / приехать',
    transcription: 'ДО́ЋИ',
    example: { serbian: 'Дошао сам из Москве прошле године.', ru: 'Я приехал из Москвы в прошлом году.' }
  },
  {
    id: 14, serbian: 'моћи', translation: 'мочь / смочь',
    transcription: 'МО́ЋИ',
    example: { serbian: 'Можете ли да ми помогнете?', ru: 'Можете ли вы мне помочь?' }
  },
  {
    id: 15, serbian: 'требати', translation: 'нужно / надо',
    transcription: 'ТРЕ́БАТИ',
    example: { serbian: 'Треба ми боравак.', ru: 'Мне нужен вид на жительство.' }
  },
  {
    id: 16, serbian: 'платити', translation: 'заплатить',
    transcription: 'ПЛА́ТИТИ',
    example: { serbian: 'Могу да платим картицом?', ru: 'Могу ли я заплатить картой?' }
  },
  {
    id: 17, serbian: 'разумети', translation: 'понимать',
    transcription: 'РАЗУМЕТИ',
    example: { serbian: 'Не разумем добро српски.', ru: 'Я не очень хорошо понимаю сербский.' }
  },
  {
    id: 18, serbian: 'помоћи', translation: 'помочь',
    transcription: 'ПОМО́ЋИ',
    example: { serbian: 'Можете ли да ми помогнете, молим вас?', ru: 'Не могли бы вы мне помочь, пожалуйста?' }
  },
  {
    id: 19, serbian: 'звати', translation: 'звонить / называть',
    transcription: 'ЗВА́ТИ',
    example: { serbian: 'Зовем се Иван.', ru: 'Меня зовут Иван.' }
  },
  {
    id: 20, serbian: 'питати', translation: 'спрашивать',
    transcription: 'ПИ́ТАТИ',
    example: { serbian: 'Могу да питам нешто?', ru: 'Могу я кое-что спросить?' }
  },
  {
    id: 21, serbian: 'одговорити', translation: 'ответить',
    transcription: 'ОДГОВОРИТИ',
    example: { serbian: 'Одговорите ми, молим вас.', ru: 'Ответьте мне, пожалуйста.' }
  },
  {
    id: 22, serbian: 'чекати', translation: 'ждать',
    transcription: 'ЧЕ́КАТИ',
    example: { serbian: 'Чекам свој ред.', ru: 'Жду своей очереди.' }
  },
  {
    id: 23, serbian: 'стићи', translation: 'успеть / добраться',
    transcription: 'СТИ́ЋИ',
    example: { serbian: 'Када ћу да стигнем до центра?', ru: 'Когда я доберусь до центра?' }
  },
  {
    id: 24, serbian: 'тражити', translation: 'искать / просить',
    transcription: 'ТРА́ЖИТИ',
    example: { serbian: 'Тражим стан за изнајмљивање.', ru: 'Ищу квартиру для аренды.' }
  },
  {
    id: 25, serbian: 'дати', translation: 'дать',
    transcription: 'ДА́ТИ',
    example: { serbian: 'Дајте ми рачун, молим вас.', ru: 'Дайте мне счёт, пожалуйста.' }
  },
  {
    id: 26, serbian: 'узети', translation: 'взять',
    transcription: 'У́ЗЕТИ',
    example: { serbian: 'Могу да узмем ово?', ru: 'Могу я это взять?' }
  },
  {
    id: 27, serbian: 'отворити', translation: 'открыть',
    transcription: 'ОТВОРИТИ',
    example: { serbian: 'Желим да отворим рачун.', ru: 'Я хочу открыть счёт.' }
  },
  {
    id: 28, serbian: 'затворити', translation: 'закрыть',
    transcription: 'ЗАТВОРИТИ',
    example: { serbian: 'Када се затвара продавница?', ru: 'Когда закрывается магазин?' }
  },
  {
    id: 29, serbian: 'кренути', translation: 'отправиться / начать',
    transcription: 'КРЕ́НУТИ',
    example: { serbian: 'Крећем за Београд сутра.', ru: 'Еду в Белград завтра.' }
  },
  {
    id: 30, serbian: 'пронаћи', translation: 'найти',
    transcription: 'ПРО́НАЋИ',
    example: { serbian: 'Где могу да пронађем апотеку?', ru: 'Где я могу найти аптеку?' }
  }
];

// ============================================================
// SCENARIOS — Ситуационные диалоги
// ============================================================
const SCENARIOS = [
  {
    id: 'mup',
    title: '🏛️ В МУП-е',
    icon: '🏛️',
    description: 'Оформляем боравак в полиции (МУП)',
    steps: [
      {
        situation: 'Вы пришли в МУП оформить боравак. Сотрудник встречает вас.',
        speaker: 'Службеник — Сотрудник',
        serbian: 'Добар дан! Чиме могу да вам помогнем?',
        transcription: 'До́бар дан! Чи́ме мо́гу да вам по́могнем?',
        translation: 'Добрый день! Чем могу вам помочь?',
        question: 'Поздоровайтесь и скажите, что вам нужен боравак.',
        options: [
          { text: 'Добар дан! Треба ми боравак.', transcription: 'До́бар дан! Тре́ба ми бо́равак.', translation: 'Добрый день! Мне нужен вид на жительство.', correct: true },
          { text: 'Добар дан! Хоћу визу.', transcription: 'До́бар дан! Хо́ћу ви́зу.', translation: 'Добрый день! Я хочу визу.', correct: false },
          { text: 'Здраво! Тражим пасош.', transcription: 'Здра́во! Тра́жим па́сош.', translation: 'Привет! Ищу паспорт.', correct: false },
          { text: 'Добар дан! Где је управа?', transcription: 'До́бар дан! Где је у́права?', translation: 'Добрый день! Где управление?', correct: false }
        ],
        correctFeedback: '«Треба ми боравак» — ключевая фраза! «Треба ми» = «мне нужно». Запомните — с этой конструкцией вы можете попросить что угодно.',
        wrongFeedback: 'Используйте «Треба ми боравак» — это означает «мне нужен вид на жительство».'
      },
      {
        situation: 'Сотрудник просит документы.',
        speaker: 'Службеник — Сотрудник',
        serbian: 'Добро. Да ли имате пасош и доказ о адреси?',
        transcription: 'До́бро. Да ли и́мате па́сош и до́каз о а́дреси?',
        translation: 'Хорошо. У вас есть паспорт и подтверждение адреса?',
        question: 'Скажите, что у вас есть паспорт, но нет подтверждения адреса.',
        options: [
          { text: 'Имам пасош, али немам доказ о адреси.', transcription: 'И́мам па́сош, а́ли не́мам до́каз о а́дреси.', translation: 'У меня есть паспорт, но нет подтверждения адреса.', correct: true },
          { text: 'Немам никакав документ.', transcription: 'Не́мам ни́какав до́кумент.', translation: 'У меня нет никаких документов.', correct: false },
          { text: 'Имам само личну карту.', transcription: 'И́мам са́мо ли́чну ка́рту.', translation: 'У меня только удостоверение личности.', correct: false },
          { text: 'Какви документи су потребни?', transcription: 'Ка́кви до́кументи су по́требни?', translation: 'Какие документы нужны?', correct: false }
        ],
        correctFeedback: 'Отлично! «Имам ... али немам ...» — универсальная конструкция. «Али» = «но». Очень важно для объяснения ситуации с документами.',
        wrongFeedback: 'Используйте конструкцию «Имам ..., али немам ...» чтобы объяснить что есть, а чего нет.'
      },
      {
        situation: 'Сотрудник говорит, что нужна уговор о закупу (договор аренды).',
        speaker: 'Службеник — Сотрудник',
        serbian: 'Потребан вам је уговор о закупу или потврда власника.',
        transcription: 'По́требан вам је у́говор о за́купу и́ли по́тврда вла́сника.',
        translation: 'Вам нужен договор аренды или подтверждение от владельца.',
        question: 'Спросите, можете ли принести это на следующей неделе.',
        options: [
          { text: 'Могу ли да донесем то следеће недеље?', transcription: 'Мо́гу ли да до́несем то сле́деће не́деље?', translation: 'Могу ли я принести это на следующей неделе?', correct: true },
          { text: 'Не разумем шта тражите.', transcription: 'Не ра́зумем шта тра́жите.', translation: 'Не понимаю, что вы просите.', correct: false },
          { text: 'Немам такав документ.', transcription: 'Не́мам та́кав до́кумент.', translation: 'У меня нет такого документа.', correct: false },
          { text: 'Када радите?', transcription: 'Ка́да ра́дите?', translation: 'Когда вы работаете?', correct: false }
        ],
        correctFeedback: '«Могу ли да донесем то следеће недеље?» — вежливый вопрос. «Следеће недеље» = «на следующей неделе». Конструкция «Могу ли да...» = «Могу ли я...»',
        wrongFeedback: 'Спросите «Могу ли да донесем то следеће недеље?» — это означает «могу ли я принести это на следующей неделе?»'
      }
    ]
  },
  {
    id: 'bank',
    title: '🏦 В банке',
    icon: '🏦',
    description: 'Открываем счёт в сербском банке',
    steps: [
      {
        situation: 'Вы пришли в банк, чтобы открыть счёт.',
        speaker: 'Службеник банке — Сотрудник банка',
        serbian: 'Добар дан! Изволите, чиме могу да вам помогнем?',
        transcription: 'До́бар дан! Изво́лите, чи́ме мо́гу да вам по́могнем?',
        translation: 'Добрый день! Пожалуйста, чем могу помочь?',
        question: 'Скажите, что хотите открыть текущий счёт.',
        options: [
          { text: 'Желим да отворим текући рачун.', transcription: 'Же́лим да отво́рим теку́ћи ра́чун.', translation: 'Я хочу открыть текущий счёт.', correct: true },
          { text: 'Желим да подигнем новац.', transcription: 'Же́лим да по́дигнем но́вац.', translation: 'Я хочу снять деньги.', correct: false },
          { text: 'Где је банкомат?', transcription: 'Где је банко́мат?', translation: 'Где банкомат?', correct: false },
          { text: 'Желим да мењам еуре.', transcription: 'Же́лим да ме́њам еу́ре.', translation: 'Хочу обменять евро.', correct: false }
        ],
        correctFeedback: '«Желим да отворим рачун» — ключевая фраза! «Желим да» + глагол = «я хочу + действие». «Текући рачун» = текущий счёт, «штедни рачун» = сберегательный.',
        wrongFeedback: 'Используйте «Желим да отворим текући рачун» — это «я хочу открыть текущий счёт».'
      },
      {
        situation: 'Сотрудник просит документы.',
        speaker: 'Службеник банке — Сотрудник банка',
        serbian: 'Потребан ми је ваш пасош или лична карта.',
        transcription: 'По́требан ми је ваш па́сош и́ли ли́чна ка́рта.',
        translation: 'Мне нужен ваш паспорт или удостоверение личности.',
        question: 'Скажите, что у вас есть паспорт.',
        options: [
          { text: 'Ево мог пасоша.', transcription: 'Е́во мог па́соша.', translation: 'Вот мой паспорт.', correct: true },
          { text: 'Немам личну карту.', transcription: 'Не́мам ли́чну ка́рту.', translation: 'У меня нет удостоверения.', correct: false },
          { text: 'Какви документи су потребни?', transcription: 'Ка́кви до́кументи су по́требни?', translation: 'Какие документы нужны?', correct: false },
          { text: 'Нисам донео документе.', transcription: 'Ни́сам до́нео до́кументе.', translation: 'Я не принёс документы.', correct: false }
        ],
        correctFeedback: '«Ево мог пасоша» — простая и полезная фраза! «Ево» = «вот» (для передачи чего-либо). Запомните: «мог» = «моего» (род. падеж).',
        wrongFeedback: 'Скажите «Ево мог пасоша» — это означает «вот мой паспорт», передавая документ сотруднику.'
      },
      {
        situation: 'Сотрудник спрашивает о валюте счёта.',
        speaker: 'Службеник банке — Сотрудник банка',
        serbian: 'У којој валути желите рачун? У динарима или еврима?',
        transcription: 'У ко́јој ва́лути же́лите ра́чун? У ди́нарима и́ли еу́рима?',
        translation: 'В какой валюте хотите счёт? В динарах или в евро?',
        question: 'Скажите, что хотите счёт в евро.',
        options: [
          { text: 'Желим рачун у еврима.', transcription: 'Же́лим ра́чун у еу́рима.', translation: 'Я хочу счёт в евро.', correct: true },
          { text: 'Немам предност.', transcription: 'Не́мам пре́дност.', translation: 'Мне всё равно (нет предпочтения).', correct: false },
          { text: 'Шта препоручујете?', transcription: 'Шта препо́ручујете?', translation: 'Что вы рекомендуете?', correct: false },
          { text: 'У доларима, молим вас.', transcription: 'У до́ларима, мо́лим вас.', translation: 'В долларах, пожалуйста.', correct: false }
        ],
        correctFeedback: 'Отлично! «У еврима» = «в евро». Обратите внимание: в сербском «евро» склоняется — «еуро», «еурима» (в евро).',
        wrongFeedback: 'Скажите «Желим рачун у еврима» — это «я хочу счёт в евро».'
      }
    ]
  },
  {
    id: 'pharmacy',
    title: '💊 В аптеке',
    icon: '💊',
    description: 'Покупаем лекарства в аптеке',
    steps: [
      {
        situation: 'Вы в аптеке, у вас болит голова.',
        speaker: 'Фармацеут — Фармацевт',
        serbian: 'Добар дан! Могу ли да вам помогнем?',
        transcription: 'До́бар дан! Мо́гу ли да вам по́могнем?',
        translation: 'Добрый день! Чем могу помочь?',
        question: 'Спросите, есть ли что-нибудь от головной боли.',
        options: [
          { text: 'Имате ли нешто за главобољу?', transcription: 'И́мате ли не́што за гла́вобољу?', translation: 'Есть ли у вас что-нибудь от головной боли?', correct: true },
          { text: 'Желим лекове.', transcription: 'Же́лим ле́кове.', translation: 'Хочу лекарства.', correct: false },
          { text: 'Бол ме зуб.', transcription: 'Бол ме зуб.', translation: 'У меня болит зуб.', correct: false },
          { text: 'Где је најближа болница?', transcription: 'Где је нај́ближа бо́лница?', translation: 'Где ближайшая больница?', correct: false }
        ],
        correctFeedback: '«Имате ли нешто за главобољу?» — незаменимая фраза! «Имате ли нешто за...» — шаблон для любой аптеки. «Главобоља» = головная боль. «Боља» = боль.',
        wrongFeedback: 'Используйте шаблон «Имате ли нешто за...» + болезнь. Для головной боли: «Имате ли нешто за главобољу?»'
      },
      {
        situation: 'Фармацевт предлагает препарат.',
        speaker: 'Фармацеут — Фармацевт',
        serbian: 'Да, имамо Бруфен и Панадол. Шта желите?',
        transcription: 'Да, и́мамо Бру́фен и Па́надол. Шта же́лите?',
        translation: 'Да, у нас есть Бруфен и Панадол. Что хотите?',
        question: 'Попросите Панадол.',
        options: [
          { text: 'Дајте ми Панадол, молим вас.', transcription: 'Да́јте ми Па́надол, мо́лим вас.', translation: 'Дайте мне Панадол, пожалуйста.', correct: true },
          { text: 'Шта је јефтиније?', transcription: 'Шта је јефти́није?', translation: 'Что дешевле?', correct: false },
          { text: 'Нисам сигуран.', transcription: 'Ни́сам си́гуран.', translation: 'Я не уверен.', correct: false },
          { text: 'Имате ли генерик?', transcription: 'И́мате ли ге́нерик?', translation: 'Есть ли у вас дженерик?', correct: false }
        ],
        correctFeedback: '«Дајте ми ... молим вас» — вежливая форма просьбы. «Дајте ми» = «дайте мне», «молим вас» = «пожалуйста». Используйте это везде!',
        wrongFeedback: 'Попросите вежливо: «Дајте ми Панадол, молим вас» — «дайте мне Панадол, пожалуйста».'
      }
    ]
  },
  {
    id: 'market',
    title: '🛒 На пијаци',
    icon: '🛒',
    description: 'Покупаем продукты на рынке',
    steps: [
      {
        situation: 'Вы на рынке (пијаца). Подходите к продавцу фруктов.',
        speaker: 'Продавац — Продавец',
        serbian: 'Изволите, шта желите?',
        transcription: 'Изво́лите, шта же́лите?',
        translation: 'Пожалуйста, что желаете?',
        question: 'Спросите, сколько стоит килограмм яблок.',
        options: [
          { text: 'Колико кошта килограм јабука?', transcription: 'Ко́лико ко́шта ки́лограм ја́бука?', translation: 'Сколько стоит килограмм яблок?', correct: true },
          { text: 'Имате ли јабуке?', transcription: 'И́мате ли ја́буке?', translation: 'Есть ли у вас яблоки?', correct: false },
          { text: 'Дајте ми воће.', transcription: 'Да́јте ми во́ће.', translation: 'Дайте мне фрукты.', correct: false },
          { text: 'Где су јабуке?', transcription: 'Где су ја́буке?', translation: 'Где яблоки?', correct: false }
        ],
        correctFeedback: '«Колико кошта...?» — главный вопрос на рынке! «Колико кошта» = «сколько стоит». «Килограм јабука» = «килограмм яблок» (род. падеж мн.ч.).',
        wrongFeedback: 'Используйте «Колико кошта килограм јабука?» — это «сколько стоит килограмм яблок?»'
      },
      {
        situation: 'Продавец называет цену.',
        speaker: 'Продавац — Продавец',
        serbian: 'Двеста динара кило. Свеже су, данас убране.',
        transcription: 'Две́ста ди́нара ки́ло. Све́же су, да́нас у́бране.',
        translation: '200 динаров кило. Свежие, сегодня собранные.',
        question: 'Попросите два килограмма.',
        options: [
          { text: 'Дајте ми два килограма, молим вас.', transcription: 'Да́јте ми два ки́лограма, мо́лим вас.', translation: 'Дайте мне два килограмма, пожалуйста.', correct: true },
          { text: 'То је скупо.', transcription: 'То је ску́по.', translation: 'Это дорого.', correct: false },
          { text: 'Само пола килограма.', transcription: 'Са́мо по́ла ки́лограма.', translation: 'Только полкило.', correct: false },
          { text: 'Нећу, хвала.', transcription: 'Не́ћу, хва́ла.', translation: 'Не хочу, спасибо.', correct: false }
        ],
        correctFeedback: 'Отлично! «Два килограма» — с числом 2, 3, 4 используется родительный падеж ед.ч. «килограма». С 5+ — «килограма» тоже. «Молим вас» всегда делает речь вежливее.',
        wrongFeedback: 'Попросите «Дајте ми два килограма, молим вас» — «дайте мне два килограмма, пожалуйста».'
      }
    ]
  }
];

// ============================================================
// VOCAB_CATEGORIES — Словарь по темам
// ============================================================
const VOCAB_CATEGORIES = [
  {
    id: 'food', title: 'Еда', icon: '🍽️',
    words: [
      { serbian: 'хлеб', transcription: 'хлеб', translation: 'хлеб', emoji: '🍞' },
      { serbian: 'месо', transcription: 'ме́со', translation: 'мясо', emoji: '🥩' },
      { serbian: 'сир', transcription: 'сир', translation: 'сыр', emoji: '🧀' },
      { serbian: 'јаје', transcription: 'ја́је', translation: 'яйцо', emoji: '🥚' },
      { serbian: 'салата', transcription: 'сала́та', translation: 'салат', emoji: '🥗' },
      { serbian: 'пица', transcription: 'пи́ца', translation: 'пицца', emoji: '🍕' },
      { serbian: 'ћевапи', transcription: 'ће́вапи', translation: 'чевапи', emoji: '🍢' },
      { serbian: 'риба', transcription: 'ри́ба', translation: 'рыба', emoji: '🐟' },
      { serbian: 'супа', transcription: 'су́па', translation: 'суп', emoji: '🍲' },
      { serbian: 'пилетина', transcription: 'пиле́тина', translation: 'курица', emoji: '🍗' },
      { serbian: 'кромпир', transcription: 'кро́мпир', translation: 'картофель', emoji: '🥔' },
      { serbian: 'парадајз', transcription: 'параґа́јз', translation: 'помидор', emoji: '🍅' },
      { serbian: 'краставац', transcription: 'краста́вац', translation: 'огурец', emoji: '🥒' },
      { serbian: 'јабука', transcription: 'ја́бука', translation: 'яблоко', emoji: '🍎' },
      { serbian: 'банана', transcription: 'бана́на', translation: 'банан', emoji: '🍌' },
      { serbian: 'поморанџа', transcription: 'помора́нџа', translation: 'апельсин', emoji: '🍊' },
      { serbian: 'паста', transcription: 'па́ста', translation: 'макароны', emoji: '🍝' },
      { serbian: 'пиринач', transcription: 'пири́нач', translation: 'рис', emoji: '🍚' },
      { serbian: 'свињетина', transcription: 'свиње́тина', translation: 'свинина', emoji: '🥓' },
      { serbian: 'говедина', transcription: 'гове́дина', translation: 'говядина', emoji: '🥩' },
      { serbian: 'бели лук', transcription: 'бе́ли лук', translation: 'чеснок', emoji: '🧄' },
      { serbian: 'лук', transcription: 'лук', translation: 'лук', emoji: '🧅' },
      { serbian: 'шаргарепа', transcription: 'шаргаре́па', translation: 'морковь', emoji: '🥕' },
      { serbian: 'со', transcription: 'со', translation: 'соль', emoji: '🧂' },
      { serbian: 'шећер', transcription: 'ше́ћер', translation: 'сахар', emoji: '🍚' },
      { serbian: 'уље', transcription: 'у́ље', translation: 'масло (растит.)', emoji: '🫒' },
      { serbian: 'маслац', transcription: 'ма́слац', translation: 'сливочное масло', emoji: '🧈' },
      { serbian: 'мед', transcription: 'мед', translation: 'мёд', emoji: '🍯' },
      { serbian: 'чоколада', transcription: 'чокола́да', translation: 'шоколад', emoji: '🍫' },
      { serbian: 'кафа', transcription: 'ка́фа', translation: 'кофе', emoji: '☕' }
    ]
  },
  {
    id: 'places', title: 'Места', icon: '📍',
    words: [
      { serbian: 'продавница', transcription: 'продавни́ца', translation: 'магазин', emoji: '🏪' },
      { serbian: 'апотека', transcription: 'апоте́ка', translation: 'аптека', emoji: '💊' },
      { serbian: 'болница', transcription: 'бо́лница', translation: 'больница', emoji: '🏥' },
      { serbian: 'банка', transcription: 'ба́нка', translation: 'банк', emoji: '🏦' },
      { serbian: 'пошта', transcription: 'по́шта', translation: 'почта', emoji: '📮' },
      { serbian: 'полиција', transcription: 'поли́ција', translation: 'полиция', emoji: '👮' },
      { serbian: 'МУП', transcription: 'МУП', translation: 'МВД / паспортный стол', emoji: '🏛️' },
      { serbian: 'аеродром', transcription: 'аеродро́м', translation: 'аэропорт', emoji: '✈️' },
      { serbian: 'станица', transcription: 'ста́ница', translation: 'станция / вокзал', emoji: '🚉' },
      { serbian: 'ресторан', transcription: 'ресторан', translation: 'ресторан', emoji: '🍽️' },
      { serbian: 'кафић', transcription: 'ка́фић', translation: 'кафе', emoji: '☕' },
      { serbian: 'пијаца', transcription: 'пија́ца', translation: 'рынок', emoji: '🛒' },
      { serbian: 'тржни центар', transcription: 'тр́жни центар', translation: 'торговый центр', emoji: '🏬' },
      { serbian: 'школа', transcription: 'шко́ла', translation: 'школа', emoji: '🏫' },
      { serbian: 'универзитет', transcription: 'универзите́т', translation: 'университет', emoji: '🎓' },
      { serbian: 'парк', transcription: 'парк', translation: 'парк', emoji: '🌳' },
      { serbian: 'плажа', transcription: 'пла́жа', translation: 'пляж', emoji: '🏖️' },
      { serbian: 'хотел', transcription: 'хоте́л', translation: 'отель', emoji: '🏨' },
      { serbian: 'стан', transcription: 'стан', translation: 'квартира', emoji: '🏠' },
      { serbian: 'улица', transcription: 'у́лица', translation: 'улица', emoji: '🛣️' }
    ]
  },
  {
    id: 'numbers', title: 'Числа', icon: '🔢',
    words: [
      { serbian: 'нула', transcription: 'ну́ла', translation: '0 — ноль', emoji: '0️⃣' },
      { serbian: 'један', transcription: 'је́дан', translation: '1 — один', emoji: '1️⃣' },
      { serbian: 'два', transcription: 'два', translation: '2 — два', emoji: '2️⃣' },
      { serbian: 'три', transcription: 'три', translation: '3 — три', emoji: '3️⃣' },
      { serbian: 'четири', transcription: 'че́тири', translation: '4 — четыре', emoji: '4️⃣' },
      { serbian: 'пет', transcription: 'пет', translation: '5 — пять', emoji: '5️⃣' },
      { serbian: 'шест', transcription: 'шест', translation: '6 — шесть', emoji: '6️⃣' },
      { serbian: 'седам', transcription: 'се́дам', translation: '7 — семь', emoji: '7️⃣' },
      { serbian: 'осам', transcription: 'о́сам', translation: '8 — восемь', emoji: '8️⃣' },
      { serbian: 'девет', transcription: 'де́вет', translation: '9 — девять', emoji: '9️⃣' },
      { serbian: 'десет', transcription: 'де́сет', translation: '10 — десять', emoji: '🔟' },
      { serbian: 'двадесет', transcription: 'два́десет', translation: '20 — двадцать', emoji: '2️⃣0️⃣' },
      { serbian: 'педесет', transcription: 'пе́десет', translation: '50 — пятьдесят', emoji: '5️⃣0️⃣' },
      { serbian: 'сто', transcription: 'сто', translation: '100 — сто', emoji: '💯' },
      { serbian: 'хиљада', transcription: 'хи́љада', translation: '1000 — тысяча', emoji: '🔢' }
    ]
  },
  {
    id: 'transport', title: 'Транспорт', icon: '🚌',
    words: [
      { serbian: 'аутобус', transcription: 'ауто́бус', translation: 'автобус', emoji: '🚌' },
      { serbian: 'трамвај', transcription: 'трамва́ј', translation: 'трамвай', emoji: '🚃' },
      { serbian: 'такси', transcription: 'та́кси', translation: 'такси', emoji: '🚕' },
      { serbian: 'воз', transcription: 'воз', translation: 'поезд', emoji: '🚂' },
      { serbian: 'метро', transcription: 'ме́тро', translation: 'метро', emoji: '🚇' },
      { serbian: 'аутомобил', transcription: 'аутомоби́л', translation: 'автомобиль', emoji: '🚗' },
      { serbian: 'бицикл', transcription: 'би́цикл', translation: 'велосипед', emoji: '🚲' },
      { serbian: 'авион', transcription: 'ави́он', translation: 'самолёт', emoji: '✈️' },
      { serbian: 'карта', transcription: 'ка́рта', translation: 'билет / карта', emoji: '🎫' },
      { serbian: 'возач', transcription: 'во́зач', translation: 'водитель', emoji: '👨‍✈️' },
      { serbian: 'стаjalиште', transcription: 'стаја́лиште', translation: 'остановка', emoji: '🛑' },
      { serbian: 'паркинг', transcription: 'па́ркинг', translation: 'парковка', emoji: '🅿️' }
    ]
  },
  {
    id: 'greetings', title: 'Приветствия', icon: '👋',
    words: [
      { serbian: 'добар дан', transcription: 'до́бар дан', translation: 'добрый день', emoji: '🌤️' },
      { serbian: 'добро јутро', transcription: 'до́бро ју́тро', translation: 'доброе утро', emoji: '🌅' },
      { serbian: 'добро вече', transcription: 'до́бро ве́че', translation: 'добрый вечер', emoji: '🌙' },
      { serbian: 'лаку ноћ', transcription: 'ла́ку ноћ', translation: 'спокойной ночи', emoji: '😴' },
      { serbian: 'здраво', transcription: 'здра́во', translation: 'привет / здравствуй', emoji: '👋' },
      { serbian: 'ћао', transcription: 'ћа́о', translation: 'пока / привет', emoji: '✌️' },
      { serbian: 'молим вас', transcription: 'мо́лим вас', translation: 'пожалуйста (вежл.)', emoji: '🙏' },
      { serbian: 'хвала', transcription: 'хва́ла', translation: 'спасибо', emoji: '🤝' },
      { serbian: 'хвала лепо', transcription: 'хва́ла ле́по', translation: 'большое спасибо', emoji: '💐' },
      { serbian: 'нема на чему', transcription: 'не́ма на че́му', translation: 'пожалуйста (ответ)', emoji: '😊' },
      { serbian: 'извините', transcription: 'изви́ните', translation: 'извините', emoji: '😅' },
      { serbian: 'жао ми је', transcription: 'жа́о ми је', translation: 'мне жаль / извините', emoji: '🙇' },
      { serbian: 'да', transcription: 'да', translation: 'да', emoji: '✅' },
      { serbian: 'не', transcription: 'не', translation: 'нет', emoji: '❌' },
      { serbian: 'можда', transcription: 'мо́жда', translation: 'может быть', emoji: '🤔' }
    ]
  },
  {
    id: 'documents', title: 'Документы', icon: '📄',
    words: [
      { serbian: 'пасош', transcription: 'па́сош', translation: 'паспорт', emoji: '📕' },
      { serbian: 'лична карта', transcription: 'ли́чна ка́рта', translation: 'удостоверение личности', emoji: '🪪' },
      { serbian: 'боравак', transcription: 'бо́равак', translation: 'вид на жительство', emoji: '📋' },
      { serbian: 'виза', transcription: 'ви́за', translation: 'виза', emoji: '🔖' },
      { serbian: 'дозвола', transcription: 'до́звола', translation: 'разрешение', emoji: '✅' },
      { serbian: 'уговор', transcription: 'у́говор', translation: 'договор', emoji: '📝' },
      { serbian: 'потврда', transcription: 'по́тврда', translation: 'подтверждение / справка', emoji: '📃' },
      { serbian: 'рачун', transcription: 'ра́чун', translation: 'счёт / счёт-фактура', emoji: '🧾' },
      { serbian: 'пореска управа', transcription: 'поре́ска у́права', translation: 'налоговая', emoji: '🏛️' },
      { serbian: 'матични број', transcription: 'ма́тични број', translation: 'личный номер (JMBG)', emoji: '🔢' },
      { serbian: 'фотокопија', transcription: 'фотоко́пија', translation: 'фотокопия', emoji: '📄' },
      { serbian: 'оригинал', transcription: 'ориги́нал', translation: 'оригинал', emoji: '📜' }
    ]
  },
  {
    id: 'health', title: 'Здоровье', icon: '🏥',
    words: [
      { serbian: 'лекар', transcription: 'ле́кар', translation: 'врач', emoji: '👨‍⚕️' },
      { serbian: 'болница', transcription: 'бо́лница', translation: 'больница', emoji: '🏥' },
      { serbian: 'апотека', transcription: 'апоте́ка', translation: 'аптека', emoji: '💊' },
      { serbian: 'лек', transcription: 'лек', translation: 'лекарство', emoji: '💉' },
      { serbian: 'рецепт', transcription: 'ре́цепт', translation: 'рецепт', emoji: '📋' },
      { serbian: 'бол', transcription: 'бол', translation: 'боль', emoji: '😖' },
      { serbian: 'главобоља', transcription: 'гла́вобоља', translation: 'головная боль', emoji: '🤕' },
      { serbian: 'температура', transcription: 'температу́ра', translation: 'температура / жар', emoji: '🌡️' },
      { serbian: 'кашаљ', transcription: 'ка́шаљ', translation: 'кашель', emoji: '😷' },
      { serbian: 'прехлада', transcription: 'прехла́да', translation: 'простуда', emoji: '🤧' },
      { serbian: 'алергија', transcription: 'алерги́ја', translation: 'аллергия', emoji: '🌸' },
      { serbian: 'хитна помоћ', transcription: 'хи́тна по́моћ', translation: 'скорая помощь', emoji: '🚑' }
    ]
  },
  {
    id: 'time', title: 'Время', icon: '🕐',
    words: [
      { serbian: 'данас', transcription: 'да́нас', translation: 'сегодня', emoji: '📅' },
      { serbian: 'јуче', transcription: 'ју́че', translation: 'вчера', emoji: '◀️' },
      { serbian: 'сутра', transcription: 'су́тра', translation: 'завтра', emoji: '▶️' },
      { serbian: 'сада', transcription: 'са́да', translation: 'сейчас', emoji: '⏱️' },
      { serbian: 'касније', transcription: 'ка́сније', translation: 'позже', emoji: '⏳' },
      { serbian: 'раније', transcription: 'ра́није', translation: 'раньше', emoji: '⏪' },
      { serbian: 'јутро', transcription: 'ју́тро', translation: 'утро', emoji: '🌅' },
      { serbian: 'поподне', transcription: 'попо́дне', translation: 'после обеда / день', emoji: '☀️' },
      { serbian: 'вече', transcription: 'ве́че', translation: 'вечер', emoji: '🌆' },
      { serbian: 'ноћ', transcription: 'ноћ', translation: 'ночь', emoji: '🌙' },
      { serbian: 'недеља', transcription: 'не́деља', translation: 'неделя / воскресенье', emoji: '📆' },
      { serbian: 'месец', transcription: 'ме́сец', translation: 'месяц', emoji: '🗓️' },
      { serbian: 'година', transcription: 'го́дина', translation: 'год', emoji: '🎆' }
    ]
  }
];

// ============================================================
// PHRASES — Живые сербские фразы
// ============================================================
const PHRASES = [
  {
    id: 'daily',
    category: 'Каждый день',
    icon: '☀️',
    color: '#1A7FD4',
    phrases: [
      { serbian: 'Молим!', transcription: 'Мо́лим!', translation: 'Пожалуйста! / Прошу!', note: 'Универсальное слово. Используется когда что-то подают, переспрашивают, или просят повторить. Незаменимо.' },
      { serbian: 'Хвала лепо!', transcription: 'Хва́ла ле́по!', translation: 'Большое спасибо!', note: 'Более тёплое «спасибо» чем просто «хвала». Буквально: «красиво благодарю». Говорите везде.' },
      { serbian: 'Нема проблема!', transcription: 'Не́ма про́блема!', translation: 'Нет проблем!', note: 'Один из самых частых ответов сербов. Когда всё в порядке, когда услуга оказана — «нема проблема».' },
      { serbian: 'Важи!', transcription: 'Ва́жи!', translation: 'Договорились! / Окей!', note: 'Сербский аналог «окей» или «договорились». Слышите десятки раз в день. Буквально: «действительно / в силе».' },
      { serbian: 'Добро!', transcription: 'До́бро!', translation: 'Хорошо! / Ладно!', note: 'Простое согласие или одобрение. Часто используется вместо «да» когда что-то устраивает.' },
      { serbian: 'Није проблем.', transcription: 'Ни́је про́блем.', translation: 'Не проблема. / Всё нормально.', note: 'Когда кто-то извинился или переживает — успокойте их этой фразой.' },
      { serbian: 'Лако!', transcription: 'Ла́ко!', translation: 'Легко! / Запросто!', note: 'Говорят когда что-то несложно. Также «лако» может означать «тихо» или «осторожно» в зависимости от контекста.' },
      { serbian: 'Стварно?', transcription: 'Ства́рно?', translation: 'Правда? / Серьёзно?', note: 'Реакция на неожиданную новость. Аналог русского «серьёзно?» или «да ладно!».' },
      { serbian: 'Баш тако!', transcription: 'Баш та́ко!', translation: 'Именно так! / Вот именно!', note: '«Баш» — усилительная частица. «Баш тако» = «именно так». Используют для подтверждения.' },
      { serbian: 'Па наравно!', transcription: 'Па нара́вно!', translation: 'Ну конечно! / Разумеется!', note: '«Па» — частица без прямого перевода, усиливает высказывание. «Наравно» = «конечно».' },
      { serbian: 'Не знам.', transcription: 'Не зна́м.', translation: 'Не знаю.', note: 'Честный ответ когда не знаете. Сербы воспринимают это нормально — гораздо лучше, чем неправильная информация.' },
      { serbian: 'Не разумем.', transcription: 'Не ра́зумем.', translation: 'Не понимаю.', note: 'Самая важная фраза для начинающих! Говорите это — и собеседник объяснит проще или медленнее.' },
      { serbian: 'Говорите ли енглески?', transcription: 'Го́ворите ли е́нглески?', translation: 'Говорите ли вы по-английски?', note: 'Запасной вариант когда сербский не выходит. Молодые сербы обычно говорят по-английски.' },
      { serbian: 'Можете ли да говорите спорије?', transcription: 'Мо́жете ли да го́ворите спо́рије?', translation: 'Можете говорить медленнее?', note: 'Вежливая просьба замедлить речь. Сербы охотно идут навстречу — не стесняйтесь просить.' },
      { serbian: 'Где је...?', transcription: 'Где је...?', translation: 'Где находится...?', note: 'Базовый вопрос для навигации. После «где је» добавьте любое место: «Где је апотека?» = «Где аптека?»' }
    ]
  },
  {
    id: 'survival',
    category: 'Выживание в Сербии',
    icon: '🇷🇸',
    color: '#C6363C',
    phrases: [
      { serbian: 'Треба ми...', transcription: 'Тре́ба ми...', translation: 'Мне нужно... / Мне нужен...', note: 'Универсальная конструкция для любых просьб. «Треба ми лекар» = «мне нужен врач», «треба ми помоћ» = «мне нужна помощь».' },
      { serbian: 'Желим да...', transcription: 'Же́лим да...', translation: 'Я хочу...', note: '«Желим да» + глагол = «я хочу + действие». «Желим да платим» = «хочу заплатить». Очень частая конструкция.' },
      { serbian: 'Колико кошта?', transcription: 'Ко́лико ко́шта?', translation: 'Сколько стоит?', note: 'Главный вопрос в магазине, кафе, такси. Можно добавить предмет: «Колико кошта кафа?» = «Сколько стоит кофе?»' },
      { serbian: 'Могу ли да платим картицом?', transcription: 'Мо́гу ли да пла́тим ка́ртицом?', translation: 'Могу ли я заплатить картой?', note: 'Важный вопрос! Не все малые магазины принимают карты. Лучше спросить заранее.' },
      { serbian: 'Имате ли ...?', transcription: 'И́мате ли ...?', translation: 'Есть ли у вас ...?', note: 'Шаблон для любого вопроса о наличии товара или услуги. «Имате ли WiFi?», «Имате ли слободну собу?»' },
      { serbian: 'Позовите полицију!', transcription: 'Позо́вите поли́цију!', translation: 'Вызовите полицию!', note: 'На случай экстренной ситуации. Полиция в Сербии — 192. Скорая — 194. Пожарные — 193.' },
      { serbian: 'Хитно!', transcription: 'Хи́тно!', translation: 'Срочно! / Экстренно!', note: 'Слово «хитно» означает срочность. «Хитна помоћ» = скорая помощь. Используйте при экстренной ситуации.' },
      { serbian: 'Изгубио/ла сам се.', transcription: 'Изгу́био/ла сам се.', translation: 'Я заблудился/заблудилась.', note: '«Изгубио» — мужской род, «изгубила» — женский. Полезная фраза когда не можете найти дорогу.' },
      { serbian: 'Украли су ми...', transcription: 'Укра́ли су ми...', translation: 'У меня украли...', note: 'На случай кражи. После «украли су ми» назовите предмет: «паспорт», «новчаник» (кошелёк), «телефон».' },
      { serbian: 'Нисам добро.', transcription: 'Ни́сам до́бро.', translation: 'Мне плохо. / Я нехорошо себя чувствую.', note: 'Для ситуации когда плохо себя чувствуете. Можно добавить «треба ми лекар» = «мне нужен врач».' }
    ]
  },
  {
    id: 'smalltalk',
    category: 'Разговор',
    icon: '💬',
    color: '#1265B0',
    phrases: [
      { serbian: 'Одакле сте?', transcription: 'Ода́кле сте?', translation: 'Откуда вы?', note: 'Частый вопрос к иностранцам. Ответ: «Из Русије сам» = «Я из России» или «Руска/Рус сам» = «Я русская/русский».' },
      { serbian: 'Колико дуго живите овде?', transcription: 'Ко́лико ду́го жи́вите о́вде?', translation: 'Как долго вы здесь живёте?', note: 'Популярный светский вопрос. «Живим овде годину дана» = «Живу здесь год».' },
      { serbian: 'Свиђа вам се Србија?', transcription: 'Сви́ђа вам се Срби́ја?', translation: 'Нравится ли вам Сербия?', note: 'Сербы часто спрашивают это. Правильный ответ: «Да, веома!» = «Да, очень!» — они будут рады.' },
      { serbian: 'Учите ли српски?', transcription: 'У́чите ли ср́пски?', translation: 'Учите ли вы сербский?', note: 'Когда сербы слышат, что вы учите их язык — реакция всегда тёплая. Это открывает многие двери.' },
      { serbian: 'Мало говорим српски.', transcription: 'Ма́ло го́воримо ср́пски.', translation: 'Я немного говорю по-сербски.', note: 'Честный ответ на вопрос о знании языка. «Мало» = «немного». Сербы обычно продолжают разговор медленнее и проще.' },
      { serbian: 'Веома ми се свиђа овде!', transcription: 'Ве́ома ми се сви́ђа о́вде!', translation: 'Мне очень нравится здесь!', note: '«Веома» = «очень». «Свиђа ми се» = «мне нравится». Эта фраза делает людей счастливыми — говорите её чаще.' },
      { serbian: 'Каква је разлика?', transcription: 'Ка́ква је ра́злика?', translation: 'В чём разница?', note: 'Полезный вопрос когда не понимаете разницу между вариантами.' },
      { serbian: 'Можете ли да препоручите...?', transcription: 'Мо́жете ли да препо́ручите...?', translation: 'Можете ли порекомендовать...?', note: 'В ресторане, магазине, у местных — всегда полезный вопрос. «Препоручите» = «порекомендуйте».' }
    ]
  }
];

// ============================================================
// PLAN_30 — 30-дневный план обучения
// ============================================================
const PLAN_30 = [
  { day: 1,  title: 'Приветствия',       topics: ['Добар дан, здраво, хвала, молим', 'Как представиться'], done: false },
  { day: 2,  title: 'Числа 1-20',        topics: ['Счёт от 1 до 20', 'Цены на рынке'], done: false },
  { day: 3,  title: 'Глагол БИТИ',       topics: ['Я есть, ты есть...', 'Рассказать о себе'], done: false },
  { day: 4,  title: 'Глагол ИМАТИ',      topics: ['У меня есть...', 'Что есть при вас'], done: false },
  { day: 5,  title: 'В магазине',        topics: ['Колико кошта?', 'Покупка продуктов'], done: false },
  { day: 6,  title: 'Еда и напитки',     topics: ['Продукты питания', 'В кафе и ресторане'], done: false },
  { day: 7,  title: 'Повторение 1-6',    topics: ['Квиз: приветствия и числа', 'Ролевая игра: магазин'], done: false },
  { day: 8,  title: 'Транспорт',         topics: ['Автобус, такси, поезд', 'Как добраться'], done: false },
  { day: 9,  title: 'Адреса и дорога',   topics: ['Направо, налево, прямо', 'Где находится...?'], done: false },
  { day: 10, title: 'В аптеке',          topics: ['Части тела', 'Симптомы и лекарства'], done: false },
  { day: 11, title: 'Глагол ХТЕТИ',      topics: ['Я хочу...', 'Конструкция ЖЕЛИМ ДА'], done: false },
  { day: 12, title: 'Глагол МОЋИ',       topics: ['Я могу...', 'Вежливые просьбы'], done: false },
  { day: 13, title: 'Документы',         topics: ['Паспорт, боравак, виза', 'В МУП-е'], done: false },
  { day: 14, title: 'Повторение 8-13',   topics: ['Квиз: транспорт и здоровье', 'Ролевая игра: аптека'], done: false },
  { day: 15, title: 'В банке',           topics: ['Открытие счёта', 'Банковская лексика'], done: false },
  { day: 16, title: 'Жильё и аренда',    topics: ['Квартира, стан, изнајмљивање', 'Договор аренды'], done: false },
  { day: 17, title: 'Работа',            topics: ['Профессии', 'На собеседовании'], done: false },
  { day: 18, title: 'Время',             topics: ['Дни недели, месяцы', 'Который час?'], done: false },
  { day: 19, title: 'Погода',            topics: ['Прогноз погоды', 'Времена года'], done: false },
  { day: 20, title: 'Семья',             topics: ['Члены семьи', 'Рассказать о семье'], done: false },
  { day: 21, title: 'Повторение 15-20',  topics: ['Квиз: банк и документы', 'Ролевая игра: МУП'], done: false },
  { day: 22, title: 'Прошедшее время',   topics: ['Что делал вчера?', 'Рассказ о прошлом'], done: false },
  { day: 23, title: 'Будущее время',     topics: ['Что будет завтра?', 'Планы и намерения'], done: false },
  { day: 24, title: 'На пијаци',         topics: ['Торг и цены', 'Овощи и фрукты'], done: false },
  { day: 25, title: 'У врача',           topics: ['Описать симптомы', 'Получить рецепт'], done: false },
  { day: 26, title: 'Кириллица',         topics: ['Сербская кириллица A-M', 'Чтение простых слов'], done: false },
  { day: 27, title: 'Кириллица II',      topics: ['Сербская кириллица N-Я', 'Чтение вывесок'], done: false },
  { day: 28, title: 'Повторение 22-27',  topics: ['Квиз: прошлое и будущее', 'Свободный разговор'], done: false },
  { day: 29, title: 'Разговорный сленг', topics: ['Баш, па, ма, ај де', 'Как говорят реально'], done: false },
  { day: 30, title: 'Итог 30 дней!',    topics: ['Финальный тест', 'Что дальше?'], done: false }
];
