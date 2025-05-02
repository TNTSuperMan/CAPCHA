export function createCAPCHAElement({onverify, path}: {
    onverify: () => void,
    /** @deprecated */
    path?: string
}): HTMLIFrameElement{
    const el = document.createElement("iframe");
    el.width = "250px";
    el.height = "70px";
    el.src = path ?? "https://capcha.pages.dev/capcha";
    addEventListener("message", ev => {
        if(ev.source === el.contentWindow)
            onverify();
    })
    return el;
}
