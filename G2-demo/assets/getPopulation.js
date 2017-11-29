const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')

// curl http://www.stats.gov.cn/tjsj/pcsj/rkpc/6rp/html/A0101a.htm | iconv -f GB2312 -t UTF8 > pop.html

const populationJson = fs.readFileSync('./pop.html', 'utf8')

const parse = html => {
  const $ = cheerio.load(html)

  let trs = $('table tr')

  let output = {}

  trs.filter((i, el) => i >= 8 && i <=38).each((i, el) => {
    let key = $(el).children().first().text().replace(/\s/g, '')
    let value = Number($(el).children().eq(4).text())

    output[key] = value
    console.log(key, ' - ', value)
  })

  return output
}

fs.writeFileSync('population.json', JSON.stringify(parse(populationJson)), 'utf8')


// const req = http.request({
//   hostname: 'www.stats.gov.cn',
//   port: 80,
//   path: '/tjsj/pcsj/rkpc/6rp/html/A0101a.htm',
//   method: 'GET'
// }, res => {
//   res.setEncoding('utf8')

//   res.on('data', chunk => {
//     console.log(chunk)
//   })
// })

// req.end()