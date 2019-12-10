export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5defd7b18e2891018d19249b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r18pb1dm',
                  apiId: '84f9a9e6-997e-4f15-ad74-79f6cedf97f6'
                },
                {
                  buildHookId: '5defd7b10e8d6084302416a1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k39tmn1b',
                  apiId: '752c4d57-29dc-4278-9160-2cfbdabab9b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/motts1/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k39tmn1b.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
