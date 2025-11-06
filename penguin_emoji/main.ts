class MemeScript {
    #baseURL = "https://www.shutterstock.com/image-illustration";

    #imgs: string[] = [
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
        "3d-render-penguin-wearing-glasses-260nw-183668285"
    ]

    // elements on the document
    #inputBox: HTMLInputElement;
    #memeSection: HTMLElement;
    #leftBtn: HTMLButtonElement;
    #rightBtn: HTMLButtonElement;

    #currIdx: number;

    constructor() {
        // Get the elements on the page
        this.#inputBox = document.getElementById(
            "input-text",
        ) as HTMLInputElement;
        this.#leftBtn = document.getElementById("left") as HTMLButtonElement;
        this.#rightBtn = document.getElementById("right") as HTMLButtonElement;
        this.#memeSection = document.getElementById("meme") as HTMLElement;
        this.#currIdx = 0;

        // event listener for enter on below
        this.#inputBox.addEventListener(
            "keydown",
            this.#handleRefresh
        );
        this.#leftBtn.addEventListener("click", this.#handleLeft);
        this.#rightBtn.addEventListener("click", this.#handleRight);
    }

    // refresh the page with new inpit
    #handleRefresh() {
        // clear the page
        this.#memeSection.innerHTML = "";
        const imgURL: string = `${this.#baseURL}/${this.#imgs[this.#currIdx]}.jpg`

            // use the image url and make the image
            const imgDiv: HTMLImageElement = this.#makeImage(imgURL);

            // get the input strings, could throw error
            const str: string = this.#inputBox.textContent;

            // make the string divisions
            const txtDiv: HTMLElement[] = this.#makeStrings(str);

            // append to HTML
            this.#memeSection.append(...txtDiv, imgDiv);
    }

    #handleLeft() {
        this.#currIdx = (this.#currIdx - 1) % this.#imgs.length;
        this.#handleRefresh;
    }

    #handleRight() {
        this.#currIdx = (this.#currIdx + 1) % this.#imgs.length;
        this.#handleRefresh;
    }

    // return image element from url
    #makeImage(url: string): HTMLImageElement {
        const imgDiv: HTMLImageElement = document.createElement("img");
        imgDiv.src = url;
        return imgDiv;
    }

    // make the string HTML element
    #makeStrings(txt: string): HTMLElement[] {
        // Background border for the bottom text
        const txtDivBg: HTMLElement = document.createElement("h2");
        txtDivBg.innerText = txt;
        txtDivBg.classList.add("bottom", "background");

        // the bottom text
        const txtDiv: HTMLElement = document.createElement("h2");
        txtDiv.innerText = txt;
        txtDiv.classList.add("bottom");

        // return all the elements
        return [txtDivBg, txtDiv];
    }
}

// initialize the class
new MemeScript();
