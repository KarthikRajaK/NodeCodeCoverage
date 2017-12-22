function TestController() {

    var name;
    function greet(name) {
        return 'Welcome '+name;
    }
    return {greet};
}
module.exports = TestController();