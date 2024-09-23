export default {
    depBroadcast: {
        ru: '!{#2196F3}[Гос.волна] {{factionName}} {{playerName}}: {{message}}',
        ua: '!{#2196F3}[Держ.хвиля] {{factionName}} {{playerName}}: {{message}}',
        en: '!{#2196F3}[Gov.wave] {{factionName}} {{playerName}}: {{message}}',
        de: '!{#2196F3}[Staatswelle] {{factionName}} {{playerName}}: {{message}}',
        pl: '!{#2196F3}[Fala rządowa] {{factionName}} {{playerName}}: {{message}}',
        zh:'#2196F3}[政府讲话]{{factionName}{{playerName}:{{message}'
    },
    govBroadcast: {
        ru: '!{#2196F3}{{factionName}} {{playerName}}: {{message}}',
        ua: '!{#2196F3}{{factionName}} {{playerName}}: {{message}}',
        en: '!{#2196F3}{{factionName}} {{playerName}}: {{message}}',
        de: '!{#2196F3}{{factionName}} {{playerName}}: {{message}}',
        pl: '!{#2196F3}{{factionName}} {{playerName}}: {{message}}',
    },
    fMessage: {
        ru: '!{#2196F3}[Рация {{factionName}}] {{playerName}}: {{message}}',
        ua: '!{#2196F3}[Рація {{factionName}}] {{playerName}}: {{message}}',
        en: '!{#2196F3}[Radio {{factionName}}] {{playerName}}: {{message}}',
        de: '!{#2196F3}[Funkgerät {{factionName}}] {{playerName}}: {{message}}',
        pl: '!{#2196F3}[Radio {{factionName}}] {{playerName}}: {{message}}',
       zh:'#2196F3}[无线电{{factionName}]{{playerName}:{{message}'
    },
    fbMessage: {
        ru: '!{#2196F3}[Рация {{factionName}}] {{playerName}}: (( {{message}} ))',
        ua: '!{#2196F3}[Рація {{factionName}}] {{playerName}}: (( {{message}} ))',
        en: '!{#2196F3}[Radio {{factionName}}] {{playerName}}: (( {{message}} ))',
        de: '!{#2196F3}[Funk {{factionName}}] {{playerName}}: (( {{message}} ))',
        pl: '!{#2196F3}[Radio {{factionName}}] {{playerName}}: (( {{message}} ))',
        zh:'{#2196F3}[无线电{{factionName}]{{playerName}}：（（{{message}}））'
    },

    // modal
    adModal: {
        title: {
            ru: 'Отправка рекламы банды',
            ua: 'Надсилання реклами банди',
            en: 'Send Gang Advertisement',
            de: 'Sende Bandenwerbung',
            pl: 'Wyślij reklamę gangu',
           zh:'发送帮派广告',
        },
        message: {
            ru: `Вы собираетесь отправить рекламу банды <br/>Текст: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Удостоверьтесь в правильности текста.</span>`,
            ua: `Ви збираєтеся надіслати рекламу банди <br/>Текст: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Переконайтеся, що текст правильний.</span>`,
            en: `You are about to send a gang advertisement. <br/>Message: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Please make sure the message is correct.</span>`,
            de: `Du schickst gerade eine Bandenwerbung. <br/>Nachricht: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Bitte stelle sicher, dass die Nachricht korrekt ist.</span>`,
            pl: `Zamierzasz wysłać reklamę gangu. <br/>Wiadomość: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Upewnij się, że wiadomość jest poprawna.</span>`,
            zh:',你即将发布一则帮派广告。”<br/>消息：“<span style=”color:white“>{{Message}}</span>”<请确保信息正确无误</跨度；跨越；持续时间；（桥或拱的）墩距；跨距； 包括（广大地区）',
        },
        confirmButton: {
            ru: 'Отправить',
            ua: 'Надіслати',
            en: 'Send',
            de: 'Senden',
            pl: 'Wyślij',
            zh:'发送',
        },
        cancelButton: {
            ru: 'Отмена',
            ua: 'Відміна',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
            zh:'取消按钮',
        },
    },
    adMessage: {
        ru: '!{#20a832}[Реклама] {{message}}. Отправитель: {{playerName}}',
        ua: '!{#20a832}[Реклама] {{message}}. Відправник: {{playerName}}',
        en: '!{#20a832}[Advertisement] {{message}}. Sender: {{playerName}}',
        de: '!{#20a832}[Werbung] {{message}}. Absender: {{playerName}}',
        pl: '!{#20a832}[Reklama] {{message}}. Nadawca: {{playerName}}',
        zh:',{#20a832}[广告]{{消息}}。发件人：｛｛playerName｝｝'
    },
    youHaveAdTimeout: {
        ru: 'Вы уже отправляли рекламу банды',
        ua: 'Ви вже надіслали рекламу банди',
        en: 'You have already sent a gang advertisement',
        de: 'Du hast bereits eine Bandenwerbung gesendet',
        pl: 'Jestes juz nadal wysyłają reklame gangu',
       zh:',你已经发布了一则帮派广告',
    },
};
