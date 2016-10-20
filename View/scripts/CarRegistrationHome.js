'use strict';

//--------------Sample Data section, should from rest api------------------------
var jsonData = [
        {
            "_rid": "001",
            "RegistrationNumber": "YYZ908",
            "Driver": {
                "LastName": "Nima",
                "FirstName": "Nishad",
                "DriversLicenseNo": "D123456",
                "Address": "Unit 9, 40B Birriga Road, Bellevue Hill, NSW 2023",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "14\/10\/2016"
        },
        {
            "_rid": "002",
            "RegistrationNumber": "MMD123",
            "Driver": {
                "LastName": "Chopra",
                "FirstName": "Anthony Singh",
                "DriversLicenseNo": "M3456789",
                "Address": "11 TALLOWOOD COURT, GOONELLABAH, NSW, 2480",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "28\/11\/2016"
        },
        {
            "_rid": "003",
            "RegistrationNumber": "1NSW1",
            "Driver": {
                "LastName": "Lanker",
                "FirstName": "Tarin",
                "DriversLicenseNo": "M9876578",
                "Address": "UNIT 215, 48-88 DOWLING STREET, WOOLLOOMOOLOO NSW 2011",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "15\/10\/2016"
        },
        {
            "_rid": "004",
            "RegistrationNumber": "NAQ900",
            "Driver": {
                "LastName": "Zhang",
                "FirstName": "Dang",
                "DriversLicenseNo": "L9842873",
                "Address": "UNIT 6, 9 Mineral Rd, Oak Flats, NSW 2529",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "15\/10\/2016"
        },
        {
            "_rid": "005",
            "RegistrationNumber": "ACM891",
            "Driver": {
                "LastName": "Jordan",
                "FirstName": "Michael",
                "DriversLicenseNo": "D2341764",
                "Address": "UNIT 6, 9 Mineral Rd, Oak Flats, NSW 2529",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "20\/11\/2016"
        },
        {
            "_rid": "006",
            "RegistrationNumber": "BNZ100",
            "Driver": {
                "LastName": "Haradi",
                "FirstName": "Souka Azadeh",
                "DriversLicenseNo": "N7788643",
                "Address": "UNIT 6, 9 Mineral Rd, Oak Flats, NSW 2529",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "20\/12\/2016"
        },
        {
            "_rid": "007",
            "RegistrationNumber": "NSZ134",
            "Driver": {
                "LastName": "Jones",
                "FirstName": "Henry",
                "DriversLicenseNo": "K9287381",
                "Address": "UNIT 6, 9 Mineral Rd, Oak Flats, NSW 2529",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "20\/11\/2016"
        },
        {
            "_rid": "008",
            "RegistrationNumber": "CNZ913",
            "Driver": {
                "LastName": "Wu",
                "FirstName": "James",
                "DriversLicenseNo": "N9101298",
                "Address": "UNIT 6, 9 Mineral Rd, Oak Flats, NSW 2529",
                "Email": "addyour@mail.here"
            },
            "RegistrationValidTill": "20\/10\/2017"
        }
];
//----------Sample Data section ends--------------------

var myApp = angular.module('carRegApp', ['ui.bootstrap']);

myApp.controller('mainController', function($scope) {
    $scope.jsonData = jsonData;
});
