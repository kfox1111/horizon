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
        .controller('appCatalogTableCtrl', appCatalogTableCtrl)
        .controller('appComponentCatalogTableCtrl', appComponentCatalogTableCtrl)
        .directive('stars', stars);

    function appCatalogTableCtrl($scope, $http) {
        var req = {
            url: 'http://apps.openstack.org/static/heat_templates.json',
            headers: {'X-Requested-With': undefined}
        }
        $http(req).success(function(data) {
            $scope.templates = data.templates;
        });
    }

    function appComponentCatalogTableCtrl($scope, $http) {
        var req = {
            url: 'http://apps.openstack.org/static/glance_images.json',
            headers: {'X-Requested-With': undefined}
        }
        $http(req).success(function(data) {
            $scope.images = data.images;
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
