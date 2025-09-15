const { chromium, request } = require('playwright'); // Use 'playwright' not '@playwright/test'

(async () => {
  // Step 1: API call to fetch user data

  const apiContext = await request.newContext();
  const apiResponse = await apiContext.get('https://jsonplaceholder.typicode.com/users/1');


  if (!apiResponse.ok()) {
    console.error('Failed to fetch user data');
    process.exit(1);
  }

  const user = await apiResponse.json();
  
  console.log('Fetched User:', user);


//   // Step 2: Launch browser and go to the form
  const browser = await chromium.launch({ headless: false }); // headless: false for UI visibility
  const page = await browser.newPage();
  await page.goto('https://www.walgreens.com/login.jsp?ru=%2F'); // Replace with your actual URL

  // Step 3: Fill form fields using API data
  await page.fill('input#user_name', user.name);
  await page.fill('input#user_password', user.username);

  // Step 4: Submit the form
  await page.click('button#submit_btn');

  // Step 5: Optional - check for Error confirmation
  try {
    await page.waitForSelector('div#error_msg', { timeout: 5000 });
    console.log('✅ Error message found!');
  } catch {
    console.log('⚠️ Error message not found.');
  }

  // Step 6: Close browser
  await browser.close();
})();






// test.describe('UI and API combined test', () => {

//   test('API and UI automation together', async ({ page, request }) => {

//     // Step 1: API Call - Create a new user

//     const apiResponse = await request.post('https://reqres.in/api/users', {
//       data: {
//         name: 'John Doe',
//         job: 'Software Engineer',
//       },

//     })

//     expect(apiResponse.ok()).toBeTruthy()

//     const apiResponseBody = await apiResponse.json()

//     console.log('API Response:', apiResponseBody)

//     expect(apiResponseBody).toHaveProperty('id')
    

//     // Step 2: UI Automation - Visit the page and verify something
//     await page.goto('https://reqres.in/')

//     // For demo: Check if the homepage title contains "REQRES"
//     await expect(page).toHaveTitle(/REQRES/)

//     // Step 3: UI action - fill a form (simulate user registration)
//     // Let's say there's a form with name and job fields (this is hypothetical)
//     await page.fill('input[name="name"]', 'John Doe')
//     await page.fill('input[name="job"]', 'Software Engineer')
//     await page.click('button[type="submit"]')

//     // Step 4: Verify success message or API response on UI
//     await expect(page.locator('text=User created successfully')).toBeVisible()
//   })
// })
