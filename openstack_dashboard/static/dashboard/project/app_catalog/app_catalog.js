/*
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
    'use strict';

    angular
        .module('hz.dashboard.project', [])
        .filter('encodeURIComponent', function() {
            return window.encodeURIComponent;
        })
        .controller('appCatalogCompleteCtrl', appCatalogCompleteCtrl)
        .controller('appCatalogTableCtrl', appCatalogTableCtrl)
        .directive('stars', stars);

    function appCatalogCompleteCtrl($scope, $http) {
        $http.get('/static/dashboard/project/data.json')
        //$http.get('https://raw.githubusercontent.com/stackforge/apps-catalog/master/openstack_catalog/web/static/heat_templates.yaml')
            .success(function(data) {

                $scope.templates = data.templates;
            }
        );

    }

//FIXME remove duplicate. dont need both.
	function appCatalogTableCtrl($scope, $http) {
        $http.get('/static/dashboard/project/data.json')
        //$http.get('https://raw.githubusercontent.com/stackforge/apps-catalog/master/openstack_catalog/web/static/heat_templates.yaml')
            .success(function(data) {
                $scope.templates = data.templates;
             });
    }

    function stars() {
        var star = angular.element('<i>');
        star.addClass('fa fa-star');
        star.css({ color: 'goldenrod' });
        return {
            restrict: 'E',
            scope: { value: '=' },
            link: function(scope, element){
                for (var i = 0; i < scope.value; i++){
                    element.append(star.clone());
                }
            }
        };
    }

})();
