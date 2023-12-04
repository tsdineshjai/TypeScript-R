"use strict";
/* chapter 4 */
//enums
var RankingsEPL;
(function (RankingsEPL) {
    RankingsEPL[RankingsEPL["Arsenal"] = 0] = "Arsenal";
    RankingsEPL[RankingsEPL["Liverpool"] = 1] = "Liverpool";
    RankingsEPL[RankingsEPL["City"] = 2] = "City";
    RankingsEPL[RankingsEPL["Villa"] = 3] = "Villa";
})(RankingsEPL || (RankingsEPL = {}));
console.log("NumberOneRankGoes to :", RankingsEPL.Arsenal);
