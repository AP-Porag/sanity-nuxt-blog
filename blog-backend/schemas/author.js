export default {
    name:'author',
    type:'document',
    title: 'Author',
    fields:[
        {
            name:'username',
            type:'string',
            title: 'Username',
        },
        {
            name:'avatar',
            type:'image',
            title: 'Avatar',
            options:{
                hotspot:true
            }
        },
        {
            name:'slug',
            type:'slug',
            title: 'Slug',
            options: {
                source:'username'
            }
        },
        {
            name:'bio',
            type:'text',
            title: 'Bio',
        }
    ],
    preview:{
        select:{
            title: 'username',
            media:'avatar'
        }
    }
}