'use-strict';

module.exports = {
    Author: {
        Email: 'mohammadfneish@gmail.com',
        Profile: 'https://www.linkedin.com/in/mohammadfneish/',
        Support: 'https://github.com/sponsors/mohammadfneish',
    },
    MiroTalk: {
        P2P: {
            Visible: true,
            Home: 'https://meet.ilearncenters.com',
            Room: 'https://meet.ilearncenters.com/newcall',
            Join: 'https://meet.ilearncenters.com/join/',
            GitHub: {
                Visible: true,
                Repo: 'https://github.com/mohammadfneish/mirotalk',
                Star: 'https://github.com/mohammadfneish/mirotalk/stargazers',
                Shields: 'https://img.shields.io/github/stars/mohammadfneish/mirotalk?style=flat',
            },
        },
        SFU: {
            Visible: true,
            Protected: false, // host_protected or user_auth enabled
            Home: 'https://letsmeet.ilearncenters.com',
            Room: 'https://letsmeet.ilearncenters.com/newroom',
            Join: 'https://letsmeet.ilearncenters.com/join/',
            GitHub: {
                Visible: true,
                Repo: 'https://github.com/mohammadfneish/mirotalksfu',
                Star: 'https://github.com/mohammadfneish/mirotalksfu/stargazers',
                Shields: 'https://img.shields.io/github/stars/mohammadfneish/mirotalksfu?style=flat',
            },
        },
        C2C: {
            Visible: false,
            Home: 'https://c2c.mirotalk.com',
            Room: 'https://c2c.mirotalk.com/?room=',
            GitHub: {
                Visible: true,
                Repo: 'https://github.com/mohammadfneish/mirotalkc2c',
                Star: 'https://github.com/mohammadfneish/mirotalkc2c/stargazers',
                Shields: 'https://img.shields.io/github/stars/mohammadfneish/mirotalkc2c?style=flat',
            },
        },
        BRO: {
            Visible: false,
            Home: 'https://bro.mirotalk.com',
            Broadcast: 'https://bro.mirotalk.com/broadcast?id=',
            Viewer: 'https://bro.mirotalk.com/viewer?id=',
            GitHub: {
                Visible: true,
                Repo: 'https://github.com/mohammadfneish/mirotalkbro',
                Star: 'https://github.com/mohammadfneish/mirotalkbro/stargazers',
                Shields: 'https://img.shields.io/github/stars/mohammadfneish/mirotalkbro?style=flat',
            },
        },
    },
    HTML: {
        support: true,
        profile: true,
        projects: true,
        //...
    },
    BUTTONS: {
        setRandomRoom: true,
        copyRoom: true,
        shareRoom: true,
        sendEmail: true,
        sendSmSInvitation: true,
        joinInternal: true,
        joinExternal: true,
        updateRow: true,
        delRow: true,
    },
};
