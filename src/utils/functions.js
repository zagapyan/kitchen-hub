import axios from 'axios';
import cheerio from 'cheerio'

export const testIfValidUrl = (testString) => /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(testString)

export const testIfAbsoluteUrl = (testString) => /^https?:\/\//i.test(testString);

export const fetchMetaData = (url) => axios.get('//scraper.zigmundsunoo.com/get?url=' + url)
  .then(response => {
    // console.log(response)
    const $ = cheerio.load(response.data.contents);
    const title = $('head meta[property="og:title"]')[0].attribs.content || $('head title')[0].children[0].data || '';
    const description = $('head meta[property="og:description"]')[0].attribs.content || $('meta[name=description]')[0].attribs.content || '';
    let imgSrc = $('head meta[property="og:image"]')[0].attribs.content || $('img')[0].attribs.src || '';
    
    const isAbsoluteUrl = testIfAbsoluteUrl(imgSrc)
    
    if (!isAbsoluteUrl && imgSrc.length) {
      const urlParts = url.replace('http://', '').replace('https://', '').split(/[/?#]/);
      const domain = urlParts[0];
      imgSrc = '//' + domain + imgSrc;
    }
    
    const result = { title, description, imgSrc }
    
    return result;
  })