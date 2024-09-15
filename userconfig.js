let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Berlin",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net/sixty",
              icon: "binary-tree",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "calendar",
              url: "https://www.icloud.com/calendar/",
              icon: "calendar-filled",
              icon_color: "#fab387",
            },
            {
              name: "nextcloud",
              url: "https://nextcloud.rrcomtech.com",
              icon: "cloud_download",
              icon_color: "#f38ba8",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: "#89b4fa",
            },
          ],
        }
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: "#a6e3a1",
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: "#fab387",
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: "#f38ba8",
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: "#a6e3a1",
            },
            {
              name: "reddit unixporn",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "GG",
              url: "https://ggapp.io/pivoshenko",
              icon: "device-gamepad",
              icon_color: "#a6e3a1",
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: "#fab387",
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#f38ba8",
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: "#a6e3a1",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: "#f38ba8",
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
