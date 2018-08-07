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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Loop over each feed item and ensure that its “URL” property is defined AND not empty.
         * Use Expect() with a variable passed inside it's parenthesis for the item being nested
         * Use toBeDefine() to check it wether or not the variable is defined.
         * Use .length code to check the length property of allFeeds
         */

        it('URLs defined', function() {
            for(i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* TODO: Same as the URL property code
         * but this time we use "name" property
         */

         it('names defined', function() {
            for(i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


        /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Test if "The menu" is hidden by default (menu-hidden to be true)
         * Test wether or not "The menu" toggles on and off.
         * Expectation: does the menu display when clicked and does it hide when clicked again.
         * Use click() method
         */

        it('toggles on and off', function() {

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Call the loadfeed()and after it completes it's work (asynchronously),
         * check that the feed container contains at least a single entry element.
         * Use beforeEach() and done()
         */

         beforeEach(function(done) {
            loadFeed(0, done);
        });    

          it('completes work', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
   describe('New Feed Selection', function() {
        var oldFeed;

        /* TODO: 
         * Use done() to handle the async within beforeEach()
         * Need to load 2 different feeds and check that the feed content changes.
         */

        beforeEach(function(callback) {
            loadFeed(0, function() { 
                oldFeed = $('.feed').html();
                loadFeed(1, callback);
            });
        });

        //compare feed
        it('content changes', function() {
            expect($('.feed').html()).not.toEqual(oldFeed);
        });
    });

}());