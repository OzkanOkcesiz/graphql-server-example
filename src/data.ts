const users = [
    {
        id: "1",
        fullName: "Önder ŞAHİN",
        age: 32,
        profile_photo: "https://randomuser.me/api/portraits/men/93.jpg",
    },
    {
        id: "2",
        fullName: "Berkin OKTAY",
        age: 23,
        profile_photo: "https://randomuser.me/api/portraits/men/5.jpg",
    }
];

const posts = [
    {
        id: "1",
        title: "Önder'in gönderisi",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        short_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: "1",
        cover:"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: "2",
        title: "Önder'in diğer gönderisi",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        short_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        user_id: "1",
        cover: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80"
    },
    {
        id: "3",
        title: "Berkin'in gönderisi",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
        short_description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        user_id: "2",
        cover: "https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
];

const comments = [
    {
        id: "1",
        text: "Lorem ipsum",
        post_id: "1",
        user_id: "2"
    },
    {
        id: "2",
        text: "Lorem ipsum doler",
        post_id: "1",
        user_id: "1"
    },
    {
        id: "3",
        text: "foo bar",
        post_id: "2",
        user_id: "2"
    },
    {
        id: "4",
        text: "foo bar baz",
        post_id: "3",
        user_id: "1"
    }
];

export default {
    users,
    posts,
    comments
}