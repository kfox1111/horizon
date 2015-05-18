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
        .module('hz.dashboard.demo', [])
        .controller('fiveCircleCompleteCtrl', fiveCircleCompleteCtrl)
        .controller('fiveCircleTableCtrl', fiveCircleTableCtrl)
        .directive('stars', stars);

    function fiveCircleCompleteCtrl($scope, $http) {
        $http.get('/static/dashboard/demo/data.json')
            .success(function(data) {

                $scope.restaurants = data;
                $scope.chartSettings = {
                    innerRadius: 24,
                    outerRadius: 30,
                    showLabel: true,
                    showLegend: false,
                    showTitle: true
                };

                angular.forEach($scope.restaurants, function(restaurant){
                    var maxLimit = 100;
                    var random1 = Math.floor(Math.random() * maxLimit);
                    var random2 = Math.floor(Math.random() * maxLimit);
                    restaurant.chartDataReview = {
                        title: 'Reviews',
                        data: [
                            { value: random1, color: 'skyblue' },
                            { value: random2, color: 'salmon' }
                        ]
                    };

                    restaurant.chartDataCritic = {
                        title: 'Critic Rating',
                        data: [
                            { value: restaurant.criticRating, color: (restaurant.criticRating > 75) ? 'skyblue': 'gold' },
                            { value: 100-restaurant.criticRating, color: 'transparent' }
                        ]
                    };
                });
            }
        );

    }

	function fiveCircleTableCtrl($scope, $http) {
        $http.get('/static/dashboard/demo/data.json')
            .success(function(data) {
                $scope.restaurants = data;
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