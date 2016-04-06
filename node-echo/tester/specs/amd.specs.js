/**
* 产品列表单元测试
**/
//describe('筛选区交互',function(){
//    it('选择开始时间', function(){
//    })
//    it('选择结束时间', function(){
//    })
//    it('选择监管机构', function(){
//    })
//    it('选择基础资产类型', function(){
//    })
//    it('填写关键字', function(){
//    })
//    it('查找', function(){
//    })
//    it('还原', function(){
//    })
//})
define(['../app/moduleA'], function () {
    describe("first mp", function () {
        describe("body background", function () {
            it("is blue", function () {
                $('body').trigger('click');
                var result = $('body').css('backgroundColor');
                expect(result).to.equal('rgba(0, 0, 0, 0)');
            });
            it("StringCalculator", function(){
                var c3 = StringCalculator.add('123');
                expect(c3).to.equal(123);
            });
            // it("chai-jq", function(){
            //     var $elem = $("<div id=\"hi\" foo=\"bar\" />");

            //     expect($elem)
            //       // Assertion object is `$elem`
            //       .to.have.$attr("id", "hi").and
            //       // Assertion object is still `$elem`
            //       .to.contain.$attr("foo", "bar hi");
            // });
            it("theme",function(){
              var theme = $(".noData").html();
              expect(theme)
                .to.equal('hexo');
            })
        });
    }); 
});