var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const {Builder, Capabilities, By, Key, until} = require('selenium-webdriver');

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

const select1 = 'Arbeitnehmer';
const select2_1 = 'Single';
const select2_2 = 'Nein';
const select3 = 'zur Miete';
const select4 = '12345';
const select5 = 'teures Fahrrad/E⁠-⁠Bike';
const select7 = 'keine Tiere';
const select8 = 'keine';
const select9 = 'Nein';
const select10 = 'keine';
const select11 = 'Nein';
const select12 = 'Nein';
const select13_1 = 'birthday-day';
const select13_2 = 'birthday-month';
const select13_3 = 'birthday-year';
const select14 = 'Gesetzlich';
const select15 = 'Nein';

async function acceptCookies() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.c24-cookie-consent-button'))), 5000);
    await driver.findElement(By.css('.c24-cookie-consent-button')).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.c24-cookie-consent-buttonlink'))), 5000);
    await driver.findElement(By.css('.c24-cookie-consent-buttonlink')).click();
}

async function firstSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length)
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select1) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function secondSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.FamilyStep'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select2_1) {
            await list[i].click();
        }
        if (text === select2_2) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function thirdSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion-answers'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select3) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function fourthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.PostalCodeQuestion-input-field'))), 5000);
    await driver.findElement(By.css('.PostalCodeQuestion-input-field')).sendKeys(select4);

    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function fifthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.MultiChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.MultiChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.MultiChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select5) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function sixthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.MultiChoiceInsurancesQuestion-selectedTick--selected'))), 5000);

    const list = await driver.findElement(By.css('.MultiChoiceInsurancesQuestion-selectedTickIcon')).click();

    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function seventhSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.MultiChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.MultiChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.MultiChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select7) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function eighthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.MultiChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.MultiChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.MultiChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select8) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function ninthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select9) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function tenthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.MultiChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.MultiChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.MultiChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select10) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function eleventhSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select11) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function twelfthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select12) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function thirteenthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.DateOfBirthQuestion-input-container'))), 5000);

    const list = await driver.findElements(By.css('.DateOfBirthQuestion-input-field'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].getAttribute('name');
        console.log(text);
        if (text === select13_1) {
            await list[i].sendKeys('12');
        }
        if (text === select13_2) {
            await list[i].sendKeys('08');
        }
        if (text === select13_3) {
            await list[i].sendKeys('1987');
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function fourteenthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select14) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function fifteenthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.SingleChoiceQuestion'))), 5000);

    const list = await driver.findElements(By.css('.SingleChoiceQuestion-answer'))
    console.log(list.length);
    for(let i = 0; i < list.length; i++) {
        let text = await list[i].findElement(By.css('.SingleChoiceQuestion-answerLabel')).getText();
        console.log(text);
        if (text === select15) {
            await list[i].click();
        }
    }
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function sixteenthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.StepPage-nextButton'))), 5000);
    await driver.findElement(By.css('.StepPage-nextButton')).click();
}

async function seventeenthSelection() {
    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.ResultSummaryPage-button'))), 5000);

    await driver.findElement(By.css('.ResultSummaryPage-button')).click();
}

async function generalTest() {
    await driver.get('https://www.check24.de/versicherungsordner/vertraege/bedarfsrechner/beruf');
    await acceptCookies();
    await firstSelection();
    await secondSelection();
    await thirdSelection();
    await fourthSelection();
    await fifthSelection();
    await sixthSelection();
    await seventhSelection();
    await eighthSelection();
    await ninthSelection();
    await tenthSelection();
    await eleventhSelection();
    await twelfthSelection();
    await thirteenthSelection();
    await fourteenthSelection();
    await fifteenthSelection();
    await sixteenthSelection();
    await seventeenthSelection();
}

generalTest();
