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
        "announcement-2": "第二条消息！"
    },
    'en': {
        "navAbout": "About",
        "navTimeline": "Timeline",
        "navJudges": "Judges",
        "announcement-1": "First Announcement!",
        "announcement-2": "Second Announcement!"
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