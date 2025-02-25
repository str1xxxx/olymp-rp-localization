import { cef } from './cef/cef';
import factions from './factions';
import server from './server';
import permissions from './permissions';
import gangWar from './gangWar';
import wardrobe from './wardrobe';
import logs from './logs';
import inventory from './inventory';
import airdrop from './airdrop';
import plants from './plants';
import suply from './suply';
import randomTruck from './randomTruck';
import robbery from './robbery';
import database from './database';

export const faction = {
    factions,
    permissions,
    gangWar,
    wardrobe,
    inventory,
    logs,
    airdrop,
    suply,
    plants,
    randomTruck,
    robbery,
    database,
    ...cef,
    ...server,
    leader: {
        ru: 'Лидер',
        en: 'Leader',
        ua: 'Лідер',
        de: 'Anführer',
        pl: 'Lider',
        zh: '领导者',
    },

    ranks: {
        sheriff: {
            ru: 'Шериф',
            en: 'Sheriff',
            ua: 'Шериф',
            de: 'Sheriff',
            pl: 'Szeryf',
            zh: '警长',
        },
    },
    radio: {
        ru: '!{#2196F3}[Рация {{factionName}}] {{message}}',
        ua: '!{#2196F3}[Рація {{factionName}}] {{message}}',
        en: '!{#2196F3}[Radio {{factionName}}] {{message}}',
        de: '!{#2196F3}[Funk {{factionName}}] {{message}}',
        pl: '!{#2196F3}[Radio {{factionName}}] {{message}}',
        zh: '{#2196F3}[无线电{{factionName}]{{message}',
    },
    noMoney: {
        ru: 'У вашей организации недостаточно денег',
        ua: 'У вашої організації недостатньо коштів',
        en: 'Your organization does not have enough money',
        de: 'Ihre Organisation hat nicht genug Geld',
        pl: 'Twoja organizacja nie ma wystarczających gotości',
        zh: '你的组织没有足够的资金',
    },
    noAccess: {
        ru: 'Недостаточно прав',
        ua: 'Недостатньо прав',
        en: 'Insufficient rights',
        de: 'Nicht genug Rechte',
        pl: 'Niewystarczające uprawnienia',
        zh: '权利不足',
    },
    startedRespawnTimer: {
        ru: 'Через 1 минуту все фракционные авто будут зареспавнены',
        ua: 'Через 1 хвилину всі фракційні авто будуть зареспавнені',
        en: 'In 1 minute, all faction vehicles will be respawned',
        de: 'In 1 Minute werden alle Fraktionsfahrzeuge respawnt',
        pl: 'Za 1 minutę wszystkie pojazdy frakcyjne zostaną zrespawnowane',
    },
    respawnedVehicles: {
        ru: 'Все фракционные авто зареспавнены',
        ua: 'Всі фракційні авто зареспавнені',
        en: 'All faction vehicles have been respawned',
        de: 'Alle Fraktionsfahrzeuge wurden respawnt',
        pl: 'Wszystkie pojazdy frakcyjne zostały zrespawnowane',
    },
    alreadyTimer: {
        ru: 'Процесс респавна уже запущен',
        ua: 'Процес респавну вже запущено',
        en: 'The respawn process is already running',
        de: 'Der Respawn-Prozess läuft bereits',
        pl: 'Proces respawnu jest już uruchomiony',
    },
    confiscatedItems: {
        ru: '{{name}} Провёл обыск и конфисковал нелегальные вещи у {{targetName}}',
        ua: '{{name}} Провів обшук і конфіскував нелегальні речі у {{targetName}}',
        en: '{{name}} conducted a search and confiscated illegal items from {{targetName}}',
        de: '{{name}} führte eine Durchsuchung durch und beschlagnahmte illegale Gegenstände bei {{targetName}}',
        pl: '{{name}} przeprowadził rewizję i skonfiskował nielegalne przedmioty od {{targetName}}',
    },
    confiscatedWeapons: {
        ru: '{{name}} Провёл обыск и конфисковал всё оружие у {{targetName}}',
        ua: '{{name}} Провів обшук і конфіскував всю зброю у {{targetName}}',
        en: '{{name}} conducted a search and confiscated all weapons from {{targetName}}',
        de: '{{name}} führte eine Durchsuchung durch und beschlagnahmte alle Waffen bei {{targetName}}',
        pl: '{{name}} przeprowadził rewizję i skonfiskował całą broń od {{targetName}}',
    },
    createdRankNotify: {
        ru: 'Вы создали ранг {{name}}',
        ua: 'Ви створили ранг {{name}}',
        en: 'You have created the rank {{name}}',
        de: 'Sie haben den Rang {{name}} erstellt',
        pl: 'Utworzyłeś rangę {{name}}',
    },
    factionReachedMaximumRanks: {
        ru: 'Ваша организация достигла максимального количества рангов',
        ua: 'Ваша організація досягла максимальної кількості рангів',
        en: 'Your organization has reached the maximum number of ranks',
        de: 'Ihre Organisation hat die maximale Anzahl an Rängen erreicht',
        pl: 'Twoja organizacja osiągnęła maksymalną liczbę rang',
    },
    cantDeleteLastRank: {
        ru: 'Должен быть как минимум один ранг',
        ua: 'Повинен бути щонайменше один ранг',
        en: 'There must be at least one rank',
        de: 'Es muss mindestens einen Rang geben',
        pl: 'Musi być co najmniej jeden rang',
    },
    deleteRankModal: {
        title: {
            ru: 'Удаление ранга',
            ua: 'Видалення рангу',
            en: 'Rank Deletion',
            de: 'Rang löschen',
            pl: 'Usunięcie rangi',
        },
        message: {
            ru: 'Сейчас вы собираетесь удалить ранг {{name}} вы должны понимать что все игроки что состояли в этом ранге <span style="color: var(--red)">будут автоматически переведены на ближайший ранг!</span> <br/><br/>Название: <span style="color: white">{{name}}</span><br/> Кол-во игроков: <span style="color: white">{{playerCount}}</span>',
            ua: 'Зараз ви збираєтесь видалити ранг {{name}}, ви повинні розуміти, що всі гравці, які були в цьому ранзі, <span style="color: var(--red)">будуть автоматично переведені на найближчий ранг!</span> <br/><br/>Назва: <span style="color: white">{{name}}</span><br/> Кількість гравців: <span style="color: white">{{playerCount}}</span>',
            en: 'You are about to delete the rank {{name}}. Please note that all players who were in this rank <span style="color: var(--red)">will be automatically transferred to the nearest rank!</span> <br/><br/>Name: <span style="color: white">{{name}}</span><br/> Player count: <span style="color: white">{{playerCount}}</span>',
            de: 'Sie sind dabei, den Rang {{name}} zu löschen. Bitte beachten Sie, dass alle Spieler in diesem Rang <span style="color: var(--red)">automatisch in den nächstgelegenen Rang verschoben werden!</span> <br/><br/>Name: <span style="color: white">{{name}}</span><br/> Spieleranzahl: <span style="color: white">{{playerCount}}</span>',
            pl: 'Zamierzasz usunąć rangę {{name}}. Pamiętaj, że wszyscy gracze należący do tej rangi <span style="color: var(--red)">zostaną automatycznie przeniesieni do najbliższej rangi!</span> <br/><br/>Nazwa: <span style="color: white">{{name}}</span><br/> Liczba graczy: <span style="color: white">{{playerCount}}</span>',
        },
        confirmButton: {
            ru: 'Удалить',
            ua: 'Видалити',
            en: 'Delete',
            de: 'Löschen',
            pl: 'Usuń',
        },
        cancelButton: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
        },
    },
};
