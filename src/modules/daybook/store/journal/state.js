export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse, explicabo facere neque recusandae tempore! Excepturi numquam obcaecati odit? Earum fugit id illum itaque molestias pariatur quis repellendus sed sequi!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
            picture: null
        },
        {
            id: new Date().getTime() + 30000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse, explicabo facere neque recusandae tempore! Excepturi numquam obcaecati odit? Earum fugit id illum itaque molestias pariatur quis repellendus sed sequi!',
            picture: null
        },
    ]
})
