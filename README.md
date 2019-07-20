# Instagram Public API

Back in 2018 when I found this [article](https://medium.com/@h4t0n/instagram-data-scraping-550c5f2fb6f1) for my project. It's says that instagram had an "open API" so we can collecting its data. Then I back in 2019 and recognize that it still working. I create an API to ease us accessing Instagram Public API with nodejs. No login, no authentication required. For now, it has some features :

  - Show instagram public picture by tags
  - Show instagram public profile by username
  - show instagram media detail with comment
  - Search something in instagram by keyword (username, location, etc)

# Endpoints
1. show instagram by tags : /tags/{your-specified-tag}
2. show instagram by username : /username/{valid-and-public-instagram-username}
3. show instagram media : /media/{media-shortcode}
4. search in instagram : /search?q={your-specified-keyword}

# Parameters
1. By using endpoints above, you will get json directly from instagram services. So, I've simplify the json by using `formated` paramater then set it `true` . Example : `https://instagram-public-api.herokuapp.com/tags/indonesia?formated=true`
2. For pagination, you can use `next_url` value if you using formated mode. Example 
`https://instagram-public-api.herokuapp.com/tags/indonesia?formated=true&max_id={next_url_value}` will show the next page

# How to access
### By Herokuapp
I have hosting it in herokuapp so you can try those endpoints : https://instagram-public-api.herokuapp.com

### This repository
Clone this repo, npm install, npm start, and ready to go !

# Disclaimer
1. Use this for good purpose. I recommend for research only
2. You cant save instagram media url in your own database. Because instagram url are dynamic.

