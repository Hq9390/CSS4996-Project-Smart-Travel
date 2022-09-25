const puppeteer = require('puppeteer');
async function scrape(url)
{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    const [na] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[3]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[1]/h2');
    const text = await na.getProperty('textContent');
    const name = await text.jsonValue();

    const [na2] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[5]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[1]/h2');
    const text2 = await na2.getProperty('textContent');
    const name2 = await text2.jsonValue();

    const [na3] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[6]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[1]/h2');
    const text7 = await na3.getProperty('textContent');
    const name3 = await text7.jsonValue();

    const [na4] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[9]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[1]/h2');
    const text10 = await na4.getProperty('textContent');
    const name4 = await text10.jsonValue();

    const [na5] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[8]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[1]/h2');
    const text13 = await na5.getProperty('textContent');
    const name5 = await text13.jsonValue();

    const [PR] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[3]/c-wiz/div/div/div/div[1]/div/div[2]/div[1]/div/a/div/div/div/span[1]/span/span[1]');
    const text3 = await PR.getProperty('textContent');
    const price = await text3.jsonValue();

    const [PR2] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[5]/c-wiz/div/div/div/div[1]/div/div[2]/div[1]/div/a/div/div/div/div[1]/span[2]/span/span[1]/span');
    const text4 = await PR2.getProperty('textContent');
    const price2 = await text4.jsonValue();

    const [PR3] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[6]/c-wiz/div/div/div/div[1]/div/div[2]/div[1]/div/a/div/div/div/span[1]/span/span[1]');
    const text8 = await PR3.getProperty('textContent');
    const price3 = await text8.jsonValue();

    const [PR4] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[9]/c-wiz/div/div/div/div[1]/div/div[2]/div[1]/div/a/div/div/div/span[1]/span/span[1]');
    const text11 = await PR4.getProperty('textContent');
    const price4 = await text11.jsonValue();

    const [PR5] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[8]/c-wiz/div/div/div/div[1]/div/div[2]/div[1]/div/a/div/div/div/span[1]/span/span[1]');
    const text14 = await PR5.getProperty('textContent');
    const price5 = await text14.jsonValue();

    const [RA] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[3]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[2]/span/a/span/span/span/span[1]/span/span/span/span/span[1]');
    const text5 = await RA.getProperty('textContent');
    const rating = await text5.jsonValue();

    const [RA2] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[5]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[2]/span/a/span/span/span/span[1]/span/span/span/span/span[1]');
    const text6 = await RA2.getProperty('textContent');
    const rating2 = await text6.jsonValue();

    const [RA3] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[6]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[2]/span/a/span/span/span/span[1]/span/span/span/span/span[1]');
    const text9 = await RA3.getProperty('textContent');
    const rating3 = await text9.jsonValue();

    const [RA4] = await page.$x('/html/body/c-wiz[2]/div/div[2]/div/c-wiz/div[2]/div[2]/div[1]/div/main/div/c-wiz/div[1]/div[3]/c-wiz[9]/c-wiz/div/div/div/div[1]/div/div[1]/div[1]/div[2]/span/a/span/span/span/span[1]/span/span/span/span/span[1]');
    const text12 = await RA4.getProperty('textContent');
    const rating4 = await text12.jsonValue();


   // await page.type("#search", "hotel listings petosky")
    //await page.click("#newSearch button" )
  //  await page.waitForNavigation()

    //const newPage = await page.evaluate("#information", element => element.textContent)
    await browser.close();

    console.log({name, name2, name3, name4, name5, price, price2, price3, price4, price5,  rating, rating2, rating3, rating4})
    return {name, name2, name3, name4, name5, price, price2, price3, price4, price5,  rating, rating2, rating3, rating4}
}
scrape('https://www.google.com/travel/hotels?q=hotel%20listing%20traverse%20city&gsas=1&rp=CgpYAGAAcgQIAhgAOAGAAgGKAhtob3RlbCBsaXN0aW5nIHRyYXZlcnNlIGNpdHmoAgA&ved=0CAAQ5JsGahcKEwi43ODJ6q36AhUAAAAAHQAAAAAQBA&hl=en-US&gl=us&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4429192%2C4597339%2C4718358%2C4723331%2C4757164%2C4778035%2C4814050%2C4816977%2C4821091%2C4826689%2C4850737%2C4852066%2C4856937&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaMQoTEg86DVRyYXZlcnNlIENpdHkaABIaEhQKBwjmDxAJGBkSBwjmDxAJGBoYATICEAAqCwoHKAE6A1VTRBoA')

