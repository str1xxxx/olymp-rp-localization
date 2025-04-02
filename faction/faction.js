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
import supply from './supply';
import randomTruck from './randomTruck';
import robbery from './robbery';
import database from './database';
import quests from './quests';
import pointCapture from './pointCapture';

export const faction = {
    factions,
    permissions,
    gangWar,
    wardrobe,
    inventory,
    logs,
    airdrop,
    supply,
    plants,
    randomTruck,
    robbery,
    database,
    quests,
    pointCapture,
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
    rankNameAlreadyExists: {
        ru: 'Ранг с таким именем уже существует',
        ua: 'Ранг з такою назвою вже існує',
        en: 'A rank with this name already exists',
        de: 'Ein Rang mit diesem Namen existiert bereits',
        pl: 'Ranga o tej nazwie już istnieje',
    },
    cantDeleteLastRank: {
        ru: 'Должно быть как минимум два ранга',
        ua: 'Має бути щонайменше два ранги',
        en: 'There must be at least two ranks',
        de: 'Es muss mindestens zwei Ränge geben',
        pl: 'Musi być co najmniej dwie rangi',
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
    yourRankDeletedNotifyToPlayer: {
        ru: 'Ваш ранг {{name}} был удален, вам был присвоен ранг {{newRankName}}',
        ua: 'Ваш ранг {{name}} було видалено, вам було присвоєно ранг {{newRankName}}',
        en: 'Your rank {{name}} has been deleted, you have been assigned the rank {{newRankName}}',
        de: 'Ihr Rang {{name}} wurde gelöscht, Ihnen wurde der Rang {{newRankName}} zugewiesen',
        pl: 'Twój rang {{name}} został usunięty, przydzielono ci rangę {{newRankName}}',
    },
    rankDeletedNotify: {
        ru: 'Вы удалили ранг {{name}}, всем игрокам, имевшим этот ранг, был присвоен ранг {{newRankName}}',
        ua: 'Ви видалили ранг {{name}}, всім гравцям, які мали цей ранг, було присвоєно ранг {{newRankName}}',
        en: 'You deleted the rank {{name}}, all players who had this rank were assigned the rank {{newRankName}}',
        de: 'Sie haben den Rang {{name}} gelöscht, allen Spielern, die diesen Rang hatten, wurde der Rang {{newRankName}} zugewiesen',
        pl: 'Usunąłeś rangę {{name}}, wszystkim graczom, którzy mieli tę rangę, została przypisana ranga {{newRankName}}',
    },
    toGiveWarnPlayerMustBeOnline: {
        ru: 'Чтобы дать предупреждение игроку, он должен быть онлайн',
        ua: 'Щоб дати догану гравцеві, він повинен бути онлайн',
        en: 'To give a warning to a player, they must be online',
        de: 'Um einem Spieler eine Verwarnung zu geben, muss er online sein',
        pl: 'Aby dać ostrzeżenie graczowi, musi być online',
    },
    orderedSupply: {
        ru: 'Вы оформил заявку на поствку материалов, ожидайте пока её примет правительство',
        ua: 'Ви оформили заявку на поставку матеріалів, очікуйте, поки її прийме уряд',
        en: 'You have placed an order for the supply of materials, please wait for the government to accept it',
        de: 'Sie haben eine Bestellung für die Lieferung von Materialien aufgegeben. Bitte warten Sie, bis die Regierung sie annimmt.',
        pl: 'Złożyłeś zamówienie na dostawę materiałów, poczekaj, aż rząd je zaakceptuje.',
    },
};
