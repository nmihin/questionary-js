$(function() {
    // DATA SET
    var categoryData = {
        "categories": [{
                "industry": "Healthcare",
                "image": "category-healthcare.png",
                "subcategory": [
					"Healthcare 1",
					"Healthcare 2",
					"Healthcare 3",
					"Healthcare 4",
                ]
            },
            {
                "industry": "Universities",
                "image": "category-universities.png",
               "subcategory": [
					"Universities 1",
					"Universities 2",
					"Universities 3",
					"Universities 4",
                ]
            },
            {
                "industry": "Hi-Rise",
                "image": "category-hirise.png",
               "subcategory": [
					"Hi-Rise 1",
					"Hi-Rise 2",
					"Hi-Rise 3",
					"Hi-Rise 4",
                ]
            },
            {
                "industry": "Retail",
                "image": "category-retail.png",
               "subcategory": [
					"Retail 1",
					"Retail 2",
					"Retail 3",
					"Retail 4",
                ]
            },
            {
                "industry": "Government",
                "image": "category-government.png",
               "subcategory": [
					"Government 1",
					"Government 2",
					"Government 3",
					"Government 4",
                ]
            },
            {
                "industry": "Commercial",
                "image": "category-commercial.png",
               "subcategory": [
					"Commercial 1",
					"Commercial 2",
					"Commercial 3",
					"Commercial 4",
                ]
            },
            {
                "industry": "Membership Clubs",
                "image": "category-membership-clubs.png",
               "subcategory": [
					"Membership Clubs 1",
					"Membership Clubs 2",
					"Membership Clubs 3",
					"Membership Clubs 4",
                ]
            },
            {
                "industry": "Criticle Infrastructure",
                "image": "category-infrastructure.png",
               "subcategory": [
					"Criticle Infrastructure 1",
					"Criticle Infrastructure 2",
					"Criticle Infrastructure 3",
					"Criticle Infrastructure 4",
                ]
            },
            {
                "industry": "Financial Institutions",
                "image": "category-financial-institutions.png",
               "subcategory": [
					"Financial Institutions 1",
					"Financial Institutions 2",
					"Financial Institutions 3",
					"Financial Institutions 4",
                ]
            }
        ]
    }

    var integrationsData = {
        "integrations": [{
                "selected": "Automatic Number Plate Recognition",
                "image": "integration-plate-recognition.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
			{
                "selected": "Intercoms",
                "image": "integration-intercom.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
            {
                "selected": "Keylocker",
                "image": "integration-keylocker.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
            {
                "selected": "Lifts and Elevators",
                "image": "integration-elevator.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
            {
                "selected": "Lighting",
                "image": "integration-lighting.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
            {
                "selected": "Mobile credentials",
                "image": "integration-mobile-credentials.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
            {
                "selected": "Perimeter Fence Systems",
                "image": "integration-fences.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            },
            {
                "selected": "Visitor Management",
                "image": "integration-visitor-management.png",
                "subcategory": [
                	"Healthcare 1",
                	"Healthcare 2",
                	"Retail 1",
                	"Government 1"
                ]
            }
        ]
    }

var caseStudyData = {
  "case_study": [{
      "selected": "Case Study 1",
      "image": "integration-plate-recognition.png",
      "subcategory": [
        "Healthcare 1",
        "Universities 2",
        "Retail 1",
        "Government 4",
      ]
    },
    {
      "selected": "Case Study 2",
      "image": "integration-intercom.png",
      "subcategory": [
        "Healthcare 1",
        "Healthcare 2",
        "Universities 1",
        "Retail 4",
        "Government 2",
        "Government 4",
      ]
    },
    {
      "selected": "Case Study 3",
      "image": "integration-keylocker.png",
      "subcategory": [
        "Healthcare 2",
        "Universities 3",
        "Retail 1",
        "Government 4",
      ]
    },
    {
      "selected": "Case Study 4",
      "image": "category-membership-clubs.png",
      "subcategory": [
        "Healthcare 2",
        "Retail 1",
        "Government 4",
      ]
    },
    {
      "selected": "Case Study 5",
      "image": "category-financial-institutions.png",
      "subcategory": [
        "Healthcare 2",
      ]
    }
  ]
}


    // PAGE 1 - DATA
    var categories = categoryData.categories.map(function(item) {
        return {
	        industry: item.industry,
	        image: item.image,
	        subcategory: item.subcategory,
    	};
    });

    $.each(categories, function(key,valueObj){
    	$('.page-1-q').append( '<li class="col-4 col-sm-2"><a href="#" data-index='+key+' class="page-2-q__select link is-lightbox" title="Title"><span class="icon"></span><img class="img-fluid w-100" alt="Alt" src="images/'+valueObj.image+'" /><h6>'+valueObj.industry+'</h6><input type="radio" name="page-2-q__radio" class="page-2-q__radio" value="'+key+'" /></a></li>' );
	});

	// PAGE 1 - SELECT CATEGORY
	$(".page-2-q__select").click(function(){
        if($(this).hasClass('link'))
		  $('.page-2-q__subcategory').empty();

		var i = $(this).data('index');
	    $.each(categories[i].subcategory, function(key,valueObj){
	    	$('.page-2-q__subcategory').append( '<li class="col-6 col-sm-6"><a href="#" class="page-3-q__select link is-lightbox" title="Title"><span class="icon"></span><img class="img-fluid w-100" alt="Alt" src="images/'+categories[i].image+'" /><h6>'+valueObj+'</h6><input type="radio" name="page-3-q__radio" class="page-3-q__radio" value="'+key+'" /></a></li>' );
		});
	});

    // PAGE 3 - DATA
    var integrations = integrationsData.integrations.map(function(item) {
        return {
            selected: item.selected,
            image: item.image,
        };
    });

    $.each(integrations, function(key,valueObj){
        $('.page-3-q__integrations').append( '<li class="col-4 col-sm-4"><a href="#" data-index='+key+' class="page-4-q__select link is-lightbox" title="Title"><span class="icon"></span><img class="img-fluid w-100" alt="Alt" src="images/'+valueObj.image+'" /><h6>'+valueObj.selected+'</h6><input type="checkbox" name="page-4-q__checkbox" class="page-3-q__checkbox" value="'+key+'" /></a></li>' );
    });


    //GO TO PAGE 1
    $('body').on('click',".page-1-q__select",function(event) {
        event.preventDefault();
        $("#wrapper-q ul[class^='page-']").each(function(index) {
            $(this).removeClass('active');
        });
        $('.page-1-q').addClass('active');
        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step1').addClass('active');
    });
    //GO TO PAGE 2
    $('body').on('click',".page-2-q__select",function(event) {
        event.preventDefault();

        var checkbox = $(this).find('input[type=radio]');
        checkbox.prop("checked", !checkbox.prop("checked"));

		if($(this).hasClass('link')){
	        $(".page-2-q__select").each(function(index) {
	            $(this).removeClass('active');
	        });
	        $(this).addClass('active');
    	}

        $("#wrapper-q ul[class^='page-']").each(function(index) {
            $(this).removeClass('active');
        });
        $('.page-2-q').addClass('active');
        
        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step2').addClass('active');
    });
    //GO TO PAGE 3
    $('body').on('click',".page-3-q__select",function(event) {
        event.preventDefault();

        var checkbox = $(this).find('input[type=radio]');
        checkbox.prop("checked", !checkbox.prop("checked"));

		if($(this).hasClass('link')){
			$(".page-3-q__select").each(function(index) {
	            $(this).removeClass('active');
	        });
	        setTimeout(function(){ 
	        	$(this).addClass('active');
	        }, 100);
		}

        if($(this).hasClass('.link')){
        	$.each(".page-3-q__select.link", function(){
        		$(this).removeClass('active');
        	})
		    $(this).addClass('active');
        }

        if($(this).hasClass('custom-button01')){
            $("#wrapper-q ul[class^='page-']").each(function(index) {
                $(this).removeClass('active');
            });
            $('.page-3-q').addClass('active');

	        $("#wrapper-q .steps-q li").each(function(index) {
	            $(this).removeClass('active');
	        });
	        $('.steps-q__step3').addClass('active');
        }

        $("#wrapper-q ul[class^='page-']").each(function(index) {
            $(this).removeClass('active');
        });
        $('.page-3-q').addClass('active');

        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step3').addClass('active');
    });
    //GO TO PAGE 4
    $('body').on('click',".page-4-q__select",function(event) {
        event.preventDefault();

        var checkbox = $(this).find('input[type=checkbox]');
        checkbox.prop("checked", !checkbox.prop("checked"));

        if($(this).hasClass('custom-button01')){
            $("#wrapper-q ul[class^='page-']").each(function(index) {
                $(this).removeClass('active');
            });
            $('.page-4-q').addClass('active');
        }
         if($(this).hasClass('custom-button01')){
            var categorySelected = $("input[name='page-2-q__radio']:checked").val(); 	
            // CATEGORY SELECTED - radio
            var c = categoryData.categories[categorySelected];
            // SUBCATEGORY SELECTED - radio
            var s = $("input[name='page-3-q__radio']:checked").val(); 	

            $('.page-4-q__category').empty();
            $('.page-4-q__category').append( '<div class="col-12 col-sm-12"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+c.image+'" /><h6>'+c.industry+'</h6></div></div>' );


            $('.page-4-q__integrations').empty();
            var integrationsSelected = [];
            $.each($("input[name='page-4-q__checkbox']:checked"), function(){
            	var v = integrationsData.integrations[$(this).val()];
            	$('.page-4-q__integrations').append( '<div class="col-6 col-sm-6"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+v.image+'" /><h6>'+v.selected+'</h6></div></div>' );
            });	


			$('.page-4-q__case').empty();
			var caseResults = [];
            $.each(caseStudyData.case_study, function(index,value){
            	for(let i=0; i<$(this)[0].subcategory.length; i++) {
            		if($(this)[0].subcategory[i]==c.subcategory[s]){
            			$('.page-4-q__case').append( '<div class="col-3 col-sm-3"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+value.image+'" /><h6>'+value.selected+'</h6></div></div>' );
            		}
				}
            });	

            $('.page-4-q__set').empty();
            var integrationsResults = [];
            $.each(integrationsData.integrations, function(index,value){
            	for(let i=0; i<$(this)[0].subcategory.length; i++) {
            		if($(this)[0].subcategory[i]==c.subcategory[s]){
            			$('.page-4-q__set').append( '<div class="col-6 col-sm-6"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+value.image+'" /><h6>'+value.selected+'</h6></div></div>' );
            		}
				}
            });	

      
	        $("#wrapper-q .steps-q li").each(function(index) {
	            $(this).removeClass('active');
	        });
	        $('.steps-q__step4').addClass('active');

         }

    });

    //PAGE 1,2,3 SELECT TOGGLE
    $('body').on('click',".page-1-q__categories > li > a",function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });   
    $('body').on('click',".page-2-q__subcategory > li > a",function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });   
    $('body').on('click',".page-3-q__integrations > li > a",function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });   

    //STEPS GO TO PAGE
    $('body').on('click',".steps-q__step1",function(event) {
        event.preventDefault();
        $('.page-1-q__select.custom-button01').trigger('click');
        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step1').addClass('active');
    });    
    $('body').on('click',".steps-q__step2",function(event) {
        event.preventDefault();
        $("#wrapper-q ul[class^='page-']").each(function(index) {
            $(this).removeClass('active');
        });
        $('.page-2-q').addClass('active');

        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step2').addClass('active');
    });    
    $('body').on('click',".steps-q__step3",function(event) {
        event.preventDefault();
        $('.page-3-q__select.custom-button01').trigger('click');
        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step3').addClass('active');   
    });    
    $('body').on('click',".steps-q__step4",function(event) {
        event.preventDefault();
        $("#wrapper-q .steps-q li").each(function(index) {
            $(this).removeClass('active');
        });
        $('.steps-q__step4').addClass('active');
        $('.page-4-q__select.custom-button01').trigger('click');
    });    
});