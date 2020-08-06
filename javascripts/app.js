var app = angular.module("royal", [],  function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|steam|magnet|tg):/);
});