/**
 *  study.shell.js
 *  Shell module for SPA
 *
*/

/* jslint */

/* global $, spa */

study.shell = (function(){

	//---------Bagin module scope variables-----------
	var 
		configMap = {
			main_html : String()
			+'<div class="study-shell-head">'
				+'<div class="study-shell-head-logo"></div>'
				+'<div class="study-shell-head-acct"></div>'
				+'<div class="study-shell-head-search"></div>'
			+'</div>'
			+'<div class="study-shell-main">'
				+'<div class="study-shell-main-nav"></div>'
				+'<div class="study-shell-main-content"></div>'
			+'</div>'
			+'<div class="study-shell-foot"></div>'
			+'<div class="study-shell-chat"></div>'
			+'<div class="study-shell-modal"></div>',

			chat_extend_time : 1000,
			chat_retract_time : 300,
			chat_extend_height : 450,
			chat_retract_height : 15
		},

		stateMap = { $container : null },
		jqueryMap = {},

		setJqueryMap, initModule, taggleChat;

		//----------End module scope variables----------------

		//-----------Bagin utility methods------------

		//------------End utility methods------------

		//------------Bagin dom methods---------------

		setJqueryMap = function(){
			var $container = stateMap.$container;
			jqueryMap = { 
				$container : $container ,
				$chat : $container.find('.study-shell-chat') 
			};
		};

		//------------End Dom methods------------------

		//-----------Bagin dom method  togglechat-------
		toggleChat = function( do_extend, callback ){
			var 
				px_chat_ht = jqueryMap.$chat.height(),
				is_open = px_chat_ht === configMap.chat_extend_height,
				is_closed = px_chat_ht === configMap.chat_retract_height,
				is_sliding = ! is_open && ! is_closed;

			//  avoid race condition
			if( is_sliding ){ return false; }
			if( do_extend ){
				jqueryMap.$chat.animate(
					{ height : configMap.chat_extend_height },
					configMap.chat_extend_time,
					function(){
						if( callback ){ callback( jqueryMap.$chat ); }
					}
				);
				return true;
			}

			//-----Bagin retract chat slider
			jqueryMap.$chat.animate(
				{ height : configMap.chat_retract_height },
				configMap.chat_retract_time,
				function(){
					if( callback ){ callback( jqueryMap.$chat ); }
				}
			);

			return true;
		};


		//-----------End   dom method togglechat--------

		//------------Bagin event handlers-------------
		//------------End event handlers--------------

		//------------Bagin public methods-----------

		initModule = function( $container ){
			stateMap.$container = $container;
			$container.html( configMap.main_html );
			setJqueryMap();

			setTimeout( function(){toggleChat(true);}, 3000);
			setTimeout( function(){toggleChat(false);}, 8000);
		};

		return { initModule : initModule };
		//-------------End public methods------------

}());

