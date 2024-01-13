
import {chromium, test} from "@playwright/test";

test('Get the Title Of the SalesForce page', async() =>
{

    const browserInstance= await chromium.launch({headless:false, channel:'chrome'});
    const browserContext= await browserInstance.newContext();
    const page= await browserContext.newPage();

    await page.goto("https://login.salesforce.com/");

    await page.locator('input#username').fill('sam321-4jrf@force.com');
    await page.waitForTimeout(3000);

    await page.locator('input#password').fill('Protech@123');
    await page.waitForTimeout(3000);

    await page.locator('input#Login').click();  
    await page.waitForTimeout(3000);

    const pageTitle=await page.title();
    console.log(`The title of the page is ${pageTitle}`);
    console.log('The title of the page is ' +pageTitle);
});