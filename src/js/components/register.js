import Cookies from "js-cookie";

export function applyVerify() {
    window.console.log("函数被调用");
    var nowDate = new Date();
    window.console.log(Cookies.get("pageCount_1"));
    if (Cookies.get("pageCount_1") == undefined) {
        Cookies.set("pageCount_1", nowDate);
    } else if (Cookies.get("pageCount_2") == undefined) {
        Cookies.set("pageCount_2", nowDate);
    } else {
        Cookies.set("pageCount_3", Cookies.get("pageCount_2"));
        Cookies.set("pageCount_2", Cookies.get("pageCount_1"));
        Cookies.set("pageCount_1", nowDate);
    }
    if (
        new Date(Cookies.get("pageCount_1")).getTime() -
        new Date(Cookies.get("pageCount_2")).getTime() <
        1000 &&
        new Date(Cookies.get("pageCount_2")).getTime() -
        new Date(Cookies.get("pageCount_3")).getTime() <
        1000
    ) {
        return false
    }
}