export const server = {
    admin: {
        ua: '!{#FF5757}Адміністратор {{admin}} {{message}}',
        en: '!{#FF5757}Administrator {{admin}} {{message}}',
        ru: '!{#FF5757}Администратор {{admin}} {{message}}',
        de: '!{#FF5757}Administrator {{admin}} {{message}}',
        pl: '!{#FF5757}Administrator {{admin}} {{message}}',
        zh: '!{#FF5757}管理员 {{admin}} {{message}}',
    },
    youHaveBeenTeleportedByAdmin: {
        ru: 'Вы были телепортированы адинистратором {{name}}',
        en: 'You were teleported by admin {{name}}',
        ua: 'Ви були телепортовані адміністратором {{name}}',
        de: 'Du wurdest von Admin {{name}} teleportiert',
        pl: 'Zostałeś teleportowany przez administratora {{name}}',
        zh: '您被管理员 {{name}}传送',
    },
    youTeleportedPlayer: {
        ru: 'Вы телепортировали {{name}}',
        en: 'You teleported {{name}}',
        ua: 'Ви телепортували {{name}}',
        de: 'Du hast {{name}} teleportiert',
        pl: 'Zostałeś teleportowany przez {{name}}',
        zh: '您传送了{{name}}',
    },
    adminKickedPlayer: {
        ua: '~r~Адміністратор {{admin}} кікнув гравця {{player}} по причині {{reason}}',
        en: '~r~Administrator {{admin}} kicked player {{player}} for {{reason}}',
        ru: '~r~Администратор {{admin}} кикнул игрока {{player}} по причине {{reason}}',
        de: '~r~Administrator {{admin}} hat den Spieler {{player}} wegen {{reason}} gekickt',
        pl: '~r~Administrator {{admin}} wyrzucił gracza {{player}} z powodu {{reason}}',
        zh: '管理员{{admin}}因为{{reason}}踢了玩家{{player}}',
    },
    adminBannedPlayer: {
        ua: '~r~Адміністратор {{admin}} заблокував гравця {{player}} на {{days}} днів по причині {{reason}}',
        en: '~r~Administrator {{admin}} banned player {{player}} for {{days}} days for {{reason}}',
        ru: '~r~Администратор {{admin}} заблокировал игрока {{player}} на {{days}} дней по причине {{reason}}',
        de: '~r~Administrator {{admin}} hat den Spieler {{player}} für {{days}} Tage gesperrt wegen {{reason}}',
        pl: '~r~Administrator {{admin}} zablokował gracza {{player}} na {{days}} dni z powodu {{reason}}',
        zh: '~r~管理员{{admin}}封禁玩家{{player}}，封禁时间{{days}}天，原因{{reason}}',
    },
    adminBannedPlayerOffline: {
        ru: '~r~Администратор {{admin}} заблокировал в оффлайне игрока {{player}} на {{days}} дней по причине {{reason}}',
        ua: '~r~Адміністратор {{admin}} заблокував в офлайні гравця {{player}} на {{days}} днів з причини {{reason}}',
        en: '~r~Administrator {{admin}} banned player {{player}} offline for {{days}} days for the reason {{reason}}',
        de: '~r~Administrator {{admin}} hat Spieler {{player}} offline für {{days}} Tage aus dem Grund {{reason}} gesperrt',
        pl: '~r~Administrator {{admin}} zbanował gracza {{player}} offline na {{days}} dni z powodu {{reason}}',
    },
    silentBannedPlayer: {
        ru: '~r~[ADMIN] {{admin}} заблокировал игрока {{player}} на {{days}} дней по причине {{reason}}. Статус игрока: ~g~{{status}}',
        ua: '~r~[ADMIN] {{admin}} заблокував гравця {{player}} на {{days}} днів з причини {{reason}}. Статус гравця: ~g~{{status}}',
        en: '~r~[ADMIN] {{admin}} banned player {{player}} for {{days}} days for the reason {{reason}}. Player status: ~g~{{status}}',
        de: '~r~[ADMIN] {{admin}} hat Spieler {{player}} für {{days}} Tage aus dem Grund {{reason}} gesperrt. Spielerstatus: ~g~{{status}}',
        pl: '~r~[ADMIN] {{admin}} zbanował gracza {{player}} na {{days}} dni z powodu {{reason}}. Status gracza: ~g~{{status}}',
    },
    mutedMessage: {
        'ru': 'Вы сможете писать в чат только через {{time}}, по причине {{reason}}',
        'ua': 'Ви зможете писати в чат лише через {{time}}, з причини {{reason}}',
        'en': 'You will be able to write in the chat only after {{time}}, due to {{reason}}',
        'de': 'Du kannst erst nach {{time}} im Chat schreiben, wegen {{reason}}',
        'pl': 'Będziesz mógł pisać na czacie dopiero za {{time}}, z powodu {{reason}}',
    },

};
