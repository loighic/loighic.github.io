// Force magenta underline on article links, overriding site-level a{} rules.
(function() {
    var style = document.createElement("style");
    style.textContent = [
        "d-article a { text-decoration: none !important; border-bottom: 1px solid #B509AC !important; }",
        "d-article a:hover { text-decoration: none !important; border-bottom: 1px solid #B509AC !important; }"
    ].join("\n");
    document.head.appendChild(style);
})();

$(document).ready(function() {
    // Override styles of the footnotes.
    document.querySelectorAll("d-footnote").forEach(function(footnote) {
        footnote.shadowRoot.querySelector("sup > span")
            .setAttribute("style", "color: var(--global-theme-color);");
        footnote.shadowRoot.querySelector("d-hover-box").shadowRoot.querySelector("style").sheet
            .insertRule(".panel {background-color: var(--global-bg-color) !important;}");
    });
    // Override styles of the citations.
    document.querySelectorAll("d-cite").forEach(function(cite) {
        cite.shadowRoot.querySelector("div > span")
            .setAttribute("style", "color: var(--global-theme-color);");
        cite.shadowRoot.querySelector("style").sheet
            .insertRule("ul li a {color: var(--global-text-color) !important; text-decoration: none;}");
        cite.shadowRoot.querySelector("style").sheet
            .insertRule("ul li a:hover {color: var(--global-theme-color) !important;}");
        cite.shadowRoot.querySelector("d-hover-box").shadowRoot.querySelector("style").sheet
            .insertRule(".panel {background-color: var(--global-bg-color) !important;}");
    });
})