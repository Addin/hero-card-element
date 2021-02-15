class HeroCard extends HTMLElement{
    
    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'style.css');
        this.shadowRoot.appendChild(linkElem)

        const wrapper = document.createElement('div')
        wrapper.innerHTML = `
        <div>
            <h1>Name</h1>
            <h2>Frontend</h2>
            <h3>Barcelona</h3>
        </div>`

        
        this.shadowRoot.append(wrapper, linkElem)
    }
}


customElements.define('hero-card', HeroCard);