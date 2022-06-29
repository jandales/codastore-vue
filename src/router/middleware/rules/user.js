import store  from   '../../../libraries/autheticate'



export default(to, from, next) => {
    if (!store.getters['authenticated']) {
        next({name: 'login'});
    } else   next()
}