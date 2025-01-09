// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('register', ({ username, password, name }) => {
	cy.request('POST', 'http://localhost:3001/api/users', {
		username,
		password,
		name,
	}).then(() => {
		cy.visit('http://localhost:5173');
	});
});

Cypress.Commands.add('login', ({ username, password }) => {
	cy.get('#username').type(username);
	cy.get('#password').type(password);
	cy.get('#loginBtn').click();
});

Cypress.Commands.add('newblog', ({ title, url, author }) => {
	cy.get('#title').type(title);
	cy.get('#author').type(author);
	cy.get('#url').type(url);

	cy.get('#submit').click();
});

Cypress.Commands.add('createBlog', (blogBody) => {
	cy.request({
		url: 'http://localhost:3001/api/blogs',
		method: 'POST',
		body: blogBody,
		headers: {
			Authorization: `Bearer ${
				JSON.parse(localStorage.getItem('userInfo')).token
			}`,
		},
	});

	cy.visit('http://localhost:5173');
});