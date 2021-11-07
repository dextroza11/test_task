module.exports = x => {
    const router = x.Router();
    router
    .route('/')
    .get(r => r.res.send('test task'));

    router
    .route('/lead')
    .all(r => {
        r.res.send("/lead")
        
    });

    // router
    // .post(/lead{?}[a-Z]+[0-9]+/, r => {
        
    //     r.res.send(`Hello, ${r.body.quare}`);
    // })


    return router;
};