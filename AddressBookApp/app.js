﻿var app = angular.module('addressBook', []);

app.controller('saveAddress', function ($scope, addressBookService) {
    $scope.pageTitle = 'Create New';
    $scope.addressBook = [];
    $scope.save = function (firstName,lastName,email) {
        addressBookService.createAddress(firstName,lastName,email);
    }
});

app.controller('searchAddress', function (addressBookService,$scope) {
    $scope.addressBook = addressBookService.getAll();
});

app.service("addressBookService", function () {
    var addressBook = [];
    return {
        createAddress: function (firstName, lastName, email) {
            addressBook.push({
                firstName: firstName,
                lastName: lastName,
                email: email
            });
        },
        getAll: function () {
            return addressBook;
        }
    }
});
