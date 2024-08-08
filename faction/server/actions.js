export default {
    processArrestInstruction: {
        ru: 'Чтобы оформить арест игрока, вы должны вести его за собой',
        ua: 'Щоб оформити арешт гравця, ви повинні вести його за собою',
        en: "To process a player's arrest, you must lead them",
        de: 'Um die Verhaftung eines Spielers zu bearbeiten, müssen Sie ihn führen',
        pl: 'Aby dokonać aresztowania gracza, musisz go prowadzić',
    },
    leadPlayerInstruction: {
        ru: 'Чтобы вести игрока за собой, наденьте на него наручники',
        ua: 'Щоб вести гравця за собою, надіньте на нього кайданки',
        en: 'To lead a player, cuff them first',
        de: 'Um einen Spieler zu führen, legen Sie ihm zuerst Handschellen an',
        pl: 'Aby prowadzić gracza, najpierw załóż na niego kajdanki',
    },
    useHandCuffs: {
        ru: '{{firstName}} надел(а) наручники на {{targetName}}',
        ua: '{{firstName}} надів(ла) кайданки на {{targetName}}',
        en: '{{firstName}} has cuffed {{targetName}}',
        de: '{{firstName}} hat {{targetName}} Handschellen angelegt',
        pl: '{{firstName}} założył(a) kajdanki na {{targetName}}',
    },
    removeHandCuffs: {
        ru: '{{firstName}} снял(а) наручники с {{targetName}}',
        ua: '{{firstName}} зняв(ла) кайданки з {{targetName}}',
        en: '{{firstName}} removed handcuffs from {{targetName}}',
        de: '{{firstName}} hat {{targetName}} die Handschellen abgenommen',
        pl: '{{firstName}} zdjął(a) kajdanki z {{targetName}}',
    },
    startedLead: {
        ru: '{{firstName}} начал(а) вести за собой {{targetName}}',
        ua: '{{firstName}} почав(ла) вести за собою {{targetName}}',
        en: '{{firstName}} started leading {{targetName}}',
        de: '{{firstName}} begann, {{targetName}} zu führen',
        pl: '{{firstName}} zaczął(a) prowadzić {{targetName}}',
    },
    stoppedLead: {
        ru: '{{firstName}} прекратил(а) вести за собой {{targetName}}',
        ua: '{{firstName}} припинив(ла) вести за собою {{targetName}}',
        en: '{{firstName}} stopped leading {{targetName}}',
        de: '{{firstName}} hörte auf, {{targetName}} zu führen',
        pl: '{{firstName}} przestał(a) prowadzić {{targetName}}',
    },
    putToVehicle: {
        ru: '{{firstName}} завалил(а) {{targetName}} и затащил в машину',
        ua: '{{firstName}} завалив(ла) {{targetName}} і затягнув в машину',
        en: '{{firstName}} overpowered {{targetName}} and put them in the vehicle',
        de: '{{firstName}} hat {{targetName}} überwältigt und ins Fahrzeug gezogen',
        pl: '{{firstName}} obezwładnił(a) {{targetName}} i włożył do samochodu',
    },
    removedFromVehicle: {
        ru: '{{firstName}} вытащил(а) {{targetName}} с машины',
        ua: '{{firstName}} витягнув(ла) {{targetName}} з машини',
        en: '{{firstName}} removed {{targetName}} from the vehicle',
        de: '{{firstName}} hat {{targetName}} aus dem Fahrzeug genommen',
        pl: '{{firstName}} wyciągnął(a) {{targetName}} z samochodu',
    },
    noOccupants: {
        ru: 'В машине нет пассажиров',
        ua: 'У машині немає пасажирів',
        en: 'There are no occupants in the vehicle',
        de: 'Im Fahrzeug sind keine Insassen',
        pl: 'W samochodzie nie ma pasażerów',
    },
    checkVehicleModal: {
        title: {
            ru: 'Проверка автомобиля',
            ua: 'Перевірка автомобіля',
            en: 'Car check',
            de: 'Autoüberprüfung',
            pl: 'Sprawdzenie samochodu',
        },
        message: {
            ru: 'Модель: {{model}} <br /> Номер: {{plate}} <br /> Владелец: {{owner}} <br /> Статус: {{status}}',
            ua: 'Модель: {{model}} <br /> Номер: {{plate}} <br /> Власник: {{owner}} <br /> Статус: {{status}}',
            en: 'Model: {{model}} <br /> Number: {{plate}} <br /> Owner: {{owner}} <br /> Status: {{status}}',
            de: 'Modell: {{model}} <br /> Nummer: {{plate}} <br /> Besitzer: {{owner}} <br /> Status: {{status}}',
            pl: 'Model: {{model}} <br /> Numer: {{plate}} <br /> Właściciel: {{owner}} <br /> Status: {{status}}',
        },
        cancelButton: {
            ru: 'Закрыть',
            ua: 'Закрити',
            en: 'Close',
            de: 'Schließen',
            pl: 'Zamknij',
        },
        stolen: {
            ru: 'Угнаный',
            ua: 'Викрадений',
            en: 'Stolen',
            de: 'Gestohlen',
            pl: 'Skradziony',
        },
        ok: {
            ru: 'Ок',
            ua: 'Ок',
            en: 'Ok',
            de: 'Ok',
            pl: 'Ok',
        },
    },

    //
    takedBlood: {
        ru: '{{firstName}} взял(а) кровь на анализ от {{targetName}}',
        ua: '{{firstName}} взяв(ла) кров на аналіз від {{targetName}}',
        en: '{{firstName}} took a blood test from {{targetName}}',
        de: '{{firstName}} hat eine Blutprobe von {{targetName}} genommen',
        pl: '{{firstName}} pobrał(a) krew do analizy od {{targetName}}',
    },

    playerHasCooldown: {
        ru: 'Этот человек уже недавно сдавал кровь',
        ua: 'Ця людина вже нещодавно здавала кров',
        en: 'This person has already recently donated blood',
        de: 'Diese Person hat kürzlich bereits Blut gespendet',
        pl: 'Ta osoba niedawno oddała krew',
    },

    //
    robMoney: {
        ru: 'Ограбить',
        ua: 'Ограбувати',
        en: 'Rob',
        de: 'Rauben',
        pl: 'Ograbić',
    },

    targetHasNoMoney: {
        ru: 'У гражданина нет столько денег',
        ua: 'У громадянина немає стільки грошей',
        en: 'The target has no money',
        de: 'Das Ziel hat kein Geld',
        pl: 'Ofiara nie ma pieniędzy',
    },

    youWasRobbed: {
        ru: 'Вас ограбили на ${{value}}',
        ua: 'Вас пограбували на ${{value}}',
        en: 'You were robbed for ${{value}}',
        de: 'Du wurdest um ${{value}} ausgeraubt',
        pl: 'Zostałeś okradziony o ${{value}}',
    },

    youRobbedTarget: {
        ru: 'Вы ограбили {{name}} на сумму ${{value}}',
        ua: 'Ви пограбували {{name}} на суму ${{value}}',
        en: 'You robbed {{name}} for ${{value}}',
        de: 'Du hast {{name}} um ${{value}} ausgeraubt',
        pl: 'Okradłeś {{name}} o kwotę ${{value}}',
    },

    targetWasRobbed: {
        ru: '{{firstName}} ограбил(а) {{targetName}}',
        ua: '{{firstName}} пограбував(ла) {{targetName}}',
        en: '{{firstName}} robbed {{targetName}}',
        de: '{{firstName}} hat {{targetName}} ausgeraubt',
        pl: '{{firstName}} okradł(a) {{targetName}}',
    },

    youHaveRobCooldown: {
        ru: 'Вы сможете ограбить этого гражданина через {{time}}',
        ua: 'Ви зможете пограбувати цього громадянина через {{time}}',
        en: 'You will be able to rob this citizen again in {{time}}',
        de: 'Du kannst diesen Bürger in {{time}} erneut ausrauben',
        pl: 'Będziesz mógł ponownie okraść tego obywatela za {{time}}',
    },

    targetNeedToRaiseHand: {
        ru: 'Гражданин должен поднять руки вверх',
        ua: 'Громадянин повинен підняти руки вгору',
        en: 'The citizen must raise their hands',
        de: 'Der Bürger muss die Hände heben',
        pl: 'Obywatel musi podnieść ręce do góry',
    },

    cantRobTeam: {
        ru: 'Бей своих чтобы чужие боялись да? С ограблениями так не выйдет бро',
        ua: "Б'єш своїх, щоб чужі боялися, так? З пограбуваннями так не вийде, бро",
        en: "Do you hit your own so that others will be afraid? Well, that won't work with robberies, bro",
        de: 'Schlägst du deine eigenen, damit die anderen Angst haben? So funktioniert das nicht mit Raubüberfällen, Kumpel',
        pl: 'Bijesz swoich, żeby obcy się bali, tak? Z rabunkami tak nie wyjdzie, ziomek',
    },

    //
    youHaveNoPillsToSell: {
        ru: 'У вас недостаточно таблеток для продажи',
        ua: 'У вас недостатньо таблеток для продажу',
        en: 'You do not have enough pills to sell',
        de: 'Sie haben nicht genug Pillen zum Verkauf',
        pl: 'Nie masz wystarczającej ilości tabletek do sprzedaży',
    },

    targetHasNoMoneyToBuyPills: {
        ru: 'У гражданина недостаточно денег для покупки таблеток',
        ua: 'У громадянина недостатньо грошей для купівлі таблеток',
        en: 'The citizen does not have enough money to buy pills',
        de: 'Der Bürger hat nicht genug Geld, um Pillen zu kaufen',
        pl: 'Obywatel nie ma wystarczająco dużo pieniędzy na zakup tabletek',
    },

    youDontHaveHandCuffs: {
        ru: 'У вас нет наручников',
        ua: 'У вас немає наручників',
        en: "You don't have handcuffs",
        de: 'Du hast keine Handschellen',
        pl: 'Nie masz kajdanek',
    },

    // Licenses take
    licenseModalTitle: {
        ru: 'Отобрать лицензии у {{name}}',
        ua: 'Відібрати ліцензії у {{name}}',
        en: 'Revoke Licenses from {{name}}',
        de: 'Lizenzen von {{name}} entziehen',
        pl: 'Odbierz licencje od {{name}}',
    },

    playerHasNoLicenses: {
        ru: 'У гражданина нет лицензий',
        ua: 'У гравця немає ліцензій',
        en: 'The player has no licenses',
        de: 'Der Spieler hat keine Lizenzen',
        pl: 'Gracz nie ma licencji',
    },
    youTakedLicenses: {
        ru: 'Вы отобрали лицензию {{value}} у {{name}}',
        ua: 'Ви відібрали ліцензію {{value}} у {{name}}',
        en: 'You revoked the {{value}} license from {{name}}',
        de: 'Sie haben die {{value}}-Lizenz von {{name}} entzogen',
        pl: 'Odebrałeś licencję {{value}} od {{name}}',
    },
    yourLicensesTaken: {
        ru: '{{name}} отобрал у вас лицензию {{value}}',
        ua: '{{name}} відібрав у вас ліцензію {{value}}',
        en: '{{name}} revoked your {{value}} license',
        de: '{{name}} hat Ihnen die {{value}}-Lizenz entzogen',
        pl: '{{name}} odebrał Ci licencję {{value}}',
    },
};