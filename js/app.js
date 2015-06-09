
(function() {
  var translations = {
    'Description of presentation': 'description',
    'Title of presentation': 'title',
    'Name of presenter(s)': 'names'
  };

  // Get data from spreadsheet
  Tabletop.init({
    key: '1V7LjS5aWN7k95KKW-GtZL47eWB5ICxqwRfzVozQWZCw',
    callback: dataReady,
    simpleSheet: true
  });

  // When data is ready
  function dataReady(talks, tabletop) {
    // Translate
    talks = _.map(talks, function(t, ti) {
      _.each(translations, function(n, o) {
        if (!_.isUndefined(t[o])) {
          t[n] = t[o];
        }
      });

      return t;
    });

    // Put into template
    var r = new Ractive({
      el: '#talks-list',
      template: '#talks-template',
      data: {
        talks: talks
      }
    });
  }
})();
