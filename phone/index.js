import { cef } from './cef';
import { server } from './server';

// Pages
import apps from './pages/apps';
import vehicles from './pages/vehicles';
import phone from './pages/phone';
import messages from './pages/messages';
import call from './pages/call';
import gps from './pages/gps';
import settings from './pages/settings';
import weazelNews from './pages/weazelNews';
import forbes from './pages/forbes';
import online from './pages/online';
import sim from './pages/sim';
import widgets from './pages/widgets';
import game2048 from './pages/game2048';
import prism from './pages/prism';

export default {
    ...cef,
    ...server,

    apps,
    vehicles,
    phone,
    messages,
    call,
    gps,
    settings,
    weazelNews,
    forbes,
    online,
    sim,
    widgets,
    game2048,
    prism,
};
