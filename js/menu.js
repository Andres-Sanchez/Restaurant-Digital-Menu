let menuLunch = [
    {
        id: "antipasti",
        categoria: "Antipasti",
        piatti: [
            {
                nome: "Gnocco fritto",
                prezzo: 8,
                descrizione: `Gnocco fritto della casa con salumi misti e formaggi`
            },
            {
                nome: "Involtini primavera",
                prezzo: 8,
                descrizione: `Croccanti involtini di pasta fillo o riso, dorati e fritti, ripieni di verdure fresche a julienne`
            },
            {
                nome: "Polipetti affogati",
                prezzo: 8,
                descrizione: `piccoli polpi (o moscardini) cotti lentamente a fuoco basso nel proprio sugo di pomodoro, aglio, olio EVO, peperoncino e prezzemolo.`
            }

        ]
    },
    {
        id: "primi",
        categoria: "Primi",
        piatti: [
            {
                nome: "Spaghetti alla carbonara",
                prezzo: 10,
                descrizione: `Spaghetti trafilati al bronzo con guanciale di Amatrice croccante, Pecorino Romano DOP,tuorli d'uovo freschi e pepe nero in grani tostato`
            },
            {
                nome: "Lasagne alla bolognese",
                prezzo: 10,
                descrizione: `Sfoglia verde all'uovo, ricco ragù alla bolognese a lenta cottura, vellutata besciamella e Parmigiano Reggiano DOP.`
            },
            {
                nome: "Risotto alla zucca",
                prezzo: 10,
                descrizione: `Risotto zucca e taleggio: vellutata di zucca arrosto, riso Carnaroli e cuore fondente di taleggio DOP.`
            },
            {
                nome: "Calamarata Napoletana",
                prezzo: 10,
                descrizione: `Pasta di Gragnano a forma di anelli, calamari freschi saltati, pomodorini ciliegino, aglio, prezzemolo fresco e un tocco di peperoncino.`
            }

        ]
    },
    {
        id: "secondi",
        categoria: "Secondi",
        piatti: [
            {
                nome: "Pollo arrosto",
                prezzo: 12,
                descrizione: `Pollo intero ruspante arrosto, insaporito con erbe aromatiche mediterranee e aglio. Croccante fuori, tenero dentro. Servito con patate al forno dorate.`
            },
            {
                nome: "Baccalà mantecato",
                prezzo: 12,
                descrizione: `Baccalà mantecato alla veneziana, servito con crostini di polenta bianca calda.`
            },
            {
                nome: "Tagliata di manzo",
                prezzo: 12,
                descrizione: `Tagliata di controfiletto di manzo alla griglia, servita su letto di rucola, scaglie di Parmigiano Reggiano 24 mesi e pomodorini.`
            }

        ]
    },
    {
        id: "contorni",
        categoria: "Contorni",
        piatti: [
            {
                nome: "Patate al forno",
                prezzo: 6,
                descrizione: `Patate novelle al forno con timo, olio EVO biologico e sale Maldon.`
            },
            {
                nome: "Caponata di Melanzane",
                prezzo: 6,
                descrizione: `melanzane dorate, pomodoro, sedano croccante, olive e capperi.`
            },
            {
                nome: "Caesar salad",
                prezzo: 6,
                descrizione: `Cuori di lattuga romana, crostini di pane casereccio croccanti, scaglie di Parmigiano Reggiano DOP e la nostra salsa Caesar originale.`
            }
        ]
    },
    {
        id: "dolci",
        categoria: "Dolci",
        piatti: [
            {
                nome: "Tortino al cuore caldo",
                prezzo: 7,
                descrizione: `Soffice tortino al cioccolato fondente 70% con cuore caldo e cremoso, servito con spolverata di zucchero a velo.`
            },
            {
                nome: "Tiramisù",
                prezzo: 7,
                descrizione: `Savoiardi artigianali inzuppati nel caffè espresso, crema soffice al mascarpone e una spolverata di cacao amaro.`
            },
            {
                nome: "Torta della nonna",
                prezzo: 7,
                descrizione: `Friabile frolla artigianale ripiena di vellutata crema pasticcera al limone, guarnita con pinoli tostati e zucchero a velo.`
            }
        ]
    }
]


let menuDinner = [
    {
        id: "antipasti",
        categoria: "Antipasti",
        piatti: [
            {
                nome: "Gnocco fritto",
                prezzo: 8,
                descrizione: `Gnocco fritto della casa con salumi misti e formaggi`
            },
            {
                nome: "Ravioli cinesi al vapore",
                prezzo: 8,
                descrizione: `Sfoglia morbida con ripieno di maiale, verza, zenzero e salsa di soia.`
            },
            {
                nome: "Polipetti affogati",
                prezzo: 8,
                descrizione: `piccoli polpi (o moscardini) cotti lentamente a fuoco basso nel proprio sugo di pomodoro, aglio, olio EVO, peperoncino e prezzemolo.`
            }

        ]
    },
    {
        id: "primi",
        categoria: "Primi",
        piatti: [
            {
                nome: "Spaghetti all'Amatriciana",
                prezzo: 10,
                descrizione: `Spaghetti con guanciale di Amatrice, pomodoro pelato, pecorino romano DOP e peperoncino.`
            },
            {
                nome: "Orecchiette con le cime di rapa",
                prezzo: 10,
                descrizione: `Orecchiette fatte a mano "risottate" con crema di cime di rapa, alici di Cetara e olio EVO al peperoncino.`
            },
            {
                nome: "Risotto alla zucca",
                prezzo: 10,
                descrizione: `Risotto zucca e taleggio: vellutata di zucca arrosto, riso Carnaroli e cuore fondente di taleggio DOP.`
            },
            {
                nome: "Spaghetti alle vongole",
                prezzo: 10,
                descrizione: `Spaghettoni al dente mantecati con vongole lupini, emulsione di aglio in camicia, prezzemolo e un tocco di peperoncino.`
            }

        ]
    },
    {
        id: "secondi",
        categoria: "Secondi",
        piatti: [
            {
                nome: "Pollo al curry",
                prezzo: 12,
                descrizione: `"Bocconcini di pollo tenero saltati con spezie curry, sfumati con crema allo yogurt e serviti con riso basmati profumato.`
            },
            {
                nome: "Spezzatino di manzo",
                prezzo: 12,
                descrizione: `Bocconcini di cappello del prete brasati, riduzione di vino rosso, crema di patate all'olio EVO e timo.`
            },
            {
                nome: "Tagliata di manzo",
                prezzo: 12,
                descrizione: `Tagliata di controfiletto di manzo alla griglia, servita su letto di rucola, scaglie di Parmigiano Reggiano 24 mesi e pomodorini.`
            }

        ]
    },
    {
        id: "contorni",
        categoria: "Contorni",
        piatti: [
            {
                nome: "Patate al forno",
                prezzo: 6,
                descrizione: `Patate novelle al forno con timo, olio EVO biologico e sale Maldon.`
            },
            {
                nome: "Cavolfiori gratinati",
                prezzo: 6,
                descrizione: `Cimette di cavolfiore al forno con besciamella leggera, parmigiano reggiano 24 mesi e pane profumato alle erbe.`
            },
            {
                nome: "Carciofi alla romana",
                prezzo: 6,
                descrizione: `Cuore di carciofo alla romana, cotto a testa in giù fino a diventare tenero, profumato con aglio e mentuccia selvatica.`
            }
        ]
    },
    {
        id: "dolci",
        categoria: "Dolci",
        piatti: [
            {
                nome: "Tortino al cuore caldo",
                prezzo: 7,
                descrizione: `Soffice tortino al cioccolato fondente 70% con cuore caldo e cremoso, servito con spolverata di zucchero a velo.`
            },
            {
                nome: "Tiramisù",
                prezzo: 7,
                descrizione: `Savoiardi artigianali inzuppati nel caffè espresso, crema soffice al mascarpone e una spolverata di cacao amaro.`
            },
            {
                nome: "Cheesecake ai frutti di bosco",
                prezzo: 7,
                descrizione: `Bavarese leggera al mascarpone su crumble artigianale, servita con composta di bosco e frutti rossi freschi.`
            }
        ]
    }
]
