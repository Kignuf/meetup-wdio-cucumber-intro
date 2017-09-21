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

	Then(/^I expect element "(.*)" to be visible$/,
		function(element){
			let isVisible = browser.isVisible(element)
			expect(isVisible).to.equal(true, `Expected "${element}" to be visible`)
		})

	Then(/^I wait a little bit$/,
		function() {
			browser.pause(5000)
		})
})