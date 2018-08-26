(function(){
    checkPosts();
    window.addEventListener('scroll', checkPosts);

    function checkPosts() {
        var spPosts = document.getElementsByClassName('i_1qoloo5id_ k_1qolonz0yd j_1qoloo4--o');

        if(spPosts.length) {
            for (var i = 0; i < spPosts.length; i++) {
                let elem = spPosts[i].closest('.userContentWrapper');
                elem.parentNode.removeChild(elem);
            }
        }
    }   
})();