module.exports = {

    author: "@moya.manuel41",
    siteTitle: "Welcome to Manuel's website",
    siteShortTitle: "Personal Website", // Used as logo text in header, footer, and splash screen
    siteDescription: "This is Manuel Moya's personal website, which includes relevant articles, projects, and contact information.",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://medium.com/feed/@moya.manuel41",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/manuelmoyadev/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@moya.manuel41"
        },
        {
            name: "Github",
            url: "https://github.com/moyamanuel"
        },
        {
            name: "Behance",
            url: "https://www.behance.net/moyamanuelec8b"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}