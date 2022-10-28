export default {
    name: 'blockContent',
    type:'array',
    title: 'Content',
    of:[
        {
            type: 'block',
            title: 'Block',
            styles:[
                {title: 'Normal',value:'normal'},
                {title: 'Title',value:'title'},
                {title: 'H1',value:'h1'},
                {title: 'H2',value:'h2'},
                {title: 'H3',value:'h3'},
                {title: 'H4',value:'h4'},
                {title: 'H5',value:'h5'},
                {title: 'H6',value:'h6'},
                {title: 'Quote',value:'blockquote'},
            ],
            lists:[
                {title:'Bullet',value:'bullet'},
                {title:'Number',value:'number'},
            ],
            marks:{
                decorators:[
                    {title: 'Strong',value:'strong'},
                    {title: 'Emphasise',value:'em'},
                ],
                annotations:[
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields:[
                            {
                                title:'URL',
                                type: 'url',
                                name: 'href'
                            }
                        ]
                    }
                ]
            }

        },
        {
            type:'image',
            options:{
                hotspot:true
            }
        }
    ]

}