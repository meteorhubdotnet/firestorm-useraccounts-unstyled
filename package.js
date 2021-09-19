Package.describe({
  summary: 'Fork of useraccounts:unstyled for Firestorm',
  version: '1.0.5',
  name: 'meteorhubdotnet:firestorm-useraccounts-unstyled',
  git: 'https://github.com/meteorhubdotnet/firestorm-useraccounts-unstyled',
});

Package.onUse(function(api, where) {
  api.versionsFrom('METEOR@2.3.6');

  api.use([
    'templating@1.4.0',
    'underscore',
  ], 'client');

  api.use([
    'meteorhubdotnet:firestorm-useraccounts-core@1.0.5',
  ], ['client', 'server']);

  // Requires all routing packages loads before this asking for weak dependencies.
  // api.use('useraccounts:flow-routing@1.14.2', ['client', 'server'], {weak: true});
  api.use('meteorhubdotnet:firestorm-iron-useraccounts@1.0.5', ['client', 'server'], {weak: true});

  api.imply([
    'meteorhubdotnet:firestorm-useraccounts-core',
  ], ['client', 'server']);

  api.addFiles([
    'lib/at_error.html',
    'lib/at_error.js',
    'lib/at_form.html',
    'lib/at_form.js',
    'lib/at_input.html',
    'lib/at_input.js',
    'lib/at_message.html',
    'lib/at_message.js',
    'lib/at_nav_button.html',
    'lib/at_nav_button.js',
    'lib/at_oauth.html',
    'lib/at_oauth.js',
    'lib/at_pwd_form.html',
    'lib/at_pwd_form.js',
    'lib/at_pwd_form_btn.html',
    'lib/at_pwd_form_btn.js',
    'lib/at_pwd_link.html',
    'lib/at_pwd_link.js',
    'lib/at_reCaptcha.html',
    'lib/at_reCaptcha.js',
    'lib/at_resend_verification_email_link.html',
    'lib/at_resend_verification_email_link.js',
    'lib/at_result.html',
    'lib/at_result.js',
    'lib/at_sep.html',
    'lib/at_sep.js',
    'lib/at_signin_link.html',
    'lib/at_signin_link.js',
    'lib/at_signup_link.html',
    'lib/at_signup_link.js',
    'lib/at_social.html',
    'lib/at_social.js',
    'lib/at_terms_link.html',
    'lib/at_terms_link.js',
    'lib/at_title.html',
    'lib/at_title.js',
    'lib/full_page_at_form.html',
    'lib/at_unstyled.css'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use([
    'meteorhubdotnet:firestorm-useraccounts-unstyled@1.0.5',
    'meteorhubdotnet:firestorm-useraccounts-core@1.0.5',
  ]);

  api.use([
    'accounts-password',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.addFiles([
    'tests/tests.js'
  ], ['client', 'server']);
});
