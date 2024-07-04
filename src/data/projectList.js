import SONENSTUBE_01 from "../assets/01_SONENSTUBE_01.jpg"
import SONENSTUBE_02 from "../assets/01_SONENSTUBE_02.jpg"
import SONENSTUBE_03 from "../assets/01_SONENSTUBE_03.jpg"
import SONENSTUBE_04 from "../assets/01_SONENSTUBE_04.jpg"
import SONENSTUBE_05 from "../assets/01_SONENSTUBE_05.jpg"
import SONENSTUBE_06 from "../assets/01_SONENSTUBE_06.jpg"
import SONENSTUBE_07 from "../assets/01_SONENSTUBE_07.jpg"
import SONENSTUBE_08 from "../assets/01_SONENSTUBE_08.jpg"
import SONENSTUBE_09 from "../assets/01_SONENSTUBE_09.jpg"
import SONENSTUBE_10 from "../assets/01_SONENSTUBE_10.jpg"

import MORCOTE_01 from "../assets/03_MORCOTE_01.jpg"
import MORCOTE_02 from "../assets/03_MORCOTE_02.jpg"
import MORCOTE_03 from "../assets/03_MORCOTE_03.jpg"
import MORCOTE_04 from "../assets/03_MORCOTE_04.jpg"
import MORCOTE_05 from "../assets/03_MORCOTE_05.jpg"
import MORCOTE_06 from "../assets/03_MORCOTE_06.jpg"
import MORCOTE_07 from "../assets/03_MORCOTE_07.jpg"


import DARTE_01 from "../assets/04_DARTE_01.jpg"
import DARTE_02 from "../assets/04_DARTE_02.jpg"
import DARTE_03 from "../assets/04_DARTE_03.jpg"
import DARTE_04 from "../assets/04_DARTE_04.jpg"
import DARTE_05 from "../assets/04_DARTE_05.jpg"

import UNIVERSO_01 from "../assets/00_UNIVERSO_01.jpg"
import UNIVERSO_02 from "../assets/00_UNIVERSO_02.jpg"
import UNIVERSO_03 from "../assets/00_UNIVERSO_03.jpg"
import UNIVERSO_04 from "../assets/00_UNIVERSO_04.jpg"
import UNIVERSO_05 from "../assets/00_UNIVERSO_05.jpg"
import UNIVERSO_06 from "../assets/00_UNIVERSO_06.jpg"
import UNIVERSO_07 from "../assets/00_UNIVERSO_07.jpg"

import TIMELINE_01 from "../assets/10_TIMELINE_01.mp4"
import TIMELINE_02 from "../assets/10_TIMELINE_02.mp4"
import TIMELINE_03 from "../assets/10_TIMELINE_03.mp4"
import TIMELINE_04 from "../assets/10_TIMELINE_04.mp4"
import TIMELINE_05 from "../assets/10_TIMELINE_05.jpg"

import BELLOSITOMIO_01 from "../assets/11_BELLOSITOMIO_01.mp4"
import BELLOSITOMIO_02 from "../assets/11_BELLOSITOMIO_02.mp4"
import BELLOSITOMIO_03 from "../assets/11_BELLOSITOMIO_03.mp4"
import BELLOSITOMIO_04 from "../assets/11_BELLOSITOMIO_04.mp4"

import RADIOGWEN_01 from "../assets/12_RADIOGWEN_01.mp4"
import RADIOGWEN_02 from "../assets/12_RADIOGWEN_02.mp4"
import RADIOGWEN_03 from "../assets/12_RADIOGWEN_03.mp4"
import RADIOGWEN_04 from "../assets/12_RADIOGWEN_04.mp4"
import RADIOGWEN_05 from "../assets/12_RADIOGWEN_05.jpg"
import RADIOGWEN_06 from "../assets/12_RADIOGWEN_06.jpg"
import RADIOGWEN_07 from "../assets/12_RADIOGWEN_07.jpg"

export const projectList = [

    {
        id: '012',
        title: 'Radio Gwendalyn',
        category: ['ux/ui','graphic design'],
        date: "2023-2024",
        description: 'Rebranding, web design & CMS for an indipendent radio station',
        text: 'Radio Gwendalyn is an independent radio station in Ticino. During 2023, it underwent restructuring to compete for national broadcast status. I worked in the lead team as Art Director and Team Coordinator to successfully achieve the goal of becoming one of the complementary broadcast stations in Switzerland.',
        imageId: [RADIOGWEN_05,RADIOGWEN_06,RADIOGWEN_07],
        video: [RADIOGWEN_01, RADIOGWEN_02,RADIOGWEN_03,RADIOGWEN_04],
        skills: ['art direction', 'ux/ui', 'rebranding', 'web design', 'CMS', 'team lead']
    },

    {
        id: '010',
        title: 'Dynamic Timeline',
        category: ['ux/ui', 'code'],
        date: "2022",
        description: 'EPFL Extention School Final Project',
        text: 'Dynamic Timeline is a web app written in Python and JavaScript. It is thought be used as a study tool. You can add "Events" made by a Title, a Date and a Comment. They are displayed on a timeline regarding their dates. You can edit, delete and search for them.',
        imageId: [TIMELINE_05],
        video: [TIMELINE_01, TIMELINE_02, TIMELINE_03, TIMELINE_04],
        skills: ['Python', 'JavaScript', 'html', 'CSS', 'UX', 'UI', 'web design']
    },

    {
        id: '013',
        title: 'Bello  Sito Mio',
        category: ['ux/ui', 'code'],
        date: "2021",
        description: 'Web app to create a custom landing page',
        text: 'Bello Sito Mio is a  micro CMS, which allowds the client to creat his own landing page extremely easily. There  is one  only template you can cutom by a  control panel.  The page architecture is responsible and thought to work with any kind of content the client can submit',
        imageId: [],
        video: [BELLOSITOMIO_01, BELLOSITOMIO_02, BELLOSITOMIO_03, BELLOSITOMIO_04],
        skills: ['PHP', 'JavaScript', 'html', 'CSS', 'UX', 'UI', 'web design', 'CMS']
    },

    {
        id: '011',
        title: 'Sonnenstube',
        category: ['photography'],
        date: "2012-2020",
        description: 'Archive photography for the independent art space Sonnenstube in Lugano',
        text: 'I have been working for several year to document the art exibithion of Sonnenstube, an indipendent art space in Ticino',
        imageId: [SONENSTUBE_01, SONENSTUBE_02, SONENSTUBE_03, SONENSTUBE_04, SONENSTUBE_05, SONENSTUBE_06, SONENSTUBE_07, SONENSTUBE_08, SONENSTUBE_09,SONENSTUBE_10],
        video: [],
        skills: ['photography']
    },

    {
        id: '002',
        title: 'Morcote Bienale',
        category: ['graphic design'],
        date: "2016 - 2028 – 2020",
        description: 'Visual identity and segnalitic parcour in the beautiful village of Morcote, Ticino',
        text: 'Creation of a visual identity for the Morcote\'s Bienale from the first to the third edition.',
        imageId: [MORCOTE_01, MORCOTE_02, MORCOTE_03, MORCOTE_04, MORCOTE_05, MORCOTE_06, MORCOTE_07],
        video: [],
        skills: []
    },

    {
        id: '003',
        title: 'd\'Arte',
        category: ['graphic design'],
        date: "2012-2018",
        description: 'Monthly contemporary art magazine',
        text: 'Layout and content editing of a monthly print publication',
        imageId: [DARTE_01, DARTE_02, DARTE_03, DARTE_04, DARTE_05],
        video: [],
        skills: []
    },

    {
        id: '004',
        title: 'L\'Universo',
        category: ['graphic design'],
        date: "2012",
        description: 'Monthly supplement of Corriere del Ticino, written by university students',
        text: 'L\'Universo is a monthly publication supplement of Corriere del Ticino. I have created a new layout of a 24 page format ',
        imageId: [UNIVERSO_01, UNIVERSO_02, UNIVERSO_03, UNIVERSO_04, UNIVERSO_05, UNIVERSO_06, UNIVERSO_07],
        video: [],
        skills: []
    },

];