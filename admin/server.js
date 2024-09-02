export const server = {
    notifyHeader: {
        ru: 'Администратор',
        ua: 'Адміністратор',
        en: 'Admin',
        de: 'Admin',
        pl: 'Admin',
       zh:'管理员',
    },
    playerNotFound: {
        ua: 'Гравця не знайдено',
        en: 'Player not found',
        ru: 'Игрок не найден',
        de: 'Spieler nicht gefunden',
        pl: 'Gracz nie znaleziony',
       zh:'未找到该玩家',
    },
    cash: {
        give: {
            ua: 'Ви видали ${{cash}} гравцю {{name}}',
            en: 'You gave ${{cash}} to player {{name}}',
            ru: 'Вы выдали ${{cash}} игроку {{name}}',
            de: 'Du hast ${{cash}} an Spieler {{name}} gegeben',
            pl: 'Wydano ${{cash}} graczowi {{name}}',
           zh:'支付${{cash}}给{{name}}',
        },

        got: {
            ua: 'Вам видали ${{cash}}',
            en: 'You received ${{cash}}',
            ru: 'Вам выдали ${{cash}}',
            de: 'Du hast ${{cash}} erhalten',
            pl: 'Otrzymałeś ${{cash}}',
           zh:'收到${{cash}}',
        },
    },
    spectate: {
        ua: 'Ви почали спостереження за гравцем {{name}}, щоб вийти з нього, наберіть /reoff',
        en: 'You started spectating player {{name}}, to exit type /reoff',
        ru: 'Вы начали слежку за игроком {{name}}, чтобы выйти из неё, введите /reoff',
        de: 'Du hast begonnen, Spieler {{name}} zuzuschauen. Um zu beenden, gib /reoff ein',
        pl: 'Zacząłeś obserwować gracza {{name}}, aby wyjść, wpisz /reoff',
       zh:'开始观看玩家{{name}},退出输入/reoff',
    },
    support: {
        replyFrom: {
            ua: '~r~Відповідь від адміністрації від {{admin}}: ~w~{{message}}',
            en: '~r~Reply from administration by {{admin}}: ~w~{{message}}',
            ru: '~r~Ответ администрации от {{admin}}: ~w~{{message}}',
            de: '~r~Antwort von der Administration von {{admin}}: ~w~{{message}}',
            pl: '~r~Odpowiedź od administracji od {{admin}}: ~w~{{message}}',
           zh:'管理员{{admin}}:~w~{{message}}',
        },
        replyForAdmins: {
            ua: '~r~{{name}} відповів гравцю {{player}}: ~w~{{message}}',
            en: '~r~{{name}} replied to player {{player}}: ~w~{{message}}',
            ru: '~r~{{name}} ответил игроку {{player}}: ~w~{{message}}',
            de: '~r~{{name}} hat dem Spieler {{player}} geantwortet: ~w~{{message}}',
            pl: '~r~{{name}} odpowiedział graczowi {{player}}: ~w~{{message}}',
           zh:'~r~{{name}}回复~w~{{message}}',
        },
        playerAsk: {
            ua: '~r~Запит на допомогу від {{player}}: ~w~{{message}}',
            en: '~r~Help request from {{player}}: ~w~{{message}}',
            ru: '~r~Запрос помощи от {{player}}: ~w~{{message}}',
            de: '~r~Hilfeanfrage von {{player}}: ~w~{{message}}',
            pl: '~r~Prośba o pomoc od {{player}}: ~w~{{message}}',
          zh:'~r~来自{{player}}的帮助请求:~w~{{message}}',
        },
        replyFromTelegram: {
            ru: '~r~Ответ от администрации: ~w~{{message}}',
            ua: '~r~Відповідь від адміністрації: ~w~{{message}}',
            en: '~r~Response from the administration: ~w~{{message}}',
            de: '~r~Antwort von der Administration: ~w~{{message}}',
            pl: '~r~Odpowiedź od administracji: ~w~{{message}}',
           zh:'~r~管理部门的回复:~w~{{message}}',
        },
        replyForAdminsTelegram: {
            ru: '~r~Высшие администраторы ответили из горы Олимп для {{player}}: ~w~{{message}}',
            ua: '~r~Вищі адміністратори відповіли з гори Олімп для {{player}}: ~w~{{message}}',
            en: '~r~Higher administrators responded from Mount Olympus for {{player}}: ~w~{{message}}',
            de: '~r~Höhere Administratoren antworteten vom Berg Olymp für {{player}}: ~w~{{message}}',
            pl: '~r~Wyżsi administratorzy odpowiedzieli z góry Olimp dla {{player}}: ~w~{{message}}',
           zh:'~r~自由城高管回复:~w~{{message}}',
        },
    },
    youChangedName: {
        ru: 'Вы изменили имя игрока {{id}} на {{newName}}',
        ua: "Ви змінили ім'я гравця {{id}} на {{newName}}",
        en: "You changed the player's name from {{id}} to {{newName}}",
        de: 'Sie haben den Namen des Spielers von {{id}} auf {{newName}} geändert',
        pl: 'Zmieniłeś nazwę gracza z {{id}} na {{newName}}',
       zh:'你将更改名称{{id}}为{{newName}}',
    },
    yourNameChanged: {
        ru: 'Ваше имя изменено на {{newName}}',
        ua: "Ваше ім'я змінено на {{newName}}",
        en: 'Your name has been changed to {{newName}}',
        de: 'Ihr Name wurde in {{newName}} geändert',
        pl: 'Twoje imię zostało zmienione na {{newName}}',
       zh:'您的名称已更改为{{newName}}',
    },
    youCantDoThisToAdminUpper: {
        ru: 'Вы не можете сделать это действие против администратора выше вас',
        ua: 'Ви не можете виконати цю дію проти адміністратора вище вас',
        en: 'You cannot perform this action against an administrator of higher rank',
        de: 'Sie können diese Aktion nicht gegen einen Administrator mit höherem Rang ausführen',
        pl: 'Nie możesz wykonać tej akcji przeciwko administratorowi o wyższej randze',
       zh:'你无法对更高级别的管理员进行此操作',
    },
    welcomeAdminMessage: {
        ru: '~r~Вы являетесь администратором {{lvl}} уровня. Чтобы войти в режим администратора введите /admin',
        ua: '~r~Ви є адміністратором {{lvl}} рівня. Щоб увійти в режим адміністратора введіть /admin',
        en: '~r~You are an administrator of level {{lvl}}. To enter the administrator mode, enter /admin',
        de: '~r~Sie sind ein Administrator der Stufe {{lvl}}. Um den Administratormodus aufzurufen, geben Sie /admin ein',
        pl: '~r~Jesteś administratorem poziomu {{lvl}}. Aby wejść w tryb administratora, wpisz /admin',
       zh:'你是{{lvl}}管理员.输入 /admin 进入管理员模式',
    },
    enteredToAdmin: {
        ru: '~r~Вы вошли в режим администратора. Чтобы выйти введите /admin',
        ua: '~r~Ви увійшли в режим адміністратора. Щоб вийти введіть /admin',
        en: '~r~You have entered the administrator mode. To exit, enter /admin',
        de: '~r~Sie haben den Administratormodus aufgerufen. Um den Modus zu verlassen, geben Sie /admin ein',
        pl: '~r~Weszłeś w tryb administratora. Aby wyjść, wpisz /admin',
       zh:'~r~已进入管理员模式.输入 /admin 退出管理员模式',
    },
    exitFromAdmin: {
        ru: '~r~Вы вышли из режима администратора',
        ua: '~r~Ви вийшли з режиму адміністратора',
        en: '~r~You have exited the administrator mode',
        de: '~r~Sie haben den Administratormodus verlassen',
        pl: '~r~Wyszedłeś z trybu administratora',
       zh:'~r~已退出管理员模式',
    },
    adminEnteredToAdminSystem: {
        ru: '~r~[ADMIN] Администратор {{name}} {{level}} уровня вошёл в систему',
        ua: '~r~[ADMIN] Адміністратор {{name}} {{level}} рівня увійшов в систему',
        en: '~r~[ADMIN] Administrator {{name}} of level {{level}} has logged in',
        de: '~r~[ADMIN] Administrator {{name}} der Stufe {{level}} hat sich angemeldet',
        pl: '~r~[ADMIN] Administrator {{name}} poziomu {{level}} zalogował się',
       zh:'~r~[ADMIN]Adminstrator{{name}}级别为{{level}}的管理员已登录'，
    },
    adminExitedFromAdminSystem: {
        ru: '~r~[ADMIN] Администратор {{name}} {{level}} уровня вышел из системы',
        ua: '~r~[ADMIN] Адміністратор {{name}} {{level}} рівня вийшов з системи',
        en: '~r~[ADMIN] Administrator {{name}} of level {{level}} has logged out',
        de: '~r~[ADMIN] Administrator {{name}} der Stufe {{level}} hat sich abgemeldet',
        pl: '~r~[ADMIN] Administrator {{name}} poziomu {{level}} wylogował się',
       zh:'~r~[ADMIN] Administrator {{name}} 级别{{level}}的管理员已退出',
    },
    adminDemorgran: {
        ru: '~r~Администратор {{name}} посадил игрока {{target}} в деморган на {{time}} минут. Причина: {{reason}}',
        ua: '~r~Адміністратор {{name}} посадив гравця {{target}} в деморган на {{time}} хвилин. Причина: {{reason}}',
        en: '~r~Administrator {{name}} put player {{target}} in demorgan for {{time}} minutes. Reason: {{reason}}',
        de: '~r~Administrator {{name}} hat Spieler {{target}} für {{time}} Minuten in Demorgan gesetzt. Grund: {{reason}}',
        pl: '~r~Administrator {{name}} umieścił gracza {{target}} w demorganie na {{time}} minut. Powód: {{reason}}',
       zh:'~r~Administrator {{name}}将玩家{{target}}封禁{{time}}分钟.原因:{{reason}} ',
    },
    playerAlreadyJailed: {
        ru: 'Игрок уже в деморгане',
        ua: 'Гравець вже в деморгані',
        en: 'Player is already in demorgan',
        de: 'Spieler ist bereits in Demorgan',
        pl: 'Gracz jest już w demorganie',
       zh:'玩家已处于封禁状态',
    },
    playerJailedOffline: {
        ru: 'Вы посадили в деморгран оффлайн {{name}} на {{time}} минут. Причина: {{reason}}',
        ua: 'Ви посадили в деморган офлайн {{name}} на {{time}} хвилин. Причина: {{reason}}',
        en: 'You jailed offline {{name}} for {{time}} minutes. Reason: {{reason}}',
        de: 'Sie haben {{name}} offline für {{time}} Minuten eingesperrt. Grund: {{reason}}',
        pl: 'Umieściłeś {{name}} offline w więzieniu na {{time}} minut. Powód: {{reason}}'，
       zh:'{{name}}已离线{{time}}分钟.原因:{{reason}}',
    },
    playerJailed: {
        ru: 'Вы посадили в деморган {{name}} на {{time}} минут. Причина: {{reason}}',
        ua: 'Ви посадили в деморган {{name}} на {{time}} хвилин. Причина: {{reason}}',
        en: 'You jailed {{name}} for {{time}} minutes. Reason: {{reason}}',
        de: 'Sie haben {{name}} für {{time}} Minuten eingesperrt. Grund: {{reason}}',
        pl: 'Umieściłeś {{name}} w więzieniu na {{time}} minut. Powód: {{reason}}',
       zh:'{{name}}被判入狱{{time}}分钟.原因:{{reason}}',
    },
    adminDemorgranOffline: {
        ru: '~r~Администратор {{name}} посадил игрока {{target}} в деморган оффлайн на {{time}} минут. Причина: {{reason}}',
        ua: '~r~Адміністратор {{name}} посадив гравця {{target}} в деморган офлайн на {{time}} хвилин. Причина: {{reason}}',
        en: '~r~Administrator {{name}} jailed player {{target}} offline for {{time}} minutes. Reason: {{reason}}',
        de: '~r~Administrator {{name}} hat Spieler {{target}} offline für {{time}} Minuten eingesperrt. Grund: {{reason}}',
        pl: '~r~Administrator {{name}} umieścił gracza {{target}} offline w więzieniu na {{time}} minut. Powód: {{reason}}',
       zh:'~r~Administrator {{name}}封禁玩家{{target}}离线{{time}}分钟.原因:{{reason}} ',
    },
    playerUnjailed: {
        ru: 'Вы выпустили {{name}} из демограна',
        ua: 'Ви випустили {{name}} з деморгану',
        en: 'You released {{name}} from jail',
        de: 'Sie haben {{name}} aus dem Gefängnis entlassen',
        pl: 'Wypuściłeś {{name}} z więzienia',
       zh:'{{name}}已出狱',
    },
    playerUnjailedOffline: {
        ru: 'Вы выпустили {{name}} из демограна оффлайн',
        ua: 'Ви випустили {{name}} з деморгану офлайн',
        en: 'You released {{name}} from jail offline',
        de: 'Sie haben {{name}} offline aus dem Gefängnis entlassen',
        pl: 'Wypuściłeś {{name}} z więzienia offline',
       zh:'{{name}}将释放',
    },
    vehicleNotFound: {
        ru: 'Такого транспорта не существует',
        ua: 'Такого транспорту не існує',
        en: 'This vehicle does not exist',
        de: 'Dieses Fahrzeug existiert nicht',
        pl: 'Taki pojazd nie istnieje',
       zh:'车辆不存在',
    },
    vehicleDeleted: {
        ru: 'Транспорт удалён',
        ua: 'Транспорт вилучено',
        en: 'Vehicle deleted',
        de: 'Fahrzeug gelöscht',
        pl: 'Pojazd usunięty',
       zh:'车辆被删除',
    },

    // Warns
    youGivedWarn: {
        ru: 'Вы выдали предупреждеие {{name}}. Всего: {{count}}/3',
    },
    youGotWarn: {
        ru: 'Вы получили предупреждение. Всего: {{count}}/3',
    },
    youReachedMaxWarns: {
        ru: 'Вы достигли максимального количества предупреждений. И были забанены',
    },
};
