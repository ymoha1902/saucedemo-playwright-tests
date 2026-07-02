const{ test, expect} = require('@playwright/test');

test('get a single user', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('Ervin Howell');

    });

test('return 404 for a non existing user', async ({request }) =>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/99');
    expect(response.status()).toBe(404);
});

test('user address contains correct city', async ({ request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.address.city).toBe('Wisokyburgh');
});

test('can delete a user using their dynamic id', async ({ request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);

    const userBody = await response.json();
    const userId = userBody.id;

    const deleteResponse = await request.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    expect(deleteResponse.status()).toBe(200);
})