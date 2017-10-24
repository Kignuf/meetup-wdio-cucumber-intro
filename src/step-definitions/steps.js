const expect = require('chai').expect
const { defineSupportCode } = require('cucumber');

module.export = defineSupportCode(({ Given, When, Then }) => {
	Given(
		/^I open the (url|site) "([^"]*)?"$/,
		function(type, page){
			const url = (type === 'url') ? page : browser.options.baseUrl + page
    		browser.url(url)
		}
	)

	When(/^I submit "(.*)" \/ "(.*)" credentials$/,
		function(login, password){
			$('#username').setValue(login)
			$('#password').setValue(password)
			$('button').click()
		})

	Then(/^I expect element "(.*)" to( not)* be visible$/,
		function(element, falseCase){
			let isVisible = browser.isVisible(element)
			if(falseCase) {
				expect(isVisible).to.equal(false, `Expected "${element}" to not be visible`)
			} else {
				expect(isVisible).to.equal(true, `Expected "${element}" to be visible`)
			}
		})

	Then(/^I wait a little bit$/,
		function() {
			browser.pause(5000)
		})
})