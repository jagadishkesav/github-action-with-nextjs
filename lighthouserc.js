module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        startServerCommand: 'https://jagadishkesav.github.io/github-action-with-nextjs/',
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
      upload: {
        /* Add configuration here */
        // target: 'temporary-public-storage',
        urlReplacementPatterns: [
          's/[0-9a-f]{12}$/HASH/',
          's#:[0-9]{3,5}/#:PORT/#',
          's/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/UUID/ig',
        ],
      },
    },
  };