gemini.suite('vaadin-combo-box', function(rootSuite) {
  function wait(actions, find) {
    actions.wait(5000);
  }

  function goToAboutBlank(actions, find) {
    // Firefox stops responding on socket after a test, workaround:
    return actions.executeJS(function(window) {
      window.location.href = 'about:blank'; // just go away, please!
    });
  }

  rootSuite
    .before(wait)
    .after(goToAboutBlank);

  ['lumo', 'material'].forEach(theme => {
    gemini.suite(`default-rtl-tests-${theme}`, function(suite) {
      suite
        .setUrl(`default-rtl.html?theme=${theme}`)
        .setCaptureElements('#default-rtl-tests')
        .capture('default');
    });

    gemini.suite(`default-tests-${theme}`, function(suite) {
      suite
        .setUrl(`default.html?theme=${theme}`)
        .setCaptureElements('#default-tests')
        .capture('default');
    });

    gemini.suite(`clear-button-tests-${theme}`, function(suite) {
      suite
        .setUrl(`clear-button.html?theme=${theme}`)
        .setCaptureElements('#clear-button-tests')
        .capture('default');
    });

    gemini.suite(`icons-${theme}`, function(suite) {
      suite
        .setUrl(`icons.html?theme=${theme}`)
        .setCaptureElements('#icons-tests')
        .capture('default');
    });

    ['ltr', 'rtl'].forEach(dir => {
      gemini.suite(`dropdown-${theme}-${dir}-selected`, function(suite) {
        suite
          .setUrl(`dropdown.html?theme=${theme}&dir=${dir}`)
          .setCaptureElements('#dropdown-tests')
          .capture('default', function(actions) {
            actions.executeJS(function(window) {
              window.document.querySelector('#selected').open();
            });
          });
      });

      gemini.suite(`dropdown-${theme}-${dir}-template`, function(suite) {
        suite
          .setUrl(`dropdown.html?theme=${theme}&dir=${dir}`)
          .setCaptureElements('#dropdown-tests')
          .capture('template', function(actions) {
            actions.executeJS(function(window) {
              window.document.querySelector('#template').open();
            });
          });
      });
    });
  });

});
