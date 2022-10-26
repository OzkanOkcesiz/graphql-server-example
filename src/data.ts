const users = [
    {
        id: "1",
        fullName: "Önder ŞAHİN",
        age: 32
    },
    {
        id: "2",
        fullName: "Berkin OKTAY",
        age: 23
    }
];

const posts = [
    {
        id: "1",
        title: "Önder'in gönderisi",
        user_id: "1"
    },
    {
        id: "2",
        title: "Önder'in diğer gönderisi",
        user_id: "1"
    },
    {
        id: "3",
        title: "Berkin'in gönderisi",
        user_id: "2"
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