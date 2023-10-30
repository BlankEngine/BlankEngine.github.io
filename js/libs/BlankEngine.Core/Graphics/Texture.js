class Texture
{
    #loaded = false;
    #img = null;
    
    wrapMode = 0;
    filterMode = 0;
    
    get isLoaded ()
    {
        return this.#loaded;
    }
    
    get img ()
    {
        return this.#img;
    }
    
    constructor (src)
    {
        this.#img = new Image();
        this.#img.src = `img/${src}`;
        this.#img.sprite = this;
        
        this.#img.onload = () => { this.#loaded = true; };
    }
}