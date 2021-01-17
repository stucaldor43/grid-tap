module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_site/styles/");
  eleventyConfig.setWatchThrottleWaitTime(400);

  return {
    dir: {
      input: "site",
      output: "_site",
      includes: "includes",
      layouts: "includes/layouts",
    },
  };
};
