export default {
    name: 'category',
    type:'document',
    title: 'Category',
    fields:[
        {
            name:'title',
            type:'string',
            title: 'Title',
        },
        // {
        //     name:'description',
        //     type:'text',
        //     title: 'Description',
        // }
        {
            name:'slug',
            type:'slug',
            title: 'Slug',
            options:{
                source:'title'
            }
        }
    ]
}