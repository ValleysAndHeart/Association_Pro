/**
 *   study.js
 *   Root namespace module
 *
*/

/* jslint 


 */

 /* global $, study  */

 var study = ( function () {
 	var initModule = function( $container ){
 		study.shell.initModule( $container );
 	};
 	return { initModule : initModule };
 }());