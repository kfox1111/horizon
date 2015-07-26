/*
Copyright 2015, Hewlett-Packard Development Company, L.P.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name hz.api.heatAPI
   * @description Provides direct pass through to Heat with NO abstraction.
   */
  function HeatAPI(apiService, toastService) {

    /**
     * @name hz.api.heatAPI.validate
     * @description
     * Validate a template.
     *
     * The result is an object.
     *
     * @param {string} params.template_url
     * Specifies the template to validate.
     *
     */
    this.validate = function(params) {
      var config = (params) ? { 'params' : params} : {};
      return apiService.get('/api/heat/validate/', config);
//        .error(function () {
//          toastService.add('error', gettext('Unable to validate template.'));
//      });
    };

  }

  // Register it with the API module so that anybody using the
  // API module will have access to the Heat APIs.

  angular.module('hz.api')
    .service('heatAPI', ['apiService', 'toastService', HeatAPI]);

}());
