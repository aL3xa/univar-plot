var dists = 
 [
     {
	 "name":"beta",
	 "short":"beta",
	 "type":"continuous",
	 // "xlim": ["0", "1"],
	 "params": ["shape1", "shape2"],
	 "values": ["2", "2"],
	 "labels": ["&alpha;", "&beta;"],
	 "titles": ["Shape parameter &alpha;", "Shape parameter &beta;"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Beta_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Beta.html"
     }, {
	 "name":"binomial",
	 "short":"binom",
	 "type":"discrete",
	 // "xlim": ["0", "40"],
	 "params": ["size", "prob"],
	 "values": ["40", "0.5"],
	 "labels": ["x", "p"],
	 "titles": ["# of successes", "Probability of success"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Binomial_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Binomial.html"
     }, {
	 "name":"Cauchy",
	 "short":"cauchy",
	 "type":"continuous",
	 "xlim": ["-4", "4"],
	 "params": ["location", "scale"],
	 "values": ["0", "1"],
	 "labels": ["x<sub>0</sub>", "&gamma;"],
	 "titles": ["Location parameter", "Scale parameter"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Cauchy_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Cauchy.html"
     }, {
	 "name":"chi-square",
	 "short":"chisq",
	 "type":"continuous",
	 "xlim": ["0", "8"],
	 "params": ["df"],
	 "values": ["1"],
	 "labels": ["df"],
	 "titles": ["Degrees of freedom"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Chi-square_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Chisquare.html"
     }, {
	 "name":"exponential",
	 "short":"exp",
	 "type":"continuous",
	 "xlim": ["0", "5"],
	 "params": ["rate"],
	 "values": ["1"],
	 "labels": ["&lambda;"],
	 "titles": ["Rate parameter"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Exponential_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Exponential.html"
     }, {
	 "name":"Fisher-Snedecor's F",
	 "short":"f",
	 "type":"continuous",
	 "xlim": ["0", "5"],
	 "params": ["df1", "df2"],
	 "values": ["1", "1"],
	 "labels": ["df<sub>1</sub>", "df<sub>2</sub>"],
	 "titles": ["Numerator degrees of freedom", "Denominator degrees of freedom"],
	 "wikiurl": "http://en.wikipedia.org/wiki/F-distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Fdist.html"
     }, {
	 "name":"gamma",
	 "short":"gamma",
	 "type":"continuous",
	 "xlim": ["0", "20"],
	 "params": ["shape", "scale"],
	 "values": ["1", "2"],
	 "labels": ["k", "&theta;"],
	 "titles": ["Shape parameter", "Scale parameter"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Gamma_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/GammaDist.html"
     }, {
	 "name":"geometric",
	 "short":"geom",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["prob"],
	 "values": ["0.5"],
	 "labels": ["p"],
	 "titles": ["Probability of success"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Geometric_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Geometric.html"
     }, {
	 "name":"hypergeometric",
	 "short":"Hyper",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["white", "total", "k"],
	 "values": ["50", "100", "20"],
	 "labels": ["m", "n", "k"],
	 "titles": ["# of white balls in the urn", "total # of balls in the urn", "# of balls drawn from the urn"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Hypergeometric_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Hypergeometric.html"
     }, {
	 "name":"logistic",
	 "short":"logis",
	 "type":"continuous",
	 "xlim": ["-5", "5"],
	 "params": ["location", "scale"],
	 "values": ["0", "1"],
	 "labels": ["&mu;", "s"],
	 "titles": ["Location parameter", "Scale parameter"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Logistic_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Logistic.html"
     }, {
	 "name":"log-normal",
	 "short":"lnorm",
	 "type":"continuous",
	 "xlim": ["0", "3"],
	 "params": ["meanlog", "sdlog"],
	 "values": ["0", "1"],
	 "labels": ["&mu;", "&sigma;"],
	 "titles": ["Location parameter", "Scale parameter"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Lognormal_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Lognormal.html"
     }, {
	 "name":"negative binomial",
	 "short":"nbinom",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["size", "prob"],
	 "values": ["1", "0.5"],
	 "labels": ["x", "p"],
	 "titles": ["# of successes", "Probability of success"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Negative_binomial_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/NegBinomial.html"
     }, {
	 "name":"normal (Gaussian)",
	 "short":"Norm",
	 "type":"continuous",
	 "xlim": ["-4", "4"],
	 "params": ["mean", "var"],
	 "values": ["0", "1"],
	 "labels": ["&mu;", "&sigma;<sup>2</sup>"],
	 "titles": ["Mean", "Variance"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Normal_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Normal.html"
     }, {
	 "name":"Poisson",
	 "short":"pois",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["lambda"],
	 "values": ["10"],
	 "labels": ["&lambda;"],
	 "titles": ["Average number of events in an interval"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Poisson_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Poisson.html"
     }, {
	 "name":"Student's t",
	 "short":"t",
	 "type":"continuous",
	 "xlim": ["-5", "5"],
	 "params": ["df"],
	 "values": ["10"],
	 "labels": ["df"],
	 "titles": ["Degrees of freedom"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Student_t_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/TDist.html"
     }, {
	 "name":"uniform (discrete)",
	 "short":"UnifD",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["min", "max"],
	 "values": ["1", "5"],
	 "labels": ["a", "b"],
	 "titles": ["Minimum value", "Maximum value"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Uniform_distribution_%28discrete%29",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Uniform.html"
     }, {
	 "name":"uniform (continuous)",
	 "short":"unif",
	 "type":"continuous",
	 "xlim": ["0", "1"],
	 "params": ["min", "max"],
	 "values": ["0", "1"],
	 "labels": ["a", "b"],
	 "titles": ["Minimum value", "Maximum value"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Uniform.html"
     }, {
	 "name":"Weibull",
	 "short":"weibull",
	 "type":"continuous",
	 "xlim": ["0", "2.5"],
	 "params": ["shape", "scale"],
	 "values": ["1", "1"],
	 "labels": ["k", "&lambda;"],
	 "titles": ["Shape parameter", "Scale parameter"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Weibull_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Weibull.html"
     }// , {
     // 	 "name":"Wilcoxon",
     // 	 "short":"wilcox",
     // 	 "type":"discrete",
     // 	 // "xlim": ["", ""],
     // 	 "params": ["n1", "n2"],
     // 	 "values": ["50", "50"],
     // 	 "labels": ["n<sub>1</sub>", "n<sub>2</sub>"],
     // 	 "titles": ["# of observations in first sample", "# of observations in second sample"],
     // 	 "wikiurl": "http://en.wikipedia.org/wiki/Wilcoxon_signed-rank_test",
     // 	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Wilcoxon.html"
     // }
 ];


// random seed generator
function genRandomSeed() {
    document.getElementById("seed").value = Math.floor(Math.random() * 100000);
} // end genRandomSeed


// parameter generator function
function genParams(obj, t){
    var par = ""; 		// parameters
    var n;			// sample size

    // set sample size
    switch(obj.short){
	
    case "binom":
	n = 40;
	break;

    case "geom":
	n = 10;
	break;

    case "hyper":
	n = 20;
	break;

    case "nbinom":
	n = 10;
	break;
	
    case "pois":
	n = 20;
	break;

    case "wilcox":
	n = 20;
	break;

    default:
	n = 100;
	break;

    } // end switch
    
    // add random seed/x-axis limits
    // if random variable requested
    if (t === "r"){
	par += '<div class = "ppar" id = "pseed"><label for = "seed" title = "Random seed number">Seed</label>';
	par += '<input type = "text" size = "5" id = "seed" name = "seed" value = "0" title = "Random seed number" />';
	par += '<span id = "rnd" title = "Generate random seed number" onclick = "genRandomSeed();">#</span></div>';

    // if density or cumulative distribution requested
    } else if (t === "dp") {
	// if continuous distribution (beta has hardcoded params)
	if (obj.type === "continuous" && obj.short !== "beta"){
    	    par += '<div class = "ppar"><label for = "from">x<sub>min</sub></label>';
    	    par += '<input type = "text" size = "5" id = "from" name = "from" value = "' + obj.xlim[0] + '" title = "Xmin" /></div>';
    	    par += '<div class = "ppar"><label for = "to">x<sub>max</sub></label>';
    	    par += '<input type = "text" size = "5" id = "to" name = "to" value = "' + obj.xlim[1] + '" title = "Xmax" /></div>';
	} // end if continuous
    } else {
	return false;		// a little measure of precaution
    } // end if

    // add sample size
    title = obj.type === "continuous" ? "Sample size" : "# of trials";
    par += '<div class = "ppar"><label for = "n" title = "' + title + '">N</label>';
    par += '<input type = "text" size = "5" id = "n" name = "n" value = "' + n + '" title = "' + title + '" /></div>';

    // add distribution parameters
    for (i = 0; i < obj.params.length; i++){
	par += '<div class = "ppar"><label for = "' + obj.params[i] + '" title = "' + obj.titles[i] + '">' + obj.labels[i] + '</label>';
	par += '<input type = "text" size = "5" id = "' + obj.params[i] + '" name = "' + obj.params[i] + '" value = "' + obj.values[i] + '" title = "' + obj.titles[i] + '" /></div>';
    } // end for

    return par;

} // end genParams

// reset layout
function resetLayout(msg, callback){
    var q = msg ? confirm(msg) : true;	// show confirmation dialog... or not
    if (q === true) {
	// reset layout to initial state
	$(".manlink, #bodypar, #footpar").hide(); // hide stuff
	$(".partitle, .disttypebtn, #footpar img").css("opacity", 1);
	$(".partitle ~ div").show();
	$("#distname, #disttype, #plottype").val(""); // reset values
	$("#disttypebtns span").removeClass("disttypesel"); // remove highlight from buttons
	$("#footpar img").removeClass("plot-icon-sel");  // remove highlight border
	$("#distpar").html("");			      // empty distribution parameters
	$("#plot-inner").html('<p id = "plot-text">Your plot<br />goes here...</p>'); // reset plot text
    } else if (q === false) {
	callback ? callback : false;	// some extra space
    } else {
	alert("Invalid layout reset"); // advertise function bug
    } // end if
} // end resetLayout


// // R source generator
// function RSourceGen(){

//     var rsrc = "";
//     var type = $("#disttype").val();
//     var name = $("#distname").val();
//     var 

//     if ($("#disttype").val() === "r") {
// 	rsrc += $(this).val

// } // RSourceGen

$(document).ready(function(){
    
    var obj,
    $distname = $("#distname"),
    $distpar = $("#distpar"),
    $plotIcons = $("#footpar img");
    
    resetLayout();		// guess what?

    // load <option> items
    $.each(dists, function(i, data){
	$distname.append('<option value = "' + data.short  + '">' + data.name +'</option>'); // populate select element
	$("#distname option[value = '" + data.short + "']").data("distdata", data);
    }); // end each

    $("#distplot").show();	// show page contents

    // on change distribution
    $distname.change(function(){

	var $el = $(this);	// create shorthand

	if ($(this).val() === ""){
	    resetLayout("This will reset application layout to initial state.\nContinue?", $el.val($el.data("distval"))); // show confirm box
	} else if ($(this).val() !== ""){		      // if distname not empty =)
	    obj = $("#distname option[value='" + $(this).val() + "']").data("distdata"); // set distdata data to global variable
	    $("#wikiurl").attr({"href":obj.wikiurl, "title":"See Wikipedia page about the " + obj.name + " distribution"}); // set href for Wikipedia link
	    $("#rman").attr({"href":obj.rman, "title":"See R documentation about the " + obj.name + " distribution"}); // set href for R manal page
	    $("#wikiurl, #rman").show(); // show Wikipedia & R manual links
	    $(this).data("distval", $(this).val()); // remember distribution name
	    // check distribution type
	    if ($("#disttype").val() === "r"){
		$distpar.html(genParams(obj, "r")); // generate random params
	    } else if ($("#disttype").val() === "d" || $("#disttype").val() === "p") {
		$distpar.html(genParams(obj, "dp")); // generate d/p params
	    } else {
		// do nothing
	    } // end if
	} else {
	    alert("Distribution name unknown!"); // you never know...
	} // end if
    }); // end select change


    // change distribution type
    $("#disttypebtns span").click(function(){

    	if ($distname.val() === "") { // if distribution not specified

    	    $distpar.html(""); // remove distribution params
    	    alert("Choose a distribution first!"); // show warning

    	} else if ($distname.val() !== ""){

	    var distTypeVal = $("#disttype").val(); // distribution type value

	    // deal with timeout in fadeTo

    	    $("#bodypar, #footpar").show(); // show stuff
	    $("#disttypebtns span").removeClass("disttypesel").fadeTo(0, 0.5); // remove highlight from disttype buttons
	    $(this).addClass("disttypesel").fadeTo(0, 1.0);		// highlight selected button
	    $("#footpar img").removeClass("plot-icon-sel").fadeTo(0, 1); // remove plot highlight
	    $("#plottype").val("");			    // reset plot type
	    // random disttype
	    switch($(this).index()){
	    
	    case 0:
		if (distTypeVal === "r") {
		    confirm("Reset distribution parameters?") ? $distpar.html(genParams(obj, "r")) : false; // reset distpar
		} else {
		    $distpar.html(genParams(obj, "r")); // generate random distribution params
		    $("#other").show();			     // show other plots
		} // end if
		break;

	    // density/cumulative disttype
	    case 1:
		if (distTypeVal === "d") {
		    confirm("Reset distribution parameters?") ? $distpar.html(genParams(obj, "dp")) : false; // reset distpar
		} else {
		    $distpar.html(genParams(obj, "dp")); // generate density distribution params
		    $("#other").hide();		 // hide other plots
		} // end if
		break;

	    case 2:
		if (distTypeVal === "p") {
		    confirm("Reset distribution parameters?") ? $distpar.html(genParams(obj, "dp")) : false; // reset distpar
		} else {
		    $distpar.html(genParams(obj, "dp")); // generate density distribution params
		    $("#other").hide();		 // hide other plots
		} // end if
		break;

	    default:
	        alert("Unknown distribution type!"); // you never know
		break;
	    } // end switch $(this).index()

	    var distVal = ["r", "d", "p"]; // set disttype values
	    $("#disttype").val(distVal[$(this).index()]); // set disttype value
    	} else {
	    alert("Distribution type unknown!"); // you never know...
	} // end if
    }); // end change distribution type


    // reset form
    $("#plotrst").click(function(){
	resetLayout("Really reset form?"); // show confirm box
    });


    // set plot type
    var plotVals = ["p", "l", "o", "b", "h", "s", "boxplot", "hist", "density", "ecdf"]; // plottype values
    $("#footpar img").click(function(){
	var pVal = plotVals[$(this).index("#footpar img")]; // set plottype value
	$("#footpar img:not(this)").removeClass("plot-icon-sel").fadeTo(0, 0.4); // remove highlight
	$(this).addClass("plot-icon-sel").fadeTo(0, 1); // add selection border
	$("#plottype").val(pVal); // add plottype value to hidden input
    });

    // update plot div
    $("#plotbtn").click(function(){
	$("#plot-inner").html('<p id = "plot-text">Loading...</p>'); // set loading message, maybe add spinner/animated ...
	$.ajax({
	    url: "plot-univar",
	    type: "POST",
	    cache: false,
	    data: $("form").serialize(),
	    dataType: "json",
	    error: function() {
		$("#plot-inner").html('<p id = "plot-text">Load error!</p>');
	    },
	    success: function(res) {
		if (res.plot.length == 0) {
		    $("#plot-inner").html('<p id = "plot-text">An error occured: ' + res.error + '</p>');
		} else {
		    $("#plot-inner").html('<img src = ' + res.plot + ' alt = "rplot" />');
		}
	    }
	}); // end AJAX call
    }); // end update plot div

	
}); // end document ready
