$(function () {

    // Add event listeners to a elements!;
    $('a').filter(function (i, d) {
        if (d.href.indexOf('#glass') != -1) {
            $glass = $glass.add(d);
            return true;
        }
        if (d.href.indexOf('#doorColor') != -1) {
            $doorColor = $doorColor.add(d);
            return true;
        }
        if (d.href.indexOf('#doorInnerColor') != -1) {
            $doorInnerColor = $doorInnerColor.add(d);
            return true;
        }
        if (d.href.indexOf('#doorOuterColor') != -1) {
            $doorOuterColor = $doorOuterColor.add(d);
            return true;
        }
    })
        .on('click', function (e) {
   alert ('Функционал скрипта ограничен! За возобнавлением работы обращайтесь в telegram: https://t.me/evgeniyvorobev');
        });

})

