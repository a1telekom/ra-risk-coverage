'use strict';

describe('Service: ConfirmModal', function () {

  // load the service's module
  beforeEach(module('amxApp'));

  // instantiate service
  var ConfirmModal;
  beforeEach(inject(function (_ConfirmModal_) {
    ConfirmModal = _ConfirmModal_;
  }));

  it('should do something', function () {
    expect(!!ConfirmModal).to.be.true;
  });

});
