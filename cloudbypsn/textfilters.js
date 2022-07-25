function filterText(a, b) {

    var aa = a.split(" ");

    var bb = b;

    var cc = aa;

    for (var i = 0; i < aa.length; i++) {

        var ab = aa[i].toLowerCase().replace(/ /g, "");

        for (var j = 0; j < bb.length; j++) {

            if (ab == bb[j] || ab.indexOf(bb[j]) >= 0) {

                var dd = cc[i];

                var ee = [];

                for (var k = 0; k < dd.length; k++) {

                    ee.push("*")

                };

                ee[0] = dd[0];

                ee[ee.length - 1] = dd[dd.length - 1];

                cc[i] = ee.join("");

            };

        };

    };

    return cc.join(" ");
};

module.exports = { 
    filterText
}
