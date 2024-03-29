$(document).ready(function() {
    $(".menu").click(function() {
        $(".navigation").toggleClass("resize_menu");
        $("main").toggleClass("resize_main");
        $(".filter").toggleClass("resize_main")
    });

    fetch('http://127.0.0.1:5001/api/v1/categories/')
                .then(response => response.json())
                .then(data => {
                        console.log(data)
                        $(".choice").empty();
                        data.forEach((category) => {
                            $(".choice").append(`
                            <div>${category.name}</div>
                            `);
                        });
                }).catch(error => console.error('Error:', error));

    $(".content-type-video").click(function() {
        $(".content_section").empty();
        $(".content_section").append(`<div class="video_content"></div>`);
        $(".video_content").append(`
        <article>
            <div class="article-content">content</div>
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
});
