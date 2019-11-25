describe("debounce", function () {
  before(function () {
    this.clock = sinon.useFakeTimers();
  });

  after(function () {
    this.clock.restore();
  });

<<<<<<< HEAD
  it("belirlenen süre zarfında istenen fonksiyonu sadece bir defa çağırır.", function () {
=======
  it("trigger the fuction execution immediately", function () {
    let mode;
    const f = () => mode='leading';
    
    debounce(f, 1000)(); // runs without a delay
  
    assert.equal(mode, 'leading');
  });
  
  it("calls the function at maximum once in ms milliseconds", function() {
>>>>>>> 79417c6e73645d37f184f0cc7e4bc3353e85224f
    let log = '';

    function f(a) {
      log += a;
    }

    let f = debounce(alert, 1000);

    f(1); // Anında çalışacak
    f(2); // görmezden gelinecek

    setTimeout(() => f(3), 100); // görmezden gelinecek ( 100 ms'de çalıştığından )
    setTimeout(() => f(4), 1100); // çalışır
    setTimeout(() => f(5), 1500); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.

    this.clock.tick(5000);
    assert.equal(log, "14");
  });

  it("Çağrının kaynağını tutar.", function () {
    let obj = {
      f() {
        assert.equal(this, obj);
      }
    };

    obj.f = debounce(obj.f, 1000);
    obj.f("test");
  });

});
