/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {

    describe('RSS Feeds', function() {

        /**
         * Tests to make sure the allFeeds variable has been defined and is not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * Runs a loop through the allFeeds array, defines each url, and ensures the url isn't empty
         */
        it('url defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /**
         * Runs a loop through the allFeeds array, defines each name, and ensures the url isn't empty
         */
        it('name defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });

    describe('The menu', function() {

        /**
         * Expectation for body div to have the .menu-hidden class
         */
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        /**
         * When the .menu-icon-link is clicked, the .menu-hidden class is expected to be removed (false)
         * and when clicked again, the .menu-hidden class is expected to be in place (true)
         */
        it('menu visibility on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

    });


    describe('Initial Entries', function() {

        /**
         * Asynchronous request
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /**
         * Expectation is that there is at least one item within the container
         */
        it('more than 0 .entry within .feed', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {

        /**
         * Old and new url variables
         */
        let oldUrl;
        let newUrl;

        /**
         * Where the magic happens. This makes sure the new feed is loaded through the loadFeed prior to the 'new feed loading' test below
         * It grabs the old url, places within the variable, and does the same with the new
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldUrl = $('.feed').html();
                loadFeed(1, function() {
                    newUrl = $('.feed').html();
                    done();
                });
            });
        });

        /**
         * This compares the old and new, and makes sure they don't match
         */
        it('new feed loading', function () {
            expect(newUrl).not.toBe(oldUrl);
        });

    });

}());