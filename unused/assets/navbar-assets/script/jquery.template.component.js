"use strict";
/******************************************************************************/
/******************************************************************************/

;(function($,doc,win) 
{
	/**************************************************************************/
	/* Accordion															  */
	/**************************************************************************/

	var templateAccordion=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			$this.accordion(
			{
				header			:	'h6',
				active			:	0,
				disabled		:	false,
				collapsible		:	false,
				heightStyle		:	'content',
				animate			:
				{
					duration	:	400,
					easing		:	'easeOutExpo'
				},
				create			:	function()
				{
					$(this).css('visibility','visible');
				}
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateAccordion=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateAccordion(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Audio																  */
	/**************************************************************************/

	var templateAudio=function(object,option,track)
	{
		/**********************************************************************/
		
		var $this=$(object);
		
		var $track=track;
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			option=
			{
				muted			:	false,
				volume			:	0.8,
				swfPath			:	'../js',
				supplied		:	'oga, m4a, mp3',
				wmode			:	'window',
				smoothPlayBar	:	true,
				keyEnabled		:	true,
				errorAlerts		:	false,
				warningAlerts	:	false,
				playlistOptions	:	
				{
					autoPlay	:	false	
				},	
				ready			:	function()
				{
					if($track.length===0)
						$this.find('.jp-playlist').css({'display':'none'});
					
					$this.css({display:'block'});
				}
			};
	
			new jPlayerPlaylist({'jPlayer':'#'+$this.children('.jp-jplayer').attr('id'),'cssSelectorAncestor':'#'+$this.children('.jp-audio').attr('id')},$track,option);
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateAudio=function(option,track) 
	{
		return this.each(function() 
		{
			var object=new templateAudio(this,option,track);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Accordion															  */
	/**************************************************************************/

	var templateBackgroundVideo=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);

		var $default=
		{
			video				:	
			{
				mp4				:	'',
				ogg				:	'',
				webm			:	''
			},
			setting				:
			{
				volume			:	80,
				playbackRate	:	1,
				muted			:	true,
				loop			:	true,
				autoplay		:	true,
				position		:	'50% 50%',
				posterType		:	'detect',
				resizing		:	true
			}
		};
		
		var $option=$.extend({},$default,option);

		/**********************************************************************/

		this.build=function() 
		{
			$('html,body').css('min-height','100%');
			$('html').attr('style',$('html').attr('style')+';margin:0px !important');
			
			var instance=$this.vide(option.video,option.setting);

			instance.addClass('template-component-background-video');
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateBackgroundVideo=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateBackgroundVideo(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Counter box															  */
	/**************************************************************************/

	var templateCounterBox=function(object,option)
	{
		/**********************************************************************/
		
		var $self=this;
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{	
			if(typeof($option)==='undefined') $option={};
			
			if($this.hasClass('template-state-carousel-enable'))
			{
				option.onAfterComplete=function()
				{
					$self.buildCounter();
				};
				$this.templateCarousel($option);
			}
			else
			{
				$self.buildCounter();
			}
		};
		
		/**********************************************************************/
		
		this.buildCounter=function()
		{
			var maxValue=0;

			$this.find('.template-component-counter-box-counter-value').each(function() 
			{
				var value=parseInt($(this).text(),10);
				if(maxValue<value) maxValue=value;
				$(this).parent().append('<i>'+value+'</i>');
				$(this).html('0');
			});

			$this.find('ul>li').each(function() 
			{
				new Waypoint(
				{
					offset			:	'90%',
					element			:	this,
					handler			:	function() 
					{
						var object=$(this.element);

						if(object.hasClass('template-state-complete')) return;
						object.addClass('template-state-complete');

						var i=0;

						var counter=object.find('.template-component-counter-box-counter');

						var counterValue=object.find('.template-component-counter-box-counter-value');
						var timeline=object.find('.template-component-counter-box-timeline>span');

						var value=parseInt(counter.find('i').text(),10);

						var portion=(value/maxValue);

						timeline.animate({width:(portion*100)+'%'},{duration:5000,easing:'easeInOutExpo',step:function(now,fx) 
						{
							i++;
							counterValue.html(Math.round(((now/100)*maxValue)));
						}});    
					}
				});				
			});			
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateCounterBox=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateCounterBox(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Counter list															  */
	/**************************************************************************/

	var templateCounterList=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			var maxValue=0;

			$this.find('.template-component-counter-list-counter-value').each(function() 
			{
				var value=parseInt($(this).text(),10);
				if(maxValue<value) maxValue=value;
				$(this).parent().append('<i>'+value+'</i>');
				$(this).html('0');
			});
			
			$this.find('>ul>li').each(function() 
			{
				new Waypoint(
				{
					offset			:	'90%',
					element			:	this,
					handler			:	function() 
					{
						var object=$(this.element);

						if(object.hasClass('template-state-complete')) return;
						object.addClass('template-state-complete');

						var i=0;

						var counter=object.find('.template-component-counter-list-counter');
							
						var counterValue=object.find('.template-component-counter-list-counter-value');
						var timeline=object.find('.template-component-counter-list-timeline>span');

						var value=parseInt(counter.find('i').text(),10);
						var portion=(value/maxValue);

						timeline.animate({width:(portion*100)+'%'},{duration:5000,easing:'easeInOutQuint',step:function(now,fx) 
						{
							i++;
							counterValue.html(Math.round(((now/100)*maxValue)));
						}});    
					}
				});				
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateCounterList=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateCounterList(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Feature																  */
	/**************************************************************************/

	var templateFeature=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			$this.each(function() 
			{				
				var icon=$(this).find('.template-icon-feature');
				
				if($(this).hasClass('template-component-feature-size-large'))
					icon.addClass('template-icon-feature-size-large');
				if($(this).hasClass('template-component-feature-size-medium'))
					icon.addClass('template-icon-feature-size-medium');
				if($(this).hasClass('template-component-feature-size-small'))
					icon.addClass('template-icon-feature-size-small');
				if($(this).hasClass('template-component-feature-size-tiny'))
					icon.addClass('template-icon-feature-size-tiny');
				
				$(this).css({display:'block'});
				
				if($this.hasClass('template-state-carousel-enable'))
					$this.templateCarousel($option);
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateFeature=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateFeature(this,option);
			object.build();
			return(object);
		});
	};
		
	/**************************************************************************/
	/* Fancybox																  */
	/**************************************************************************/
	
	var templateFancybox=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			$this.fancybox(
			{
				type				:	'image',
				live				:	true,
				helpers				:	
				{
					title			:	
					{
						type		:	'inside'
					},
					buttons			:
					{
						skipSingle	:	true
					}
				},
				afterLoad			:	function()
				{
					this.title=$(this.element).nextAll('p').html();
				}		
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateFancybox=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateFancybox(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Flex slider															  */
	/**************************************************************************/

	var templateFlexSlider=function(object,option)
	{
		/**********************************************************************/
		
		var $self=this;
		var $this=$(object);
		
		var $default=
		{
			direction															:	'horizontal',
			animation															:	'fade',
			easing																:	'swing',
			startAt																:	0,
			slideshowSpeed														:	7000,
			animationSpeed														:	600,
			initDelay															:	0,
			touch																:	true,
			useCSS																:	true,
			reverse																:	false,
			slideshow															:	true,
			randomize															:	false,
			smoothHeight														:	false,
			pauseOnHover														:	false,
			animationLoop														:	true,
			pauseOnAction														:	true,
			controlNav															:	true,
			directionNav														:	true,
			keyboard															:	true,
			multipleKeyboard													:	true,
			mousewheel															:	false,
			prevText															:	'',
			nextText															:	'',
			playText															:	'',
			pauseText															:	'',	
			start																:	function()
			{
				var imageCount=$this.find('img').length;
			
				var marginWidth=1;
					
				$self.alignPaginationDirection();
				
				var paginationControl=$this.children('.template-pagination');
				if(paginationControl.length===1) return;
				
				paginationControl=$this.children('.flex-control-nav');
				if(paginationControl.length!==1) return;
				
				paginationControl.addClass('template-pagination').addClass('template-pagination-style-1');
				
				paginationControl.children('li').css({'width':((100/imageCount)-(2*marginWidth)+((2*marginWidth)/imageCount))+'%','margin-left':marginWidth+'%','margin-right':marginWidth+'%'});
				paginationControl.children('li:first').css('margin-left','0px');
				paginationControl.children('li:last').css('margin-right','0px');		
				
				paginationControl.css('display','block');
					
				$self.alignPaginationDirection();
			}		
		};
		
		var $option=$.extend({},$default,option);

		/**********************************************************************/

		this.build=function() 
		{
			var imageCounter=0;
			
			var image=$this.find('img');
			var imageCount=image.length;
			
			image.each(function() 
			{
				$(this).one('load',function()
				{
					if((++imageCounter)===imageCount)
					{
						$this.removeClass('template-preloader');
						$this.flexslider($option);	
					}
				}).each(function() 
				{
					if(this.complete) $(this).load();
				});
			});
		};
		
		/**********************************************************************/
		
		this.alignPaginationDirection=function()
		{
			var paginationControl=$this.children('.template-pagination');
			var paginationDirection=$this.children('.flex-direction-nav');
			
			if(paginationDirection.length===1)
			{
				var height=0;
				
				if(paginationControl.length===1)
					height=parseInt(paginationControl.actual('height'),10);
				
				height+=parseInt(paginationDirection.find('a').actual('height'),10)/2;				
				paginationDirection.find('a').css('margin-top',-1*height);
			}			
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateFlexSlider=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateFlexSlider(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* Google Maps															  */
	/**************************************************************************/
	
	var templateGoogleMap=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		
		var $optionDefault=
		{
			marker							:	
			{
				url							:	'media/image/map_pointer.png'
			},
			orgin							:
			{
				x							:	'0',
				y							:	'0'
			},
			anchor							:
			{
				x							:	'95',
				y							:	'95'						
			},
			dimension						:
			{
				width						:	'100%',
				height						:	'400px'			
			},
			coordinate						:
			{
				lat							:	'45.396011',
				lng							:	'-75.676565'
			},
			map								:
			{	
				draggable					:	false,
				scrollwheel					:	false,
				mapTypeId					:	google.maps.MapTypeId['ROADMAP'],
				mapTypeControl				:	true,
				mapTypeControlOptions		:	
				{
					style					:	google.maps.MapTypeControlStyle['DEFAULT'],
					position				:	google.maps.ControlPosition['TOP_CENTER'],
				},
				zoom						:	16,
				zoomControl					:	true,
				zoomControloptions			:	
				{
					style					:	google.maps.ZoomControlStyle['SMALL'],
					position				:	google.maps.ControlPosition['RIGHT_TOP']
				},
				panControl					:	false,
				panControlOptions			:
				{
					position				:	google.maps.ControlPosition['TOP_CENTER']			
				},
				scaleControl				:	false,
				scaleControlOptions			:
				{
					position				:	google.maps.ControlPosition['TOP_CENTER']
				},
				streetViewControl			:	false,
				streetViewControlOptions	:
				{
					position				:	google.maps.ControlPosition['TOP_CENTER']
				}
			},
			styles							: 
			[
				{
					'stylers'				:
					[
						{
							'saturation'	:	'-100'
						}
					]
				},
				{
					'featureType'			:	'road',
					'elementType'			:	'geometry',
					'stylers':
					[
						{
							'visibility'	:	'simplified'
						},
						{
							'color'			:	'#FE934C'
						}
					]
				},
				{
					'featureType'			:	'road',
					'elementType'			:	'labels.text.stroke',
					'stylers'				:
					[
						{
							'color'			:	'#FFFFFF'
						}
					]
				},
				{
					'featureType'			:	'water',
					'elementType'			:	'geometry',
					'stylers'				:
					[
						{
							'color'			:	'#9A96C5'
						}
					]
				},
				{
					'featureType'			:	'poi',
					'elementType'			:	'labels',
					'stylers'				:
					[
						{
							'visibility'	:	'off'
						}
					]
				},
				{
					'featureType'			:	'road',
					'elementType'			:	'labels.text.fill',
					'stylers'				:
					[
						{
							'color'			:	'#666666'
						}
					]
				},
				{
					'featureType'			:	'water',
					'elementType'			:	'labels',
					'stylers'				:
					[
						{
							'visibility'	:	'off'
						}
					]
				},
				{
					'featureType'			:	'landscape.man_made',
					'stylers'				:
					[
						{
							'color'			:	'#F5F5F5'
						}
					]
				},
				{
					'featureType'			:	'landscape.natural',
					'stylers'				:
					[
						{
							'color'			:	'#F5F5F5'
						}
					]
				},
				{
					'featureType'			:	'poi',
					'stylers'				:	
					[
						{
							'color'			:	'#E8E8E8'
						}
					]
				}
			]
		};
		
		var $option=$.extend($optionDefault,option);

		/**********************************************************************/

		this.build=function() 
		{
			$this.css({height:$option.dimension.height,width:$option.dimension.width});
	
			var coordinate=new google.maps.LatLng($option.coordinate.lat,$option.coordinate.lng);
			$option.map.center=coordinate;
		
			var googleMap=new google.maps.Map(document.getElementById($this.attr('id')),$option.map);
			googleMap.setOptions({styles:$option.styles});
			
			if(parseInt($option.marker.length,10)!==0)
			{
				var origin=new google.maps.Point(parseInt($option.orgin.x,10),parseInt($option.orgin.y,10)); 
				var anchor=new google.maps.Point(parseInt($option.anchor.x,10),parseInt($option.anchor.y,10)); 

				var icon=new google.maps.MarkerImage($option.marker.url,null,origin,anchor);
				
				var markerOption=
				{
					map			:	googleMap,
					position	:	coordinate,
					icon		:	icon
				};

				new google.maps.Marker(markerOption);

				jQuery(window).resize(function() 
				{
					var currCenter=googleMap.getCenter();
					google.maps.event.trigger(googleMap,'resize');
					googleMap.setCenter(currCenter);
				});
			}
		};
	};
	
	/**************************************************************************/
	
	$.fn.templateGoogleMap=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateGoogleMap(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Go To Top															  */
	/**************************************************************************/

	var templateGoToTop=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			new Waypoint(
			{
				element		:	$('body'),
				offset		:	-10,
				handler		:	function(direction) 
				{
					if(direction==='down')
						$this.animate({opacity:1},{duration:1000});
					else $this.animate({opacity:0},{duration:250});
				}
			});

			$(window).on('hashchange',function(e) 
			{
				e.preventDefault();

				var hash=window.location.hash.substring(1);
				if(hash==='go-to-top')
					$.scrollTo(0,{duration:500,easing:'easeInOutCubic',onAfter:function() { window.location.hash='#'; }});
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateGoToTop=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateGoToTop(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Header																  */
	/**************************************************************************/
	
	var templateHeader=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;
		var $self=this;

		var $menuDefault=$this.find('.template-component-menu-default>ul');
		var $menuResponsive=$this.find('.template-component-menu-responsive>ul');
		
		var $headerTop=$this.find('.template-header-top');
		var $headerBottom=$this.find('.template-header-bottom');

		var $headerSticky=undefined;

		/**********************************************************************/

		this.build=function() 
		{
			$menuDefault.superfish(
			{ 
				delay			:	0, 
				animation		:	{height:'show'}, 
				speed			:	400, 
				speedOut		:	0,	
				cssArrows		:	false
			}); 
			
			$menuDefault.find('.template-state-selected').parents('li').children('a').addClass('template-state-selected');
			
			$menuDefault.find('a[href="#"]').on('click',function(e) 
			{
				e.preventDefault();
			});

			/***/
			
			$menuResponsive.find('.template-state-selected').parents('li').children('a').addClass('template-state-selected');
			$menuResponsive.children('li').children('a').removeClass('template-state-selected');
			
			$menuResponsive.find('a[href="#"]').on('click',function(e)
			{
				e.preventDefault();
			
				var submenu=$(this).next('ul');
				if(submenu.length===1)
				{
					if(submenu.hasClass('template-state-open'))
					{
						submenu.animate({height:'0'},{complete:function() 
						{
							submenu.css({display:'none'}).removeClass('template-state-open');
							submenu.find('ul').css({height:'0',display:'none'}).removeClass('template-state-open');
						}});
					}
					else
					{
						var height=parseInt(submenu.actual('height'),10);
						submenu.css({height:'0',display:'block'}).animate({height:height},{complete:function() 
						{
							submenu.css({height:'auto'}).addClass('template-state-open');
						}});
					}
				};
			});
						
			/***/
			
			$self.setEqual();
			$self.createStickyHeader();

			$(window).resize(function() 
			{
				$self.setEqual();
				$self.createStickyHeader();
			});	
			
			/***/
			
			$(window).windowDimensionListener({change:function(width,height)  
			{
				if(width || height)
				{
					var menuElement=$this.find('.template-component-menu-default .template-state-selected');
					$self.setSelected(menuElement);
				}
			}});
		
			$('.template-content-section').each(function() 
			{
				var hash=$self.getValueFromClass($(this),'template-content-section-page-');
	
				if(hash!==false)
				{
					new Waypoint(
					{
						offset		:	'50%',
						element		:	$(this),
						wrapper		:	false,
						stuckClass	:	'',
						handler		:	function(direction)
						{
							if(direction==='down')
							{	
								$self.setSelectedTo($(this.element));
							}
							else
							{
								var prevPage=$(this.element).prevAll('.template-content-section').first();
								if(parseInt(prevPage.length,10)===1) $self.setSelectedTo(prevPage);
							}
						}
					});
				}
			});
			
			$(window).on('hashchange',function(e) 
			{
				$self.scrollTo();
			});	
			
			if(window.location.hash.length!==0)
			{
				$(window).load(function () 
				{
					$(window).trigger('hashchange');
				});
			}
			
			/***/
			
			$this.css('display','block');
		};
		
		/**********************************************************************/
		
		this.scrollTo=function()
		{
			var hash=window.location.hash.substring(1);

			if($.trim(hash).length===0) return;
			if(hash==='page') return;
			
			var object=$('.template-content-section-page-'+hash+':first');

			if(object.length!==1) return;

			var option={};
			
			option.offset=0;
			
			if($headerTop.hasClass('template-header-top-sticky'))
				option.offset=-1*$headerTop.actual('height');
		
			option.offset+=1;
			
			option.easing='easeOutQuint';
			option.duration=1000;
		
			if(object.prev('.template-content-section').length===0)
			{
				var object=$('html');
				option.offset=0;
			}
			
			option.onAfter=function() 
			{
				window.location.hash='page'; 
			};
			
			$.scrollTo(object,option);				
		};
		
		/**********************************************************************/
		
		this.setSelectedTo=function(line)
		{
			var self=this;
			var hash=$self.getValueFromClass(line,'template-content-section-page-');

			var menu=$this.find('.template-header-top-menu');
			var menuList=menu.find('.template-component-menu-default>ul.sf-menu');
			
			menu.find('.template-state-selected').removeClass('template-state-selected');
	
			menuList.each(function() 
			{	
				var menuElement=$(this).children('li').find('a[href="#'+hash+'"]');
				self.setSelected(menuElement);
			});
		};
		
		/**********************************************************************/

		this.setSelected=function(menuElement)
		{
			$(menuElement).addClass('template-state-selected');
		};
		
		/**********************************************************************/
		
		this.setEqual=function()
		{
			var logo=$this.find('.template-header-top-logo');	
			
			logo.each(function() 
			{
				var menu=$this.find('.template-component-menu-default');
				if(menu.length!==1) return; 
				
				if($this.find('.template-component-menu-responsive').css('display')==='none') 
				{
					var menuHeight=parseInt(menu.actual('height'),10);
					$(this).find('img').css('max-height',menuHeight);
				}
				else $(this).find('img').css('max-height','none');
			});
		};
		
		/**********************************************************************/
		
		this.createStickyHeader=function()
		{
			var width=$('body').actual('width');
			if(width<768)
			{
				if(typeof($headerSticky)!=='undefined')
				{
					$headerSticky.destroy();
					$headerSticky=undefined;
					$headerTop.removeClass('template-header-top-sticky');
					$headerBottom.css('margin-top',0);
				}

				return;
			}
			else
			{
				if(typeof($headerSticky)!=='undefined') return;
			}
			
			var headerTopHeight=parseInt($headerTop.actual('height'),10);

			$headerSticky=new Waypoint.Sticky(
			{
				offset		:	-1*headerTopHeight,
				element		:	$this,
				wrapper		:	false,
				stuckClass	:	'',
				handler		:	function(direction)
				{
					if(direction==='down')
					{	
						var headerTopHeight=parseInt($headerTop.actual('height'),10);
						
						$headerBottom.css('margin-top',headerTopHeight);
						$headerTop.css('top',-1*headerTopHeight).addClass('template-header-top-sticky');
						
						$self.setEqual();
						
						$headerTop.animate({top:0},{duration:250,complete:function()
						{
							
						}});
					}
					else
					{
						$headerTop.removeClass('template-header-top-sticky');
						$headerBottom.css('margin-top',0);
						$self.setEqual();
					}
				}
			});
		};
		
		/**********************************************************************/
		
		this.getValueFromClass=function(object,pattern)
		{
			var reg=new RegExp(pattern);
			var className=$(object).attr('class').split(' ');

			for(var i in className)
			{
				if(reg.test(className[i]))
					return(className[i].substring(pattern.length));
			}

			return(false);		
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateHeader=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateHeader(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Image																  */
	/**************************************************************************/
	
	var templateImage=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;
		
		/**********************************************************************/

		this.create=function() 
		{
			$this.each(function() 
			{
				if($this.hasClass('template-preloader'))
				{
					var box=$(this);
					var image=box.find('img');

					if(image.length===1)
					{
						$(image).one('load',function()
						{
							box.css({'background-image':'none'});
							
							var object=box.children('a').length===1 ? box.children('a') : image;
							
							$this.removeClass('template-preloader');
							
							object.animate({'opacity':1},1000,function() 
							{			

							}); 
						}).each(function() 
						{
							if(this.complete) $(this).load();
						});
					}
				}
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateImage=function() 
	{
		var element=new templateImage(this);
		element.create();
	};
	
	/**************************************************************************/
	/* Nivo slider															  */
	/**************************************************************************/

	var templateNivoSlider=function(object,option)
	{
		/**********************************************************************/
		
		var $self=this;
		var $this=$(object);

		var $default=
		{
			effect																:	'random',               
			slices																:	15,                     
			boxCols																:	8,                     
			boxRows																:	4,                     
			animSpeed															:	500,                 
			pauseTime															:	3000,                
			startSlide															:	0,                 
			directionNav														:	true,             
			controlNav															:	true,               
			controlNavThumbs													:	true,       
			pauseOnHover														:	true,           
			manualAdvance														:	false,          
			prevText															:	'',             
			nextText															:	'',              
			randomStart															:	false,   
			afterLoad															:	function()
			{
				var marginWidth=1;
				var imageCount=$this.children('div:first').find('img:not(.nivo-main-image)').length;
			
				var pagination=$this.find('.nivo-controlNav');
				
				pagination.children('a').css({'width':((100/imageCount)-(2*marginWidth)+((2*marginWidth)/imageCount))+'%','margin-left':marginWidth+'%','margin-right':marginWidth+'%'});
				
				pagination.children('a:first').css('margin-left','0px');
				pagination.children('a:last').css('margin-right','0px');
				
				pagination.css('display','block');
			
				if($this.hasClass('template-component-nivo-slider-style-2'))
				{
					pagination.addClass('template-pagination').addClass('template-pagination-style-1');
					pagination.find('a').html('');
				}
			}   
		};
			
		var $option=$.extend({},$default,option);

		/**********************************************************************/

		this.build=function() 
		{
			var imageCounter=0;
			
			var image=$this.children('div:first').find('img:not(.nivo-main-image)');
			var imageCount=image.length;
			
			image.each(function() 
			{
				$(this).one('load',function()
				{
					if((++imageCounter)===imageCount)
					{
						$this.removeClass('template-preloader');
						$this.children('div:first').nivoSlider($option);	
					}
				}).each(function() 
				{
					if(this.complete) $(this).load();
				});
			});			
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateNivoSlider=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateNivoSlider(this,option);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Notice																  */
	/**************************************************************************/

	var templateNotice=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		
		var $default=
		{
			time																:	30
		};
			
		var $option=$.extend({},$default,option);

		/**********************************************************************/

		this.build=function() 
		{
			var clickEventType=((document.ontouchstart!==null) ? 'click' : 'touchstart');
	
			var close=$this.find('.template-component-notice-content-right>a');
			var timeline=$this.find('.template-component-notice-content-right>span>span');
	
			$this.find('.template-component-notice-content-right>a').on(clickEventType,function(e) 
			{
				e.preventDefault();
				$this.hide('blind',{},300,function()
				{
					$(this).remove();
				});
			});
		
			if($option.time<=0) return;
		
			if((close.length===0) && (timeline.length===0)) return;
		
			var timer=close.find('span');
			
			$(timer).countdown(
			{
				until		:	$option.time,
				format		:	'S',
				layout		:	' {sn} ',
				onExpiry	:	function()
				{
					$this.hide('blind',{},600,function()
					{
						$(this).remove();
					});
				},
				onTick		:	function(period)
				{	
					timer.html(period[6]);
				}
			}); 
		
			if(timeline.length===1)
				timeline.animate({width:'100%'},{duration:$option.time*1000,easing:'linear'});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateNotice=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateNotice(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* Preformatted Text													  */
	/**************************************************************************/

	var templatePreformattedText=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			$this.children('a').on('click',function(e) 
			{
				e.preventDefault();
				$(this).children('span').toggle();
				$(this).next('pre').toggle();			
			});

			var attr=$this.data('id-rel');
			var object=$('body').find('[data-id='+attr+']');
			
			if(object.length===1)
				$this.children('pre').text($.trim(object.html()));
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templatePreformattedText=function(option) 
	{
		return this.each(function() 
		{
			var object=new templatePreformattedText(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* Supersized															  */
	/**************************************************************************/

	var templateSupersized=function(object,option,slide)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;
		
		/**********************************************************************/

		this.build=function() 
		{
			$.supersized($option);
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateSupersized=function(option,slide)
	{
		return this.each(function() 
		{
			var object=new templateSupersized(this,option,slide);
			object.build();
			return(object);
		});
	};
	
	/**************************************************************************/
	/* Tab																	  */
	/**************************************************************************/

	var templateTab=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			$this.tabs(
			{
				active			:	0,
				disabled		:	false,
				collapsible		:	false,
				heightStyle		:	'content',
				create			:	function()
				{
					$(this).css('visibility','visible');
				}
			});
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateTab=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateTab(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* Testimonial															  */
	/**************************************************************************/

	var templateTestimonial=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			$this.templateCarousel($option);
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateTestimonial=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateTestimonial(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* Twitter User Timneline												  */
	/**************************************************************************/

	var templateTwitterUserTimeline=function(object,option)
	{
		/**********************************************************************/
		
		var $this=$(object);
		var $option=option;
		
		/**********************************************************************/

		this.build=function() 
		{
			$this.templateCarousel($option);
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateTwitterUserTimeline=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateTwitterUserTimeline(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* zAccordion															  */
	/**************************************************************************/

	var templateZAccordion=function(object,option)
	{
		/**********************************************************************/
		
		var $self=this;
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		this.build=function() 
		{
			var imageCounter=0;
			
			var image=$this.find('img');
			var imageCount=image.length;
			
			image.each(function() 
			{
				$(this).one('load',function()
				{
					if((++imageCounter)===imageCount)
					{
						$this.removeClass('template-preloader');
						
						$this.children('ul:first').zAccordion(
						{
							slideClass			:	'slide',
							width				:	'100%',
							tabWidth			:	'10%',
							height				:	$self.getAccordionHeight(),
							startingSlide		:	0,
							timeout				:	2000,
							speed				:	500,
							auto				:	false,
							pause				:	true,
							easing				:	'easeInQuad',
							trigger				:	'click',
							animationStart		:	function()
							{
								$this.find('li.slide-previous .template-component-zaccordion-caption-box').fadeOut();
							},
							animationComplete	:	function()
							{
								$this.find('li.slide-open .template-component-zaccordion-caption-box').fadeIn().css('display','block');
							},
							buildComplete		:	function()
							{
								$this.find('li.slide-closed .template-component-zaccordion-caption-box').css('display','none');
								$this.find('li.slide-open .template-component-zaccordion-caption-box').fadeIn();
								$self.setAccordionResposnive();
							}
						});
					}
				}).each(function() 
				{
					if(this.complete) $(this).load();
				});
			});
		};
		
		/**********************************************************************/
		
		this.getAccordionHeight=function()
		{
			var height=parseInt($this.find('li img').actual('height'),10);
			return(height);
		};
		
		/**********************************************************************/
		
		this.setAccordionResposnive=function(bind)
		{
			var height=this.getAccordionHeight();
			
			$this.css('height',height);
			$this.children('ul').css('height',height);
			
			$this.find('.template-component-zaccordion-caption-box').each(function() 
			{
				if($(this).actual('outerHeight')>height)
					$(this).addClass('template-state-hidden');
				else $(this).removeClass('template-state-hidden');
			});
			
			if(bind)
			{
				$(window).on('resize',function()
				{
					$self.setAccordionResposnive(false);
				});
			}
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateZAccordion=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateZAccordion(this,option);
			object.build();
			return(object);
		});
	};	
	
	/**************************************************************************/
	/* Carousel																  */
	/**************************************************************************/
	
	var templateCarousel=function(object,option)
	{
		/**********************************************************************/
		
		var $self=this;
		var $this=$(object);
		var $option=option;

		/**********************************************************************/

		var $default=
		{
			circular															:	true,
			inifinite															:	true,
			direction															:	'left',
			responsive															:	true,
			items																:
			{
				start															:	0,
				height															:	'variable',
				minimum															:	1
			},
			scroll																:
			{
				fx																:	'scroll',
				items															:	1,
				easing															:	'swing',
				duration														:	500,
				pauseOnHover													:	'resume'
			},
			auto																:
			{
				play															:	true
			},
			swipe																:
			{
				onTouch															:	true,
				onMouse															:	true
			},
			prev																:
			{
				button															:	null
			},
			next																:
			{
				button															:	null
			},
			pagination															:	
			{
				anchorBuilder													:	function() 
				{
					var count=$(this).parent('ul').children('li').length;
					return('<a href="#" style="width:'+((100/count)-2)+'%;margin-right:1%;margin-left:1%"></a>');	
				},
				container														:	function() 
				{ 
					var pagination=$this.find('.template-pagination');
					pagination.css('display','block');
					return(pagination); 
				}
			},
			onCreate	:	function()
			{
				
			}  
		};
		
		var $option=$.extend(true,$default,option);

		/**********************************************************************/

		this.build=function() 
		{
			var margin=30;
			var contentWidth=1050;
			var list=$this.find('ul:first');
			
			$this.css({overflow:'hidden'});

			list.children('li').css(
			{
				'float'			:	'left',
				'clear'			:	'none',
				'margin-left'	:	0,
				'margin-right'	:	margin,
				'margin-top'	:	0,
				'margin-bottom'	:	0
			});

			var columnCount=$self.getLayoutColumnCount(list);
			var columnWidth=((contentWidth+margin)/columnCount);

			$self.setCarouselResponsive($this,columnWidth,margin);
			$(window).on('resize',function() 
			{
				$self.setCarouselResponsive($this,columnWidth,margin);
			});
			
			$option.items.visible=$self.getLayoutColumnCount(list)+1;
			
			$option.onCreate=function() 
			{
				$self.setCarouselResponsive($this,columnWidth,margin);
				$this.css('opacity','1');	
				
				if(typeof($option.onAfterComplete)==='function')
					$option.onAfterComplete.apply();
			};

			list.carouFredSel($option);
		};
		
		/**********************************************************************/
		
		this.setCarouselResponsive=function(carousel,columnWidth,margin)
		{	
			var parent=$(carousel).parent();
			var parentWidth=parent.actual('width');
			
			var list=carousel.find('ul:first');
			var listElement=list.children('li');

			if(parentWidth>300)
			{
				var columnCount=Math.floor((parentWidth+margin)/(columnWidth));
				if(columnCount===0) columnCount=1;
			}
			else columnCount=1;

			if(columnCount===1) columnWidth=parentWidth;

			var carouselWidth=columnWidth*columnCount;

			if(columnCount===1) margin=0;

			listElement.css({'width':(columnWidth-margin),'margin-right':margin});

			list.css('width',carouselWidth-margin);
			carousel.css('width',carouselWidth);

			/***/

			$(list,listElement).css('height','auto');

			var carouselHeight=0;
			listElement.each(function() 
			{
				var height=$(this).actual('outerHeight',{includeMargin:true});
				if(height>carouselHeight) carouselHeight=height;
			});
			
			$(list,listElement).css('height',parseInt(carouselHeight,10));
			
			/***/

			list.trigger('configuration',['height',carouselHeight]);
			list.trigger('configuration',['items.height',carouselHeight]);

			list.trigger('configuration',['width',carouselWidth]);
			list.trigger('configuration',['items.width',columnWidth]);
			list.trigger('configuration',['items.visible',columnCount]);
			list.trigger('configuration',['items.minimum',columnCount+1]);

			list.trigger('updateSizes');	
		};

		/**********************************************************************/

		this.getLayoutColumnCount=function(object)
		{
			var value=$self.getValueFromClass(object,'template-layout-');
			if(value===false) return(false);
			return(value.split('x').length);
		};
		
		/**********************************************************************/
		
		this.getValueFromClass=function(object,pattern)
		{
			var reg=new RegExp(pattern);
			var className=$(object).attr('class').split(' ');

			for(var i in className)
			{
				if(reg.test(className[i]))
					return(className[i].substring(pattern.length));
			}

			return(false);		
		};
		
		/**********************************************************************/
	};
	
	/**************************************************************************/
	
	$.fn.templateCarousel=function(option) 
	{
		return this.each(function() 
		{
			var object=new templateCarousel(this,option);
			object.build();
			return(object);
		});
	};	

})(jQuery,document,window);

/******************************************************************************/
/******************************************************************************/