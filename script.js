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
            },
{
                "selected": "Intercoms",
                "image": "integration-intercom.png",
            },
            {
                "selected": "Keylocker",
                "image": "integration-keylocker.png",
            },
            {
                "selected": "Lifts and Elevators",
                "image": "integration-elevator.png",
            },
            {
                "selected": "Lighting",
                "image": "integration-lighting.png",
            },
            {
                "selected": "Mobile credentials",
                "image": "integration-mobile-credentials.png",
            },
            {
                "selected": "Perimeter Fence Systems",
                "image": "integration-fences.png",
            },
            {
                "selected": "Visitor Management",
                "image": "integration-visitor-management.png",
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
        if(!$(this).hasClass('custom-button01'))
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

        $("#wrapper-q .page-3-q__select").each(function(index) {
            $(this).removeClass('active');
        });
        
        setTimeout(function(){ 
        	$(this).addClass('active');
        }, 100);

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
            var c = categoryData.categories[categorySelected];
            $('.page-4-q__category').empty();
            $('.page-4-q__category').append( '<div class="col-12 col-sm-12"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+c.image+'" /><h6>'+c.industry+'</h6></div></div>' );


			$('.page-4-q__subcategory').empty();
            var subCategorySelected = [];
            $.each($("input[name='page-3-q__radio']:checked"), function(){
            	var v = categoryData.categories[categorySelected].subcategory[$(this).val()]
            	$('.page-4-q__subcategory').append( '<div class="col-3 col-sm-3"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+c.image+'" /><h6>'+v+'</h6></div></div>' );
            });	


            $('.page-4-q__integrations').empty();
            var integrationsSelected = [];
            $.each($("input[name='page-4-q__checkbox']:checked"), function(){
            	var v = integrationsData.integrations[$(this).val()];
            	$('.page-4-q__integrations').append( '<div class="col-6 col-sm-6"><div href="#" class="link is-lightbox" title="Title"><img class="img-fluid w-100" alt="Alt" src="images/'+v.image+'" /><h6>'+v.selected+'</h6></div></div>' );
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
});