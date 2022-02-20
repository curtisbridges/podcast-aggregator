import Parser from 'rss-parser'
const parser = new Parser()

export const fetch = async (url) => {
  let feed = await parser.parseURL(url)
  console.log(feed.title)

  feed.items.forEach((item) => {
    console.log(item.title + ':' + item.link)
  })

  return feed
}
