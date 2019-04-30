function asyncMap(jobs, callback) {
  (function(r) {
    var promise = new Promise(function(resolve, reject) {
      jobs.forEach(function(job) {
        job(function(a) {
          r.push(a);
        });
      });

      resolve(r);
    });

    promise.then(function(r) {
      callback(r);
    });
  })([]);
}
