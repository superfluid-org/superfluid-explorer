// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true, // Known issue -- causes double __NEXT_REDUX_WRAPPER_HYDRATE__ dispatch but this ONLY affects development : https://github.com/kirill-konshin/next-redux-wrapper/issues/422
  env: {
    NEXT_PUBLIC_APP_URL: process.env.VERCEL_URL
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN

if (SENTRY_AUTH_TOKEN) {
  const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
  }
  // Make sure adding Sentry options is the last code to run before exporting, to
  // ensure that your source maps include changes from all other Webpack plugins
  module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
} else {
  console.warn(
    'Sentry release not created because SENTRY_AUTH_TOKEN is not set.'
  )
  module.exports = moduleExports
}
