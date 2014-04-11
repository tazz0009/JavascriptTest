var Unit = function() {
     this.attack = function(unit) {
          $("body").append(this.type + " 유닛인 '" + this.name + "'이(가) '" + unit.name + "'를 공격<br/>");
 
          // 공격 대상 유닛의 attacked 메소드 호출
          unit.attacked(this);
     };
 
     this.attacked = function(unit) {
          $("body").append(
          this.type + " 유닛인 '" + this.name + "'이(가) '" + unit.type + " 유닛인 '" + unit.name + "'에게 공격 당함<br/>"
          );
     };
 
     this.move = function(distance) {
          $("body").append(this.type + " 유닛인 '" + this.name + "'이(가) " + distance + "만큼 이동<br/>");
     };
};
 
var BionicUnit = function(name, type) {
     this.name = name;
     this.type = type;
 
     this.recovery = function(number) {
          $("body").append("'" + this.name + "'의 체력이 " + number + "만큼 재생<br/>");
     };
};
 
var MechanicUnit = function(name, type) {
     this.name = name;
     this.type = type;
 
     this.repair = function(number) {
          $("body").append("'" + this.name + "'의 내구력 " + number + "만큼 회복<br/>");
     };
};
 
$(function() {
     BionicUnit.prototype = new Unit;
     MechanicUnit.prototype = new Unit;
 
     // -- 1. 유닛 생성
     var unit1 = new BionicUnit("마린", "지상");
     var unit2 = new BionicUnit("시즈탱크", "지상");
     var unit3 = new MechanicUnit("커세어", "공중");
 
     // -- 1. 마린 이동 후 커세어 공격
     unit1.move(10);
     unit1.attack(unit3);
 
     // -- 2. 마린 시즈탱크 탱크 공격
     unit1.attack(unit2);
 
     // -- 3. 커세어 이동 후 수리
     unit3.move(50);
     unit3.repair(30);
});