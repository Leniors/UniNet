$(document).ready(function() {
    $(".menu").click(function() {
        $(".navigation").toggleClass("resize_menu");
        $("main").toggleClass("resize_main");
        $(".filter").toggleClass("resize_main")
    });

    $(".create_button").hover(function() {
        $(".create_button").empty();
        $(".create_button").css("font-weight", "400");
        $(".create_button").css("font-size", "30px");
        $(".create_button").css("height", "40px");
        $(".create_button").css("width", "100px");
        $(".create_button").text("Create");
    }, function() {
        $(".create_button").empty();
        $(".create_button").css("font-weight", "900");
        $(".create_button").css("font-size", "40px");
        $(".create_button").css("height", "40px");
        $(".create_button").css("width", "40px");
        $(".create_button").text("+");
    });

    $(".create_button").click(function() {
        $("#creator_type").toggleClass("dont_display");
    });

    fetch('http://34.204.61.140:5001/api/v1/categories/')
                .then(response => response.json())
                .then(data => {
			$(".choice").empty();
			data.forEach(category => {
				$(".choice").append(`<div>${category.name}</div>`);
			});
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
        <article class="tale">
            <div class="tale-header">
                <h2 class="tale-title">The Tale Title</h2>
                <div class="tale-metadata">Author: John Doe | Date: February 1, 2024</div>
            </div>
            <div class="tale-content">
                    Once upon a time, in a faraway land, there lived a
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
	    $("#creator_type").addClass("dont_display");
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
	
	$("#sign-up").hover(function() {
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

    $("#create_video").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "#d20a0a");
    });

    $("#create_tale").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "#d20a0a");
    });

    $("#create_teaser").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "#d20a0a");
    });

    $("#create_video").click(function() {
        window.location.href = "/uninet/create-video";
    });

    $("#create_tale").click(function() {
        window.location.href = "/uninet/create-tale";
    });

    $("#create_teaser").click(function() {
        window.location.href = "/uninet/create-teaser";
    });
});
