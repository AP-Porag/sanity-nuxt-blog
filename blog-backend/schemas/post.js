export default {
    name:'post',
    type:'document',
    title:'Post',
    fields:[
        {
            name: 'title',
            type:'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type:'slug',
            title: 'Slug',
            options:{
                source:'title'
            }
        },
        {
            name: 'author',
            type:'reference',
            title: 'Author',
            to:{type:'author'}
        },
        {
            name: 'thumbnail',
            type:'image',
            title: 'Thumbnail',
            options: {
                hotspot:true
            }
        },
        {
            name: 'categories',
            type:'array',
            title: 'Categories',
            of:[{type:'reference',to:{type:'category'}}]
        },
        {
            name: 'publishedAt',
            type:'datetime',
            title: 'published At'
        },
        {
            name: 'summary',
            type:'text',
            title: 'Summary'
        },
        {
            name: 'content',
            type:'blockContent',
            title: 'content'
        }
    ]
}