describe('index.js', function (done) {
  describe('drivers', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendDriver(name)', function (done) {
      it('appends a driver to the end of the drivers array', function () {
        destructivelyAppendDriver('Ralph');

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependDriver(name)', function (done) {
      it('prepends a driver to the beginning of the drivers array', function () {
        destructivelyPrependDriver("Bob");

        expect(drivers).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastDriver()', function (done) {
      it('removes the last driver from the drivers array', function () {
        destructivelyRemoveLastDriver();

        expect(drivers).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstDriver()', function (done) {
      it('removes the First driver from the drivers array', function () {
        destructivelyRemoveFirstDriver();

        expect(drivers).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendDriver(name)', function (done) {
      it('appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(appendDriver("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('prependDriver(name)', function (done) {
      it('prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(prependDriver("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastDriver()', function () {
      it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstDriver()', function () {
      it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
