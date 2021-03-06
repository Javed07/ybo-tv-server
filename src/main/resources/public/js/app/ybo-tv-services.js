'use strict';

/* Services */

var Services = angular.module('YboTv.services', ['ngResource']);

Services.factory('ChannelService', function($resource) {
    return $resource('/data/channel/:id', {});
});

Services.factory('ProgrammeService', function($resource) {
    function ProgrammeService() {
        this.getByDate = function(currentDate, callback) {
            return $resource('/data/channel/date/:date').query({date:currentDate}, callback);
        };

        this.getByChannelAndDate = function(currentChaine, dateDebut, dateFin) {
            return $resource('/data/programme/channel/:chaine/datedebut/:debut/datefin/:fin').query({
                    chaine:currentChaine,
                    debut:dateDebut,
                    fin:dateFin
                });
        };

        this.showOrHide = function(channel) {
            channel.expend = channel.expend === undefined || channel.expend === false;
        }
    }

    return new ProgrammeService();
});