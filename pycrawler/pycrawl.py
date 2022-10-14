from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

Crawl_PATH = "C:\\Users\\rhohe\\Python"
options = Options()
options.headless = False
options.add_argument("--window-size=1280,960")

driver = webdriver.Chrome(options=options, executable_path=Crawl_PATH)
driver.get ('')

soup = BeautifulSoup(driver.page_source, 'html.parser')

print(soup.find_all('a', result-name).text)



driver.quit()