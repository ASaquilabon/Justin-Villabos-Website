$(document).ready(function () {
    var loadButton = document.getElementById('load-more');
    var userFeed = new Instafeed({
        get: 'user',
        userId: '10455571',
        limit: 12,
        resolution: "standard_resolution",
        accessToken: "10455571.1677ed0.79344b54b740460a99733b39524d0af4",
        sortBy: "most-recent",
        template: '<div class="col-lg-3 gallery instaimg"><a href="{{link}}" title ="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        // every time we load more, run this function
        after: function () {
            // disable button if no more results to load
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }
        },

    });
    // bind the load more button
    loadButton.addEventListener('click', function () {
        userFeed.next();
    });
    userFeed.run();
});