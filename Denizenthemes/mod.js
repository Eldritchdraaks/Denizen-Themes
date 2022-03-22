const typheus = `
#app > *, .tabFrame > div {
    --system-skycolor: #D6F0EE;
    --system-background:    
        url(assets://archive/collection/Typheus/typheus_homebg_left.png) left center no-repeat fixed,
        url(assets://archive/collection/Typheus/typheus_homebg_right.png) right center no-repeat fixed,
        url(assets://archive/collection/Typheus/typheus_homebg_center.png) center center no-repeat fixed;
}`

const cetus = `
#app > *, .tabFrame > div {
    --system-skycolor: #aeb6e7;
    --system-background:
        url(assets://archive/collection/Cetus/cetus_homebg_left.png) left center repeat-y fixed,
        url(assets://archive/collection/Cetus/cetus_homebg_right.png) right center repeat-y fixed,
        url(assets://archive/collection/Cetus/cetus_homebg_center.png) center center no-repeat fixed;
}`

const hepheastus = `
#app > *, .tabFrame > div {
    --system-background:   
        url(assets://archive/collection/Hepheastus/hepheastus_homebg_center.png) center center no-repeat fixed,
	linear-gradient(180deg, #666666 0%, #555555 49%, #4b4b4b 50%, #595959 100%) fixed;
}`

const echidna = `
#app > *, .tabFrame > div {
    --system-background:
	linear-gradient(180deg, #0ab6ff 0%, #0ab6ff 15%, #0160ea 49%, #0c49c8 50%, #0067ff 100%) fixed;
}`

module.exports = {
    title: "Denzien Browser Themes", 
    summary: "Themes based on the beta kids internet browsers!",
    author: "Eldritchdraaks",
    modVersion: 1.0,
    locked: "010030",
    description: "Typheus, Cetus, Hepheastus, Echidna. In the early acts of homestuck we see internet browsers named after these Denizens. Why not style your Homestuck browsing experience with a theme just like them?<br><b>Previews:</b> <a href=\"assets://archive/collection/Typheus/typheus_preview.png\">Typheus</a> • <a href=\"assets://archive/collection/Cetus/cetus_preview.png\">Cetus</a> • <a href=\"assets://archive/collection/Hepheastus/hepheastus_preview.png\">Hepheastus</a> • <a href=\"assets://archive/collection/Echidna/echidna_preview.png\">Echidna</a>",
    styles: [],

    computed(api){
        store = api.store

        // Default to on
        store.set("option", store.get("option", "none"))

        computed = {
            styles: []
        }

        switch (store.get("option")) {
            case 'typheus':
                computed.styles.push(
                    {body: typheus}
                )
                break;
            case 'cetus':
                computed.styles.push(
                    {body: cetus}
                )
                break;
            case 'hepheastus':
            computed.styles.push(
                {body: hepheastus}
            	)
                break;
            case 'echidna':
                computed.styles.push(
                    {body: echidna}
                )
                break;
        }

        return computed   
    },

    themes: [
        {
            label: "Typheus",
            source: "./Typheus/typheus_theme.scss"
        },{
            label: "Cetus",
            source: "./Cetus/cetus_theme.scss"
        },{
            label: "Hepheastus",
            source: "./Hepheastus/hepheastus_theme.scss"
        },{
            label: "Echidna",
            source: "./Echidna/echidna_theme.scss"
        }
    ],

    trees: {
        "./": "assets://archive/collection/"
    },

    settings: {
        radio: [{
            model: "option",
            label: "Homepage backgrounds",
            desc: "Changes the blue skies of the homepage to a background matching your browser of choice.",
            options: [{
                value: "none",
                label: "None",
            },{
                value: "typheus",
                label: "Typheus"
            },{
                value: "cetus",
                label: "Cetus"
            },{
                value: "hepheastus",
                label: "Hepheastus"
            },{
                value: "echidna",
                label: "Echidna"
            }]
        }]
    }
}