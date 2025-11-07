class MemeScript {
    #baseURL = "https://www.shutterstock.com/image-illustration";

    #imgs;

    // elements on the document
    #inputBox;
    #memeSection;
    #leftBtn;
    #rightBtn;

    #currIdx;

    constructor() {
        // Get the elements on the page
        this.#inputBox = document.getElementById(
            "input-text",
        );
        this.#imgs = [
        "3d-render-academic-penguin-lifting-260nw-199269428",
        "3d-render-academic-penguin-dressed-260nw-199269425",
        "3d-render-academic-penguin-magnifying-260nw-199269422",
        "3d-render-academic-penguin-pointing-260nw-199269407",
        "3d-render-academic-penguin-holding-260nw-199269437",
        "3d-render-academic-penguin-reading-260nw-199269449",
        "3d-render-academic-penguin-playing-260nw-199269404",
        "3d-render-academic-penguin-playing-260nw-199269401",
        "3d-render-academic-penguin-watering-260nw-199269383",
        "3d-render-penguin-holding-tennis-260nw-188297156",
        "3d-render-penguin-apple-on-260nw-183668246",
        "3d-render-penguin-playing-tennis-260nw-183668264",
        "3d-render-penguin-glasses-dressed-260nw-183668258",
        "3d-render-penguin-organising-his-260nw-183668270",
        "3d-render-penguin-glasses-wearing-260nw-183668279",
        "3d-render-penguin-wearing-glasses-260nw-183668273",
        "3d-render-penguin-glasses-football-260nw-183668294",
        "3d-render-penguin-wearing-glasses-260nw-183668291",
        "3d-render-penguin-glasses-listening-260nw-183668288",
        "3d-render-penguin-wearing-glasses-260nw-183668285",
        "3d-render-penguin-glasses-wearing-260nw-183668282",
        "3d-render-penguin-glasses-wearing-260nw-183668309",
        "3d-render-penguin-chef-offering-260nw-183668306",
        "3d-render-penguin-glasses-wearing-260nw-183668303",
        "3d-render-penguin-wearing-glasses-260nw-183668300",
        "3d-render-penguin-glasses-drinking-260nw-183668297",
        "3d-render-penguin-wearing-glasses-260nw-183668324",
        "3d-render-penguin-glasses-holding-260nw-183668240",
        "3d-render-penguin-wearing-glasses-260nw-183668318",
        "3d-render-penguin-glasses-wearing-260nw-183668309",
        "3d-render-penguin-chef-offering-260nw-183668306",
        "3d-render-penguin-glasses-wearing-260nw-183668303",
        "3d-render-penguin-wearing-glasses-260nw-183668300",
        "3d-render-penguin-glasses-drinking-260nw-183668297",
        "3d-render-penguin-wearing-glasses-260nw-183668324",
        "3d-render-penguin-glasses-holding-260nw-183668240",
        "3d-render-penguin-wearing-glasses-260nw-183668318"
    ]
        this.#leftBtn = document.getElementById("left");
        this.#rightBtn = document.getElementById("right");
        this.#memeSection = document.getElementById("meme");
        this.#currIdx = 0;

        // event listener for enter on below
        this.#inputBox.addEventListener(
            "keydown",
            this.#handleRefresh.bind(this)
        );
        this.#leftBtn.addEventListener("click", this.#handleLeft.bind(this));
        this.#rightBtn.addEventListener("click", this.#handleRight.bind(this));

        document.addEventListener("DOMContentLoaded", this.#handleRefresh.bind(this))
    }

    // refresh the page with new inpit
    async #handleRefresh() {
        // clear the page
        this.#memeSection.innerHTML = "";
        const imgURL = `${this.#baseURL}/${this.#imgs[this.#currIdx]}.jpg`

        setTimeout(() => {
            // use the image url and make the image
            const imgDiv = this.#makeImage(imgURL);

            // get the input strings, could throw error
            const str = this.#inputBox.value;

            // make the string divisions
            const txtDiv = this.#makeStrings(str);

            // append to HTML
            this.#memeSection.append(imgDiv, ...txtDiv);
        }, 1);
    }

    #handleLeft() {
        this.#currIdx = (this.#currIdx - 1 + this.#imgs.length) % this.#imgs.length;
        this.#handleRefresh();
    }

    #handleRight() {
        this.#currIdx = (this.#currIdx + 1 + this.#imgs.length) % this.#imgs.length;
        this.#handleRefresh();
    }

    // return image element from url
    #makeImage(url) {
        const imgDiv = document.createElement("img");
        imgDiv.src = url;
        return imgDiv;
    }

    // make the string HTML element
    #makeStrings(txt) {
        // Background border for the bottom text
        const txtDivBg = document.createElement("h2");
        txtDivBg.innerHTML = txt;
        txtDivBg.classList.add("bottom", "background");

        // the bottom text
        const txtDiv = document.createElement("h2");
        txtDiv.innerHTML = txt;
        txtDiv.classList.add("bottom");

        // return all the elements
        return [txtDivBg, txtDiv];
    }
}

// initialize the class
new MemeScript();
