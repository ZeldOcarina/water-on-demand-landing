

export default class UTMParamsParser {
    /**
     * Parse all search params and set all links to the corresponding elements 
    * @constructor
    * @param {DOMTokenList} links
    * @param {Object} searchParams
    */
    constructor(links, searchParams) {
        this.links = links;
        this.searchParams = searchParams;
        this.init();
    }

    init() {
        if (!this.searchParams.has("utm_source")) this.searchParams.append("utm_source", "wod-landing");
        if (this.searchParams.toString() === "") return;

        for (let link of this.links) {
            link.href = link.href + "?" + this.searchParams.toString();
        }
    }
}