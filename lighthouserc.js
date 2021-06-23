module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        staticDistDir: './out',
        url: ['https://jagadishkesav.github.io/github-action-with-nextjs/test']
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage',
      },
    },
  };