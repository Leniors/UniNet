$(document).ready(function() {
    $(".menu").click(function() {
        $(".navigation").toggleClass("resize_menu");
        $("main").toggleClass("resize_main");
        $(".filter").toggleClass("resize_main")
    });

    fetch('http://34.204.61.140:5005/api/v1/categories/')
                .then(response => response.json())
                .then(data => {
                        console.log(data)
                });

    $(".content-type-video").click(function() {
        $(".content_section").empty();
        $(".content_section").append(`<div class="video_content"></div>`);
        $(".video_content").append(`
        <article>
        <div class="article-content"><iframe src="https://www.youtube.com/embed/ERBurYnmMF8?si=sQ-sZyIZCEeUPQpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div class="article-description">
                <div class="creator_icon"></div>
                <div class="description">description yyyyyyyyy yyyyyyyyyyyyyyyyy yyyyyyyyyyyyyy uuuuuuuuuuu</div>
            </div>
        </article>
        <article>
            <div class="article-content">content</div>
            <div class="article-description">
                <div class="creator_icon"></div>
                <div class="description">description yyyyyyyyy yyyyyyyy yyyyyyyyyyyyyy uuuuuuuuuuu</div>
            </div>
        </article>
    `);
    });

    $(".content-type-tales").click(function() {
        $(".content_section").empty();
        $(".content_section").append(`<div class="tales_content"></div>`);
        $(".tales_content").append(`
        <article class="tale">
            <div class="tale-header">
                <h2 class="tale-title">The Tale Title</h2>
                <div class="tale-metadata">Author: John Doe | Date: February 1, 2024</div>
            </div>
            <div class="tale-content">
                    Once upon a time, in a faraway land, there lived a brave knight named Sir Lancelot. He embarked on a quest to rescue the princess from the clutches of an evil dragon... jjjj jjjj jjjj
            </div>
        </article>
        <article class="tale">
            <div class="tale-header">
                <h2 class="tale-title">The Tale Title</h2>
                <div class="tale-metadata">Author: John Doe | Date: February 1, 2024</div>
            </div>
            <div class="tale-content">
                    Once upon a time, in a faraway land, there lived a
            </div>
        </article>
    `);
    });

    $(".content-type-teasers").click(function() {
        $(".content_section").empty();
        $(".content_section").append(`<div class="teaser_content"></div>`);
    });

    $(".user_icon").click(function() {
        $(".user_info").toggleClass("view_user_info");
    });

    $("#login").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "#d20a0a");
    });

    $("#account_info").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "#d20a0a");
    });

    $("#logout").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "#d20a0a");
    });

    $("#login").click(function() {
	    window.location.href = "/uninet/login";
    });

    $("#logout").click(function() {
	    window.location.href = "/uninet/login";
    });

    $("#account_info").click(function() {
        window.location.href = "/uninet/user";
    });

    $("#sign-up").click(function() {
        window.location.href = "/uninet/sign-up";
    });
});
