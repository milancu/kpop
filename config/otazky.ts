export const questions = [
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
    correctAnswers: [1,3],
    maybe:[]
  },
  {
    question: "Vyhodnocení zdatnosti ve Fast Messy GA algoritmu je založeno na:",
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
    correctAnswers: [2,4],
    maybe:[]
  },
  {
    question: "Ranking v genetickém algoritmu",
    answers: [
      {
        id: 1,
        text: "nastavuje velikost turnaje"
      },
      {
        id: 2,
        text: "ovlivní pravděpodobnost výběru nejzdatnějšího jedince"
      },
      {
        id: 3,
        text: "v dané generaci, může způsobit zmenšení selekčního tlaku"
      },
      {
        id: 4,
        text: "v dané generaci, může způsobit zvětšení selekčního tlaku"
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
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
        text: "některých vlastností lineárního škálování\n"
      },
      {
        id: 3,
        text: "některé metody automatického řízení selekčního tlaku"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Základní jednotkou reprezentace, se kterou pracuje bayesovská optimalizace je:",
    answers: [
      {
        id: 1,
        text: "dvojice [identifikace proměnné, hodnota]"
      },
      {
        id: 2,
        text: "pravděpodobnost selekce individua\n"
      },
      {
        id: 3,
        text: "binární řetěz"
      },
      {
        id: 4,
        text: "statistický model závislostí mezi proměnnými"
      },
      {
        id: 5,
        text: "vektor hodnot (odpověď ze starého testu)"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "Nová generace v bayesovské optimalizaci vzniká",
    answers: [
      {
        id: 1,
        text: "křížením"
      },
      {
        id: 2,
        text: "rozdělením a spojením fragmentů genetické informace"
      },
      {
        id: 3,
        text: "generováním podle stochastického modelu"
      },
      {
        id: 4,
        text: "ruletovým výběrem"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Stochastický model v bayesovská optimalizaci vzniká:",
    answers: [
      {
        id: 1,
        text: "tak, aby vystihoval žádané vlastnosti řešení"
      },
      {
        id: 2,
        text: "tak, aby vystihoval vlastnosti aktuální generace"
      },
      {
        id: 3,
        text: "křížením z předchozí generace"
      },
      {
        id: 4,
        text: "stochastickým výběrem"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Stochastický model v bayesovská optimalizaci vzniká (v podstatě to stejné jako předchozí otázka):",
    answers: [
      {
        id: 1,
        text: "podle vlastností aktuální generace"
      },
      {
        id: 2,
        text: "podle žádaných vlastností řešení"
      },
      {
        id: 3,
        text: "křížením z předchozí generace"
      },
      {
        id: 4,
        text: "stochastickým výběrem"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Dynamické programování může",
    answers: [
      {
        id: 1,
        text: "uváznout v lokálním minimu"
      },
      {
        id: 2,
        text: "potřebovat velikost paměti, kterou nelze odvodit jen z velikosti instance"
      },
      {
        id: 3,
        text: "potřebovat velikost paměti, omezenou polynomem ve velikosti instance"
      },
      {
        id: 4,
        text: "divergovat"
      }
    ],
    correctAnswers: [2, 3],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na grafový problém. Používá jako klíč k výběru z paměti řešení podinstancí dvojici diskrétních proměnných (p,q), kde p je index uzlu a q index hrany. Všechny podinstance je třeba řešit. Velikost instance n se měří počtem uzlů. Dekompozice a kompozice má složitost O(n). Algoritmus",
    answers: [
      {
        id: 1,
        text: "má složitost rostoucí nejméně se čtvrtou mocninou velikosti instance"
      },
      {
        id: 2,
        text: "má složitost rostoucí nejvýše se třetí mocninou velikosti instance"
      },
      {
        id: 3,
        text: "je pseudopolynomiální"
      },
      {
        id: 4,
        text: "je globální metoda"
      },
      {
        id: 5,
        text: "pokud nepoužíváme rozdělení na stupně, paměť podinstancí roste nejméně se třetí mocninou velikosti instance"
      }
    ],
    correctAnswers: [4, 5],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na grafový problém. Používá jako klíč k výběru z paměti řešení podinstancí dvojici diskrétních proměnných (p,q), kde p je index uzlu a q index hrany. Velikost instance se měří počtem uzlů. Složitost kompozice a dekompozice je konstantní. Algoritmus",
    answers: [
      {
        id: 1,
        text: "má exponenciální dolní asymptotickou mez složitosti"
      },
      {
        id: 2,
        text: "je pseudopolynomiální"
      },
      {
        id: 3,
        text: "má kubickou horní asymptotickou mez složitosti"
      },
      {
        id: 4,
        text: "pokud se nepoužijí stupně, paměť vyžaduje kubické množství řešení podinstancí"
      }
    ],
    correctAnswers: [3, 4],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na grafový problém. Velikost instance je charakterizována počtem uzlů. Podinstance je charakterizována podgrafem grafu zadaného v instanci o nejvýše n/2 uzlech, kde n je velikost instance. Kompozice a dekompozice mají lineární složitost. Algoritmus je",
    answers: [
      {
        id: 1,
        text: "exponenciální"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "polynomiální"
      },
      {
        id: 4,
        text: "globální metoda"
      }
    ],
    correctAnswers: [3, 4],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na grafový problém. Velikost instance se měří počtem uzlů. Podinstance je charakterizována libovolnou podmnožinou uzlů. Kompozice a dekompozice je v konstantním čase. Existuje instance, kde je třeba vypočíst všechny podinstance. Algoritmus je vždy",
    answers: [
      {
        id: 1,
        text: "nejhůře lineární"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "nejhůře polynomiální"
      },
      {
        id: 4,
        text: "nejlépe exponenciální"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí dvojici diskrétních proměnných (p, q), kde rozsah hodnot p je dán v instanci, ale nesouvisí s její velikostí N, rozsah q je O(N2). Složitost kompozice a dekompozice je konstantní. Algoritmus je",
    answers: [
      {
        id: 1,
        text: "lineární"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "polynomiální"
      },
      {
        id: 4,
        text: "polynomiální ve velikosti instance"
      },
      {
        id: 5,
        text: "globální metoda (odpověď ze starého zadání)"
      }
    ],
    correctAnswers: [2, 4, 5],
    maybe:[]
  },
  {
    question: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí k-tici binárních proměnných, kde k = logN a N je velikost instance. Postup výpočtu je od triviálních podinstancí k finálnímu řešení, každou hodnotu je třeba vypočíst. Složitost kompozice a dekompozice je konstantní. Algoritmus je",
    answers: [
      {
        id: 1,
        text: "lineární"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "polynomiální"
      },
      {
        id: 4,
        text: "exaktní metoda"
      }
    ],
    correctAnswers: [1, 3, 4],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na problém, kde vstupní proměnné zobrazují graf s uzly očíslovanými 1…n, kde n je velikost instance a dále celé číslo K. Podinstance je tvořena prvními m - 1 hranami, kde m je počet hran právě dekomponované instance, každá podinstance může mít jiné K, nejvýše rovné log K právě dekomponované instance. Kompozice a dekompozice mají složitost Θ(log M). Existují instance, kde je třeba vyřešit všechny podinstance. Algoritmus:",
    answers: [
      {
        id: 1,
        text: "má lineární horní asymptotickou mez složitosti"
      },
      {
        id: 2,
        text: "má exponenciální dolní asymptotickou mez složitosti"
      },
      {
        id: 3,
        text: "má polynomiální horní asymptotickou mez složitosti"
      },
      {
        id: 4,
        text: "je pseudopolynomiální"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí dvojici proměnných v rozsahu 0..n, kde n je velikost instance. Postup výpočtu je od triviálních podinstancí k finálnímu řešení, každou hodnotu je třeba vypočíst. Algoritmus je",
    answers: [
      {
        id: 1,
        text: "exponenciální"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "lineární"
      },
      {
        id: 4,
        text: "polynomiální"
      },
      {
        id: 5,
        text: "kubický"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na problém, kde vstupní proměnné zobrazují graf s uzly očíslovanými 1…n, kde n je velikost instance a dále celé číslo K. Podinstance je tvořena prvními  ?  hranami, každá podinstance může mít jiné K. Kompozice a dekompozice mají konstantní složitost. Algoritmus",
    answers: [
      {
        id: 1,
        text: "je pseudopolynomiální"
      },
      {
        id: 2,
        text: "má složitost nejméně exponenciální ve velikosti instance\n"
      },
      {
        id: 3,
        text: "má složitost nejméně kvadratickou ve velikosti instance"
      },
      {
        id: 4,
        text: "má složitost rostoucí nejhůře s třetí mocninou ve velikosti instance"
      }
    ],
    correctAnswers: [1, 3, 4],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na permutační problém, instance je množina velikosti n. Dekompozice má složitost Θ (n2), kde n je velikost původně zadané instance.  Podinstance je charakterizována libovolnou podmnožinou původní množiny. Existují instance, na kterých je nutno vypočíst všechny podinstance Algoritmus",
    answers: [
      {
        id: 1,
        text: "má exponenciální dolní asymptotickou mez složitosti"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "polynomiální"
      },
      {
        id: 4,
        text: "má horní asymptotickou mez složitosti O(n^2*2^n)"
      }
    ],
    correctAnswers: [1, 4],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na permutační problém, instance je množina velikosti n. Dekompozice má složitost Θ(n), kde n je velikost původně zadané instance. Podinstance je charakterizována libovolnou podmnožinou původní množiny. Existují instance, na kterých je nutno vypočíst všechny podinstance. Algoritmus",
    answers: [
      {
        id: 1,
        text: "je nejvýše polynomiální"
      },
      {
        id: 2,
        text: "je O(2^n)"
      },
      {
        id: 3,
        text: "je pseudopolynomiální"
      },
      {
        id: 4,
        text: "je polynomiální ve velikosti instance"
      }
    ],
    correctAnswers: [],
    maybe:[2]
  },
  {
    question: "Dynamické programování vybírá optimální podmnožinu množiny, jejíž velikost je velikostí instance. Podinstance je charakterizována libovolnou podmnožinou v instanci. Postup výpočtu je od triviálních podinstancí k finálnímu řešení. Každou hodnotu je třeba vypočíst. Horní asymptotická mez složitosti je:",
    answers: [
      {
        id: 1,
        text: "exponenciální"
      },
      {
        id: 2,
        text: "kvadratická"
      },
      {
        id: 3,
        text: "lineární"
      },
      {
        id: 4,
        text: "polynomiální"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na grafový problém. Podinstance je charakterizována podmnožinou uzlů (libovolnou). Existují instance, na kterých je nutno všechny podinstance vypočíst. Velikost instance se měří počtem uzlů. Algoritmus je",
    answers: [
      {
        id: 1,
        text: "globální metoda"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "lineární"
      },
      {
        id: 4,
        text: "polynomiální"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na grafový problém. Velikost instance se měří počtem uzlů. Podinstance je charakterizována podmnožinou uzlů (libovolnou). Kompozice je v konstantním čase.  Postup výpočtu je od triviálních podinstancí k finálnímu řešení, každou hodnotu je třeba vypočíst. Horní asymptotická mez složitosti algoritmu je",
    answers: [
      {
        id: 1,
        text: "lineární"
      },
      {
        id: 2,
        text: "kvadratická"
      },
      {
        id: 3,
        text: "polynomiální"
      },
      {
        id: 4,
        text: "exponenciální"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "Evoluční programování pracuje nad",
    answers: [
      {
        id: 1,
        text: "stromovou reprezentací programu"
      },
      {
        id: 2,
        text: "reprezentací automatu"
      },
      {
        id: 3,
        text: "lineární reprezentací strojového kódu"
      },
      {
        id: 4,
        text: "orientovaným acyklickým grafem datových závislostí"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Evoluční strategie pracuje nad reprezentací",
    answers: [
      {
        id: 1,
        text: "vektoru reálných čísel a odchylek"
      },
      {
        id: 2,
        text: "rozkladového stromu výrazu"
      },
      {
        id: 3,
        text: "binárního řetězu"
      },
      {
        id: 4,
        text: "automatu"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Podle teorie stavebních bloků",
    answers: [
      {
        id: 1,
        text: "složitější schémata (vyššího řádu) přežívají lépe"
      },
      {
        id: 2,
        text: "schémata, jejichž proměnné jsou rozptýleny po celém genotypu, přežívají hůře"
      },
      {
        id: 3,
        text: "mutace zhoršuje přežívání všech schémat (i když ne všech stejně)"
      },
      {
        id: 4,
        text: "uvažované jednobodové křížení má za následek závislost přežívání na délce schématu\n"
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "V genetickém algoritmu je třeba zpomalit konvergenci. Možností je upravit pravděpodobnost mutace a nebo upravit selekční tlak. Platí:",
    answers: [
      {
        id: 1,
        text: "přednostně snížíme selekční tlak"
      },
      {
        id: 2,
        text: "přednostně zvýšíme pravděpodobnost mutace"
      },
      {
        id: 3,
        text: "pokud snížíme selekční tlak, může dojít k divergenci a je třeba snížit i pravděpodobnost mutace"
      }
    ],
    correctAnswers: [1, 3],
    maybe:[]
  },
  {
    question: "V genetickém algoritmu je třeba zpomalit konvergenci. Pravděpodobně bude účinné",
    answers: [
      {
        id: 1,
        text: "upravit koeficienty lineárního škálování, pokud je použito"
      },
      {
        id: 2,
        text: "přejít od výběru ruletou k výběru turnajem při zachování selekčního tlaku"
      },
      {
        id: 3,
        text: "zvětšit velikost turnaje, pokud je použit"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "V genetickém algoritmu je třeba urychlit konvergenci. Možností je upravit pravděpodobnost mutace nebo selekci. Platí",
    answers: [
      {
        id: 1,
        text: "změna selekčního mechanismu nemá významný vliv, pokud zachováme selekční tlak"
      },
      {
        id: 2,
        text: "přednostně zvýšíme pravděpodobnost mutace"
      },
      {
        id: 3,
        text: "přednostně zvýšíme selekční tlak, pracujeme s minimální potřebnou mutací"
      }
    ],
    correctAnswers: [1, 3],
    maybe:[]
  },
  {
    question: "Genetický algoritmus dobře konverguje až do určité vzdálenosti od předpokládaného globálního minima, pak začne divergovat. Příčina může být:",
    answers: [
      {
        id: 1,
        text: "povaha stavového prostoru („landscape“) se v okolí globálního minima prudce změní "
      },
      {
        id: 2,
        text: "pracuje s příliš malou pravděpodobností mutace"
      },
      {
        id: 3,
        text: "adaptace selekčního tlaku nepracuje dostatečně dobře"
      }
    ],
    correctAnswers: [1, 3],
    maybe:[]
  },
  {
    question: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s lineárním škálováním, bude přímo nastavovat",
    answers: [
      {
        id: 1,
        text: "pravděpodobnost mutace"
      },
      {
        id: 2,
        text: "konstanty přepočtu zdatnosti"
      },
      {
        id: 3,
        text: "pravděpodobnost výběru nejlepšího jedince"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu, může být založen na zjištění",
    answers: [
      {
        id: 1,
        text: "diverzity jedinců"
      },
      {
        id: 2,
        text: "změny průměrné zdatnosti mezi generacemi"
      },
      {
        id: 3,
        text: "poměru zdatnosti např. nejzdatnějšího jedince a jedince v polovině pořadí"
      }
    ],
    correctAnswers: [1, 2, 3],
    maybe:[]
  },
  {
    question: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu používajícím lineární škálování a ruletový výběr, bude přímo nastavovat",
    answers: [
      {
        id: 1,
        text: "pravděpodobnost mutace"
      },
      {
        id: 2,
        text: "výseče rulety"
      },
      {
        id: 3,
        text: "koeficienty lineárního škálování"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s výběrem ruletou, může přímo nastavovat",
    answers: [
      {
        id: 1,
        text: "konstantní převod ranku (pořadí zdatnosti) na pravděpodobnost výběru"
      },
      {
        id: 2,
        text: "konstanty lineárního škálování"
      },
      {
        id: 3,
        text: "pravděpodobnost aplikace operátoru „cut and splice“"
      }
    ],
    correctAnswers: [1, 2],
    maybe:[]
  },
  {
    question: "Máte vyhodnotit, zda algoritmus, který automaticky udržuje selekční tlak v genetickém algoritmu, pracuje uspokojivě. Provedete následující:",
    answers: [
      {
        id: 1,
        text: "Budete měřit četnost mutace v závislosti na poměrné zdatnosti."
      },
      {
        id: 2,
        text: "Budete měřit četnost výběru (selekce) v závislosti na poměrné zdatnosti."
      },
      {
        id: 3,
        text: "Pro každou velikost instance zvolíte jednu instanci."
      },
      {
        id: 4,
        text: "Zvolíte jednu velikost instance a použijete instance rozdílné obtížnosti"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Selekční tlak ve standardním genetickém algoritmu lze řídit",
    answers: [
      {
        id: 1,
        text: "zhruba ve stejném rozsahu při selekci turnajem i ruletou"
      },
      {
        id: 2,
        text: "ve větším rozsahu při výběru univerzálním stochastickým vzorkováním"
      },
      {
        id: 3,
        text: "parametry lineárního škálování"
      }
    ],
    correctAnswers: [1, 3],
    maybe:[]
  },
  {
    question: "Volba selekčního tlaku v genetických algoritmech",
    answers: [
      {
        id: 1,
        text: "je omezena hrozbou divergence při malém selekčním tlaku"
      },
      {
        id: 2,
        text: "závisí na obtížnosti instance, obtížnější instance vyžadují pomalejší konvergenci"
      },
      {
        id: 3,
        text: "může vyžadovat odpovídající nastavení pravděpodobnosti funkce"
      }
    ],
    correctAnswers: [1, 2,  3],
    maybe:[]
  },
  {
    question: "Genetické operátory Fast Messy GA algoritmu pracují nad",
    answers: [
      {
        id: 1,
        text: "reprezentací individua"
      },
      {
        id: 2,
        text: "zdatností individua"
      },
      {
        id: 3,
        text: "množinami hodnot genů"
      },
      {
        id: 4,
        text: "reprezentací individua, kde některé geny nejsou ohodnoceny a některé jsou ohodnoceny víckrát"
      }
    ],
    correctAnswers: [3, 4],
    maybe:[]
  },
  {
    question: "Genetické operátory Fast Messy GA algoritmu pracují s",
    answers: [
      {
        id: 1,
        text: "reprezentací individua"
      },
      {
        id: 2,
        text: "podmnožinami genů"
      },
      {
        id: 3,
        text: "fenotypem individua"
      },
      {
        id: 4,
        text: "zdatností individua"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Základní metodou vyhodnocení, se kterou pracuje Fast Messy genetický algoritmus, je",
    answers: [
      {
        id: 1,
        text: "stanovení fenotypu přímo z hodnot genů daného jedince a následný výpočet zdatnosti"
      },
      {
        id: 2,
        text: "výpočet odlišnosti genotypu jedince od referenčního jedince"
      },
      {
        id: 3,
        text: "založena na průměrné délce fragmentu v dané generaci"
      },
      {
        id: 4,
        text: "dosazení hodnot fragmentů do referenčního jedince a výpočet jeho zdatnosti"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "Genetický algoritmus s pravděpodobností mutace 40% připomíná",
    answers: [
      {
        id: 1,
        text: "metodu pouze nejlepší"
      },
      {
        id: 2,
        text: "náhodnou procházku"
      },
      {
        id: 3,
        text: "zaujatou náhodou procházku"
      }
    ],
    correctAnswers: [2],
    maybe:[3]
  },
  {
    question: "Stavební bloky ve Fast Messy GA se generují ",
    answers: [
      {
        id: 1,
        text: "jako podmnožiny ohodnocených genů zadané délky"
      },
      {
        id: 2,
        text: "jako reprezentace počáteční populace"
      },
      {
        id: 3,
        text: "jako fenotyp individua"
      },
      {
        id: 4,
        text: "jako podmnožiny genů zadaného referenčního individua"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Stavební blok ve Fast Messy GA je vždy",
    answers: [
      {
        id: 1,
        text: "reprezentace individua"
      },
      {
        id: 2,
        text: "ohodnocení podmnožiny genů"
      },
      {
        id: 3,
        text: "fenotyp individua"
      },
      {
        id: 4,
        text: "podmnožina genů referenčního individua"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Vnější cyklus fmGA postupně zvyšuje",
    answers: [
      {
        id: 1,
        text: "složitost referenčního individua"
      },
      {
        id: 2,
        text: "cílovou velikost fragmentů po generování"
      },
      {
        id: 3,
        text: "délku referenčního individua"
      },
      {
        id: 4,
        text: "selekční tlak"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Referenční jedinec v fmGA",
    answers: [
      {
        id: 1,
        text: "slouží pro vyhodnocení zdatnosti"
      },
      {
        id: 2,
        text: "slouží pro konstrukci stochastického modelu"
      },
      {
        id: 3,
        text: "při použití, jeho proměnné nahrazují proměnné fragmentů genetické informace"
      },
      {
        id: 4,
        text: "při použití, jeho proměnné jsou nahrazovány proměnnými fragmentů genetické informace"
      }
    ],
    correctAnswers: [1, 4],
    maybe:[]
  },
  {
    question: "Relaxace v iterativních lokálních heuristikách",
    answers: [
      {
        id: 1,
        text: "nezávisí na vlastnostech konkrétní konfigurace, vyjadřuje pouze fakt, že řešením není"
      },
      {
        id: 2,
        text: "zhoršuje dosažitelnost ve stavovém prostoru"
      },
      {
        id: 3,
        text: "typicky nahrazuje optimalizační kritérium heuristickou kombinací původního opt. kritéria a odhadu vzdálenosti konfigurace od řešení\n"
      },
      {
        id: 4,
        text: "spočívá v použití snadných instancí pro závěrečné vyhodnocení"
      },
      {
        id: 5,
        text: "má za úkol vést iterace od konfigurací, které řešením nejsou, k řešením"
      },
      {
        id: 6,
        text: "zlepšuje dosažitelnost ve stavovém prostoru"
      },
      {
        id: 7,
        text: "v případě 3-SAT, spočívá ve snížení počtu klauzulí instance"
      },
      {
        id: 8,
        text: "má za úkol opravit konfiguraci tak, aby byla řešením"
      },
      {
        id: 9,
        text: "přiřazuje všem konfiguracím, které nejsou řešením, hodnotu konstantní pro danou instanci"
      },
      {
        id: 10,
        text: "typicky nahrazuje optimalizační kritérium pouze odhadem vzdálenosti konfigurace od řešení"
      },
      {
        id: 11,
        text: "typicky nahrazuje optimalizační kritérium stanovenou konstantní pokutou"
      },
      {
        id: 12,
        text: "obvykle obsahuje numerický parametr, který je nutno experimentálně nastavit"
      },
      {
        id: 13,
        text: "spočívá v použití malých instancí"
      },
      {
        id: 14,
        text: "Přiřazuje všem konfiguracím, které nejsou řešením, hodnotu konstantní pro danou instanci"
      },
      {
        id: 15,
        text: "Slouží pouze při porovnání konfigurací pro přijetí tahu; neužívá se v případě zhoršujícího tabu"
      },
      {
        id: 16,
        text: "typicky nahrazuje optimalizační kritérium heuristickou kombinací původního opt. kritéria a pokuty za ne-řešení, která je pro danou instanci konstantní"
      }
    ],
    correctAnswers: [3, 5, 6, 12],
    maybe:[ 15, 16 ]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda chování algoritmu, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, odpovídá teorii, kterou jste vymysleli, a která zahrnuje několik parametrů instance. Zajímá vás také, zda tyto parametry stačí k charakterizaci instance z hlediska práce algoritmu.",
    answers: [
      {
        id: 1,
        text: "Použijete reprezentativní mix praktických instancí."
      },
      {
        id: 2,
        text: "Výpočet spustíte opakovaně pro každou instanci."
      },
      {
        id: 3,
        text: "Použijete vygenerované instance se stejnými hodnotami parametrů, o kterých se hovoří ve Vaší teorii, ale různé velikosti."
      },
      {
        id: 4,
        text: "Použijete vygenerované instance s různými hodnotami parametrů, o kterých se hovoří ve Vaší teorii."
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda algoritmus, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, pracuje uspokojivě.",
    answers: [
      {
        id: 1,
        text: "Zvolíte jeden parametr instancí, o kterých se domníváte, že na počáteční teplotu má vliv, a zkonstruujete zkušební instance."
      },
      {
        id: 2,
        text: "Zvolíte velikost instance, na které budete experiment provádět."
      },
      {
        id: 3,
        text: "Použijete instance s rozdílnou hloubkou lokálních minim."
      },
      {
        id: 4,
        text: "Budete sledovat, zda rychlost ochlazování v algoritmu dává přiměřeně rychlou konvergenci pro nastavenou teplotu."
      },
      {
        id: 5,
        text: "Použijete instance různé velikosti"
      },
      {
        id: 6,
        text: "Výpočet spustíte opakovaně pro každou instanci"
      },
      {
        id: 7,
        text: "Použijete větší počet lehkých instancí k urychlení"
      }
    ],
    correctAnswers: [3, 4, 5, 6],
    maybe:[]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda Vámi navržené nastavení simulovaného ochlazování má dostatečnou iterativní sílu.",
    answers: [
      {
        id: 1,
        text: "Budete měřit závislost času výpočtu na velikost instance."
      },
      {
        id: 2,
        text: "Budete měřit kvalitu výsledku pro více různých počátečních řešení."
      },
      {
        id: 3,
        text: "Soubor zkušebních instancí můžete omezit na menší instance."
      },
      {
        id: 4,
        text: "Výpočet spustíte opakovaně pro každou instanci a počáteční řešení."
      }
    ],
    correctAnswers: [2, 4],
    maybe:[]
  },
  {
    question: "Heuristika, která nastavuje parametry simulovaného ochlazování",
    answers: [
      {
        id: 1,
        text: "vždy bude brát v úvahu rozsah optimalizačního kritéria nebo jej normovat"
      },
      {
        id: 2,
        text: "pokud zjistí hloubku lokálních minim, dá se tato hodnota využít"
      },
      {
        id: 3,
        text: "efekt, dosažený manipulací s hloubkou ekvilibria, se dá dosáhnout manipulací s koeficientem ochlazování"
      }
    ],
    correctAnswers: [1, 2, 3],
    maybe:[]
  },
  {
    question: "Volba počáteční teploty v simulovaném ochlazování",
    answers: [
      {
        id: 1,
        text: "pro dosažení nejlepšího výsledku, může vyžadovat odpovídající volbu koeficientu ochlazování"
      },
      {
        id: 2,
        text: "závisí na obtížnosti konkrétní instance"
      },
      {
        id: 3,
        text: "závisí na rozsahu optimalizačního kritéria dané instance"
      }
    ],
    correctAnswers: [1, 2, 3],
    maybe:[]
  },
  {
    question: "Koncová teplota v simulovaném ochlazování",
    answers: [
      {
        id: 1,
        text: "je-li dost nízká, určuje, jak velká část stavového prostoru bude prohledávána"
      },
      {
        id: 2,
        text: "vždy musí zůstat konstantní, pokud se mění počáteční teplota"
      },
      {
        id: 3,
        text: "dá se s výhodou určovat za běhu sledováním konvergence"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Máte udělat závěrečné experimentální vyhodnocení, zda algoritmus, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, pracuje uspokojivě pro praktické nasazení.",
    answers: [
      {
        id: 1,
        text: "Použijete vygenerované instance stejné velikosti."
      },
      {
        id: 2,
        text: "Použijete praktické instance stejné velikosti."
      },
      {
        id: 3,
        text: "Použijete reprezentativní mix praktických instancí."
      },
      {
        id: 4,
        text: "Výpočet spustíte opakovaně pro každou instanci."
      }
    ],
    correctAnswers: [3, 4],
    maybe:[]
  },
  {
    question: "Potřebujete plánovací algoritmus, který chcete nasadit do aplikace řízení údržby. Omezení času výpočtu existuje, ale není podstatné (počítá se přes noc na příští den). Důležitá je kvalita (naježděné kilometry). Máte dva kandidáty, A a B, oba randomizované algoritmy. Potřebujete je experimentálně srovnat.",
    answers: [
      {
        id: 1,
        text: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení."
      },
      {
        id: 2,
        text: "Pro každou instanci srovnáte dosažené optimalizační kritérium jedním během algoritmů A a B."
      },
      {
        id: 3,
        text: "Pro každou instanci srovnáte průměrnou hodnotu opt. kritéria pro několik desítek až set spuštění."
      },
      {
        id: 4,
        text: "Pokud zjistíte, že B je třikrát rychlejší než A, z každých třech hodnot opt. kritéria pro B vezmete tu nejlepší."
      }
    ],
    correctAnswers: [1, 3, 4],
    maybe:[]
  },
  {
    question: "Potřebujete plánovací algoritmus, který chcete nasadit do aplikace řízení údržby. Čas výpočtu je omezený – přes noc. Rozhodující je kvalita (naježděné kilometry). Máte dva kandidáty, A a B, oba randomizované algoritmy. Potřebujete je experimentálně srovnat.",
    answers: [
      {
        id: 1,
        text: "Pro každou instanci srovnáte průměrnou hodnotu opt. kritéria pro několik desítek až set spuštění."
      },
      {
        id: 2,
        text: "Pokud zjistíte, že B je třikrát rychlejší než A (tedy dá se za noc spočítat třikrát), vezmete, pro každou instanci, z každých tří výsledků ten nejlepší."
      },
      {
        id: 3,
        text: "Použijete náhodně generované instance"
      },
      {
        id: 4,
        text: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení."
      }
    ],
    correctAnswers: [1, 2, 4],
    maybe:[]
  },
  {
    question: "Potřebujete plánovací algoritmus, který chcete nasadit do aplikace řízení údržby. Čas je shora omezen, úspora pod tuto mez není zajímavá. Máte dva kandidáty, A a B, oba randomizované algoritmy. Potřebujete experimentálně srovnat jejich kvalitu.",
    answers: [
      {
        id: 1,
        text: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení."
      },
      {
        id: 2,
        text: "Pro každou instanci srovnáte optimalizační kritérium, dosažené jedním během algoritmů A a B."
      },
      {
        id: 3,
        text: "Pro každou instanci srovnáte průměrnou hodnotu opt. kritéria pro několik desítek až set spuštění."
      },
      {
        id: 4,
        text: "Jako jedno spuštění algoritmu lze teoreticky uvažovat tolik běhů každého algoritmu, aby byl naplněn časový limit, a výběr nejlepšího řešení z nich."
      }
    ],
    correctAnswers: [1, 3, 4],
    maybe:[]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda doba běhu Las Vegas randomizovaného algoritmu roste nejvýše s kvadrátem velikosti instance. Chcete o tom napsat teoretický článek.",
    answers: [
      {
        id: 1,
        text: "Použijete instance „nachytané“ z praxe"
      },
      {
        id: 2,
        text: "Použijete instance vygenerované tak, aby každá instance zadané velikosti byla stejně pravděpodobná."
      },
      {
        id: 3,
        text: "Použijete instance jedné velikosti."
      },
      {
        id: 4,
        text: "Výpočet spustíte opakovaně pro každou instanci"
      }
    ],
    correctAnswers: [2, 4],
    maybe:[]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda relativní kvalita Monte Carlo randomizovaného algoritmu neklesá s rostoucí velikostí instance.",
    answers: [
      {
        id: 1,
        text: "Použijete instance „nachytané“ z praxe."
      },
      {
        id: 2,
        text: "Budete potřebovat exaktní řešení (nebo to budete muset nějak obejít)"
      },
      {
        id: 3,
        text: "Použijete instance vygenerované tak, aby každá instance zadané velikosti byla stejně pravděpodobná."
      },
      {
        id: 4,
        text: "Výpočet spustíte jednou pro každou instanci."
      }
    ],
    correctAnswers: [2, 3],
    maybe:[]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda randomizovaný algoritmus, který vyvíjíte, je citlivý na určitou charakteristickou instanci.",
    answers: [
      {
        id: 1,
        text: "Použijete přednostně instance „nachytané“ při provozu podobného algoritmu v praxi, i když zkoumanou charakteristiku u nich nelze zjistit."
      },
      {
        id: 2,
        text: "Použijete přednostně instance vygenerované se známými vlastnostmi."
      },
      {
        id: 3,
        text: "Použijete instance různých vlastností tak, aby bylo možné srovnání podobných instancí, avšak s či bez zkoumané charakteristiky."
      },
      {
        id: 4,
        text: "Výpočet spustíte opakovaně pro každou instanci."
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "Máte experimentálně vyhodnotit, zda randomizovaný plánovací algoritmus, který chcete nasadit do aplikace řízení údržby, pracuje pro toto nasazení uspokojivě. Obtížnost instancí řešených v ostrém nasazení je obtížné odhadnout na základě známých charakteristik",
    answers: [
      {
        id: 1,
        text: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení."
      },
      {
        id: 2,
        text: "Použijete přednostně instance vygenerované se známými vlastnostmi."
      },
      {
        id: 3,
        text: "Použijete větší počet lehkých instancí k urychlení."
      },
      {
        id: 4,
        text: "Výpočet spustíte opakovaně pro každou instanci."
      }
    ],
    correctAnswers: [1, 4],
    maybe:[]
  },
  {
    question: "Srovnáváte dva deterministické algoritmy A a B, za účelem teoretického poznání závislosti počtu kroků na velikosti instance. Pro algoritmus B, různé instance jedné velikosti vykazují velký rozptyl v počtu kroků.",
    answers: [
      {
        id: 1,
        text: "Počet kroků pro algoritmus B zprůměrujete, protože rozptyl není součástí hodnocení."
      },
      {
        id: 2,
        text: "Zjistíte statistické rozložení počtu kroků a pokud je symetrické, použijete průměr."
      },
      {
        id: 3,
        text: "Zjistíte statistické rozložení počtu kroků pro oba algoritmy a vyhodnotíte, zda se překrývají a jak mnoho."
      },
      {
        id: 4,
        text: "Pokusíte se zjistit, jaká další charakteristika instancí má vliv na počet kroků."
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "Zjišťujete vliv parametru randomizované lokální iterativní heuristiky na kvalitu výsledku. Chcete ukázat, že daný parametr na kvalitu výsledku vliv nemá.",
    answers: [
      {
        id: 1,
        text: "stačí jeden běh pro každou hodnotu parametru"
      },
      {
        id: 2,
        text: "program spustíte pro každou instanci mnohokrát, sledujete průměr."
      },
      {
        id: 3,
        text: "pokud to není domácí úkol, použijete statistické metody, například korelaci, abyste dokázali nezávislost"
      },
      {
        id: 4,
        text: "pokud to není domácí úkol, naplánujete statistické metody tak, abyste prokázali nezávislost na parametru při všech charakteristikách instance"
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "Zjišťujete vliv parametru randomizované lokální iterativní heuristiky na kvalitu výsledku. Provedli jste jeden běh algoritmu na více instancích pro každou hodnotu parametru. Výsledná závislost je zcela chaotická, přestože by k tomu tak být nemělo.",
    answers: [
      {
        id: 1,
        text: "Je to důkaz, že kvalita na parametru nezávisí."
      },
      {
        id: 2,
        text: "Použijete vizualizaci vývoje ceny, abyste zjistili, zda jiné parametry nejsou zcela nevhodně nastaveny."
      },
      {
        id: 3,
        text: "Algoritmus spouštíte opakovaně na každé instanci."
      },
      {
        id: 4,
        text: "Pokud to není domácí úkol, použijete statistické testy významnosti, abyste zjistili potřebný počet opakování."
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "Globální metoda je aplikována na grafový problém. Instance je graf, velikost instance n se měří počtem uzlů grafu. Dekompozice produkuje v čase O(n) dvě podinstance, které obsahují vždy poloviční počet uzlů (nevíme které uzly) a hrany mezi nimi. Kompozice a řešení triviálních instancí je v konstantním čase. Algoritmus:",
    answers: [
      {
        id: 1,
        text: "dá nutně optimální řešení"
      },
      {
        id: 2,
        text: "O(n^2)"
      },
      {
        id: 3,
        text: "složitost je nejméně lineární"
      },
      {
        id: 4,
        text: "na náhodných instancích, použití paměti řešení podinstancí by se statisticky vyplatilo"
      },
      {
        id: 5,
        text: "je pseudopolynomiální"
      },
      {
        id: 6,
        text: "polynomiální na velikosti instance"
      },
      {
        id: 7,
        text: "při řešení dynamickým programováním, byl by polynomiální\n"
      }
    ],
    correctAnswers: [2, 3, 6, 7],
    maybe:[]
  },
  {
    question: "Globální optimalizační metoda dekomponuje každou instanci velikosti n na dvě instance velikosti n−1. Pokud existují optimální řešení dekomponovaných instancí, kompozicí dostaneme optimální řešení původní instance. Pokud některá z nich neexistuje, víme, že ani původní instance nemá řešení. Kompozice a dekompozice mají konstantní složitost.",
    answers: [
      {
        id: 1,
        text: "tento algoritmus je dynamickým programováním"
      },
      {
        id: 2,
        text: "z tohoto algoritmu se dá vytvořit dynamické programování"
      },
      {
        id: 3,
        text: "tento algoritmus má složitost Θ(2n)"
      },
      {
        id: 4,
        text: "tento algoritmus má polynomiální složitost"
      }
    ],
    correctAnswers: [],
    maybe:[1, 2, 3, 4]
  },
  {
    question: "Globální metoda je aplikována na grafový problém. Instance je tvořena grafem a jedním celým číslem M. velikost instance n se měří jemnou mírou (počet bitů popisu instance). Dekompozice produkuje v čase O(n log M) dvě podinstance, které obsahují vždy poloviční počet uzlů (nevíme které uzly) a hrany mezi nimi. Kompozice a řešení triviálních instancí je také v konstantním čase. Platí",
    answers: [
      {
        id: 1,
        text: "čas jedné dekompozice je polynomiální ve velikosti instance měřené uvedeným způsobem"
      },
      {
        id: 2,
        text: "algoritmus řeší O(N) podinstancí, kde N je počet uzlů"
      },
      {
        id: 3,
        text: "algoritmus je pseudopolynomiální"
      },
      {
        id: 4,
        text: "při řešení dynamickým programováním je pseudopolynomiální"
      }
    ],
    correctAnswers: [1, 2],
    maybe:[]
  },
  {
    question: "Jak se pozná, že heuristika neskončí v lokálním minimu?",
    answers: [
      {
        id: 1,
        text: "po restartech skončí vždy ve stejném řešení"
      },
      {
        id: 2,
        text: "po více náhodných restartech skončí jinde"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Pokud je počáteční teplota u SA (simulované ochlazování) malá, o. má algoritmus tendenci padat do lokálního minima?",
    answers: [
      {
        id: 1,
        text: "ano"
      },
      {
        id: 2,
        text: "ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Vede snížení velikosti turnaje ke zvýšení intenzifikace?",
    answers: [
      {
        id: 1,
        text: "ano"
      },
      {
        id: 2,
        text: "ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "S lineárně rostoucím k roste k-okolí",
    answers: [
      {
        id: 1,
        text: "lineárně"
      },
      {
        id: 2,
        text: "kvadraticky"
      },
      {
        id: 3,
        text: "exponenciálně"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Globální metody",
    answers: [
      {
        id: 1,
        text: "vždy dávají exaktní výsledek"
      },
      {
        id: 2,
        text: "přibližná dekompozice dává exaktní výsledek"
      },
      {
        id: 3,
        text: "čistá dekompozice dává exaktní výsledek"
      },
      {
        id: 4,
        text: "přesná dekompozice dává exaktní výsledek"
      },
      {
        id: 5,
        text: "mají rekurzivní formulaci"
      }
    ],
    correctAnswers: [3, 4, 5],
    maybe:[]
  },
  {
    question: "Zvýšení selekčního tlaku může způsobit",
    answers: [
      {
        id: 1,
        text: "degeneraci"
      },
      {
        id: 2,
        text: "zrychlení konvergence"
      },
      {
        id: 3,
        text: "divergenci"
      },
      {
        id: 4,
        text: "ztrátu diverzity"
      }
    ],
    correctAnswers: [1, 3, 4],
    maybe:[]
  },
  {
    question: "Zvýšení mutace může způsobit",
    answers: [
      {
        id: 1,
        text: "degeneraci"
      },
      {
        id: 2,
        text: "zrychlení konvergence"
      },
      {
        id: 3,
        text: "divergenci"
      },
      {
        id: 4,
        text: "ztrátu diverzity"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Snížením selekčního tlaku u genetického algoritmu se zvyšuje diverzifikace",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Mutace snižuje diverzifikaci",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Globální metody",
    answers: [
      {
        id: 1,
        text: "používají celý stavový prostor"
      },
      {
        id: 2,
        text: "nepoužívají stavový prostor vůbec (viz. poslední přednáška, 2. slajd: “metody, které nejsou založeny na pojmu stavového prostoru”)"
      },
      {
        id: 3,
        text: "některé globální metody řeší některé NP-těžké problémy v polynomiálním čase"
      },
      {
        id: 4,
        text: "jsou založené na dekompozici"
      },
      {
        id: 5,
        text: "jsou založené na rekurzi"
      }
    ],
    correctAnswers: [4, 5],
    maybe:[]
  },
  {
    question: "Jak se pozná, že heuristika padá do lokálního extrému?",
    answers: [
      {
        id: 1,
        text: "po každém restartu skončí stejně"
      },
      {
        id: 2,
        text: "po restartu to závisí na počátečním stavu"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Když zvýšíme selekční tlak, zvýší se intenzifikace?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Když zvýšíme počáteční teplotu, skončí algoritmus rychle v lokálním extrému?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Pokud zvýšíme selekční tlak, zvýší se diverzifikace?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Zvyšuje se mutací intenzifikace?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Když je lokální heuristika silně závislá na počátečním řešení, pomůže zvětšit nebo zmenšit okolí?",
    answers: [
      {
        id: 1,
        text: "Zvětšit"
      },
      {
        id: 2,
        text: "Zmenšit"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Jaká strategie se používá pro výběr souseda u simulovaného ochlazování?",
    answers: [
      {
        id: 1,
        text: "pouze nejlepší"
      },
      {
        id: 2,
        text: "prvé zlepšení"
      },
      {
        id: 3,
        text: "prvé zlepšení nebo přípustné zhoršení"
      },
      {
        id: 4,
        text: "nejlepší nejdříve"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Pokud je u SA nízká hodnota (délka) equilibria a neupdatuje se dynamicky, skončí heuristika rychle v lokálním minimu?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Kdy lokální heuristika NEMÁ tendenci padat do lokálního minima:",
    answers: [
      {
        id: 1,
        text: "z náhodného řešení skončí vždy jinde"
      },
      {
        id: 2,
        text: "z náhodného řešení skončí vždy ve (zhruba) stejném místě"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Pokud je počáteční teplota u SA malá, má algoritmus tendenci padat do lokálního minima?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Lineární programování",
    answers: [
      {
        id: 1,
        text: "je metoda"
      },
      {
        id: 2,
        text: "je problém"
      },
      {
        id: 3,
        text: "může mít omezení v podobě lineární nerovnice"
      },
      {
        id: 4,
        text: "má optimalizační kritéria v podobě lineární rovnice"
      }
    ],
    correctAnswers: [2, 3, 4],
    maybe:[]
  },
  {
    question: "Zvětší se zvětšením populace diverzita?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Zvětší se zvětšením mutace diverzita?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Zvýší snížení selekčního tlaku diverzitu?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Dynamické programování",
    answers: [
      {
        id: 1,
        text: "dává suboptimální výsledek"
      },
      {
        id: 2,
        text: "pro všechny problémy (NP nějaké) zaručuje řešení v polynomiálním čase"
      },
      {
        id: 3,
        text: "pro některé problémy (NP nějaké) zaručuje řešení v polynomiálním čase"
      },
      {
        id: 4,
        text: "je implementací přesné nebo čisté dekompozice"
      }
    ],
    correctAnswers: [3, 4],
    maybe:[]
  },
  {
    question: "Jak se pozná, že má lokální heuristika dostatečnou iterativní sílu?",
    answers: [
      {
        id: 1,
        text: "po restartech skončí vždy ve stejném řešení"
      },
      {
        id: 2,
        text: "po více náhodných restartech skončí jinde"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Pokud je vysoká teplota tuhnutí u SA, skončíme často v lokálním minimu?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "GA, vybíráme turnajem. Když turnaj zmenšíme, zvýší se intenzifikace?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Podporuje velký selekční tlak diverzifikaci?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Metoda nejlepší nejdříve",
    answers: [
      {
        id: 1,
        text: "poskytuje exaktní řešení"
      },
      {
        id: 2,
        text: "zaručuje polynomiální složitost"
      },
      {
        id: 3,
        text: "je úplná"
      },
      {
        id: 4,
        text: "je systematická"
      }
    ],
    correctAnswers: [1, 3, 4],
    maybe:[]
  },
  {
    question: "Zvýšení počtu iterací při konstantní teplotě u SA (equilibrium), odpovídá",
    answers: [
      {
        id: 1,
        text: "zvýšení koeficientu ochlazování"
      },
      {
        id: 2,
        text: "snížení koeficientu ochlazování"
      },
      {
        id: 3,
        text: "vztah nelze vyjádřit"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Zvýší se snížením velikosti turnaje selekční tlak?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Pokud je koeficient ochlazování u SA velmi nízký, skončí heuristika rychle v lokálním minimu?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Zvyšuje mutace diverzifikaci?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Dynamické programování",
    answers: [
      {
        id: 1,
        text: "je exaktní"
      },
      {
        id: 2,
        text: "zaručuje polynomiální složitost"
      },
      {
        id: 3,
        text: "je aproximativní"
      },
      {
        id: 4,
        text: "využívá dekompozice problémů"
      }
    ],
    correctAnswers: [1, 4],
    maybe:[]
  },
  {
    question: "Dynamické programování",
    answers: [
      {
        id: 1,
        text: "je lokální metoda"
      },
      {
        id: 2,
        text: "představuje přibližnou dekompozici"
      },
      {
        id: 3,
        text: "dává suboptimální řešení"
      },
      {
        id: 4,
        text: "pro některé problémy je pseudopolynomiální"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "Je u SA při rychlejším ochlazování vyšší pravděpodobnost, že skončíme v lokálním minimu?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Hladové algoritmy",
    answers: [
      {
        id: 1,
        text: "dávají exaktní řešení"
      },
      {
        id: 2,
        text: "mají polynomiální složitost"
      },
      {
        id: 3,
        text: "systematicky prohledávají SP"
      },
      {
        id: 4,
        text: "úplně prohledávají SP"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Metoda pouze nejlepší (best only)",
    answers: [
      {
        id: 1,
        text: "poskytuje exaktní řešení"
      },
      {
        id: 2,
        text: "zaručuje polynomiální složitost"
      },
      {
        id: 3,
        text: "je úplná SA"
      },
      {
        id: 4,
        text: "je systematická"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Metoda nejlepsi nejdříve (best first)",
    answers: [
      {
        id: 1,
        text: "poskytuje exaktní řešení"
      },
      {
        id: 2,
        text: "NEzaručuje polynomiální složitost"
      },
      {
        id: 3,
        text: "je úplná"
      },
      {
        id: 4,
        text: "je systematická"
      }
    ],
    correctAnswers: [1, 2, 3, 4],
    maybe:[]
  },
  {
    question: "Zavedení lineárního škálování u GA",
    answers: [
      {
        id: 1,
        text: "Zvýší selekční tlak"
      },
      {
        id: 2,
        text: "Sníží selekční tlak"
      },
      {
        id: 3,
        text: "Sníží nebo zvýší selekční tlak, podle aktuální hodnoty fitness v populaci"
      },
      {
        id: 4,
        text: "Nesouvisi se selekčním tlakem"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Pro globální metody platí",
    answers: [
      {
        id: 1,
        text: "exaktní řešení najdou vždy"
      },
      {
        id: 2,
        text: "pokud používají čistou dekompozici, najdou exaktní řešení vždy"
      },
      {
        id: 3,
        text: "pokud používají přibližnou dekompozici, najdou exaktní řešení vždy"
      },
      {
        id: 4,
        text: "pokud používají čistou dekompozici a řešení nenaleznou, znamená to, že řešení neexistuje"
      },
      {
        id: 5,
        text: "mají rekurzivní formulaci"
      }
    ],
    correctAnswers: [4, 5],
    maybe:[]
  },
  {
    question: "Jak poznám, že moje jednoduchá lokální iterativní metoda funguje dobře",
    answers: [
      {
        id: 1,
        text: "po náhodných restartech vždy skončí ve stejném stavu"
      },
      {
        id: 2,
        text: "po náhodných restartech skončí vždy v počátku"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Velikost k-okolí při zvyšování k roste",
    answers: [
      {
        id: 1,
        text: "nejvýše lineárně"
      },
      {
        id: 2,
        text: "nejvýše kvadraticky"
      },
      {
        id: 3,
        text: "až exponenciálně"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Zvětšení turnaje zvyšuje intenzifikaci?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Velká koncová teplota způsobí uváznutí v lokálním minimu?",
    answers: [
      {
        id: 1,
        text: "Ano"
      },
      {
        id: 2,
        text: "Ne"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Metoda první zlepšení má tyto vlastnosti",
    answers: [
      {
        id: 1,
        text: "poskytuje exaktní řešení"
      },
      {
        id: 2,
        text: "zaručuje polynomiální složitost"
      },
      {
        id: 3,
        text: "je úplná"
      },
      {
        id: 4,
        text: " je systematická"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Metoda Kernighan - Lin má následující vlastnosti",
    answers: [
      {
        id: 1,
        text: "je založena na konstrukci proměnného okolí"
      },
      {
        id: 2,
        text: "toto okolí prohledává metodou pouze nejlepší"
      },
      {
        id: 3,
        text: "je založena na prořezávání"
      },
      {
        id: 4,
        text: "poskytuje kvalitnější výsledky než metoda nejlepší nejdříve"
      }
    ],
    correctAnswers: [1, 2],
    maybe:[]
  },
  {
    question: "Metoda prohledávání okolí v tabu prohledávání je",
    answers: [
      {
        id: 1,
        text: "prvé zlepšení nebo akceptovatelné zhoršení"
      },
      {
        id: 2,
        text: "pouze nejlepší"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Změna parametrů lineárního škálování, která má za následek zvětšení poměru zdatnosti nejlepšího a nejhoršího jedince v genetických algoritmech způsobí diverzifikaci",
    answers: [
      {
        id: 1,
        text: "ano"
      },
      {
        id: 2,
        text: "ne"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Máte dynamické programování pro problém. Je závislé na podmnožině podproblémů (a nelze to udělat jinak). Jaký je to algoritmus?",
    answers: [
      {
        id: 1,
        text: "Exponenciální"
      },
      {
        id: 2,
        text: "Pseudopolynomiální"
      },
      {
        id: 3,
        text: "Polynomiální"
      },
      {
        id: 4,
        text: "Globální optimalizace"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Máte genetický algoritmus a svou teorii ohledně vlastností instance, jak ji ověříte?",
    answers: [
      {
        id: 1,
        text: "Vygeneruji instance s danou vlastností a nad nimi spustím genetický algoritmus"
      },
      {
        id: 2,
        text: "Algoritmus spustím opakovaně nad instancemi"
      },
      {
        id: 3,
        text: "Vygeneruji jak malé, tak velké instance a nad nimi spustím algoritmus"
      }
    ],
    correctAnswers: [2],
    maybe:[3]
  },
  {
    question: "Co má na vstupu evoluční programování?",
    answers: [
      {
        id: 1,
        text: "Automat"
      },
      {
        id: 2,
        text: "Binární řetěz"
      },
      {
        id: 3,
        text: "Vektor čísel"
      },
      {
        id: 4,
        text: "Rozkladový strom výrazu"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Máte dynamické programování pro řešení grafového problému. Do předchozí instance se ptáte s klíčem (p, q) kde p je index uzlu a q je index hrany. Velikost instance se měří počtem uzlů",
    answers: [
      {
        id: 1,
        text: "Slozitost roste třetí mocninou velikosti instance"
      },
      {
        id: 2,
        text: "Slozitost roste druhou mocninou velikosti instance"
      },
      {
        id: 3,
        text: "Je to pseudopolynomiální"
      },
      {
        id: 4,
        text: "Je to globalni metoda"
      }
    ],
    correctAnswers: [1, 4],
    maybe:[]
  },
  {
    question: "Selekční tlak v turnajovém výběru PŘÍMO nastavuje",
    answers: [
      {
        id: 1,
        text: "velikost turnaje"
      },
      {
        id: 2,
        text: "pravděpodobnost výběru nejlepšího jedince"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Máte simulované ochlazování s automatickým nastavováním počáteční teploty. Jak ověříte spravnost nastavování počáteční teploty?",
    answers: [
      {
        id: 1,
        text: "Pustím na instance různých velikostí"
      },
      {
        id: 2,
        text: "Pustím na instance různých hloubek"
      },
      {
        id: 3,
        text: "Pustim na mnoho malych instanci, abych to urychlil"
      },
      {
        id: 4,
        text: "Výpočet spustíte opakovaně pro každou instanci"
      }
    ],
    correctAnswers: [1, 2, 4],
    maybe:[]
  },
  {
    question: "GA lineárně škálovatelný s ruletovým výběrem může přímo ovlivňovat selekční tlak",
    answers: [
      {
        id: 1,
        text: "pravdepodobnosti mutaci"
      },
      {
        id: 2,
        text: "vyseci rulety"
      },
      {
        id: 3,
        text: "parametry linearni skalovatelnosti"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Dynamický algoritmus, který jako klíče používá velikost instance a výpočet provádí na základě výsledku nižší instance a počítá od nejmenších instancí je",
    answers: [
      {
        id: 1,
        text: "polynomialni"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "kvadraticky"
      },
      {
        id: 4,
        text: "s lokální metodou"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Genetické programování pracuje nad reprezentací",
    answers: [
      {
        id: 1,
        text: "vektoru reálných čísel"
      },
      {
        id: 2,
        text: "rozkladového stromu výrazu"
      },
      {
        id: 3,
        text: "binárního řetězu"
      },
      {
        id: 4,
        text: "automatu"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Typická úloha aspiračních kritérií je",
    answers: [
      {
        id: 1,
        text: "diverzifikace"
      },
      {
        id: 2,
        text: "intenzifikace"
      },
      {
        id: 3,
        text: "omezení okolí"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Algoritmus který bude za běhu upravovat selekční tlak v GA bude zjišťovat",
    answers: [
      {
        id: 1,
        text: "diverzitu (rozdílnost) jedinců"
      },
      {
        id: 2,
        text: "změnu průměrné zdatnosti mezi generacem"
      },
      {
        id: 3,
        text: "poměry zdatnosti"
      }
    ],
    correctAnswers: [1, 2],
    maybe:[]
  },
  {
    question: "Základní jednotkou reprezentace, se kterou pracuje stochasticka optimalizace, je",
    answers: [
      {
        id: 1,
        text: "stochasticky model závislosti mezi proměnnými"
      },
      {
        id: 2,
        text: "dvojice [identifikace proměnné, hodnota]"
      },
      {
        id: 3,
        text: "dvojice [stredni hodnota, standardní odchylka]"
      },
      {
        id: 4,
        text: "binarni retez"
      }
    ],
    correctAnswers: [1],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na problém, kde konfigurační proměnné zobrazují graf s uzly očíslovanými 1…n, kde n je velikost instance. Podinstance je tvořena prvními m uzly. Kompozice a dekompozice mají složitost Omega(n). Algoritmus:",
    answers: [
      {
        id: 1,
        text: "má složitost rostoucí s třetí mocninou velikosti instance"
      },
      {
        id: 2,
        text: "má složitost rostoucí s kvadrátem (druhou mocninou) velikosti instance"
      },
      {
        id: 3,
        text: "má složitost lineární ve velikosti instance"
      },
      {
        id: 4,
        text: "má složitost exponenciální ve velikosti instance"
      },
      {
        id: 5,
        text: "je pseudopolynomiální"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Dynamické programování řeší problém, kde každá instance i podinstance je charakterizována počtem prvků n a celočíselným parametrem P. Postup výpočtu je od triviálních podinstancí k finálnímu řešení. Dá se dokázat, že je třeba vyřešit podinstance pro všechna n, ale pro každé n pouze Θ(log(P)) instancí. Kompozice a dekompozice mají konstantní složitost. Algoritmus je:",
    answers: [
      {
        id: 1,
        text: "nejméně exponenciální"
      },
      {
        id: 2,
        text: "pseudopolynomiální"
      },
      {
        id: 3,
        text: "kubický"
      },
      {
        id: 4,
        text: "polynomiální"
      }
    ],
    correctAnswers: [4],
    maybe:[]
  },
  {
    question: "V genetickém algoritmu používáme operátor inverze, jestliže:",
    answers: [
      {
        id: 1,
        text: "chceme potlačit statistickou nevyváženost uniformního křížení\n"
      },
      {
        id: 2,
        text: "chceme potlačit statistickou nevyváženost jednobodového křížení"
      },
      {
        id: 3,
        text: "současně používáme uniformní stochastický výběr"
      }
    ],
    correctAnswers: [2],
    maybe:[]
  },
  {
    question: "Pro praktickou aplikaci kombinatorického optimalizačního problému jste zvolili simulované ochlazování bez adaptačních mechanismů a s pevnou hodnotou koncové teploty. Na většině instancí se optimalizační kritérium nejdříve poněkud zhoršuje a přitom vykazuje náhodné změny, posléze se zlepšuje a náhodné změny se zmenšují. Na převážné části instancí konverguje ke stabilnímu a dobrému řešení. Na zbylých stále zlepšuje opt. kritérium a náhodné změny se zmenšují, ale optimalizační kritérium se nedostane ani ke startovací hodnotě. Na vině je:",
    answers: [
      {
        id: 1,
        text: "příliš vysoká hodnota počáteční teploty"
      },
      {
        id: 2,
        text: "příliš nízká hodnota koncové teploty"
      },
      {
        id: 3,
        text: "podmínka ukončení, která nedetekuje konvergenci"
      },
      {
        id: 4,
        text: "příliš nízká hodnota koeficientu ochlazování"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
  {
    question: "Instance problému splnění podmínek má n konfiguračních proměnných, doména každé proměnné má práve d hodnot. Algoritmus má stav odvozený pouze z konfiguračních proměnných.",
    answers: [
      {
        id: 1,
        text: "Stavový prostor má n^d stavů"
      },
      {
        id: 2,
        text: "Stavový prostor má d^n stavů"
      },
      {
        id: 3,
        text: "Prostor prohledávání má (d+1)^n stavů"
      },
      {
        id: 4,
        text: "Prostor prohledávání má d^(2n) stavů"
      }
    ],
    correctAnswers: [2, 3],
    maybe:[]
  },
  {
    question: "Dynamické programování je aplikováno na problém, kde konfigurační proměnné zobrazují graf s hranami očíslovanými 1…m, kde m je počet hran instance. Každá hrana je ohodnocena celým číslem 1 … M. Podinstance je tvořena prvními m-1 hranami, každá je vypočítána. Kompozice a dekompozice mají složitost Theta(log(M)). Algoritmus:",
    answers: [
      {
        id: 1,
        text: "je lineární"
      },
      {
        id: 2,
        text: "je exponenciální"
      },
      {
        id: 3,
        text: "je polynomiální"
      },
      {
        id: 4,
        text: "je pseudopolynomiální"
      }
    ],
    correctAnswers: [3],
    maybe:[]
  },
]