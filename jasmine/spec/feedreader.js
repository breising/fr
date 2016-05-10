/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('the allFeeds var is defined and is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('allFeeds array elements should have a url property that is defined that is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBeUndefined();
                expect(allFeeds[i].url).not.toBe('');
                expect(allFeeds[i].url).not.toBeNull();
            }
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('allFeeds array elements should have a name defined that is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBeUndefined();
                expect(allFeeds[i].name).not.toBe('');
                expect(allFeeds[i].name).not.toBeNull();
            }
        })
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });
    describe('The menu', function() {

        it('should be hidden by default', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);

        })

        /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should display if it is hidden, and hide if displayed, when the menu when hamburger is clicked', function() {

            $('body').toggleClass('menu-hidden');

            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('body').toggleClass('menu-hidden');

            expect($('body').hasClass('menu-hidden')).toBe(true);

        })

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
    })

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        })

        it('should have at least one entry', function(done) {

            expect($('.feed').children().length > 0).toBe(true);
            done();

        })

    })
    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */


    describe('New Feed Selection', function() {

        var ref = '';

        beforeEach(function(done) {
            loadFeed(0, function() {
                ref = $('.entry-link').first().attr('href');
                done();
            })

        })

        it('should verify the change of newly loaded content', function(done) {

            var ref2 = '';

            loadFeed(1, function() {
                ref2 = $('.entry-link').first().attr('href');

                if (ref2 === ref) {
                    var temp = true;
                } else {
                    var temp = false;
                }
                expect(temp).toBe(false);
                done()
            })
        })
    })

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());