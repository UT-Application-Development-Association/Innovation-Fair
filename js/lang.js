/*
    使用说明：
        包含需要多语言的文本的tag要添加
            class += .lang
            data-key

    !!! 无法应对placeholder，出现在js里的文本，和没被tag包含的文本
    !!! 网页现在的默认语言是en
    TODO: 独立json？
*/
var dict = {
    'zh': {
        "navAbout": "简介",
        "navTimeline": "时间表",
        "navJudges": "评审",
        "navAnnouncement": "公告",
        "navSignup": "报名！",
        "announcement-1": "欢迎参加IF2020！报名已经开始啦！",
        "announcement-2": "欢迎参加IF2020！报名已经开始啦！",
        "about-intro-title": "Innovation Fair 2020是什么？",
        "about-intro-text": "UTADA Innovation Fair 2020是一个基于计算机编程的网上应用设计大赛。参赛者们将以个人或小组，围绕着人工智能、大学生活、后疫情时代三个主题进行头脑风暴来开发出独特的应用程序并最终展示其原型。比赛中，专业评审会对参赛作品提出细致点评，参赛者们可以从建议中获得宝贵的应用开发经验。此外，IF2020还将邀请各行业精英人士开展有关应用开发的讲座并与参赛者们直接沟通交流经验。这不单是一场编程爱好者的比赛，更是关注生活、有丰富创意的同学们一个实现创想的平台。",
        "theme-header": "2020 主题",
        "theme-1-1": "人工智能",
        "theme-2-1": "大学生活",
        "theme-3-1": "后疫情时代",
        "form-header": "活动形式",
        "form-1-1": "组队",
        "form-1-2": "在本次活动中，你可以自行组成1-5个人的队伍或独自参加。一个人进行项目的设计与开发将会是一个困难与漫长的过程，因此本次竞赛将采取组队参加的形式。可能你有想法但没有能力实现，可能你有技术但却缺乏创意，但通过组队的方式使得队员间达到能力上的互补便可获得意想不到的成功。同时，与他人组队也能锻炼合作与沟通能力，让你在今后与他人进行的项目开发更加顺利。",
        "form-2-1": "展示",
        "form-2-2": "一个项目的成功，不仅仅是超前的理念和高超的技术能够实现的，你同时还需要能向他人展现这个项目的优异之处。完成项目的设计与初步开发后，你与你的团队将需要向评委展示你们的作品。在展示中你可以能锻炼自己的自信，这也会是一个提升自己的表达能力与随机应变能力的机会。",
        "form-3-1": "答疑",
        "form-3-2": "一个竞赛如果除了奖品之外你什么也无法获得，那这便是一个无意义的竞赛。在项目开发时，你与你的团队将会有机会与专业人士进行开发方面的讨论，他们也会给出针对你们项目的开发建议。同时，在展示环节结束时，专业评委将会对你们的项目进行点评与建议。通过这次竞赛，你可以获得项目开发的经验同时了解行业内的项目开发方式。",
        "timeline": "时间表",
        "beforeBtn": "前期活动",
        "thedayBtn": "竞赛日程",
        "timeline-pre1": "团队报名阶段",
        "timeline-pre2": "讲座：如何更好地展示你的作品？",
        "timeline-pre3": "提交作品内容",
        "timeline-pre4": "公开项目展示时间表",
        "timeline-pre-huawei": "How technology will change the workplace and how has Covid-19 accelerated the impact?",
        "timeline-pre-ibm": "UI, UX, and Design",
        "timeline-pre-ods": "Artificial Intelligence: Ethics and Transparency",
        "timeline-day1": "初赛",
        "timeline-day2": "嘉宾座谈会",
        "timeline-day3": "决赛",
        "timeline-day4": "颁奖",
        "speakers":"演讲嘉宾",
        "judges":"评审",
        "sponsorships":"赞助商"
    },
    'en': {
        "navAbout": "About",
        "navTimeline": "Timeline",
        "navJudges": "Judges",
        "navAnnouncement": "Announcement",
        "navSignup": "SIGN UP!",
        "announcement-1": "Welcome to IF2020! Registration started!",
        "announcement-2": "Welcome to IF2020! Registration started!",
        "about-intro-title": "What is Innovation Fair 2020?",
        "about-intro-text": "UTADA Innovation Fair 2020 is a completely online computer programming(coding)-based application design competition. There are three topics of this event: Artificial Intelligence (AI), University Life, and Post-Epidemic Era. Participants will brainstorm through the provided themes and create designs and applications within a limited time. Students with creativity and interest in computer programming will have an opportunity to communicate with elites from various industries and to showcase their talents.",
        "theme-header": "2020 Themes",
        "theme-1-1": "Artificial Intelligence",
        "theme-2-1": "University Life",
        "theme-3-1": "Post-Pandemic Era",
        "form-header": "Participation Forms",
        "form-1-1": "Teams",
        "form-1-2": "In this event, you may form a team of 1-5 members by yourself or work individually. It is difficult and painful to develop an application within a short period of time; thus, participants are allowed to form a team with others. Nobody is perfect to have everything done by himself, so collaborate with teammates is important to reach success. The Innovation Fair is a chance for you to improve your communication and collaboration skills.",
        "form-2-1": "Presentation",
        "form-2-2": "The success of a project is not only caused by innovative ideas or superb techniques, but you also need to let others know the excellence of your project. In the Innovation Fair, you will need to present your project to Judges after finished the prototype. In the presentation, you can enhance the ability to express your ideas and react to question from judges.",
        "form-3-1": "Meeting",
        "form-3-2": "It is meaningless if the only thing you can get from a contest is the reward. During the development of your project, skilled TAs will give you advice about the development process. Also, there will be industry and community representatives to rate and give suggestions about your project. It is a good way to know how to develop a project in the industry.",
        "timeline": "Timeline",
        "beforeBtn": "Fair Events",
        "thedayBtn": "Presentation",
        "timeline-pre1": "Team Sign-up Period",
        "timeline-pre2": "How to present your project well?",
        "timeline-pre3": "Materials Submission",
        "timeline-pre4": "Announcement of Presentation Schedule",
        "timeline-pre-huawei": "How technology will change the workplace and how has Covid-19 accelerated the impact?",
        "timeline-pre-ibm": "UI, UX, and Design",
        "timeline-pre-ods": "Artificial Intelligence: Ethics and Transparency",
        "timeline-day1": "Preliminary Presentations",
        "timeline-day2": "Partner Panel Talk",
        "timeline-day3": "Finalist Presentations",
        "timeline-day4": "Awards",
        "speakers":"Speakers",
        "judges":"Judges",
        "sponsorships":"Sponsorships"

    }
}



// initially default lang == en
if (!localStorage.getItem('lang'))
    localStorage.setItem('lang', 'en');


// Set the textContent of every element with class .lang
// to the corresponding translation of <lang> in dict, 
// and then set localStorage<lang> to <lang>
function setLang(lang) {
    document.querySelectorAll('.lang').forEach(txt => {
        txt.textContent = dict[lang][txt.dataset.key];
    });
    localStorage.setItem('lang', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    // set language from local storage
    setLang(localStorage.getItem('lang'));

    // translate into zh
    document.querySelector('#zhBtn').onclick = () => {
        // document.querySelectorAll('.lang').forEach(txt => {
        //     // let id = txt.id;
        //     txt.textContent = zh[txt.dataset.key];
        //     // document.querySelector(id).innerHTML = zh[key];
        // });
        // localStorage.setItem('lang', 'zh');
        setLang('zh');
    };

    // translate into en
    document.querySelector('#enBtn').onclick = () => {
        setLang('en');
    };
});