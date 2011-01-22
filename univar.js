var dists = 
 [
     {
	 "name":"beta",
	 "short":"beta",
	 "type":"continuous",
	 "xlim": ["0", "1"],
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
	 "titles": ["Degrees of freedom", "Degrees of freedom"],
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
	 "short":"hyper",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["white", "black", "k"],
	 "values": ["50", "50", "20"],
	 "labels": ["white", "black", "k"],
	 "titles": ["# of white balls in the urn", "# of black balls in the urn", "# of balls drawn from the urn"],
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
	 "params": ["x", "p"],
	 "values": ["1", "0.5"],
	 "labels": ["x", "p"],
	 "titles": ["# of successes", "Probability of success"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Negative_binomial_distribution",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/NegBinomial.html"
     }, {
	 "name":"normal (Gaussian)",
	 "short":"norm",
	 "type":"continuous",
	 "xlim": ["-5", "5"],
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
	 "short":"unif_d",
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
	 "short":"unif_c",
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
     }, {
	 "name":"Wilcoxon",
	 "short":"wilcox",
	 "type":"discrete",
	 // "xlim": ["", ""],
	 "params": ["n1", "n2"],
	 "values": ["50", "50"],
	 "labels": ["n<sub>1</sub>", "n<sub>2</sub>"],
	 "titles": ["# of observations in first sample", "# of observations in second sample"],
	 "wikiurl": "http://en.wikipedia.org/wiki/Wilcoxon_signed-rank_test",
	 "rman": "http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Wilcoxon.html"
     }
 ];


// random seed generator
function genRandomSeed(){
    document.getElementById("seed").value = Math.floor(Math.random() * 100000);
} // end genRandomSeed


// parameter generator function
function genParams(obj, t){
    var par = ""; 		// parameters
    var n;		// sample size

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
	par += '<p class = "ppar" id = "pseed"><label for = "seed">Seed:</label>';
	par += '<input type = "text" size = "5" id = "seed" name = "seed" value = "0" title = "Random seed" />';
	par += '<input type = "button" id = "rnd" value = "#" title = "Generate random seed number" onclick = "genRandomSeed();" /></p>';

    // if density or cumulative distribution requested
    } else if (t === "d" || t === "p") {
	// if continuous distribution
	if (obj.type == "continuous"){
    	    par += '<p class = "ppar"><label for = "from">x<sub>min:</sub></label>';
    	    par += '<input type = "text" size = "5" id = "from" name = "from" value = "' + obj.xlim[0] + '" title = "Xmin" /></p>';
    	    par += '<p class = "ppar"><label for = "to">x<sub>max:</sub></label>';
    	    par += '<input type = "text" size = "5" id = "to" name = "to" value = "' + obj.xlim[1] + '" title = "Xmax" /></p>';
	} // end if continuous
    } else {
	return false;
    } // end if

    // add sample size
    par += '<p class = "ppar"><label for = "n">N:</label>';
    par += '<input type = "text" size = "5" id = "n" name = "n" value = "' + n + '" title = "Sample size" /></p>';

    // add distribution parameters
    for (i = 0; i < obj.params.length; i++){
	par += '<p class = "ppar"><label for = "' + obj.params[i] + '" class = "lbl">' + obj.labels[i] + ':</label>';
	par += '<input type = "text" size = "5" id = "' + obj.params[i] + '" name = "' + obj.params[i] + '" value = "' + obj.values[i] + '" title = "' + obj.titles[i] + '" /></p>';
    } // end for

    return par;

} // end genParams

// reset form
function resetForm(msg, after){
    var q = confirm(msg);	// show confirmation dialog
    if (q === true) {
	// reset layout to initial state
	$("#distname, #disttype, #plottype").val("");
	$(".manlink, #bodypar, #footpar").hide(); // hide stuff
	$(".disttypebtn").removeClass("disttypesel"); // remove highlight from buttons
	$("#footpar img").removeClass("plot-icon-sel");  // remove highlight border
	$("#distpar").html("");			      // empty distribution parameters
	// $("#plottype :gt(0)").remove();		      // remove options from plot types
	$("#plot-inner").html('<p id = "plot-text">Your plot<br />goes here...</p>'); // reset plot text
    } else if (q === false) {
	after ? after : false;	// some extra space
    } else {
	alert("Unknown operation"); // advertise function bug
    } // end if
} // end resetForm


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
    
    var obj;			// define dist data

    // load <option> items
    $.each(dists, function(i, data){
	$("#distname").append($("<option></option>").attr({"value":data.short}).text(data.name)); // populate select element
	$("#distname option[value = '" + data.short + "']").data("distdata", data);
    }); // end each

    $("#distplot").show();	// show page contents

    // on change distribution
    $("#distname").change(function(){
	var $el = $(this);	// create shorthand

	if ($(this).val() === ""){
	    resetForm("This will reset application layout to initial state.\nContinue?", $el.val($el.data("distval"))); // show confirm box
	} else if ($(this).val() !== ""){		      // if distname not empty =)
	    obj = $("#distname option[value='" + $(this).val() + "']").data("distdata"); // set distdata data to global variable
	    $("#wikiurl").attr({"href":obj.wikiurl, "title":"See Wikipedia page about the " + obj.name + " distribution"}); // set href for Wikipedia link
	    $("#rman").attr({"href":obj.rman, "title":"See R documentation about the " + obj.name + " distribution"}); // set href for R manal page
	    $(".manlink").show(); // show Wikipedia & R manual links
	    $(this).data("distval", $(this).val()); // remember distribution name
	    // check distribution type
	    if ($("#disttype").val() === "r"){
		$("#distpar").html(genParams(obj, "r")); // generate random params
	    } else if ($("#disttype").val() === "d" || $("#disttype").val() === "p") {
		$("#distpar").html(genParams(obj, $("#disttype").val())); // generate d/p params
	    } // end if
	} else {
	    alert("Distribution name unknown!"); // you never know...
	} // end if
    }); // end select change


    // change distribution type
    $("#disttypebtns span").click(function(){
    	if ($("#distname").val() === "") { // if distribution not specified
    	    $("#distpar").html(""); // remove distribution params
    	    alert("Choose a distribution first!"); // show warning
    	} else if ($("#distname").val() !== ""){
    	    $("#bodypar, #footpar").show(); // show stuff
	    $(".disttypebtn").removeClass("disttypesel"); // remove highlight from not-selected buttons
	    $(this).addClass("disttypesel");		// highlight selected button
	    $("#footpar img").removeClass("plot-icon-sel"); // remove highlight border
	    var distVal = ["r", "d", "p"];		    // set values
	    if ($(this).index() === 0) {
		$("#distpar").html(genParams(obj, "r")); // generate random distribution params
		$("#other").show();		 // show other plots
	    } else if ($(this).index() === 1 || $(this).index() === 2) {
		$("#distpar").html(genParams(obj, "d")); // generate density distribution params
		$("#other").hide();		 // hide other plots
	    } else {
	        alert("Unknown distribution type!"); // you never know
	    } // end if

	    $("#disttype").val(distVal[$(this).index()]); // set disttype value

    	} else {
	    alert("Distribution type unknown!"); // you never know...
	} // end if
    }); // end change distribution type


    // reset form
    $("#plotrst").click(function(){
	resetForm("Really reset form?", null); // show confirm box
    });


    // set plot type
    var plotVals = ["p", "l", "o", "b", "h", "s", "boxplot", "histogram", "density", "ecdf"]; // plottype values
    $("#footpar img").click(function(){
	$("#footpar img:not(this)").removeClass("plot-icon-sel"); // remove highlight
	$(this).addClass("plot-icon-sel"); // add selection border
	$("#plottype").val(plotVals[$(this).index("#footpar img")]); // add value to plottype
    });
    

    // update plot div
    $("#plotbtn").click(function(){
	$("#plot-inner").html('<p id = "plot-text">Loading...</p>'); // set loading message, maybe add spinner
	$.ajax({
	    url: "plot-univar.rhtml",
	    type: "POST",
	    cache: false,
	    data: $("form").serialize(),
	    error: function() {
		$("#plot-inner").html('<p id = "plot-text">Load error!</p>');
	    },
	    success: function(res) {
		$("#plot-inner").html(res);
	    }
	}); // end AJAX call
    }); // end update plot div

	
}); // end document ready
