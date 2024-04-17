const tophat = {
    link:[
        ['How to buy','onclick_function'],
        ['Partners','onclick_function'],
        ['👋 Log In','onclick_function'],
        ['🌏︎ EN US','onclick_function'],
    ]
}
const masthead = {
    buttonLink:[
        ['Products and Services','onclick_function'],
        ['Solution','onclick_function'],
        ['Support','onclick_function'],
        ['Learn','onclick_function'],
    ],
    logo:'ciscoLogo.svg',
    link:[
        ['Explore Cisco','onclick_function'],
        ['Search','onclick_function','ciscoSearch2.svg'],
    ]
}
const ciscoPosterCard = {
    cardTitle:"See more. Stress less.",
    cardText:"Imagine if there was one place to observe your entire network, the apps, and security so you could focus on innovating.",
    buttonLink:[['Imagine how','onclick_function']],
    link:[["Explore observability >",'onclick_function']],
    imgBack:"ciscoPoster.webp"
}
const ciscoQuickTask = {
    linkA:[
        ['cisco/icon/icon_downloads.svg','Downloads','onclick_function'],
        ['cisco/icon/icon_certifications.svg','Certifications','onclick_function'],
        ['cisco/icon/icon_design-guides.svg','Cisco Validated','onclick_function'],
        ['cisco/icon/icon_training.svg','Training','onclick_function'],
        ['cisco/icon/icon_community.svg','Community','onclick_function'],
        ['cisco/icon/icon_careers.svg','Careers','onclick_function']
    ]
}
const ciscoMosaic = [
    {
        typeContent:"RowOf3UpperImgCards",
        title:"Powering, supporting, and securing AI",
        text:null,
        blocks:[
            [
                {
                    title: 'Free trials and demos for AI',
                    text: "Try more than 100 Cisco product and portfolio solutions for free, including our AI products. ",
                    link: ["Explore trials and demos", "onclick func"],
                    img: "cisco/image/mosaic_1.avif"
                },
                {
                    title: 'More data. Better intelligence. Infinite possibilities.',
                    text: "Cisco AI Assistant accesses an extensive amount of data to help you work faster, safer, and smarter. ",
                    link: ["Explore Cisco AI Assistant", "onclick func"],
                    img: "cisco/image/mosaic_2.avif"
                },
                {
                    title: 'AIOps for Cisco Full-Stack Observability',
                    text: "Intelligently automate and resolve IT issues in real time – with a single click.",
                    link: ["Read blog", "onclick func"],
                    img: "cisco/image/mosaic_3.avif"
                }
            ]
        ]
    },
    {
        typeContent:"Left_Image_and_Text_Block",
        title:null,
        text:null,
        blocks:[
            {
                title:'Go Beyond at Cisco Live 2024',
                text:"Join us June 2–6 in Las Vegas as AI takes center stage.",
                link:null,
                linkButton:["Register today","onclick func"],
                img:"cisco/image/imgTextBlock1.webp"
            }
        ]
    },
    {
        typeContent:"Right_Image_and_Text_Block.jsx",
        title:null,
        text:null,
        blocks:[
            {
                title:'See your IT from a better place',
                text:"When your apps and infrastructure work better together, you work better.",
                link:["Explore observability","onclick func"],
                linkButton:["Discover more","onclick func"],
                img:"cisco/image/imgTextBlock2.avif"
            }
        ]
    },
    {
        typeContent:"Left_Image_and_Text_Block",
        title:null,
        text:null,
        blocks:[
            {
                title:'Marriott makes the internet safer with Cisco',
                text:"In nearly 5000 properties in its portfolio throughout the United States and Canada, Marriott uses Cisco Umbrella in a first-of-its-kind initiative to block guest network access to online child sexual abuse materials (CSAM).",
                linkButton:["Read full story","onclick func"],
                link:["Explore security solutions","onclick func"],
                img:"cisco/image/imgTextBlock3.avif"
            }
        ]
    },

]
const ciscoDemo = {
    title:"Stopping attackers is simpler than ever",
    text:"From the network to the cloud, respond quickly and confidently to the most sophisticated cyberattacks.   ",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
}
const ciscoIntegrations = {
    title:"Inside Cisco",
    breadcrumbs:["More News","More Events"],
    typeContent:"ThreeGridTextCard",
    blocks:[
        [
            {
                preTitle:"Press release",
                title:'Cisco Live EMEA 2024 announcement highlights',
                text:"New AI-fueled solutions spanning networking, security, collaboration, and observability highlight Cisco's ongoing commitment to AI innovation.",
                link:["Read press release","onclick func"],
            },
            {
                preTitle:"Press release",
                title:'Innovations in Cisco Observability Platform',
                text:"Cisco unveils a series of new capabilities on the Cisco Observability Platform.",
                link:["Read press release","onclick func"],
            },
            {
                preTitle:"Offer",
                title:'Ivanti VPN vulnerabilities? We can help.',
                text:"Get a free year of our VPNaaS plus ZTNA, reduce your overhead, and accelerate zero trust.",
                link:["See details","onclick func"],
            }
        ]
    ]
}
const ciscoFooter = {
    contactFooter:{
        linkA:[
            ["About Cisco","onclick func"],
            ["Contact Us","onclick func"],
            ["Careers","onclick func"],
            ["Connect with a partner","onclick func"]
        ],
        social_link:[
            ["icon facebook","onclick func"],
            ["icon X","onclick func"],
            ["icon LinkedIn","onclick func"],
            ["icon youtube","onclick func"],
            ["icon inst","onclick func"]
        ]
    },
    policiesSupportFooter:{
        linkA:[
            ["Feedback","onclick func"],
            ["Help","onclick func"],
            ["Terms & Conditions","onclick func"],
            ["Privacy Statement","onclick func"],
            ["Cookies","onclick func"],
            ["Accessibility","onclick func"],
            ["Trademarks","onclick func"],
            ["Supply Chain Transparency","onclick func"],
            ["Newsroom","onclick func"],
            ["Sitemap","onclick func"]
        ],
        copyRight:"©2024 Cisco Systems, Inc."
    }
}
export {tophat,masthead,ciscoPosterCard,ciscoQuickTask,ciscoMosaic,ciscoDemo,ciscoIntegrations,ciscoFooter};