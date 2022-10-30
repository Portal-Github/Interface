(function ($) {

/**
 * Checks to see if the cron should be automatically run.
 */
Github.behaviors.cronCheck = function(context) {
  if (Github.settings.cron.runNext || false) {
    $('body:not(.cron-check-processed)', context).addClass('cron-check-processed').each(function() {
      // Only execute the cron check if its the right time.
      if (Math.round(new Date().getTime() / 1000.0) >= Github.settings.cron.runNext) {
        $.get(Github.settings.cron.basePath + '/run-cron-check');
      }
    });
  }
};

})(jQuery);
