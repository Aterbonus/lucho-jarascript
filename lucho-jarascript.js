//Magic happens
(function ($) {

    $.fn.luchoJaraScript = function () {

        var este = this;

        //Array of lucho's images
        var luchos = [];
        luchos.push("http://i.imgur.com/eRC8onz.jpg");
        luchos.push("http://i.imgur.com/eISN50J.jpg");
        luchos.push("http://i.imgur.com/nfL1ay3.jpg");
        luchos.push("http://i.imgur.com/eYBo65E.jpg");
        luchos.push("http://i.imgur.com/WMTJa8v.jpg");
        luchos.push("http://i.imgur.com/llTC4uD.jpg");
        luchos.push("http://i.imgur.com/yBBoQzj.jpg");
        luchos.push("http://i.imgur.com/WAJbX1o.jpg");
        luchos.push("http://i.imgur.com/KBM537X.jpg");
        luchos.push("http://i.imgur.com/fxtpaM2.jpg");
        luchos.push("http://i.imgur.com/91KCiE4.jpg");
        luchos.push("http://i.imgur.com/iWys51v.jpg");
        luchos.push("http://i.imgur.com/rT6ybOE.jpg");
        luchos.push("http://i.imgur.com/4iST79y.jpg");
        luchos.push("http://i.imgur.com/0Ce3339.jpg");
        luchos.push("http://i.imgur.com/F3uq7wg.jpg");
        luchos.push("http://i.imgur.com/obsJjoW.jpg");
        luchos.push("http://i.imgur.com/Svs3fP9.jpg");
        luchos.push("http://i.imgur.com/Fv75FGB.png");
        luchos.push("http://i.imgur.com/0LmhWV2.jpg");
        luchos.push("http://i.imgur.com/75inuSW.jpg");
        luchos.push("http://i.imgur.com/hnDV1Cy.jpg");
        luchos.push("http://i.imgur.com/xm56egI.jpg");
        luchos.push("http://i.imgur.com/wcNMFHq.jpg");
        luchos.push("http://i.imgur.com/M8Vsx8b.jpg");
        luchos.push("http://i.imgur.com/mSWmxSz.jpg");
        luchos.push("http://i.imgur.com/Aei4AAF.jpg");
        luchos.push("http://i.imgur.com/jkB4Zn5.jpg");

        //Un golpe de suerteeeee, eeeeeeEEEEEEeeeeeHHHH
        var golpe = "Un golpe de suerte, espero despierto... igual que un espia en la oscuridad, espero volver a encontrar, un golpe de suerte, podria cambiar el tiempo perdido, que hay en el vacio que dejaste ayer al partir, un golpe de suerte eres tu. Soy, un tipo tranquilo, tratando de no hacer mal, y ser buen amigo, yo soy uno mas, uno de tantos, en busca de ser feliz, de vez en cuando... y con el tiempo de caminar, fui aprendiendo, ahora se que puedo llegar si me dan tiempo. Soy, un caso perdido, luchando para quebrarle la mano al destino, vivir a diario, es tan bulnerable, cuantas noches sin dormir, ardiendo de frioo, y con el tiempo de caminar, fui aprendiendo, ahora se que puedo, llegar si me doy tiempo";
        var golpe_words = golpe.split(" ");

        //Returns random image of lucho jara
        function randomLucho(){
            return luchos[Math.floor(Math.random()*luchos.length)];
        }

        //Converts regular text to un golpe de suerte lyrics
        function textToGolpeDeSuerte(text){
            var text_words = text.split(" ");
            var replaced_text = "";
            for(var i = 0; i < text_words.length;i++)
                replaced_text += golpe_words[i%golpe_words.length]+" ";

            return replaced_text;

        }

        este.find('h1').each(function () {
            $(this).html("Luis Jara");
        });

        este.find('h2, h3, h4, h5, h6').each(function () {
            $(this).html("Un golpe de suerte");
        });

        este.find('p').each(function(){
            var text = $(this).text();
            $(this).html(textToGolpeDeSuerte(text));
        });

        setInterval(function(){
            este.find('img').each(function(){

                if (this.src.indexOf('data:') > -1 || $(this).hasClass("luchojared"))
                    return;

                // console.log("luchojared!");
                $(this).addClass("luchojared");
                var $img = $(this),
                    w = $img.width(),
                    h = $img.height();


                $img.attr("src", 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')
                    .width(w)
                    .height(h)
                    .css({
                    backgroundImage: 'url('+ randomLucho() +')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                });
            });

        },500);

        return this;

    }

})(jQuery);

/*jQuery(document).ready(function($){
    $('body').luchoJaraScript();
});*/
