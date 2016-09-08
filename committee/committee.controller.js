app.controller('CommitteeCtrl', function ($scope) {
    console.log('ready');
    $scope.committeeRows = [
        [
            {
                role: 'President',
                name: 'Ewan Flintham',
                email: 'ewan.flintham@st-hildas.ox.ac.uk',
                college: 'St Hilda\'s',
                picture: 'figure.png'
            },
            {
                role: 'Secretary and IT Officer',
                name: 'C\xE9lia Souque',
                email: 'celia.souque@worc.ox.ac.uk',
                college: 'Worcester',
                picture: 'figure.png'
            },
            {
                role: 'Treasurer',
                name: 'Eleanor Mitchell',
                email: 'eleanor.mitchell@st-annes.ox.ac.uk',
                college: 'St Anne\'s',
                picture: 'figure.png'
            },
            {
                role: 'Captain',
                name: 'Tom Scott',
                email: 'thomas.scott@stcatz.ox.ac.uk',
                college: 'St Catherine\'s',
                picture: 'figure.png'
            }
        ],
        [
            {
                role: 'Social Secretary',
                name: 'Ela Portnoy',
                email: '',
                college: 'St Hilda\'s',
                picture: 'figure.png'
            },
            {
                role: 'Kit Officer',
                name: 'James Martin Robinson',
                email: 'james.martinrobinson@wadh.ox.ac.uk',
                college: 'Wadham',
                picture: 'figure.png'
            }
        ]
    ];
    $scope.oldCommittees = [
        {
            year: '2016/7',
            president: 'Ewan Flintham',
            secretary: 'C\xE9lia Souque',
            treasurer: 'Eleanor Mitchell',
            itOfficer: 'C\xE9lia Souque',
            socialSecretary: 'Ela Portnoy',
            captain: 'Tom Scott',
            kitOfficer: 'James Martin Robinson'
        },
        {
            year: '2015/6',
            president: 'Ewan Flintham',
            secretary: 'Jim Wilson',
            treasurer: 'Niels Martens',
            itOfficer: 'Michal Bock',
            socialSecretary: 'Sufyen Buras-Stubbs',
            captain: 'Eleanor Mitchell',
            kitOfficer: 'Harris Vince'
        },
        {
            year: '2014/5',
            president: 'Lennard Lee',
            secretary: 'Piotr Czaban',
            treasurer: 'Niels Martens',
            itOfficer: 'Luke Kelly',
            socialSecretary: 'Julian Bartram',
            captain: '',
            kitOfficer: 'Harris Vince'
        },
        {
            year: '2013/4',
            president: 'Tom Scott',
            secretary: 'Julian Bartram',
            treasurer: 'Luke Kelly',
            itOfficer: 'Niels Martens',
            socialSecretary: 'Julian Bartram',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2012/3',
            president: 'Tom Scott',
            secretary: 'Stephen Angus',
            treasurer: 'Alexis Muir Watt',
            itOfficer: 'Frank Simancik',
            socialSecretary: 'Stephen Angus',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2011/2',
            president: 'Tom Scott',
            secretary: 'Stephen Angus',
            treasurer: 'Alexis Muir Watt',
            itOfficer: 'Frank Simancik',
            socialSecretary: 'Stephen Angus',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2010/1',
            president: 'Emily Anstis',
            secretary: 'Kate Stewart',
            treasurer: 'Frank Simancik',
            itOfficer: 'Frank Simancik',
            socialSecretary: 'Rachael Borek',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2009/0',
            president: 'Kimberley Lake',
            secretary: 'David Hyman',
            treasurer: 'Emily Anstis',
            itOfficer: 'Stephen Angus',
            socialSecretary: 'Rachael Borek',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2008/9',
            president: 'David Hyman',
            secretary: 'Kimberley Lake',
            treasurer: 'Sebastian Leptihn',
            itOfficer: 'Stephen Angus',
            socialSecretary: 'Tom Cutter',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2007/8',
            president: 'David Hyman',
            secretary: 'Martin Hill',
            treasurer: 'Jayne Clarke',
            itOfficer: '',
            socialSecretary: '',
            captain: '',
            kitOfficer: ''
        },
        {
            year: '2006/7',
            president: 'Chris Taylor',
            secretary: 'Ian Lyszyk',
            treasurer: 'Andy Nelson',
            itOfficer: '',
            socialSecretary: '',
            captain: '',
            kitOfficer: ''
        }
    ];
});
