(function (window, document) { // iife start

    // register load event when the document is ready
    document.addEventListener('load', function () {

        // get the secret button from the DOM
        const secretButton = document.querySelector('button[name="secret"]');

        // register click event on the secret button
        secretButton.addEventListener('click', function (e) {

            e.preventDefault(); // prevent any default browser behavior
            console.log('Secret button clicked!');

        });

    });

})(window, document); // iife end