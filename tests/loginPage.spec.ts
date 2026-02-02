import {test, expect} from '@playwright/test';

test('login page',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox',{name:'username'}).fill('tomsmith');
    await page.getByRole('textbox',{name:'password'}).fill('SuperSecretPassword!');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
})