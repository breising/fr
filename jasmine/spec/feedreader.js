$(function() {
    //test that the feeds' urls are properly stored in the proper array called 'allFeeds'
    describe('RSS Feeds', function() {

        it('the allFeeds var is defined and is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('allFeeds array elements should have a '
            url ' property that is defined and that is not empty', function() {
                for (var i = 0; i < allFeeds.length; i++) {
                    expect(allFeeds[i].url).not.toBeUndefined();
                    expect(allFeeds[i].url).not.toBe('');
                    expect(allFeeds[i].url).not.toBeNull();
                }
            });

        it('allFeeds array elements should have a '
            name ' property defined and that is not empty', function() {
                for (var i = 0; i < allFeeds.length; i++) {
                    expect(allFeeds[i].name).not.toBeUndefined();
                    expect(allFeeds[i].name).not.toBe('');
                    expect(allFeeds[i].name).not.toBeNull();
                }
            });
    });
    // test that the sliding menu (which contians the list of feed sources - the 'allFeeds' list) functions properly
    describe('The menu', function() {

        it('should be hidden by default', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

        it('should display on the first click of the hamburger icon and hide on the second click', function() {

            $(".menu-icon-link").trigger("click");

            expect($('body').hasClass('menu-hidden')).toBe(false);

            $(".menu-icon-link").trigger("click");

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    //test that '.entry-link' elements populate as children of the .feed element
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have at least one entry', function() {

            expect($('.feed .entry-link').length > 0).toBe(true);
        });
    });
    //test that new content is visible after clicking on a new source feed
    describe('New Feed Selection', function() {

        var ref = '';

        beforeEach(function(done) {
            loadFeed(0, function() {
                ref = $('.entry-link').first().attr('href');
                done();
            });

        });

        it('should verify the change of newly loaded content', function(done) {

            var ref2 = '';

            loadFeed(1, function() {

                ref2 = $('.entry-link').first().attr('href');

                expect(ref2 === ref).toBe(false);

                done();
            });
        });
    });
}());