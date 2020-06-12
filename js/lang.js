/*
    使用说明：
        包含需要多语言的文本的tag要添加
            class += .lang
            data-key

    !!! 无法应对placeholder，出现在js里的文本，和没被tag包含的文本
    !!! 刷新会重置
    TODO: 运用Cookie?
    !!! 网页现在的默认语言是en
    TODO: 独立json？
*/

var zh = {
    "navAbout": "简介",
    "navTimeline":"时间表",
    "navJudges":"评审",
    "announcement-1": "第一条消息！",
    "announcement-2": "第二条消息！"
};
var en = {
    "navAbout": "About",
    "navTimeline":"Timeline",
    "navJudges":"Judges",
    "announcement-1": "First Announcement!",
    "announcement-2": "Second Announcement!"
}

document.addEventListener("DOMContentLoaded", ()=>{

    // translate into zh
    document.querySelector('#zhBtn').onclick = () =>{
        document.querySelectorAll('.lang').forEach(txt => {
            // let id = txt.id;
            txt.textContent = zh[txt.dataset.key];
            // document.querySelector(id).innerHTML = zh[key];
        });
    };

    // translate into en
    document.querySelector('#enBtn').onclick = () =>{
        document.querySelectorAll('.lang').forEach(txt => {
            txt.textContent = en[txt.dataset.key];
        });
    };
});