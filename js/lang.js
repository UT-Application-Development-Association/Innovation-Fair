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
        "announcement-1": "第一条消息！",
        "announcement-2": "第二条消息！",
        "about-intro-1": "关于这项活动",
        "about-intro-2": "本次Innovation Fair将有三个主题,分别是:人工智能,大学生活和后疫情时代。参赛者们将围绕着这三个主题进行头脑风暴,开发出一个专属于自己队伍的应用,并展示应用原形。同时,专业评审会对参赛作品进行点评并提供建议,让参赛者们收获在应用开发上的宝贵经验。在此之外,本次活动还提供一个与各行业精英对话的平台,让参赛者获取有关事业与学术方面的建议。这不只是一场比赛,也是给有丰富想象力并且愿意实践自己想法的同学们提供在课余时间锻炼自己的机会。",
        "theme-header": "2020 主题",
        "theme-1-1": "人工智能",
       // "theme-1-2": "暂无翻译",
        "theme-2-1":"大学生活",
       // "theme-2-2":"暂无翻译",
        "theme-3-1": "后疫情时代",
       // "theme-3-2": "暂无翻译",
        "form-header": "包含的形式",
        "form-1-1": "组队：",
       // "form-1-2": "暂无翻译",
        "form-2-1": "展示：",
       // "form-2-2": "暂无翻译",
        "form-3-1": "Zoom:",
       // "form-3-2": "暂无翻译"
    },
    'en': {
        "navAbout": "About",
        "navTimeline": "Timeline",
        "navJudges": "Judges",
        "announcement-1": "First Announcement!",
        "announcement-2": "Second Announcement!",
        "about-intro-1": "About this event",
        "about-intro-2": "UTADA Innovation Fair 2020 is a computer programming(coding)-based application design competition. There are three topics of this event: Artificial Intelligence (AI), University Life, and Post-Epidemic Era. Participants will brainstorm through the provided themes and create designs and applications within a limited time. Students with creativity and interest in computer programming will have an opportunity to communicate with elites from various industries and to showcase their talents.",
        "theme-header": "2020 Themes",
        "theme-1-1": "Artificial Intelligence",
       // "theme-1-2": "One important theme for this event is Articial Intelligence. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "theme-2-1":"University-Life",
       // "theme-2-2": "One important theme for this event is University Life. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",        
        "theme-3-1": "Post-Pandemic Era",
       // "theme-3-2":"One important theme for this event is Post-Pandemic Era. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. <span id=\"more-3\">Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        "form-header": "Participation Forms",
        "form-1-1": "Teams:",
       // "form-1-2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "form-2-1": "Presentation:",
       // "form-2-2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "form-3-1": "Zoom:",
       // "form-3-2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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