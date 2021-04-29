console.log('hello')

setTimeout(() => {
    import(/* webpackChunkName: 'math', webpackPrefetch: true */'./math')
        .then(({ mul }) => {
            console.log(mul(2, 5))
        })
}, 2000)