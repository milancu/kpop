export const questions =
  [
    {
      question: "Iterativní heuristika řeší problém obchodního cestujícího v rovině. Operátorem je dvojzáměna na úsecích túry (dva úseky jsou nahrazeny jinými dvěma úseky). Momentálně řešená instance má 5 měst.",
      answers: [
        {
          id: 1,
          text: "Stavový prostor má silně souvislý graf\n"
        },
        {
          id: 2,
          text: "Stavový prostor má 5^2 = 25 stavů"
        },
        {
          id: 3,
          text: "Okolí každého stavu má velikost 5"
        },
        {
          id: 4,
          text: "Okolí každého stavu má velikost 10"
        }
      ],
      correctAnswers: [1, 3],
      maybe: []
    },
    {
      question: "Vyhodnocení zdatnosti ve Fast Messy GA algoritmu je založeno na:\n",
      answers: [
        {
          id: 1,
          text: "reprezentaci individua"
        },
        {
          id: 2,
          text: "výpočtu, který pomocí dalších informací vrátí zdatnost libovolné podmnožiny genů"
        },
        {
          id: 3,
          text: "fenotypu individua"
        },
        {
          id: 4,
          text: "použití referenčního individua"
        }
      ],
      correctAnswers: [2, 4],
      maybe: []
    },
    {
      question: "Genetický algoritmus je aplikován v situaci, kdy některé části stavového prostoru mají výrazně větší hloubku než jiné. Využijeme",
      answers: [
        {
          id: 1,
          text: "konstantní poměrně vysokou míru mutace, aby se populace snáze dostala do “vlídnějších kočin”\n"
        },
        {
          id: 2,
          text: "některých vlastností lineárního škálování"
        },
        {
          id: 3,
          text: "některé metody automatického řízení selekčního tlaku"
        }
      ],
      correctAnswers: [2],
      maybe: [3]
    }
  ]